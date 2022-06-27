<template>
    <div @click="isOpen = true" v-if="!hideButton">
        <slot name="button">
            <div
                class="flex flex-col items-center justify-center w-full rounded cursor-pointer bg-gray-50 hover:bg-gray-200 h-28 text-gray"
            >
                <IconAddMediaImage class="w-12 h-12" />
                {{ $t('media.select_image') }}
            </div>
        </slot>
    </div>
    <Modal
        v-model:open="isOpen"
        @close="isOpen = false"
        :title="$t('media.select_image')"
        class="media-modal-wrapper"
    >
        <div class="grid grid-cols-12 gap-4 media-modal">
            <div
                class="w-full h-full col-span-6 cursor-pointer sm:col-span-4 md:col-span-4 lg:col-span-2"
            >
                <MediaUpload />
            </div>
            <div
                v-for="(image, key) in mediaIndex.items"
                :key="key"
                class="flex items-center col-span-6 rounded cursor-pointer sm:col-span-4 md:col-span-4 lg:col-span-2 aspect-square hover:bg-gray-200"
                @click="selectImage(image)"
            >
                <img :src="image.url" class="object-contain w-full h-full" />
            </div>
        </div>
    </Modal>
</template>

<script lang="ts" setup>
import IconAddMediaImage from '@/ui/Icons/IconAddMediaImage.vue';
import { Modal } from '@/ui';
import { PropType, ref, watch } from 'vue';
import { mediaIndex } from '@/entities';
import { MediaUpload } from '@/modules/media';
import { Media } from '@/types/resources';

const isOpen = ref<boolean>(false);

const emit = defineEmits(['update:modelValue']);

const props = defineProps({
    modelValue: {
        type: Object as PropType<Media | null>,
    },
    hideButton: {
        type: Boolean,
        default: false,
    },
});

watch(
    () => isOpen.value,
    open => {
        if (open) {
            mediaIndex.load();
        }
    }
);

const selectImage = (image: any) => {
    emit('update:modelValue', image);
    isOpen.value = false;
};
</script>

<style>
.media-modal {
}
/* TODO: add exclusive class to modal component in order to select properly! */
.media-modal-wrapper .my-8 {
    height: calc(100vh - 40px);
    max-height: calc(100vh - 40px);
    margin: 0 !important;
    overflow: scroll;
}
</style>
