import { Resource, CollectionResource, StoredResource } from '@/types/resources'
import { AxiosResponse } from 'axios';

type TModel = Record<string, any>;

// load one
export type LoadOne<
    R extends Resource<TModel>,
    D extends TModel[] = []
> = (...args: [...D, ...[number]]) => Promise<AxiosResponse<R, any>>;

// load many
export type LoadMany<
    R extends CollectionResource<TModel>, 
    D extends TModel[] = [],
    P extends TModel = TModel
> = (...args: [...D, ...[P?]]) => Promise<AxiosResponse<R, any>>;

// update or create
export type UpdateOrCreate<
    FormData extends TModel = TModel,
    D extends TModel[] = []
> = (
    ...args: [...D, ...[FormData, number|undefined]]
) => Promise<AxiosResponse>;

// update
export type Update<
    FormData extends any = any,
    D extends TModel[] = []
> = (
    ...args: [...D, ...[FormData, number|undefined]],
) => Promise<AxiosResponse>;

// create
export type Create<
    FormData extends TModel = TModel,
    D extends TModel[] = []
> = (
    ...args: [...D, ...[FormData]]
) => Promise<AxiosResponse<StoredResource>>;

// delete
export type Delete<
    D extends TModel[] = []
> = (
    ...args: [...D, ...[number]]
) => Promise<AxiosResponse>;