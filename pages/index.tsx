import Head from 'next/head';
import Layout, { siteTitle } from '../components/Layout/layout';
import styles from './index.module.scss';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={styles.heading}>
        <h1 className={styles.welcome}>
          Hi, I'm Arnas Savickas,
          <br />a web developer
        </h1>
      </section>
      <section className={styles.flex}>
      </section>
    </Layout>
  );
}
