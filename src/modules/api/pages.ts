import {
    Page,
    PageFormData,
    PageResource
} from '@/types';
import {client} from './index';
import { AxiosResponse } from 'axios';
import { Load, UpdateOrCreate, Delete } from './types';

type Test = {
    foo: string,
}

const loadPage: Load<PageResource> = async (id) => {
    const foo = (await client.get(`pages/${id}`));
    const bar = new Promise(() => null);

    return foo;
}

const updateOrCreatePage: UpdateOrCreate<PageFormData>  = (data, id = null) => {
    return client[id ? 'put' : 'post'](`pages/${id}`, data)
}

const deletePage: Delete<Page>  = (page) => {
    return client.delete(`pages/${page.id}`)
}

export { loadPage, deletePage, updateOrCreatePage };