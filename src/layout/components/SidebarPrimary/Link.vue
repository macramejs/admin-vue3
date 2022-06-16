<template>
    <component
        :is="as"
        :to="to"
        :href="href"
        :class="{
            // primary
            'bg-white bg-opacity-10 hover:text-orange': isActive && !secondary,
            'h-[44px]': !secondary,
            // secondary
            'items-center h-[36px] flex-auto': secondary,
            'bg-gray-50 bg-opacity-10': isActive && secondary,
        }"
        class="flex items-center text-base font-light rounded cursor-pointer group hover:bg-white hover:bg-opacity-10"
    >
        <div
            v-if="$slots.icon"
            class="w-[44px] min-w-[44px] h-[44px] rounded flex items-center justify-center"
            :class="{
                ' text-orange': isActive && !secondary,
                ' text-gray-100': !isActive,
            }"
        >
            <slot name="icon" />
        </div>
        <div
            v-if="!hideTitle"
            class="flex-1 pl-3 tracking-wider text-gray-100"
            :class="{
                'group-hover:text-orange': isActive && !secondary,
            }"
        >
            <slot />
        </div>
    </component>
</template>

<script lang="ts" setup>
import { computed } from 'vue';

const props = defineProps({
    href: {
        type: String,
        default: null,
    },
    to: {
        type: String,
        default: null,
    },
    hideTitle: {
        type: Boolean,
        default: false,
    },
    secondary: {
        type: Boolean,
        default: false,
    },
    active: {
        type: Boolean,
        default: undefined,
    },
});

const isActive = computed(() => {
    if (props.active !== undefined) {
        return props.active;
    }

    if (
        props.href?.split('/').length ==
        window.location.pathname.split('/').length
    ) {
        return window.location.pathname == props.href;
    }

    if (props.href?.split('/').length > 2) {
        return window.location.pathname.includes(props.href);
    }

    return window.location.pathname == props.href;
});

const as = computed(() => {
    return props.to ? 'router-link' : 'a';
});
</script>
