<template>
    <div class="flex items-center space-x-6">
        <PagesTopbarRightLivetime />

        <div class="flex items-center space-x-2">
            <SelectLocale />
        </div>
        <SaveButton @save="save()" :disabled="!pageForm.isDirty" :busy="busy">
            {{ $t('pages.save') }}
        </SaveButton>
    </div>
</template>
<script lang="ts" setup>
import PagesTopbarRightLivetime from './PagesTopbarRightLivetime.vue';
import { SelectLocale } from '@/modules/localize';
import { pageForm } from '@/entities';

import { usePageTree } from '@/entities';
import SaveButton from '@/modules/save/SaveButton.vue';
import { ref } from 'vue';

const busy = ref<boolean>(false);

const save = async () => {
    busy.value = true;
    await pageForm.value.submit();
    usePageTree().load();
    busy.value = false;
};
</script>
