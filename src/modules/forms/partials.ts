import { useForm } from '@macramejs/macrame-vue3';
import { loadPartial, updateOrCreatePartial } from '@/modules/api';
import { PartialFormData, PartialForm  } from '@/types';

export type UsePartialForm = (
    data: Partial<PartialFormData>,
    id?: number | null
) => PartialForm;

const usePartialForm: UsePartialForm = ({ name = '', attributes = [] }, id = null) => {
    return useForm({
        data: {
            name,
            attributes,
        },
        submit: data => updateOrCreatePartial(data, id),
        load: async id => {
            let partial = (await loadPartial(id as number)).data.data;
            return {
                name: partial.name,
                attributes: partial.attributes,
            };
        },
    });
};

const partialForm = usePartialForm({});

export { usePartialForm, partialForm };
