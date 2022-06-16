<template>
    <div>
        <slot name="search">
            <Search :table="table" :placeholder="searchPlaceholder" />
        </slot>
        <div
            class="w-full pt-9"
            :class="{ 'bg-white shadow rounded-md': isTable }"
        >
            <slot />
            <slot name="footer">
                <div
                    class="w-full pt-8 pb-4"
                    :class="{ 'border-t border-gray-300': isTable }"
                    v-if="isTable || table.totalItems >= table.perPage"
                >
                    <Pagination :table="table" />
                    <div
                        class="inline-flex justify-end w-full pt-4 pr-6 text-gray"
                    >
                        {{ table.fromItem }}-{{ table.toItem }}/{{
                            table.totalItems
                        }}
                    </div>
                </div>
            </slot>
        </div>
        <slot name="pagination"> </slot>
    </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { Index } from '@macramejs/macrame-vue3';
import Pagination from './Pagination.vue';
import Search from './Search.vue';

type IndexProps = {
    table: Index;
};

export default defineComponent({
    components: {
        Pagination,
        Search,
    },
    props: {
        table: {
            type: Object as PropType<Index>,
            required: true,
        },
        searchPlaceholder: {
            type: String,
        },
        isTable: {
            type: Boolean,
            default: true,
        },
    },
    setup({}: IndexProps, {}) {
        //

        return {};
    },
});
</script>
