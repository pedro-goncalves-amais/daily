<script setup>
    import { ref } from "vue";

    function getRandomSquadMember(squad = []) {
        // Gets the total number of members
        const numberOfSquadMembers = squad.length;

        // Gets a random number between 0 and the total number of members
        const randomNumber = Math.floor(Math.random() * numberOfSquadMembers);

        // Returns a random member
        return squad[randomNumber];
    }

    function shuffle([...array]) {
        let currentIndex = array.length;
        let randomIndex;

        while (currentIndex != 0) {
            // Picks a remaining element.
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;

            // Swaps it with the current element.
            [array[currentIndex], array[randomIndex]] = [
                array[randomIndex],
                array[currentIndex],
            ];
        }

        // Returns the new list
        return array;
    }

    function daily(squad = [], conductorSelector, memberRandomizer) {
        // Selects a member to be the daily conductor
        const conductor = conductorSelector(squad);

        // Removes the conductor from the member list
        const filteredSquad = squad.filter(member => member !== conductor);

        // Randomizes the order of the members
        const randomizedFilteredSquad = memberRandomizer(filteredSquad);

        // Returns both the daily conductor and the other members in a random order
        return {
            conductor: conductor,
            members: randomizedFilteredSquad,
        };
    }

    function replaceLastOccurrenceOfValueInString(string, oldValue, newValue) {
        const lastOccurenceOfOldValue = string.lastIndexOf(oldValue);

        return (
            string.substring(0, lastOccurenceOfOldValue) +
            newValue +
            string.substring(lastOccurenceOfOldValue + 1)
        );
    }

    function getConductorsMessage(conductor) {
        return `The daily conductor today is: ${conductor}`;
    }

    function getMembersMessage(members) {
        const joinedMembers = members.join(", ");
        return `The order of members for today is: ${replaceLastOccurrenceOfValueInString(
            joinedMembers,
            ",",
            " and"
        )}.`;
    }

    const squad = [
        "Anderson",
        "Bruno",
        "Eder",
        "Nicolas",
        // "Pedro",
        "Thiago",
        "Vitor",
    ];

    const { conductor, members } = daily(squad, getRandomSquadMember, shuffle);

    const conductorMessage = getConductorsMessage(conductor);

    const membersMessage = ref(getMembersMessage(members));

    var shuffledSquad = ref([]);

    function shuffleSquad(squad) {
        this.shuffledSquad = shuffle(squad);
    }
</script>

<template>
    <div class="container mx-auto">
        <div class="h-screen flex flex-col items-center justify-center gap-16">
            <ul>
                <li
                    class="text-center text-2xl"
                    v-for="(member, key) in shuffledSquad"
                    :key="key"
                >
                    {{ member }}
                </li>
            </ul>

            <button
                class="btn"
                @click="shuffleSquad(squad)"
            >
                Randomizar
            </button>
        </div>
    </div>
</template>

<style lang="postcss" scoped></style>
