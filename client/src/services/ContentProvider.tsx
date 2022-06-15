import React, { useContext, useState } from 'react';
import contentNL from './content-nl';
import contentEN from './content-en';

enum Language {
    NL = 'nl',
    EN = 'en'
}

export type Content = typeof contentNL;

const defaultContentContext = {
    language: Language.NL,
    content: contentNL
};

type ContentContextType = {
    language: Language;
    content: Content;
    switchLanguage?: (language: Language) => void;
};

export const ContentContext = React.createContext<ContentContextType>(defaultContentContext);

export const ContentProvider: React.FC = ({ children }) => {
    const [language, setLanguage] = useState<Language>(Language.NL);

    return (
        <ContentContext.Provider
            value={{
                language,
                content: language === Language.NL ? contentNL : contentEN,
                switchLanguage: setLanguage
            }}
        >
            {children}
        </ContentContext.Provider>
    );
};

export const useContent = (): Content => {
    const { content } = useContext(ContentContext);

    return content;
};
