import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Breadcrumb from '../../components/layout/Breadcrumb';
import TopLevelPageSection from '../../components/layout/TopLevelPageSection';
import Head from 'next/head';

const TechnologyPage = ({ data }) => {
  const [activeTab, setActiveTab] = useState(0);
  const technologiesData = data;

  return (
    <>
      <Head>
        <title>Technology | Space tourism</title>
        <meta
          name="description"
          content="Technology space launch 101 | Space tourism"
        />
      </Head>

      <div className="min-h-screen text-white bg-technology-mobile bg-no-repeat bg-center bg-cover md:bg-technology-tablet xl:bg-technology-desktop">
        <Breadcrumb title="Space Launch 101" count="03" />

        <TopLevelPageSection>
          <div className="w-full grid gap-8 xl:grid-cols-2 xl:max-w-7xl xl:flex xl:items-center">
            {technologiesData.map((technology, index) => {
              if (index === activeTab) {
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 32 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 1,
                      ease: 'easeOut',
                      delay: 0.3,
                    }}
                    className="w-72 h-72 m-auto sm:w-80 sm:h-80 xl:w-[32.2rem] xl:h-[32.2rem] xl:absolute xl:right-0"
                  >
                    <Image
                      src={technology.images.portrait}
                      width="100%"
                      height="100%"
                      layout="responsive"
                      alt={technology.name}
                      priority
                    />
                  </motion.div>
                );
              }
            })}

            <div className="max-w-md grid gap-8 mx-auto xl:ml-0 xl:flex xl:gap-4 xl:order-1">
              <nav className="flex items-center gap-4 mx-auto xl:flex-col">
                {technologiesData.map((_, index) => {
                  return (
                    <li
                      key={index}
                      className={`w-10 h-10 rounded-full border border-white/50 list-none flex items-center justify-center md:w-[3.75rem] md:h-[3.75rem] md:text-2xl cursor-pointer transition-all duration-1000 ${
                        index === activeTab
                          ? 'text-space-dark bg-white'
                          : 'text-white'
                      }`}
                      onClick={() => setActiveTab(index)}
                    >
                      {index + 1}
                    </li>
                  );
                })}
              </nav>

              <div className="max-w-md px-4 text-center xl:text-left">
                {technologiesData.map((technology, index) => {
                  if (index === activeTab) {
                    return (
                      <div key={index} className="grid gap-4 md:gap-8">
                        <div className="grid gap-1 md:gap-4">
                          <motion.h5
                            initial={{ opacity: 0, x: -32 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{
                              duration: 1,
                              ease: 'easeOut',
                              delay: 1,
                            }}
                            className="uppercase text-space-accent text-sm font-barlow-condensed tracking-[0.1475rem] md:text-[1rem]"
                          >
                            The terminology ...
                          </motion.h5>

                          <motion.h1
                            initial={{ opacity: 0, y: 32 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                              duration: 1,
                              ease: 'easeOut',
                              delay: 0.3,
                            }}
                            className="text-2xl md:text-[2.5rem]"
                          >
                            {technology.name}
                          </motion.h1>
                        </div>

                        <motion.p
                          initial={{ opacity: 0, y: -32 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{
                            duration: 1,
                            ease: 'easeOut',
                            delay: 0.3,
                          }}
                          className="text-space-accent"
                        >
                          {technology.description}
                        </motion.p>
                      </div>
                    );
                  }
                })}
              </div>
            </div>
          </div>
        </TopLevelPageSection>
      </div>
    </>
  );
};

export default TechnologyPage;

// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries.
export async function getStaticProps() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const res = await fetch(
    'https://dominikrubroeder.de/assets/frontendmentor/space-tourism/data.json'
  );
  const data = await res.json();

  if (!data) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
        // statusCode: 301
      },
    };
  }

  // By returning { props: { data: data.crew } }, the Crew component
  // will receive `data` as a prop at build time
  return {
    props: {
      data: data.technology,
    },
  };
}
