import Head from 'next/head';
import Link from 'next/link';

import {
  Main,
  Content,
  StyledLink
} from '../styles/pages/Home';

interface IHome {
  toggleTheme(): void;
};

export default function Home({ toggleTheme }: IHome) {
  return (
    <>
      <Head>
        <title>TaskEasy | Here you made your objectives easily</title>
      </Head>

      <Main>
        <Content>
          <div>
            <h1 onClick={toggleTheme}>
              Task <span>Easy</span>
            </h1>
            <p>Here you made your objectives easily.</p>
            <Link href="/">
              <StyledLink>START NOW</StyledLink>
            </Link>
          </div>

          <img src="/checklist.png" alt="" />
        </Content>
      </Main>
    </>
  );
};
