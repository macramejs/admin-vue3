<template>
    <div class="p-4">
        <Input v-model.debounce="mediaIndex.search" />
        <div class="pt-4">
            <Checkbox
                v-model="mediaIndex.filters.types.value"
                :value="$t('media.images')"
            >
                {{ $t('media.images') }}
            </Checkbox>
            <Checkbox
                v-model="mediaIndex.filters.types.value"
                :value="$t('media.documents')"
            >
                {{ $t('media.documents') }}
            </Checkbox>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { Input, Checkbox } from '@/ui';
import { mediaIndex } from '@/modules/media';

const props = defineProps();
</script>
