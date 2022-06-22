<template>
    <BaseTree :tree="tree" :group="{ name: 'page-list' }">
        <template v-slot:default="{ item, children }">
            <PagesTreeItem :page="item" :children="children" />
        </template>
    </BaseTree>
</template>

<script setup lang="ts">
import { Page } from '@/types';
import { PropType } from 'vue';
import { Tree } from '@macramejs/macrame-vue3';
import { Tree as BaseTree } from '@/ui';
import PagesTreeItem from './PagesTreeItem.vue';

defineProps({
    tree: {
        type: Object as PropType<Tree>,
        required: true,
    },
});
</script>
