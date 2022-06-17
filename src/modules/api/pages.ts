import {
    Page,
    PageFormData,
    PageResource,
    PageTreeResource
} from '@/types';
import {client} from './index';
import { Load, UpdateOrCreate, Delete } from './types';


const loadPage: Load<PageResource> = async (id) => {
    const { data } = (await client.get(`pages/${id}`));

    return data;
}
const loadPagesTree: Load<PageTreeResource> = async () => {
    const { data } = (await client.get(`pages`));

    return data;
}

const updateOrCreatePage: UpdateOrCreate<PageFormData>  = (data, id = null) => {
    return client[id ? 'put' : 'post'](`pages/${id}`, data)
}

const deletePage: Delete<Page>  = (page) => {
    return client.delete(`pages/${page.id}`)
}

export { loadPage, deletePage, updateOrCreatePage, loadPagesTree };