import Head from 'next/head';
import Layout, { siteTitle } from '../components/Layout/Layout';
import WelcomeSection from '../components/WelcomeSection/WelcomeSection';
import AboutMeSection from '../components/AboutMeSection/AboutMeSection';
import TimelineSection from '../components/ProjectsSection/ProjectsSection';
import JourneySection from '../components/JourneySection/JourneySection';
import FooterSection from '../components/FooterSection/FooterSection';

const Home: React.FC = () => {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <WelcomeSection />
      <AboutMeSection />
      <TimelineSection />
      <JourneySection />
      <FooterSection />
    </Layout>
  );
};

export default Home;
