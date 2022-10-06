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
            image: "https://plataformaamais.atlassian.net/wiki/aa-avatar/61714e83892c420072113a16   ",
        },
        {
            name: "Bruno Rovela",
            image: "https://plataformaamais.atlassian.net/wiki/aa-avatar/5c06d6f510c30e4ac8c8d0fe",
        },
        {
            name: "Eder Soares",
            image: "https://plataformaamais.atlassian.net/wiki/aa-avatar/628f7ddc1a437e00704370f1",
        },
        {
            name: "Nicolas Gross",
            image: "https://plataformaamais.atlassian.net/wiki/aa-avatar/620a81c9eb29780068909ded",
        },
        {
            name: "Thiago Tinoco",
            image: "https://plataformaamais.atlassian.net/wiki/aa-avatar/5fe0dad844065f013f160051",
        },
        {
            name: "Vitor Duggen",
            image: "https://plataformaamais.atlassian.net/wiki/aa-avatar/61eafe2438041c0068809493",
        },
    ]);

    const showNames = ref(false);

    function shuffleMembers() {
        squad.value = useShuffle(squad.value);
    }

    function looper(repetitions) {
        var repetition = 1;

        var interval = setInterval(() => {
            shuffleMembers();
            repetition === repetitions ? clearInterval(interval) : repetition++;
        }, 200);
    }
</script>

<template>
    <div class="container mx-auto">
        <div class="h-screen flex flex-col items-center justify-center gap-16">
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
                    :show-name="showNames"
                />
            </TransitionGroup>

            <button
                class="btn"
                @click="looper(5)"
            >
                Randomizar
            </button>

            <button
                class="btn"
                @click="showNames = !showNames"
            >
                {{ showNames ? "Ocultar" : "Mostrar" }} nomes
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
        transition: all 0.2s ease;
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
