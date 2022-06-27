import {
    PageFormData,
    PageResource,
    PageCollectionIndexResource,
    PageTreeResource,
} from '@/types';
import {
    client,
    LoadOne,
    LoadMany,
    UpdateOrCreate,
    Delete,
    Update,
} from '@/modules/api';
import { TreeOrder } from '@macramejs/macrame-vue3';

const loadPage: LoadOne<PageResource> = id => client.get(`pages/${id}`);

const loadPages: LoadMany<PageCollectionIndexResource> = params =>
    client.get(`pages`, { params });

const updateOrCreatePage: UpdateOrCreate<PageFormData> = (
    data,
    id = undefined
) => {
    return id ? client.put(`pages/${id}`, data) : client.post(`pages`, data);
};

const deletePage: Delete = id => client.delete(`pages/${id}`);

// page tree

const loadPageTree: LoadMany<PageTreeResource> = () => client.get(`page-tree`);

const updatePageTree: Update<{ order: TreeOrder }> = data =>
    client.put(`page-tree`, data);

export {
    loadPage,
    loadPages,
    deletePage,
    updateOrCreatePage,
    loadPageTree,
    updatePageTree,
};
