import GlobalStyle from '../styles/global';
import { ThemeProvider } from 'styled-components';
import { light, dark } from '../styles/theme';
import usePersistedState from '../hooks/usePersistedState';


function MyApp({ Component, pageProps }) {
  const [theme, setTheme] = usePersistedState('theme', 'light');

  function toggleTheme() {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeProvider theme={theme === 'light' ? light : dark}>
      <GlobalStyle />
      <Component
        {...pageProps}
        toggleTheme={toggleTheme}
      />
    </ThemeProvider>
  );
};

export default MyApp;
