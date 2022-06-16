<template>
    <Tab
        :disabled="disabled"
        v-slot="{ selected, active }"
        :as="'template'"
        class="flex focus:outline-none"
        v-bind="$attrs"
    >
        <component
            :is="href ? Link : 'button'"
            :href="href"
            class="px-3 py-1 text-sm tracking-widest uppercase transition-colors duration-200 cursor-pointer focus:outline-none flex items-center"
            :class="{
                'text-black bg-gray-200 border-b border-indigo-900':
                    selected && !disabled,
                'bg-gray-50 border-b border-transparent focus:bg-gray-200 hover:bg-gray-200':
                    !selected && !disabled,
                'bg-gray-50 border-b border-transparent text-gray-300 cursor-not-allowed':
                    disabled,
            }"
        >
            <slot />
        </component>
    </Tab>
</template>

<script setup lang="ts">
import { Tab } from '@headlessui/vue';
import { Link } from '@inertiajs/inertia-vue3';

defineProps({
    disabled: {
        type: Boolean,
        default: false,
    },
    href: {
        type: String,
        required: false,
    },
});
</script>
