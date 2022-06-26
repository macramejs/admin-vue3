<template>
    <Admin sidebar-secondary>
        <template v-slot:sidebar-secondary>
            <MenuSidebar />
        </template>
        <template v-slot:topbar-left>
            <slot name="topbar-left" />
        </template>
        <MenuBody
            :items="items.data"
            :type="type"
            :link-options="linkOptions.data"
        />
    </Admin>
</template>

<script setup lang="ts">
import { PropType } from 'vue';
import { Admin } from '@/layout';
import MenuSidebar from './components/MenuSidebar.vue';
import MenuBody from './components/MenuBody.vue';
import {
    MenuItemTreeCollectionResource,
    LinkOptionCollectionResource,
} from '@/types';

const props = defineProps({
    type: {
        type: String,
        required: true,
    },
    items: {
        type: Object as PropType<MenuItemTreeCollectionResource>,
        required: true,
    },
    linkOptions: {
        type: Object as PropType<LinkOptionCollectionResource>,
        required: true,
    },
});
</script>
