
import Vue from 'vue';
import VueI18n from 'vue-i18n'
import enLocale from 'element-ui/lib/locale/lang/en'
import zhLocale from 'element-ui/lib/locale/lang/zh-CN'
import ElementLocale from 'element-ui/lib/locale'
import langZh from './zh-Cn';
import langEn from './en';

Vue.use(VueI18n)

const messages = {
  en: {
    ...enLocale,
    ...langEn
  },
  zh: {
    ...zhLocale,
    ...langZh
  }
}
// Create VueI18n instance with options
const i18n = new VueI18n({
  locale: 'en', // set locale
  messages, // set locale messages
})

ElementLocale.i18n((key, value) => i18n.t(key, value));

export default i18n;