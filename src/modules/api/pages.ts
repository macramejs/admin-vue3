import {
    Page,
    PageFormData,
    PageResource,
    PageCollectionIndexResource,
    PageTreeCollectionResource,
    PageSlugFormData,
} from '@/types';
import { client } from './index';
import { AxiosResponse } from 'axios';
import { LoadOne, LoadMany, UpdateOrCreate, Delete } from './types';

const loadPage: LoadOne<PageResource> = id =>
    client.get(`pages/${id}`) as Promise<AxiosResponse<PageResource>>;

const loadPages: LoadMany<PageCollectionIndexResource> = params =>
    client.get(`pages`, { params });

const loadPagesTree: LoadMany<PageTreeCollectionResource, {}> = () =>
    client.get(`pages/tree`);

const updateOrCreatePage: UpdateOrCreate<PageFormData> = (data, id = null) => {
    if (id) {
        return client.put(`pages/${id}`, data);
    }

    return client.post(`pages`, data);
};

const updatePageSlug: UpdateOrCreate<PageSlugFormData> = (data, id) => {
    return client.put(`pages/${id}`, data);
};

const deletePage: Delete<Page> = page => {
    return client.delete(`pages/${page.id}`);
};

export {
    loadPage,
    loadPages,
    loadPagesTree,
    deletePage,
    updateOrCreatePage,
    updatePageSlug,
};
