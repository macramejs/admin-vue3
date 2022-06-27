import { useForm } from '@macramejs/macrame-vue3';
import { loadPage, updateOrCreatePage } from './api';
import { Page, PageForm, PageFormData } from '@/types';
import { ref, Ref } from 'vue';
import { pageTree } from './page.tree';

export type UsePageForm = (
    data: Partial<PageFormData> & { id?: number | undefined }
) => PageForm;

export const pageModel = ref<Page>();

const usePageForm: UsePageForm = ({
    name = '',
    parent_id = undefined,
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
    id = undefined,
}) => {
    return useForm({
        data: {
            name,
            parent_id,
            content,
            attributes,
            is_live,
            publish_at,
            template,
            slug,
            meta,
        },
        submit: (data, i) =>
            updateOrCreatePage(data, (i as number) || id).then(response => {
                if (i || id) pageTree.load();

                return response;
            }),
        load: async id =>
            loadPage(id as number).then(response => {
                if (Array.isArray(response.data.data.attributes)) {
                    response.data.data.attributes = {};
                }

                return response;
            }),
    });
};

let pageForm = ref<PageForm>() as Ref<PageForm>;

export { usePageForm, pageForm };
