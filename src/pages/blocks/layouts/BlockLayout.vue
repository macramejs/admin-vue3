<template>
    <Topbar>
        <div class="font-semibold">Foo</div>
    </Topbar>
    <router-view />
</template>

<script setup lang="ts">
import { PropType } from 'vue';
import { Topbar } from '@/layout';
import { PageTreeCollectionResource } from '@/types';

defineProps({
    pages: {
        type: Object as PropType<PageTreeCollectionResource>,
        required: true,
    },
});
</script>
