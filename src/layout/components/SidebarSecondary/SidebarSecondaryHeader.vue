<template>
    <Header>
        <span class="inline-flex items-center space-x-4 text-lg font-medium">
            <slot name="icon" />
            <slot name="title">
                <div class="relative">
                    {{ title }}
                    <div class="absolute -mt-1">
                        <slot name="help" />
                    </div>
                </div>
            </slot>
        </span>

        <slot />
        <div class="relative w-full h-0"></div>
    </Header>
</template>

<script lang="ts" setup>
import { Header } from '@/ui';

defineProps({
    title: {
        type: String,
        required: true,
    },
});
</script>
