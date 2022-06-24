import { useIndex, Index } from '@macramejs/macrame-vue3';
import { Media } from '@/types/resources';
import { get, post } from '../request';
import { loadMediaItem, loadMediaItems } from '../api/media';
import { client } from '../api';
export { default as MediaUpload } from './MediaUpload.vue';

export type MediaIndex = Index<Media>;

export const useMediaIndex = () => {
    // TODO:
    const index = useIndex<Media>({
        // route: "http://bar.test/admin/media/items",

        // syncUrl: true,
        // sortBy: [],
        // filters: {
        //     collection: {
        //         update(collection) {
        //             index.filters.collection.value = collection
        //                 ? collection.key
        //                 : null;
        //         },
        //         value: null,
        //     },
        //     types: {
        //         toggle(type) {
        //             const i = index.filters.types.value.indexOf(type);
        //             if (i !== -1) {
        //                 index.filters.types.value.splice(i, 1);
        //             } else {
        //                 index.filters.types.value.push(type);
        //             }
        //         },
        //         value: [],
        //     },
        // },
        load: () => loadMediaItems() 
    });
    // index.reloadOnChange(index.filters);
    return index;
};

export const mediaIndex = useMediaIndex();

export const getMediaById = async (id: number) => {
    let media = (await loadMediaItem(id)).data.data;
    return media as Media;
};

export const deleteFile = async (file: Media) => {
    // TODO:
    // await post(`/admin/media/delete/`, {
    //     body: {
    //         ids: [file.id],
    //     },
    // });
    // mediaIndex.reload();
};
