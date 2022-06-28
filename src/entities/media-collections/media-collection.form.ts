import { MediaCollectionForm, MediaCollectionFormData } from '@/types';
import { useForm } from '@macramejs/macrame-vue3';
import { ref, Ref } from 'vue';
import { updateOrCreateMediaCollection } from './api';

export type UseMediaCollectionForm = (
    data: Partial<MediaCollectionFormData> & { id?: number | undefined }
) => MediaCollectionForm;

const useMediaCollectionForm: UseMediaCollectionForm = ({
    title = '',
    id = undefined,
}) => {
    const form = useForm({
        data: { title },
        submit: data =>
            updateOrCreateMediaCollection(data, id).then(response => {
                // TODO: reload media collections
                return response;
            }),
    });

    return form;
};

const mediaCollectionForm =
    ref<MediaCollectionForm>() as Ref<MediaCollectionForm>;

export { useMediaCollectionForm, mediaCollectionForm };
