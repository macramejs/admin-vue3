import {
    Page,
    PageFormData,
    MediaResource,
    MediaCollectionIndexResource,
    PageTreeCollectionResource,
    PageSlugFormData
} from '@/types';
import {client} from './index';
import { AxiosResponse } from 'axios';
import { LoadOne, LoadMany, UpdateOrCreate, Delete } from './types';

const loadMediaItem: LoadOne<MediaResource> = (id) => client.get(`media/${id}`) as Promise<AxiosResponse<MediaResource>>;

const loadMediaItems: LoadMany<MediaCollectionIndexResource> = (params) => client.get(`media/items`, { params });

const updateOrCreatePage: UpdateOrCreate<PageFormData>  = (data, id = null) => {
    return client[id ? 'put' : 'post'](`pages/${id}`, data)
}

const updatePageSlug: UpdateOrCreate<PageSlugFormData>  = (data, id) => {
    return client.put(`pages/${id}`, data)
}

const deletePage: Delete<Page>  = (page) => {
    return client.delete(`pages/${page.id}`)
}

export { loadMediaItem, loadMediaItems, deletePage, updateOrCreatePage, updatePageSlug };
