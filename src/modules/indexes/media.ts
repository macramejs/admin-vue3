
import { useIndex, Index } from "@macramejs/macrame-vue3";
import { Media } from "@admin/types/resources";

export const useMediaIndex = () => {
    const index = useIndex<Media>({
        route: "http://bar.test/admin/media/items",
        syncUrl: true,
        sortBy: [],
        filters: {
            collection: {
                update(collection) {
                    index.filters.collection.value = collection
                        ? collection.key
                        : null;
                },
                value: null,
            },
            types: {
                toggle(type) {
                    const i = index.filters.types.value.indexOf(type);
                    if (i !== -1) {
                        index.filters.types.value.splice(i, 1);
                    } else {
                        index.filters.types.value.push(type);
                    }
                },
                value: [],
            },
        },
    });

    index.reloadOnChange(index.filters);

    return index;
};