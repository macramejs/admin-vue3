import {
    BlockResource,
    BlockCollectionIndexResource,
    BlockFormData,
    Block,
} from '@/types';
import { client } from './index';
import { AxiosResponse } from 'axios';
import { LoadOne, LoadMany, UpdateOrCreate, Delete } from './types';

const loadBlock: LoadOne<BlockResource> = id =>
    client.get(`blocks/${id}`) as Promise<AxiosResponse<BlockResource>>;

const loadBlocks: LoadMany<BlockCollectionIndexResource> = params =>
    client.get(`blocks`, { params });

const updateOrCreateBlock: UpdateOrCreate<BlockFormData> = (
    data,
    id = null
) => {
    return client[id ? 'put' : 'post'](`blocks${id ? '/' + id : ''}`, data);
};

const deleteBlock: Delete<Block> = block => {
    return client.delete(`blocks/${block.id}`);
};

export { loadBlock, loadBlocks, deleteBlock, updateOrCreateBlock };
