import { DefineComponent } from 'vue';
import DefaultTemplate from './DefaultTemplate.vue';

type Template = {
    [k: string]: DefineComponent<{}, {}, any>
}

const templates: Template = {
    default: DefaultTemplate,
};

const templateOptions = [
    {
        label: 'Standard',
        value: 'default',
    },
]

export { DefaultTemplate, templateOptions, templates }