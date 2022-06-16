<template>
    <th
        class="pb-2 pl-6 font-light bg-white border-b text-gray border-gray slim"
        :class="{
            'cursor-pointer': isSortable,
        }"
        @click="applySort()"
    >
        <slot />

        <template v-if="isSortable">
            <span v-if="table.isSortedBy(sortBy, 'desc')"> DESC </span>
            <span v-if="table.isSortedBy(sortBy, 'asc')"> ASC </span>
        </template>
    </th>
</template>

<script lang="ts" setup>
import { PropType, computed } from 'vue';
import { Index } from '@macramejs/macrame-vue3';

const props = defineProps({
    table: {
        type: Object as PropType<Index>,
        required: false,
    },
    sortBy: {
        type: String,
        required: false,
    },
});

const isSortable = computed(() => !!props.sortBy && !!props.table);

const applySort = () => {
    if (!isSortable) {
        return;
    }

    if (!props.table.isSortedBy(props.sortBy)) {
        console.log('Add new (asc)');
        props.table.addSortBy(props.sortBy);
    } else if (props.table.isSortedBy(props.sortBy, 'asc')) {
        console.log('Change new (desc)');
        props.table.addSortBy(props.sortBy, 'desc');
    } else {
        console.log('Remove');
        props.table.removeSortBy(props.sortBy);
    }
};
</script>
