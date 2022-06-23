import { useForm } from '@macramejs/macrame-vue3';
import { loadPage, updateOrCreatePage, updatePageSlug } from '@/modules/api';
import {
    Page,
    PageForm,
    PageFormData,
    PageSlugForm,
    PageSlugFormData,
} from '@/types';
import { ref } from 'vue';

export type UsePageForm = (
    data: Partial<PageFormData>,
    id?: number | null
) => PageForm;

export const pageModel = ref<Page>();

const usePageForm: UsePageForm = (
    {
        name = '',
        content = [],
        attributes = {},
        is_live = false,
        publish_at = null,
        template = '',
        slug = '',
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
            content,
            attributes,
            is_live,
            publish_at,
            template,
            slug,
            meta,
        },
        submit: data => updateOrCreatePage(data, id),
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

export type UsePageSlugForm = (
    data: Partial<PageSlugFormData>,
    id?: number | null
) => PageSlugForm;
const usePageSlugForm: UsePageSlugForm = ({ slug = '' }, id) => {
    return useForm({
        data: { slug },
        submit: data => updatePageSlug(data, id),
        load: async id => {
            let page = (await loadPage(id as number)).data.data;
            return {
                slug: page.slug,
            };
        },
    });
};

const pageSlugForm = usePageSlugForm({});

export { usePageForm, pageForm, usePageSlugForm, pageSlugForm };
