import en from './en.json';
import ar from './ar.json';

const translations = {
    en,
    ar,
};

export const translate = (key, language) => {
    return translations[language][key] || key;
};
