<template>
    <component
        :is="tag"
        class="relative inline-flex h-[20px] rounded px-2.5 items-center justify-center text-sm uppercase transition-all duration-300 focus:ring focus:outline-none"
        :class="{
            'focus:rounded hover:border-indigo-500 py-3 after:absolute after:left-1/2 after:bottom-[3px] after:h-px after:w-[calc(100%-20px)] after:-translate-x-1/2 hover:after:bg-indigo-500 active:after:bg-indigo-500 text-black focus:ring-transparent focus:bg-orange-100':
                !disabled,
            'opacity-40 py-2 px-3 cursor-not-allowed focus:ring-transparent':
                disabled,
        }"
        :disabled="disabled"
        v-bind="$attrs"
    >
        <slot />
    </component>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { getVariant, variants } from '../_props/variant';
import { getSize, sizes } from '../_props/size';

export default defineComponent({
    props: {
        disabled: {
            default: false,
            type: Boolean,
        },
        square: {
            default: false,
            type: Boolean,
        },
        ...variants,
        ...sizes,
    },
    setup(props, { attrs }) {
        const tag = 'href' in attrs ? 'a' : 'button';
        const variant_ = getVariant(props, {});
        const size_ = getSize(props, {});

        return { tag, variant_, size_ };
    },
});
</script>
