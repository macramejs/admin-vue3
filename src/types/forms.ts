import { NavItem } from './resources';
import { Form } from '@macramejs/macrame-vue3';

// Example

export type Example = {
    foo: 'string'
}
export type ExampleForm = Form<Example>;

// Page

export type PageContent = {
    name: string,
    content: {[k:string]: any}[],
    attributes: {[k:string]: any},
    is_live: boolean,
    publish_at: string
}
export type PageContentForm = Form<PageContent>;

export type PageMeta = {
    title: string,
    description: string
}
export type PageMetaForm = Form<PageMeta>;

// NavItem
        export type NavItemForm = Form<NavItem>;

// Block

export type BlockContent = {
    name: string,
    content: {[k:string]: any}[],
}
export type BlockContentForm = Form<BlockContent>;

// Partials

export type Partial = {
    name: string;
    attributes: { [k: string]: any };
};
export type PartialForm = Form<Partial>;
