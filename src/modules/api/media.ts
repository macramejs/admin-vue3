import {
    Page,
    PageFormData,
    MediaResource,
    MediaCollectionIndexResource,
} from '@/types';
import {client} from './index';
import { AxiosResponse } from 'axios';
import { LoadOne, LoadMany, UpdateOrCreate, Delete } from './types';

const loadMediaItem: LoadOne<MediaResource> = id => 
    client.get(`media/${id}`);

const loadMediaItems: LoadMany<MediaCollectionIndexResource> = (params) => 
    client.get(`media/items`, { params });

const updateOrCreatePage: UpdateOrCreate<PageFormData>  = (data, id = undefined) => {
    return id 
        ? client.put(`pages/${id}`, data)
        : client.post(`pages`, data);
}

const deletePage: Delete  = id => 
    client.delete(`pages/${id}`);

export { loadMediaItem, loadMediaItems, deletePage, updateOrCreatePage };
