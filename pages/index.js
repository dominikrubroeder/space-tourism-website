import Head from 'next/head';
import { useEffect } from 'react';
import ExploreButton from '../components/ExploreButton';
import HeroText from '../components/home/HeroText';

export default function Home() {
  useEffect(() => {
    document.body.className = 'text-white bg-space-dark';
  });

  return (
    <>
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

      <section className="h-screen flex items-end bg-home-mobile overflow-hidden md:bg-home-tablet xl:bg-home-desktop bg-center bg-no-repeat bg-cover p-8">
        <div className="grid gap-20 h-[80vh] max-w-7xl w-full mx-auto text-center lg:pb-32">
          <HeroText />

          <ExploreButton>EXPLORE</ExploreButton>
        </div>
      </section>
    </>
  );
}
