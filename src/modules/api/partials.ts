import {
    PartialResource,
    PartialCollectionResource,
    PartialFormData,
    Partial,
} from '@/types';
import { client } from './index';
import { Axios, AxiosResponse } from 'axios';
import { LoadOne, LoadMany, UpdateOrCreate, Delete, Update } from './types';

const loadPartial: LoadOne<PartialResource> = template =>
    client.get(`partials/${template}`);

const updatePartial: Update<PartialFormData> = (data, id) => 
    client.put(`partials/${id}`, data);


// if templates include template
export { loadPartial, updatePartial };
