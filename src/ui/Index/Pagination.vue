<template>
    <div class="flex justify-around">
        <div class="flex items-stretch space-x-2">
            <ButtonMidGray
                secondary
                square
                class="relative"
                @click="table.setPage(1)"
                :disabled="table.currentPage == 1"
            >
                <IconFastArrowLeft class="w-4 h-4" />
            </ButtonMidGray>
            <ButtonMidGray
                secondary
                square
                :disabled="table.currentPage == 1"
                @click="table.setPage(table.currentPage - 1)"
            >
                <IconNavArrowLeft class="w-4 h-4" />
            </ButtonMidGray>
            <div class="flex items-center px-4 space-x-6 text-gray-900 text-md">
                <span class="" v-if="table.currentPage > 2"> ... </span>
                <span
                    class="cursor-pointer"
                    v-if="
                        table.currentPage == table.lastPage &&
                        table.currentPage > 2
                    "
                    @click="table.setPage(table.currentPage - 2)"
                >
                    {{ table.currentPage - 2 }}
                </span>
                <span
                    class="cursor-pointer"
                    v-if="table.currentPage > 1"
                    @click="table.setPage(table.currentPage - 1)"
                >
                    {{ table.currentPage - 1 }}
                </span>
                <span class="font-bold text-orange">
                    {{ table.currentPage }}
                </span>
                <span
                    class="cursor-pointer"
                    v-if="table.currentPage < table.lastPage"
                    @click="table.setPage(table.currentPage + 1)"
                >
                    {{ table.currentPage + 1 }}
                </span>
                <span
                    class="cursor-pointer"
                    v-if="table.currentPage == 1 && table.lastPage > 2"
                    @click="table.setPage(table.currentPage + 2)"
                >
                    {{ table.currentPage + 2 }}
                </span>
                <span
                    class="cursor-pointer"
                    v-if="table.currentPage < table.lastPage - 1"
                >
                    ...
                </span>
            </div>
            <ButtonMidGray
                secondary
                square
                :disabled="!(table.currentPage < table.lastPage)"
                @click="table.setPage(table.currentPage + 1)"
            >
                <IconNavArrowRight class="w-4 h-4" />
            </ButtonMidGray>
            <ButtonMidGray
                secondary
                square
                class="relative"
                @click="table.setPage(table.lastPage)"
                :disabled="!(table.currentPage < table.lastPage)"
            >
                <IconFastArrowRight class="w-4 h-4" />
            </ButtonMidGray>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { PropType } from 'vue';
import { Index } from '@macramejs/macrame-vue3';
import ButtonMidGray from '../Buttons/ButtonMidGray.vue';
import IconNavArrowRight from '@/ui/Icons/IconNavArrowRight.vue';
import IconFastArrowRight from '@/ui/Icons/IconFastArrowRight.vue';
import IconNavArrowLeft from '@/ui/Icons/IconNavArrowLeft.vue';
import IconFastArrowLeft from '@/ui/Icons/IconFastArrowLeft.vue';

defineProps({
    table: {
        type: Object as PropType<Index>,
        required: true,
    },
});
</script>
