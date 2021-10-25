import { FunctionComponent } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

type IntroButtonProps = {
  href: string;
};

const IntroButton: FunctionComponent<IntroButtonProps> = ({
  href,
  children,
}) => {
  return (
    <Link href={href}>
      <motion.button
        css={{
          fontSize: 20,
          fontWeight: 600,
          textTransform: 'uppercase',
          letterSpacing: '1px',
          background: 'transparent',
          border: '1px solid #fff',
          color: '#fff',
          padding: '1rem',
          margin: '0 1rem',
          cursor: 'pointer',
          fontFamily: "'Lato',Helvetica,Arial,Lucida,sans-serif!important;",
        }}
        whileHover={{
          color: '#edbb5f',
          transition: {
            duration: 0.3,
          },
        }}
      >
        {children}
      </motion.button>
    </Link>
  );
};

const Intro = () => {
  return (
    <div
      css={{
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'center',
        position: 'relative',
        paddingTop: 250,
        paddingBottom: 430,
        width: '60%',
        margin: '0 20%',
        height: 'auto',
      }}
    >
      <Image src="/assets/images/sss-logo-1.png" height="90" width="600" />
      <div
        css={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          paddingTop: '2rem',
          width: '100%',
        }}
      >
        <IntroButton href="/contact">323.646.6116</IntroButton>
        <IntroButton href="/the-process">THE PROCESS</IntroButton>
      </div>
    </div>
  );
};

export default Intro;
