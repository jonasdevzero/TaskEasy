import Head from 'next/head';
import Link from 'next/link';

import {
  Main,
  Content,
  StyledLink
} from '../styles/pages/Landing';

export default function Landing() {
  return (
    <>
      <Head>
        <title>TaskEasy | Here you made your objectives easily</title>
      </Head>

      <Main>
        <Content>
          <h1>TaskEasy</h1>
          <p>Here you made your objectives easily.</p>
          <Link href="/">
            <StyledLink>GET STARTED</StyledLink>
          </Link>

          <img src="/checklist.png" alt="" />
        </Content>
      </Main>
    </>
  );
};
