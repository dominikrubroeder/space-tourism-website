import Head from 'next/head';

export default function Home() {
  return (
    <div>
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

      <header>Header</header>

      <main>
        <p>Main. Testing some text and characters.</p>
      </main>

      <footer>Footer</footer>
    </div>
  );
}
