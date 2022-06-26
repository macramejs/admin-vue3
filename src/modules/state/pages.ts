import { OrderItem, Page, PageResource, PageTreeResource } from '@/types';
import { State, Tree, useOriginal, useTree } from '@macramejs/macrame-vue3';
import { reactive, ref, watch } from 'vue';
import { loadPage, loadPageTree, updatePageTree } from '../api';
import { useState } from '@macramejs/macrame-vue3';

export type UsePageTree = () => Tree<Page, PageTreeResource>;

export const usePageTree: UsePageTree = () => {
    const tree = useTree<Page>({
        load: () => loadPageTree(),
    });

    tree.onOrderChange(order => updatePageTree({ order }, undefined));
    tree.onOrderChange(order => {
        console.log({ order });
    });

    return tree;
};

export const pageTree = usePageTree();

const pageState = useState<Page, [number]>(undefined, {
    load: id => loadPage(id),
});

export { pageState };
