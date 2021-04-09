import Head from 'next/head';
import Layout, { siteTitle } from '../components/Layout/Layout';
import WelcomeSection from '../components/WelcomeSection/WelcomeSection';

const Home: React.FC = () => {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <WelcomeSection />
    </Layout>
  );
};

export default Home;
