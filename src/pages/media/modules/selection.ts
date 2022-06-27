import { Media, MediaCollection } from '@/types';
import { reactive } from 'vue';

export interface Selection {
    files: Media[];
    addToCollection: (collection: MediaCollection) => void;
    delete: () => void;
}

const useSelection = (files: Media[]) => {
    const sel = reactive<Selection>({
        files,
        addToCollection() {
            // TODO:
        },
        delete() {
            // TODO:
        },
    });

    sel.addToCollection = collection => {
        if (sel.files.length === 0) {
            return;
        }
        // TODO:
        // return Inertia.post(
        //     `/admin/media/${collection.id}/add`,
        //     {
        //         ids: sel.files.map(file => file.id),
        //     },
        //     {
        //         onSuccess() {
        //             sel.files = [];
        //         },
        //     }
        // );
    };

    sel.delete = () => {
        //TODO:
        //     return Inertia.post(
        //         `/admin/media/delete`,
        //         {
        //             ids: sel.files.map(file => file.id),
        //         },
        //         {
        //             onSuccess() {
        //                 mediaIndex.reload();
        //             },
        //         }
        //     );
    };

    return sel;
};

const selection = useSelection([]);

export { selection, useSelection };
