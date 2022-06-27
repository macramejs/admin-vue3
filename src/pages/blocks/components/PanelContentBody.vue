<template>
    <ContentBody>
        <Sections v-model="form.content" :sections="sections" />
    </ContentBody>
</template>

<script lang="ts" setup>
import { ContentBody } from '@/ui';
import { PropType } from 'vue';
import { Sections, sections } from '@/modules/content';
import { Block } from '@/types/resources';
import { BlockForm } from '@/types';

const props = defineProps({
    block: {
        type: Object as PropType<Block>,
        required: true,
    },
    form: {
        type: Object as PropType<BlockForm>,
        required: true,
    },
});
</script>
