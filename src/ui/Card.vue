<template>
    <component
        :is="as"
        class="p-6 rounded-sm"
        :class="{
            'bg-white': variant_ == 'white',
            'bg-gray-300': variant_ == 'gray',
            'p-12': size_ == 'md',
            'p-8': size_ == 'sm',
        }"
    >
        <slot />
    </component>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import { getVariant, variants } from './props/variant';
import { getSize, sizes } from './props/size';

export default defineComponent({
    props: {
        as: {
            type: String,
            default: 'div',
        },
        variant: variants.variant,
        white: {
            type: Boolean,
            default: false,
        },
        gray: variants.gray,
        size: sizes.size,
        sm: sizes.sm,
        md: sizes.md,
    },
    setup(props, { attrs }) {
        let variant_ = getVariant(props, { DEFAULT: 'white' });
        let size_ = getSize(props, { only: ['sm', 'md'] });

        return { variant_, size_ };
    },
});
</script>
