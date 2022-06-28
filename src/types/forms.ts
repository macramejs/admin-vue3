import { PartialResource } from './resources';
import { Form, RawTree } from '@macramejs/macrame-vue3';

// Example

export type Example = {
    foo: 'string';
};
export type ExampleForm = Form<Example>;

// Auth
export type LoginFormData = {
    email: string;
    password: string;
    remember: boolean;
};
export type LoginForm = Form<LoginFormData>;

export type ForgotFormData = {
    email: string;
};
export type ForgotForm = Form<ForgotFormData>;

export type ResetFormData = {
    email: string;
    password: string;
    password_confirmation: string;
};
export type ResetForm = Form<ResetFormData>;

// Page

export interface PageFormData {
    name: string;
    parent_id: number | undefined;
    content: { [k: string]: any }[];
    attributes: { [k: string]: any };
    is_live: boolean;
    publish_at: string | null;
    template: string;
    slug: string;
    meta: {
        title: string;
        description: string;
    };
}
export type PageForm = Form<PageFormData>;

export interface PageSlugFormData {
    slug: string;
}
export type PageSlugForm = Form<PageSlugFormData>;

// Menu
export interface MenuFormData {
    title: string;
    type: string;
}
export type MenuForm = Form<MenuFormData>;

// MenuItem
export interface MenuItemFormData {
    title: string;
    link: string;
}
export type MenuItemForm = Form<MenuItemFormData>;

// Block

export type BlockFormData = {
    name: string;
    content: { [k: string]: any }[];
};
export type BlockForm = Form<BlockFormData>;

// Partials

export type PartialFormData = {
    name: string;
    attributes: { [k: string]: any };
};
export type PartialForm = Form<PartialFormData, PartialResource>;

// MediaCollection

export type MediaCollectionFormData = {
    title: string;
};
export type MediaCollectionForm = Form<MediaCollectionFormData>;

export type MediaCollectionUploadFormData = {
    files: any[];
};
export type MediaCollectionUploadForm = Form<
    MediaCollectionUploadFormData,
    PartialResource
>;

export type MediaCollectionRemoveFormData = {
    files: any[];
};
export type MediaCollectionRemoveForm = Form<
    MediaCollectionRemoveFormData,
    PartialResource
>;

export type MediaCollectionAddFormData = {
    files: any[];
};
export type MediaCollectionAddForm = Form<
    MediaCollectionAddFormData,
    PartialResource
>;
