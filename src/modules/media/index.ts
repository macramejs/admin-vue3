import { useIndex, Index } from '@macramejs/macrame-vue3';
import { Media } from '@/types/resources';
import { client } from '../api';
export { default as MediaUpload } from './MediaUpload.vue';
import { useMediaIndex, loadMediaItem } from '@/entities';
export type MediaIndex = Index<Media>;

export const mediaIndex = useMediaIndex();

export const getMediaById = async (id: number) => {
    let media = (await loadMediaItem(id)).data.data;
    return media as Media;
};

export const deleteFile = async (file: Media) => {
    await client.post(`/media/delete/`, {
        body: {
            ids: [file.id],
        },
    });
};
