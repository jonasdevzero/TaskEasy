import { useState } from 'react';
import GlobalStyle from '../styles/global';
import { ThemeProvider } from 'styled-components';
import theme from '../styles/theme'


function MyApp({ Component, pageProps }) {
  const [currentTheme, setCurrentTheme] = useState<'light' | 'dark'>('light');

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Component
        {...pageProps}
        currentTheme={currentTheme}
        setCurrentTheme={setCurrentTheme}
      />
    </ThemeProvider>
  );
};

export default MyApp;
