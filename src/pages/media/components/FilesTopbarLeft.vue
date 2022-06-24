<template>
    <div>
        <span>{{ $t('media.files') }}</span>

        <Badge v-if="mediaIndex.filters.collection.value" class="ml-2">
            {{ mediaIndex.filters.collection.value }}
        </Badge>

        <Badge
            v-for="(type, key) in mediaIndex.filters.types.value"
            :key="key"
            class="ml-2"
        >
            {{ type }}
        </Badge>
    </div>
</template>

<script lang="ts" setup>
import { Badge } from '@/ui';
import { mediaIndex } from '@/modules/media';
</script>
