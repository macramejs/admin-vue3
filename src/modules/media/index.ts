export { default as MediaUpload } from './MediaUpload.vue';

// import { useIndex, Index } from '@macramejs/macrame-vue3';
// import { Media } from '@/types/resources';
// import { client } from '../api';
// import { useMediaIndex, loadMediaItem } from '@/entities';

// export const mediaIndex = useMediaIndex();

// export const getMediaById = async (id: number) => {
//     let media = (await loadMediaItem(id)).data.data;
//     return media as Media;
// };

// export const deleteFile = async (file: Media) => {
//     await client.post(`/media/delete/`, {
//         body: {
//             ids: [file.id],
//         },
//     });
// };
