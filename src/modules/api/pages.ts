
import { useForm, Form } from '@macramejs/macrame-vue3';
import { 
    Page,
    PageForm,
    PageFormData,
    PageResource
} from '@/types';
import {client} from './index';
import { usePage } from '@inertiajs/inertia-vue3';

const loadPage: (id: number) => Promise<PageResource>  = async (id) => {
    return (await client.get(`pages/${id}`)).data;
}

const deletePage: (page: Page) => Promise<void>  = (id) => {
    return client.delete(`pages/${id}`)
}

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
        data: {
            name, 
            content, 
            attributes, 
            is_live, 
            publish_at, 
            meta
        },
        submit: (data) => {
            return client[id ? 'put' : 'post'](`pages/${id}`, data)
        }
    });
}

export { loadPage, deletePage, usePageForm };