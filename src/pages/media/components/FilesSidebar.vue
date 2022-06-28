<template>
    <FilesSidebarHeader v-model:showForm="showForm" />
    <FilesSidebarBody :show-form="showForm" />
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import FilesSidebarHeader from './FilesSidebarHeader.vue';
import FilesSidebarBody from './FilesSidebarBody.vue';

const showForm = ref(false);
</script>
