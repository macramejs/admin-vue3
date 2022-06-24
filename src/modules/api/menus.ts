import { MenuCollectionResource, } from '@/types';
import {client} from './index';
import { AxiosResponse } from 'axios';
import { LoadOne, LoadMany, UpdateOrCreate, Delete } from './types';

const loadMenus: LoadMany<MenuCollectionResource> = () => client.get(`menus`);