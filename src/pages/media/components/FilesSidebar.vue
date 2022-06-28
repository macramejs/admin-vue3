<template>
    <FilesSidebarHeader v-model:showForm="showForm" />
    <FilesSidebarBody
        :collections="collections"
        :collection="collection"
        :show-form="showForm"
    />
</template>

<script lang="ts" setup>
import { PropType, ref } from 'vue';
import FilesSidebarHeader from './FilesSidebarHeader.vue';
import FilesSidebarBody from './FilesSidebarBody.vue';
import { MediaCollection } from '@/types';

defineProps({
    collections: {
        type: Array as PropType<MediaCollection[]>,
        required: true,
    },
    collection: {
        type: Object as PropType<MediaCollection>,
        required: false,
    },
});

const showForm = ref(false);
</script>
