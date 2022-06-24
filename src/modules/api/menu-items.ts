import { Menu, MenuItem, MenuItemTreeCollectionResource } from '@/types';
import {client} from './index';
import { AxiosResponse } from 'axios';
import { LoadOne, LoadMany, UpdateOrCreate, Delete, Update, Create } from './types';

const loadMenuItemTree: LoadMany<
    MenuItemTreeCollectionResource, [Menu], {}
> = (menu) => client.get(`menus/${menu.id}/items/tree`);

const updateMenuItemsOrder: Update<
    MenuItem, [Menu]
> = (menu, data, id) => client.post(`menus/${id}/items/order`, data);

const createMenuItem: Update<
    MenuItem, [Menu]
> = (menu, data) => client.post(`menus/${menu.id}/items/order`, data);

export { loadMenuItemTree, updateMenuItemsOrder }