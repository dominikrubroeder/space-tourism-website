import Head from 'next/head';
import TheHeader from '../components/layout/TheHeader';
import HeroText from '../components/home/HeroText';

export default function Home() {
  return (
    <div className="bg-space-dark">
      <Head>
        <title>Space tourism</title>
        <meta
          name="description"
          content="Space tourism | So, you want to travel to space"
        />
        <link
          rel="icon"
          type="image/png"
          href="/assets/favicon-32x32.png"
          sizes="32x32"
        ></link>
      </Head>

      <TheHeader />

      <main className="h-screen bg-home-mobile md:bg-home-tablet xl:bg-home-desktop bg-center bg-no-repeat bg-cover">
        <HeroText />
      </main>
    </div>
  );
}
