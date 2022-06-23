import { useForm } from '@macramejs/macrame-vue3';
import { loadBlock, updateOrCreateBlock } from '@/modules/api';
import { BlockForm, BlockFormData } from '@/types';

export type UseBlockForm = (
    data: Partial<BlockFormData>,
    id?: number | null
) => BlockForm;

const useBlockForm: UseBlockForm = ({ name = '', content = [] }, id = null) => {
    return useForm({
        data: {
            name,
            content,
        },
        submit: data => updateOrCreateBlock(data, id),
        load: async id => {
            let block = (await loadBlock(id as number)).data.data;
            return {
                name: block.name,
                content: block.content,
            };
        },
    });
};

const blockForm = useBlockForm({});

export { useBlockForm, blockForm };
