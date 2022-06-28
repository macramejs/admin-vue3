<template>
    <div class="w-full mt-10">
        <div class="grid grid-cols-12 gap-5">
            <div
                class="flex justify-center col-span-6 md:col-span-4 lg:col-span-3 xl:col-span-2"
            >
                <MediaUpload :collection="collection" />
            </div>
            <FilesGridTable :collections="collections" />
        </div>
    </div>
</template>

<script lang="ts" setup>
import FilesGridTable from './FilesGridTable.vue';
import { MediaUpload } from '@/modules/media';
import { MediaCollection } from '@/types';
import { PropType } from 'vue';

defineProps({
    collection: {
        type: Object as PropType<MediaCollection>,
    },
    collections: {
        type: Array as PropType<MediaCollection[]>,
        required: true,
    },
});
</script>

<style scoped>
.tab-height {
    height: calc(100vh - 230px);
}

.img-container:hover .btn-wrapper,
.img-container:hover span {
    display: block !important;
}
.img-container > input:checked + div {
    border-color: #fead5e !important;
}
.img-container > input:checked + div > .img-checkbox {
    display: flex !important;
}
</style>
