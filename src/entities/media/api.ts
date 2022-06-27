import { MediaResource, MediaCollectionIndexResource } from '@/types';
import { client, LoadOne, LoadMany } from '@/modules/api';

const loadMediaItem: LoadOne<MediaResource> = id => client.get(`media/${id}`);

const loadMediaItems: LoadMany<MediaCollectionIndexResource> = params =>
    client.get(`media/items`, { params });

export { loadMediaItem, loadMediaItems };
