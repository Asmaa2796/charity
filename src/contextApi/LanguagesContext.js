import { createContext, useEffect, useState } from 'react';

export const LanguagesContext = createContext();

const LanguagesProvider = ({ children }) => {
    const [language, setLanguage] = useState(() => {
        return localStorage.getItem("preferredLanguage") || "en";
    });

    useEffect(() => {
        localStorage.setItem("preferredLanguage", language);
    }, [language]);

    const toggleLanguage = () => {
        setLanguage((prevLang) => (prevLang === "en" ? "ar" : "en"));
    };

    return (
        <LanguagesContext.Provider value={{ language, toggleLanguage }}>
            {children}
        </LanguagesContext.Provider>
    );
}

export default LanguagesProvider;
