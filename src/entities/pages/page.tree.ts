import { Page, PageTreeResource } from '@/types';
import { Tree, useTree } from '@macramejs/macrame-vue3';
import { loadPageTree, updatePageTree } from './api';

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
