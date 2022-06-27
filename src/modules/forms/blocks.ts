import { useForm } from '@macramejs/macrame-vue3';
import { loadBlock, updateOrCreateBlock } from '@/modules/api';
import { BlockForm, BlockFormData } from '@/types';
import { Ref, ref } from 'vue';

export type UseBlockForm = (
    data: Partial<BlockFormData> & { id?: number | undefined }
) => BlockForm;

const useBlockForm: UseBlockForm = ({
    name = '',
    content = [],
    id = undefined,
}) => {
    return useForm({
        data: {
            name,
            content,
        },
        submit: data => updateOrCreateBlock(data, id),
        load: async id => {
            let response = await loadBlock(id as number);

            return response;
        },
    });
};

const blockForm = ref<BlockForm>() as Ref<BlockForm>;

export { useBlockForm, blockForm };
