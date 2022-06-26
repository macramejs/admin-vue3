import { MenuCollectionResource, MenuResource } from '@/types';
import {client} from './index';
import { AxiosResponse } from 'axios';
import { LoadOne, LoadMany, UpdateOrCreate, Delete } from './types';

const loadMenu: LoadOne<MenuResource> = (id) => client.get(`menus/${id}`);

const loadMenus: LoadMany<MenuCollectionResource> = () => client.get(`menus`);

export { loadMenus, loadMenu };