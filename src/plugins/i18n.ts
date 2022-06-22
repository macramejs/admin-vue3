import { createI18n } from 'vue-i18n';
import { merge } from 'lodash';
import { messages as auth } from '@/pages/auth/lang';
import { messages as pages } from '@/pages/pages/lang';
import { messages as media } from '@/pages/media/lang';

const translations = [auth, pages, media];

let messages = {};

translations.forEach(translation => {
    messages = merge(messages, translation);
});

export const i18n = createI18n({
    locale: 'de',
    fallbackLocale: 'en',
    messages,
});
