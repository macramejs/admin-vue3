import { useForm } from '@macramejs/macrame-vue3';
import { loadPage, updateOrCreatePage } from '@/modules/api';
import { PageForm, PageFormData } from '@/types';
import { ref } from 'vue';

export type UsePageForm = (data: Partial<PageFormData>, id?: number|null) => PageForm;

export const template = ref<string>()

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
        submit: (data) => updateOrCreatePage(data, id),
        load: async (id) => {
            let page = (await loadPage(id as number)).data.data;
            template.value = page.template
            return {
                name: page.name,
                content: page.content,
                attributes: page.attributes,
                is_live: page.is_live,
                publish_at: page.publish_at,
                meta: page.meta,
            };
        }
    });
}

const pageForm = usePageForm({});

export { usePageForm, pageForm };
