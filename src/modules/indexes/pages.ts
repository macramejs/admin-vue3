import { Page } from "@/types";
import { useIndex, Index, IndexFilter } from "@macramejs/macrame-vue3"
import { loadPages } from "../api";

type PageIndex = Index<Page>;
type PageIndexSortByKeys = "id";

type PageIndexTypeFilter = IndexFilter<"types", "images|pdfs"[], {
    toggle: (type: "images|pdfs") => void
}>;
type PageIndexCollectionsFilter = IndexFilter<"collections", string|null, {
    update: (collection: string|null) => void
}>;

type PageIndexFilters = PageIndexTypeFilter & PageIndexCollectionsFilter;

const usePagesIndex = () => {
    return useIndex<Page, PageIndexSortByKeys, PageIndexFilters>({
        load: (params) => loadPages(params),
        filters: {
            types: {
                toggle(type) {
                    
                },
                value: []
            },
            collections: {
                update(collection) {
    
                },
                value: null
            }
        },
    });
}