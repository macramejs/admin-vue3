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
import { LoadOne, LoadMany, UpdateOrCreate, Delete } from './types';

const loadPage: LoadOne<PageResource> = id =>
    client.get(`pages/${id}`);

const loadPages: LoadMany<PageCollectionIndexResource> = params =>
    client.get(`pages`, { params });

const updateOrCreatePage: UpdateOrCreate<PageFormData> = (data, id = undefined) => {
    return id
        ? client.put(`pages/${id}`, data)
        : client.post(`pages`, data);
};

const deletePage: Delete = pageId =>
    client.delete(`pages/${pageId}`);

export {
    loadPage,
    loadPages,
    deletePage,
    updateOrCreatePage,
};
