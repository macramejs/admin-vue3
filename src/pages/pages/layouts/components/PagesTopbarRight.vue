<template>
    <div class="flex items-center space-x-6">
        <PagesTopbarRightLivetime />

        <div class="flex items-center space-x-2">
            <SelectLocale />
        </div>
        <Button @click="save()" :disabled="!pageForm.isDirty">
            {{ $t('pages.save') }}
        </Button>
    </div>
</template>
<script lang="ts" setup>
import PagesTopbarRightLivetime from './PagesTopbarRightLivetime.vue';
import { SelectLocale } from '@/modules/localize';
import { pageForm } from '@/entities';
import { Button } from '@/ui';
import { usePageTree } from '@/entities';

const save = async () => {
    await pageForm.value.submit();
    usePageTree().load();
};
</script>
