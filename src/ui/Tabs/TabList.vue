<template>
    <TabList
        class="flex flex-wrap sticky z-[5] bg-gray-50 top-[80px] h-[30px] w-full px-10 border-b border-gray-200"
    >
        <slot />
    </TabList>
</template>

<script lang="ts" setup>
import { TabList } from '@headlessui/vue';
</script>
