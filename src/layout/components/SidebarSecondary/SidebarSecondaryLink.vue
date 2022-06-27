<template>
    <router-link
        :to="to"
        active-class="bg-gray-50 bg-opacity-10"
        class="flex items-center h-[36px] flex-auto text-base font-light rounded group hover:bg-white hover:bg-opacity-10"
    >
        <div
            v-if="$slots.icon"
            class="w-[44px] min-w-[44px] h-[44px] rounded flex items-center justify-center"
        >
            <slot name="icon" />
        </div>
        <div v-if="!hideTitle" class="flex-1 pl-3 tracking-wider text-gray-100">
            <slot>{{ title }}</slot>
        </div>
    </router-link>
</template>

<script lang="ts" setup>
import { computed } from 'vue';

const props = defineProps({
    title: {
        type: String,
        required: false,
    },
    to: {
        type: String,
    },
    hideTitle: {
        type: Boolean,
        default: false,
    },
    active: {
        type: Boolean,
        default: undefined,
    },
});
</script>
