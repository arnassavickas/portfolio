import Head from 'next/head';

export const siteTitle = 'Arnas Savickas - web developer';

const Layout: React.FC = ({ children }) => {
  return (
    <div>
      <Head>
        <link rel='icon' href='/favicon.ico' />
        <meta
          name='description'
          content={`Hi, I'm Arnas, a web developer.
          Here you will learn about my journey and
          projects I have done so far`}
        />
        <meta name='og:title' content={siteTitle} />
        <meta name='twitter:card' content='summary_large_image' />
      </Head>
      <main>{children}</main>
    </div>
  );
};

export default Layout;
