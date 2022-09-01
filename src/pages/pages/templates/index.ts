import { DefineComponent } from 'vue';
import DefaultTemplate from './DefaultTemplate.vue';
import HomeTemplate from './HomeTemplate.vue';

type Template = {
    [k: string]: DefineComponent<{}, {}, any>;
};

const templates: Template = {
    default: DefaultTemplate,
    home: HomeTemplate,
};

const templateOptions = [
    {
        label: 'Standard',
        value: 'default',
    },
    {
        label: 'Startseite',
        value: 'home',
    },
];

const hasContent = (template: string) => {
    return (
        {
            home: false,
        }[template] !== false
    );
};

export { DefaultTemplate, templateOptions, templates, hasContent };
