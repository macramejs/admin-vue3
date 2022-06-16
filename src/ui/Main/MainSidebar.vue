<template>
    <div
        class="sticky flex flex-col transition-all duration-300 bg-white shadow"
        :style="`height: calc(100vh - ${topPosition}px); top: ${topPosition}px;`"
        :class="{
            'w-[233px]': open,
            'w-[60px]': !open,
        }"
    >
        <div class="flex-1 w-full overflow-y-auto">
            <slot />
            <div class="w-full p-4 mt-4" v-if="!open">
                <div class="flex items-center w-full gap-4 rotate-90">
                    <slot name="title">
                        {{ title }}
                    </slot>
                </div>
            </div>
        </div>
        <div
            class="flex items-center w-full px-4 py-2 mt-auto border-t border-gray-400"
        >
            <button
                class="p-1 bg-gray-100 rounded"
                @click="$emit('update:open', !open)"
            >
                <svg
                    width="24"
                    height="24"
                    stroke-width="1.5"
                    fill="none"
                    class="transition-transform duration-300 scale-[0.8]"
                    :class="{
                        'rotate-180': open,
                        'rotate-0': !open,
                    }"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M18.5 12H6m0 0 6-6m-6 6 6 6"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    />
                </svg>
            </button>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { computed, useSlots } from 'vue';

const emit = defineEmits(['update:open']);

const props = defineProps({
    topPosition: {
        type: [String, Number],
        default: '110',
    },
    open: {
        type: Boolean,
        default: true,
    },
});

const toggle = function () {
    console.log({ open: props.open });
    emit('update:open', !props.open);
};
</script>
