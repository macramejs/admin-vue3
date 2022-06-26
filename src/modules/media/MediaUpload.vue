<template>
    <FileUpload inline :url="url" @success="success" multiple :maxFiles="10" />
</template>

<script lang="ts" setup>
import { MediaCollection } from '@/types';
import { FileUpload } from '@/ui';
import { PropType } from 'vue';
import { mediaIndex } from '@/modules/indexes';

const emit = defineEmits(['uploaded']);

const props = defineProps({
    collection: {
        type: Object as PropType<MediaCollection>,
        required: false,
    },
});

const success = function () {
    mediaIndex.load();
    emit('uploaded');
};

const url = props.collection
    ? `/media/${props.collection.id}/upload`
    : `/media/upload`;
</script>
