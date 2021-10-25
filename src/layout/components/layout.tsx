import { css } from '@emotion/react';
import { useRouter } from 'next/router';
import { FunctionComponent } from 'react';
import { primaryColor } from '../../../styles/tokens';
import NavBar from './navbar';

const flexContainerStyles = css`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
`;

const mainPageStyles = css`
  flex-grow: 1;
  overflow-x: hidden;
`;

const Footer = () => (
  <div css={{ fontFamily: "'Lato',Helvetica,Arial,Lucida,sans-serif" }}>
    <div
      css={{
        padding: '1rem 6rem',
        color: primaryColor,
        backgroundColor: '#2D2D2D',
        fontWeight: 600,
        fontSize: 14,
      }}
    >
      Sources programs worldwide.
    </div>
    <div
      css={{
        padding: '1rem 6rem',
        color: primaryColor,
        backgroundColor: '#171717',
        fontWeight: 500,
        fontSize: 14,
      }}
    >
      Copyright © 2020 SITESELECTIONSTRATEGIST LLC. All Rights Reserved.
    </div>
  </div>
);

const MainArea: FunctionComponent = ({ children }) => (
  <div css={mainPageStyles}>
    {children}
    <Footer />
  </div>
);

const Layout: FunctionComponent = ({ children }) => {
  const { pathname } = useRouter();
  return (
    <div css={flexContainerStyles}>
      <NavBar />
      <MainArea key={pathname}>{children}</MainArea>
    </div>
  );
};

export default Layout;
