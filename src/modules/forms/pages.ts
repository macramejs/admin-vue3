import { useForm } from '@macramejs/macrame-vue3';
import { loadPage, updateOrCreatePage } from '@/modules/api';
import {
    Page,
    PageForm,
    PageFormData,
} from '@/types';
import { ref } from 'vue';
import { pageTree } from '../state';

export type UsePageForm = (
    data: Partial<PageFormData>,
    id?: number | null
) => PageForm;

export const pageModel = ref<Page>();

const usePageForm: UsePageForm = (
    {
        name = '',
        parent_id = undefined,
        content = [],
        attributes = {},
        is_live = false,
        publish_at = null,
        has_been_published = false,
        template = '',
        slug = '',
        full_slug = '',
        preview_key = '',
        meta = {
            title: '',
            description: '',
        },
    },
    id = null
) => {
    return useForm({
        data: {
            name,
            parent_id,
            content,
            attributes,
            is_live,
            publish_at,
            has_been_published,
            template,
            slug,
            full_slug,
            preview_key,
            meta,
        },
        submit: (data, id) => updateOrCreatePage(data, id as number),
        load: async id => {
            let response = await loadPage(id as number);
            if (Array.isArray(response.data.data.attributes)) {
                response.data.data.attributes = {};
            }
            return response;
        },
    });
};

const pageForm = usePageForm({});

export { usePageForm, pageForm };
