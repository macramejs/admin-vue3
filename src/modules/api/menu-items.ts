import { MenuItemFormData, Menu, MenuItem } from '@/types';
import {client} from './index';
import { AxiosResponse } from 'axios';
import { LoadOne, LoadMany, UpdateOrCreate, Delete, Update, Create } from './types';

const createMenuItem: Create<
    MenuItemFormData, [Menu]
> = (menu, data) => client.post(`menus/${menu.id}/items`, data);

const updateOrCreateMenuItem: UpdateOrCreate<
    MenuItemFormData, [Menu]
> = (menu, data, id = undefined) => 
    id 
        ? client.put(`menus/${menu.id}/items/${id}`, data)
        : client.post(`menus/${menu.id}/items`, data);

const deleteMenuItem: Delete<
    [Menu]
> = (menu, id) => client.delete(`menus/${menu.id}/items/${id}`);

export { createMenuItem, updateOrCreateMenuItem, deleteMenuItem }