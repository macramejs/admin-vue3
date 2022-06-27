import {
    MediaCollectionResource,
    MediaCollectionCollectionIndexResource,
    MediaCollectionFormData,
    MediaCollection,
    MediaCollectionUploadFormData,
    MediaCollectionRemoveFormData,
    MediaCollectionAddFormData,
} from '@/types';
import {
    client,
    LoadOne,
    LoadMany,
    UpdateOrCreate,
    Delete,
} from '@/modules/api';

const loadMediaCollection: LoadOne<MediaCollectionResource> = id =>
    client.get(`media-collections/${id}`);

const loadMediaCollections: LoadMany<
    MediaCollectionCollectionIndexResource
> = params => client.get(`media-collections`, { params });

const updateOrCreateMediaCollection: UpdateOrCreate<MediaCollectionFormData> = (
    data,
    id = undefined
) => {
    return id
        ? client.put(`media-collections/${id}`, data)
        : client.post(`media-collections`, data);
};

const uploadFilesToMediaCollection = (
    collection: MediaCollection,
    data: MediaCollectionUploadFormData
) => {
    return client.post(`media-collections/${collection.id}/upload`, data);
};

const removeFilesFromMediaCollection = (
    collection: MediaCollection,
    data: MediaCollectionRemoveFormData
) => {
    return client.post(`media-collections/${collection.id}/remove`, data);
};

const addFilesToMediaCollection = (
    collection: MediaCollection,
    data: MediaCollectionAddFormData
) => {
    return client.post(`media-collections/${collection.id}/add`, data);
};

const deleteMediaCollection: Delete<[MediaCollection]> = collection =>
    client.delete(`media-collections/${collection.id}`);

export {
    loadMediaCollection,
    loadMediaCollections,
    updateOrCreateMediaCollection,
    uploadFilesToMediaCollection,
    removeFilesFromMediaCollection,
    addFilesToMediaCollection,
    deleteMediaCollection,
};
