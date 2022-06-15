import React, { useContext, useState } from 'react';
import contentNL from './content-nl';
import contentEN from './content-en';

export enum Language {
    NL = 'nl',
    EN = 'en'
}

export type Content = typeof contentNL;

type ContentContextType = {
    language: Language;
    content: Content;
    switchLanguage: (language: Language) => void;
};

const defaultContentContext = {
    language: Language.NL,
    content: contentNL,
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    switchLanguage: (l: Language) => {}
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

export const useSwichLanguage = (): ((language: Language) => void) => {
    const { switchLanguage } = useContext(ContentContext);

    return switchLanguage;
};

export const useGetCurrentLanguage = (): Language => {
    const { language } = useContext(ContentContext);

    return language;
};
