import { NavItem, PartialResource } from './resources';
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
    parent_id?: number|undefined,
    content: { [k: string]: any }[];
    attributes: { [k: string]: any };
    is_live: boolean;
    publish_at: string | null;
    has_been_published: boolean;
    template: string;
    slug: string;
    full_slug: string;
    preview_key: string;
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

// MenuItem
export interface MenuItemFormData {
    title: string,
    link: string
}
export type MenuItemForm = Form<MenuItemFormData>;

// Block

export type BlockFormData = {
    name: string;
    content: { [k: string]: any }[];
};
export type BlockForm = Form<BlockFormData>;

// // Partials

export type PartialFormData = {
    name: string;
    attributes: { [k: string]: any };
};
export type PartialForm = Form<PartialFormData, PartialResource>;
