import { OrderItem, Page, PageTreeResource } from '@/types';
import { Tree, useOriginal, useTree } from '@macramejs/macrame-vue3';
import { reactive, ref, watch } from 'vue';
import { loadPageTree, updatePageTree } from '../api';

export type UsePageTree = () => Tree<Page, PageTreeResource>;

export const usePageTree: UsePageTree = () => {
    const tree = useTree<Page>({
        load: () => loadPageTree()
    });

    tree.onOrderChange(order => updatePageTree({ order }, undefined));

    return tree;
};

export const pageTree = usePageTree();