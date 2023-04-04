import i18next from 'i18next'
import { initReactI18next } from 'react-i18next';

import {messages} from './languages'

const i18n = i18next.createInstance().use(initReactI18next);

i18n.init({
    defaultNS: ['header'],
    fallbackLng: 'pt',
    ns: ['header'],
    resources: messages
});

export default i18n;