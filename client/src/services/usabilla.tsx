import '@services/lightning.js';
import React, { useEffect } from 'react';
import { Language, useCurrentLanguage } from './ContentProvider';
import { isMobile } from './createIrmaSession';

let usabilla_live: any;

const initUsabilla = (language: Language): void => {
    if (isMobile()) {
        usabilla_live = (window as any)['lightningjs'].require('usabilla_live', '//w.usabilla.com/7eb436c19ab1.js');
    } else {
        usabilla_live = (window as any)['lightningjs'].require('usabilla_live', '//w.usabilla.com/1400b371716f.js');
    }
};

export const updatePageView = (): void => {
    if (usabilla_live) {
        usabilla_live('virtualPageView');
    }
};

export const startSurvey = (timeout = 2000): void => {
    if (usabilla_live) {
        setTimeout(() => usabilla_live('trigger', 'survey'), timeout);
    }
};

// initUsabilla();

export const UsabillaProvider: React.FC = () => {
    const language = useCurrentLanguage();

    useEffect(() => {
        initUsabilla(language);
    }, [language]);

    return <></>;
};
