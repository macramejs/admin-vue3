import { MediaResource, MediaIndexResource } from '@/types';
import { client, LoadOne, LoadMany, Delete } from '@/modules/api';

const loadMediaItem: LoadOne<MediaResource> = id => client.get(`media/${id}`);

const loadMediaItems: LoadMany<MediaIndexResource> = params =>
    client.get(`media/items`, { params });

const deleteMedia: Delete = id => client.delete(`media/${id}`);

export { loadMediaItem, loadMediaItems, deleteMedia };
