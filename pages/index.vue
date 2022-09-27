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

    // function shuffle([...array]) {
    //     let currentIndex = array.length;
    //     let randomIndex;

    //     while (currentIndex != 0) {
    //         // Picks a remaining element.
    //         randomIndex = Math.floor(Math.random() * currentIndex);
    //         currentIndex--;

    //         // Swaps it with the current element.
    //         [array[currentIndex], array[randomIndex]] = [
    //             array[randomIndex],
    //             array[currentIndex],
    //         ];
    //     }

    //     // Returns the new list
    //     return array;
    // }

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

    const squad = ref([
        {
            name: "Anderson Alfarth",
            image: "https://placeimg.com/192/192/people",
        },
        {
            name: "Bruno Rovela",
            image: "https://placeimg.com/192/192/people",
        },
        {
            name: "Eder Soares",
            image: "https://placeimg.com/192/192/people",
        },
        {
            name: "Nicolas Gross",
            image: "https://placeimg.com/192/192/people",
        },
        {
            name: "Pedro Gonçalves",
            image: "https://placeimg.com/192/192/people",
        },
        {
            name: "Thiago Tinoco",
            image: "https://placeimg.com/192/192/people",
        },
        {
            name: "Vitor Duggen",
            image: "https://placeimg.com/192/192/people",
        },
    ]);

    function shuffleSquad() {
        squad.value = useShuffle(squad.value);
    }
</script>

<template>
    <div class="container mx-auto">
        <div class="h-screen flex flex-col items-center justify-center gap-16">
            <!-- <ul>
                <li
                    class="text-center text-2xl"
                    v-for="(member, key) in shuffledSquad"
                    :key="key"
                >
                    {{ member }}
                </li>
            </ul> -->

            <TransitionGroup
                tag="ul"
                name="person"
                class="my-grid"
            >
                <person
                    v-for="(member, key) in squad"
                    :key="member.name"
                    :image="member.image"
                    :name="member.name"
                />
            </TransitionGroup>

            <button
                class="btn"
                @click="shuffleSquad"
            >
                Randomizar
            </button>
        </div>
    </div>
</template>

<style lang="postcss">
    .my-grid {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        gap: 24px;
        position: relative;
    }

    .person-move,
    .person-enter-active,
    .person-leave-active {
        transition: all 0.5s ease;
    }

    .person-enter-from,
    .person-leave-to {
        opacity: 0;
        transform: translateX(30px);
    }

    .person-leave-active {
        position: absolute;
    }
</style>
