import {
    PartialResource,
    PartialCollectionResource,
    PartialFormData,
    Partial,
} from '@/types';
import { client } from './index';
import { Axios, AxiosResponse } from 'axios';
import { LoadOne, LoadMany, UpdateOrCreate, Delete } from './types';

const loadPartial: LoadOne<PartialResource> = id =>
    client.get(`partial/${id}`) as Promise<AxiosResponse<PartialResource>>;

// const loadPartials: LoadMany<PartialollectionIndexResource> = params =>
    // client.get(`partials`, { params });

const loadPartialByTemplateName: LoadOne<PartialResource> = template => {
    client.get(`partial/${template}`) as Promise<AxiosResponse<PartialResource>>;
}

// if templates include template
export { loadPartial };
