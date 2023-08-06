import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
  .use(initReactI18next)
  .init({
    lng: 'En', // Язык по умолчанию
    fallbackLng: 'En', // Язык, который будет использован, если выбранный язык не найден
    resources: {
      En: {
        translation: require('../language/en.json'),
      },
      Ua: {
        translation: require('../language/ua.json'),
      },
      Ru: {
        translation: require('../language/ru.json'),
      },
    },
  });
  export default i18n;