<template>
    <div
        class="min-h-[20px] space-y-2 rounded relative"
        :class="{
            'outline-dashed outline-3 outline-gray': !hasChildren,
        }"
        style="min-height: calc(100vh - 150px)"
    >
        <template v-if="!hasChildren">
            <div
                class="absolute top-0 flex items-center justify-center w-full h-full text-gray"
            >
                <slot name="drag-text"> {{ $t('content.drag_here') }} </slot>
            </div>
        </template>
        <Sections
            v-bind="($attrs as any)"
            style="min-height: calc(100vh - 150px)"
        />
    </div>
</template>

<script lang="ts" setup>
import { Sections } from '@macramejs/macrame-vue3';
import { computed, useAttrs } from 'vue';

const attrs = useAttrs();
const hasChildren = computed(() => {
    return Object.keys(attrs.modelValue as Object).length > 0;
});
</script>
