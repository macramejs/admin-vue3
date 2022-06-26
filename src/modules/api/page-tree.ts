import {
    Page,
    PageFormData,
    PageResource,
    PageCollectionIndexResource,
    PageTreeResource,
    PageSlugFormData,
    Order,
} from '@/types';
import { client } from './index';
import { AxiosResponse } from 'axios';
import { LoadMany, Update } from './types';
import { TreeOrder } from '@macramejs/macrame-vue3';

const loadPageTree: LoadMany<PageTreeResource> = () =>
    client.get(`page-tree`);

const updatePageTree: Update<TreeOrder> = (data) => 
    client.put(`page-tree`, data);

export {
    loadPageTree,
    updatePageTree
};
