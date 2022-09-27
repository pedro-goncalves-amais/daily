<script setup>
    import { computed } from "vue";

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
        <div
            :class="['tooltip', { 'tooltip-open': showName }]"
            :data-tip="name"
        >
            <div class="avatar shadow">
                <div class="w-32 rounded-xl">
                    <img :src="image" />
                </div>
            </div>
        </div>
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
