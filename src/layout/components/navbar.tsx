import { FunctionComponent } from 'react';
import { css } from '@emotion/react';
import Image from 'next/image';
import NavLink from './navlink';
import { motion } from 'framer-motion';

const navBarStyles = css`
  flex-shrink: 1;
  background-color: #232323;
  padding: 1.5rem;
`;

const navItemStyles = css`
  padding: 0 1rem;
  font-size: 18px;
  color: #edbb5f;
  cursor: pointer;
`;

const NavBar: FunctionComponent = () => {
  return (
    <motion.div css={navBarStyles}>
      <div
        css={{
          display: 'flex',
          flexWrap: 'wrap',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <div css={{ flexShrink: 1 }}>
          <Image src="/assets/images/sss-logo-1.png" height="45" width="418" />
        </div>
        <div
          css={{
            display: 'flex',
            flexWrap: 'wrap',
            flexShrink: 1,
            flexDirection: 'row',
          }}
        >
          <NavLink href="/" exact>
            HOME
          </NavLink>
          <NavLink href="/about" exact>
            ABOUT
          </NavLink>
          <NavLink href="/the-process" exact>
            THE PROCESS
          </NavLink>
          <NavLink href="/the-ceo" exact>
            THE CEO
          </NavLink>
          <NavLink href="/testimonials" exact>
            TESTIMONIALS
          </NavLink>
          <NavLink href="/contact" exact>
            CONTACT
          </NavLink>
        </div>
      </div>
    </motion.div>
  );
};

export default NavBar;
