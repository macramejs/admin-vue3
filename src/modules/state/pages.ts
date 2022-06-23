import { OrderItem } from '@/types';
import { useOriginal, useTree } from '@macramejs/macrame-vue3';
import { reactive, ref, watch } from 'vue';
import { loadPagesTree, orderPages } from '../api';

export const pageTree = ref();

export const usePageTree = () => {
    let tree = reactive({
        load() {
            loadPagesTree().then(response => {
                pageTree.value = useTree(response.data.data, {
                    onOrderChange,
                });
            });
        },
    });

    return tree;
};

const onOrderChange = (order: OrderItem[]) => {
    orderPages({ order });
};
