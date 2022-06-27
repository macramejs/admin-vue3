import { createI18n } from 'vue-i18n';
import { merge } from 'lodash';
import { messages as auth } from '@/pages/auth/lang';
import { messages as pages } from '@/pages/pages/lang';
import { messages as media } from '@/pages/media/lang';
import { messages as menus } from '@/pages/menus/lang';
import { messages as partials } from '@/pages/partials/lang';
import { messages as content } from '@/modules/content/lang';
import { messages as blocks } from '@/pages/blocks/lang';
import { messages as layout } from '@/layout/lang';
import { messages as ui } from '@/ui/lang';

const translations = [
    auth,
    pages,
    media,
    content,
    blocks,
    layout,
    menus,
    partials,
    ui,
];

let messages = {};

translations.forEach(translation => {
    messages = merge(messages, translation);
});

export const i18n = createI18n({
    locale: 'de',
    fallbackLocale: 'en',
    messages,
});
