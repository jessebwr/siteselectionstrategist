import { css } from '@emotion/react';

const globalCss = css`
  html,
  body {
    padding: 0;
    margin: 0;
    font-family: 'Lato', Helvetica, Arial, Lucida, sans-serif;
    height: 100%;
  }

  #__next {
    height: 100%;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
  }
`;

export default globalCss;
