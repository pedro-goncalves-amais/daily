<script setup>
    const props = defineProps({
        name: {
            type: String,
            required: true,
        },
        image: {
            type: String,
            default: "",
        },
        showName: {
            type: Boolean,
            default: true,
        },
    });
</script>

<template>
    <div class="person">
        <div class="avatar">
            <div class="w-24 rounded-xl">
                <img :src="image" />
            </div>
        </div>

        <p
            class="name"
            v-show="showName"
        >
            {{ name }}
        </p>
    </div>
</template>

<style lang="postcss">
    .person {
        @apply flex flex-col items-center justify-between gap-2;
        transition: all 0.5s ease;

        .name {
            @apply text-2xl;
        }
    }
</style>
