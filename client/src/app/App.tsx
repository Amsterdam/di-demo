import React from 'react';
import styled from 'styled-components';
import { Route, Switch } from 'react-router-dom';
import { GlobalStyle, ThemeProvider, themeColor } from '@amsterdam/asc-ui';
import theme from '@services/theme';
import usePageViews from '@hooks/usePageViews';
import AppRoutes from './AppRoutes';
import ScrollToTop from '@components/ScrollToTop/ScrollToTop';

interface IProps {}

const App: React.FC<IProps> = () => {
    usePageViews();

    return (
        <ThemeProvider overrides={theme}>
            <Bg>
                <GlobalStyle />
                <ScrollToTop />
                <Switch>
                    {Object.keys(AppRoutes).map(key => {
                        const { path, component, exact } = AppRoutes[key];
                        return <Route key={key} path={path} component={component} exact={exact} />;
                    })}
                </Switch>
            </Bg>
        </ThemeProvider>
    );
};

const Bg = styled.div`
    background-color: ${themeColor('tint', 'level3')};

    *:focus {
        outline: auto !important;
        outline-color: ${themeColor('support', 'focus')} !important;
        outline-style: solid !important;
        outline-width: 2px !important;
        outline-offset: 4px !important;
    }
`;

export default App;
