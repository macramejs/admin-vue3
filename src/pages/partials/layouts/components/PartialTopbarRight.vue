<template>
    <div class="flex items-center space-x-6">
        <div class="flex items-center space-x-2">
            <SelectLocale />
        </div>
        <Button @click="save()" :disabled="!partialForm.isDirty"> save </Button>
    </div>
</template>
<script lang="ts" setup>
import { SelectLocale } from '@/modules/localize';
import { partialForm } from '@/entities';
import { Button } from '@/ui';

const save = async () => {
    await partialForm.submit();
};

const saveKeyboardShortcut = (callback: any) => {
    document.addEventListener('keydown', (e) => {
        let modifier = window.navigator.platform.match('Mac')
            ? e.metaKey
            : e.ctrlKey;

        if (modifier && e.key === 's') {
            e.preventDefault();
            callback()
        }
    });
};

saveKeyboardShortcut(save);
</script>
