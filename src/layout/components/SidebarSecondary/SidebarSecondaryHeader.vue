<template>
    <Header>
        <span class="inline-block text-lg font-medium">
            <slot name="icon" />
            <slot name="title">
                {{ title }}
            </slot>
        </span>
        <slot />
    </Header>
</template>

<script lang="ts" setup>
import Header from '../../../ui/Header.vue';

defineProps({
    title: {
        type: String,
        required: true,
    },
});
</script>
