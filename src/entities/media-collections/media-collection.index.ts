import { useIndex } from '@macramejs/macrame-vue3';
import { MediaCollection } from '@/types';
import { loadMediaCollections } from './api';

type MediaCollectionIndexSortByKeys = 'id';

export const useMediaCollectionIndex = () => {
    const index = useIndex<MediaCollection, MediaCollectionIndexSortByKeys>({
        load: params => {
            console.log({ params });

            return loadMediaCollections(params);
        },
    });

    index.reloadOnChange(index.filters);

    return index;
};

export const mediaCollectionIndex = useMediaCollectionIndex();
