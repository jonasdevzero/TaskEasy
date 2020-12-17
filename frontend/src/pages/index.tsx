import Head from 'next/head';
import Link from 'next/link';

import {
  Main,
} from '../styles/pages/Global';
import {
  Content,
  Info,
  StyledLink
} from '../styles/pages/Home';

export default function Home() {
  return (
    <>
      <Head>
        <title>TaskEasy | Here you made your objectives easily</title>
      </Head>

      <Main>
        <Content>
          <Info>
            <h1>
              Task <span>Easy</span>
            </h1>
            <p>Here you made your objectives easily.</p>

            <div>
              <Link href="/signup">
                <StyledLink>START NOW</StyledLink>
              </Link>

              <Link href="/signin">
                <StyledLink className="signin">SIGN IN</StyledLink>
              </Link>
            </div>
          </Info>

          <img src="/checklist.png" alt="" />
        </Content>
      </Main>
    </>
  );
};
