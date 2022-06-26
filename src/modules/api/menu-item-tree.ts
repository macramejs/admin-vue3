import { Menu, MenuItem, MenuItemTreeCollectionResource } from '@/types';
import {client} from './index';
import { AxiosResponse } from 'axios';
import { LoadOne, LoadMany, UpdateOrCreate, Delete, Update, Create } from './types';
import { TreeOrder } from '@macramejs/macrame-vue3';

const loadMenuItemsTree: LoadMany<
    MenuItemTreeCollectionResource, [Menu]
> = (menu) => client.get(`menus/${menu.id}/item-tree`);

const updateMenuItemsTree: Update<
    TreeOrder, [Menu]
> = (menu, data) => client.put(`menus/${menu.id}/item-tree`, data);

export { loadMenuItemsTree, updateMenuItemsTree }