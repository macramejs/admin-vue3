import {
    Menu,
    MenuCollectionResource,
    MenuFormData,
    MenuResource,
} from '@/types';
import { client } from './index';
import { AxiosResponse } from 'axios';
import { LoadOne, LoadMany, UpdateOrCreate, Delete } from './types';

const loadMenu: LoadOne<MenuResource> = id => client.get(`menus/${id}`);

const loadMenus: LoadMany<MenuCollectionResource> = () => client.get(`menus`);

const updateOrCreateMenu: UpdateOrCreate<MenuFormData> = (
    data,
    id = undefined
) => (id ? client.put(`menus/${id}`, data) : client.post(`menus`, data));

export { loadMenus, loadMenu, updateOrCreateMenu };
