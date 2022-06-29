<template>
    <div class="w-full mt-10">
        <div class="grid grid-cols-12 gap-5">
            <div
                class="flex justify-center col-span-6 md:col-span-4 lg:col-span-3 xl:col-span-2"
            >
                <MediaUpload />
            </div>
            <div
                v-for="file in mediaIndex.items"
                :key="file.id"
                class="relative flex items-center justify-center col-span-6 cursor-pointer md:col-span-4 lg:col-span-3 xl:col-span-2 aspect-square"
            >
                <FileMenu :file="file" class="absolute z-20 bottom-2 right-1" />
                <label class="w-full h-full img-container">
                    <input
                        type="checkbox"
                        :id="`${file.id}`"
                        class="absolute opacity-0"
                        :value="file"
                        v-model="selection.files"
                    />
                    <div
                        class="absolute top-0 left-0 w-full cursor-pointer h-full bg-black border-[3px] border-transparent bg-opacity-0 hover:bg-opacity-80 z-10"
                    >
                        <div
                            class="absolute img-checkbox top-0 left-0 hidden items-center justify-center w-5 h-5 rounded-br-[6px] text-white bg-orange"
                        >
                            <svg
                                width="24"
                                height="24"
                                class="scale-75 -translate-x-[3px] -translate-y-px"
                                stroke-width="1"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="m5 13 4 4L19 7"
                                    stroke="currentColor"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                            </svg>
                        </div>
                    </div>
                    <ResponsiveImage
                        v-if="file.url"
                        :src="file.url.replaceAll(' ', '%20')"
                        class="flex items-center w-full h-full pointer-events-none"
                        contain
                        :sizes="[10, 200]"
                    />
                </label>
            </div>
        </div>
        <div class="py-8">
            <Pagination :table="mediaIndex" />
        </div>
    </div>
</template>

<script lang="ts" setup>
import { MediaUpload } from '@/modules/media';
import { selection } from '../modules';
import { mediaIndex } from '@/entities';
import FileMenu from './FileMenu.vue';
import { Pagination } from '@/ui';
import ResponsiveImage from '@/ui/ResponsiveImage.vue';
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
