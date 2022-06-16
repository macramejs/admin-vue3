import { NavItem } from './resources';
import { Form } from '@macramejs/macrame-vue3';

// Example

export type Example = {
    foo: 'string'
}
export type ExampleForm = Form<Example>;

// Auth

export type LoginFormData = {
    email: string,
    password: string,
    remember: boolean,
}
export type LoginForm = Form<LoginFormData>;

// Page

export interface PageFormData {
    name: string,
    content: {[k:string]: any}[],
    attributes: {[k:string]: any},
    is_live: boolean,
    publish_at: string|null,
    meta: {
        title: string,
        description: string
    }
}
export type PageForm = Form<PageFormData>;

// NavItem
export type NavItemForm = Form<NavItem>;

// Block

export type BlockContentFormData = {
    name: string,
    content: {[k:string]: any}[],
}
export type BlockContentForm = Form<BlockContentFormData>;

// // Partials

export type PartialFormData = {
    name: string;
    attributes: { [k: string]: any };
};
export type PartialForm = Form<PartialFormData>;
