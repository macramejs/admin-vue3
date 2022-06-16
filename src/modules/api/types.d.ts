import { Resource, CollectionResource } from '@/types/resources'
import { AxiosResponse } from 'axios';

type TModel = {[k:string]: any};

export type Load<R extends Resource<TModel>|CollectionResource<TModel>> = (id: number) => Promise<AxiosResponse<R, any>>;
// export type Load<R extends Resource<TModel>|CollectionResource<TModel>> = (id: number) => Promise<R>;
export type UpdateOrCreate<FormData extends TModel> = (data: FormData, id?: number|null) => Promise<AxiosResponse>;
export type Update<FormData> = (data: FormData, id: number) => Promise<AxiosResponse>;
export type Create<FormData> = (data: FormData) => Promise<AxiosResponse>;
export type Delete<Model extends TModel> = (model: Model) => Promise<AxiosResponse>;