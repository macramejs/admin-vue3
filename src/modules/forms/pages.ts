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
        meta = {
            title: '',
            description: '',
        },
    },
    id = null
) => {
    return useForm({
        data: { name, content, attributes, is_live, publish_at, meta },
        submit: data => updateOrCreatePage(data, id),
        load: async id => {
            let page = (await loadPage(id as number)).data.data;
            pageModel.value = page;
            return {
                name: page.name,
                content: page.content,
                attributes: page.attributes,
                is_live: page.is_live,
                publish_at: page.publish_at,
                meta: page.meta,
            };
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
