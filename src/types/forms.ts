import { NavItem } from './resources';
import { Form } from '@macramejs/macrame-vue3';

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

// NavItem
export type NavItemForm = Form<NavItem>;

// Block

export type BlockContentFormData = {
    name: string;
    content: { [k: string]: any }[];
};
export type BlockContentForm = Form<BlockContentFormData>;

// // Partials

export type PartialFormData = {
    name: string;
    attributes: { [k: string]: any };
};
export type PartialForm = Form<PartialFormData>;
