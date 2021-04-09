import Head from 'next/head';
import Layout, { siteTitle } from '../components/Layout/Layout';
import WelcomeSection from '../components/WelcomeSection/WelcomeSection';
import AboutMeSection from '../components/AboutMeSection/AboutMeSection';
import TimelineSection from '../components/TimelineSection/TimelineSection';

const Home: React.FC = () => {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <WelcomeSection />
      <AboutMeSection />
      <TimelineSection />
    </Layout>
  );
};

export default Home;
