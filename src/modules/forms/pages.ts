import { useForm } from '@macramejs/macrame-vue3';
import { updateOrCreatePage } from '@/modules/api';
import { PageForm, PageFormData } from '@/types';

export type UsePageForm = (data: Partial<PageFormData>, id?: number|null) => PageForm;

const usePageForm: UsePageForm = ({
    name = '',
    content = [],
    attributes = {},
    is_live = false,
    publish_at = null,
    meta = {
        title: '',
        description: ''
    }
}, id = null) => {
    return useForm({
        data: { name, content, attributes, is_live, publish_at, meta },
        submit: (data) => updateOrCreatePage(data, id)
    });
}
export { usePageForm };