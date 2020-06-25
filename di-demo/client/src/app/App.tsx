import React from 'react';
import { GlobalStyle, ThemeProvider } from '@datapunt/asc-ui';
import Homepage from '../components/Homepage/Homepage';

const App: React.FC<unknown> = () => (
    <ThemeProvider>
        <GlobalStyle />
        <Homepage />
    </ThemeProvider>
);

export default App;