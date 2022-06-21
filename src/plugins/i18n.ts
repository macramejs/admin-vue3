import { createI18n } from 'vue-i18n';
import { merge } from 'lodash';
import { messages as auth } from '@/pages/auth/lang';

const translations = [auth];

let messages = {};

translations.forEach(translation => {
    messages = merge(messages, translation);
});

export const i18n = createI18n({
    locale: 'de',
    fallbackLocale: 'en',
    messages,
});
