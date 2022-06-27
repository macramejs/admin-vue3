<template>
    <template v-if="!isLoading && isLoaded">
        <Topbar>
            <div class="font-semibold">{{ blockForm.name }}</div>
            <Button @click="submit()" :disabled="!blockForm.isDirty">
                save
            </Button>
        </Topbar>
        <router-view />
    </template>
</template>

<script setup lang="ts">
import { Topbar } from '@/layout';
import { Button } from '@/ui';
import { blockForm, useBlockForm } from '@/entities';
import { blockState } from '@/entities';
import { computed, watch } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();

const blockId = computed(() => parseInt(route.params.block as string));

const isLoading = computed(() => {
    return blockState.isLoading;
});

const isLoaded = computed(() => {
    return blockState.isLoaded && !!blockForm.value;
});

const loadData = () => {
    blockState.load(blockId.value).then(block => {
        blockForm.value = useBlockForm(block);
    });
};
const submit =() => {
    blockForm.value.submit();
};

watch(() => blockId.value, loadData, { immediate: true });
</script>
