<template>
    <div class="flex items-center space-x-6">
        <PagesTopbarRightLivetime />

        <div class="flex items-center space-x-2">
            <SelectLocale />
        </div>
        <Button @click="save()" :disabled="!pageForm.isDirty"> save </Button>
    </div>
</template>
<script lang="ts" setup>
import PagesTopbarRightLivetime from './PagesTopbarRightLivetime.vue';
import { SelectLocale } from '@/modules/localize';
import { pageForm } from '@/modules/forms';
import { Button } from '@/ui';
import { usePageTree } from '@/modules/state';

const save = async () => {
    await pageForm.submit();
    usePageTree().load();
};
</script>
