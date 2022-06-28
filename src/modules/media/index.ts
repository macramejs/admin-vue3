import { loadMediaItem } from '@/entities';
import { Media } from '@/types/resources';

export { default as MediaUpload } from './MediaUpload.vue';

export const getMediaById = async (id: number) => {
    let media = (await loadMediaItem(id)).data.data;
    return media as Media;
};

// import { useIndex, Index } from '@macramejs/macrame-vue3';
// import { client } from '../api';
// import { useMediaIndex, loadMediaItem } from '@/entities';

// export const mediaIndex = useMediaIndex();

// export const deleteFile = async (file: Media) => {
//     await client.post(`/media/delete/`, {
//         body: {
//             ids: [file.id],
//         },
//     });
// };
