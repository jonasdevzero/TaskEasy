import Head from 'next/head';

import {
  ThemeController,
  Main,
} from '../styles/pages/Landing';

interface ILanding {
  currentTheme: 'light' | 'dark';
};

export default function Landing({ currentTheme }: ILanding) {
  return (
    <ThemeController currentTheme={currentTheme}>
      <Head>
        <title>ZeroHard | Here you made your objectives</title>
      </Head>

      <Main>
        <h1>Zero Hard</h1>
      </Main>
    </ThemeController>
  );
};
