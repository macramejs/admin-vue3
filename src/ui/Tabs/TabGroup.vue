<template>
    <TabGroup v-bind="$attrs" class="w-full" as="div">
        <slot />
    </TabGroup>
</template>

<script lang="ts" setup>
import { TabGroup } from '@headlessui/vue';
</script>
