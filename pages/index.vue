<script setup>
    import { ref } from "vue";

    const squads = ref(null);
    const squadId = ref(null);
    const members = ref(null);
    const names = ref(false);

    async function getSquads() {
        squads.value = await useFetch(`/api/squads/`).then(
            response => response.data.value.data
        );
    }

    async function getSquadMembers(squadId) {
        console.log(`getSquadMembers(${squadId})`);

        members.value = await useAsyncData("members", () =>
            $fetch(`/api/squads/${squadId}/members/`)
        ).then(response => response.data.value.data.members);
    }

    function shuffleMembers() {
        members.value = useShuffle(members.value);
    }

    function looper(repetitions) {
        var repetition = 1;

        var interval = setInterval(() => {
            shuffleMembers();
            repetition === repetitions ? clearInterval(interval) : repetition++;
        }, 200);
    }

    function getRandomSquadMember(squad = []) {
        const numberOfmembers = squad.length;

        const randomNumber = Math.floor(Math.random() * numberOfmembers);

        return squad[randomNumber];
    }

    await getSquads();
</script>

<template>
    <div class="container mx-auto">
        <div class="h-screen flex flex-col items-center justify-center gap-16">
            <select
                class="select select-bordered w-full max-w-xs"
                v-model="squadId"
                @change="getSquadMembers(squadId)"
            >
                <option
                    disabled
                    selected
                    :value="null"
                >
                    Selecione uma equipe
                </option>
                <option
                    v-for="squad in squads"
                    :value="squad.id"
                    :key="squad.id"
                >
                    {{ squad.name }}
                </option>
            </select>

            <TransitionGroup
                tag="ul"
                name="person"
                class="my-grid"
                v-if="members"
            >
                <person
                    v-for="member in members"
                    :key="member.name"
                    :image="member.image"
                    :name="member.name"
                    :show-name="names"
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
                @click="names = !names"
            >
                {{ names ? "Ocultar" : "Mostrar" }} nomes
            </button>
        </div>
    </div>
</template>

<style lang="postcss">
    .my-grid {
        @apply grid grid-cols-3 gap-10 relative;
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
