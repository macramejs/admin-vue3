
import { useIndex, Index, IndexFilter } from "@macramejs/macrame-vue3";
import { Media } from "@/types/resources";
import { reactive } from "vue";
import { loadMediaItems } from "../api/media";

type MediaIndexSortByKeys = "id";

type MediaIndexCollectionFilter = {
    update(collection: {key: string}): void,
    value: null|string
};
type MediaIndexTypesFilter = {
    toggle(type: string): void,
    value: string[]
};
type MediaIndexFilters = {
    collection: MediaIndexCollectionFilter,
    types: MediaIndexTypesFilter
}

export const useMediaIndex = () => {

    const collectionFilter = reactive<MediaIndexCollectionFilter>({
        update(collection) {
            this.value = collection
                ? collection.key
                : null;
        },
        value: null,
    });

    const typesFilter = reactive<MediaIndexTypesFilter>({
        toggle(type) {
            const i = this.value.indexOf(type);
            if (i !== -1) this.value.splice(i, 1);
            else this.value.push(type);
        },
        value: [],
    });

    const index = useIndex<
        Media,
        MediaIndexSortByKeys,
        MediaIndexFilters
    >({
        load: (params) => loadMediaItems(params),
        filters: {
            collection: collectionFilter,
            types: typesFilter,
        },
    });

    index.reloadOnChange(index.filters);

    return index;
};
