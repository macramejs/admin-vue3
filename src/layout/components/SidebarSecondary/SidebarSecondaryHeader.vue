<template>
    <Header>
        <span class="inline-flex items-center space-x-4 text-lg font-medium">
            <slot name="icon" />
            <slot name="title">
                <div>
                    {{ title }}
                </div>
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
