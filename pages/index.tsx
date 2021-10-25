import type { NextPage } from 'next';
import Intro from '../src/branding/components/intro';
import SetupVideo from '../src/branding/components/setupVideo';

const Home: NextPage = () => {
  return (
    <>
      <SetupVideo />
      <Intro />
    </>
  );
};

export default Home;
