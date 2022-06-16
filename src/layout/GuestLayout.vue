<template>
    <div class="grid h-screen grid-cols-1 md:grid-cols-2">
        <div class="flex items-center justify-center h-screen col-span-1">
            <slot />
        </div>
        <div class="hidden h-screen col-span-1 bg-gray-100 md:block"></div>
    </div>
</template>

<script lang="ts" setup>
//
</script>
