<template>
    <div class="p-4">
        <Input v-model.debounce="mediaIndex.search" />
        <div class="pt-4">
            <!-- // TODO: @cbl - this doesn't filter anything -->
            <Checkbox
                v-model="mediaIndex.filters.types.value"
                value="images"
                field-id="1"
            >
                {{ $t('media.images') }}
            </Checkbox>
            <Checkbox
                v-model="mediaIndex.filters.types.value"
                value="documents"
                field-id="2"
            >
                {{ $t('media.documents') }}
            </Checkbox>

            {{ mediaIndex.filters.types.value }}
        </div>
    </div>
</template>
<script lang="ts" setup>
import { Input, Checkbox } from '@/ui';
import { mediaIndex } from '@/entities';
</script>
