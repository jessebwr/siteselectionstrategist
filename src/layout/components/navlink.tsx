import { FunctionComponent } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { primaryColor } from '../../../styles/tokens';

type NavLinkProps = {
  href: string;
  exact?: boolean;
};

const NavLink: FunctionComponent<NavLinkProps> = ({
  href,
  exact,
  children,
}) => {
  const { pathname } = useRouter();
  const isActive = exact ? pathname === href : pathname.startsWith(href);

  return (
    <Link href={href}>
      <motion.div
        css={{
          padding: '0 0.6rem',
          fontSize: '18px',
          color: isActive ? '#fff' : primaryColor,
          cursor: 'pointer',
        }}
        whileHover={{
          filter: 'brightness(70%)',
          transition: { duration: 0.3 },
        }}
      >
        {children}
      </motion.div>
    </Link>
  );
};

NavLink.defaultProps = {
  exact: true,
};

export default NavLink;
