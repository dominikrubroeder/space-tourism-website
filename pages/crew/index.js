import { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Breadcrumb from '../../components/layout/Breadcrumb';
import TopLevelPageSection from '../../components/layout/TopLevelPageSection';

const CrewPage = ({ data }) => {
  const [activeTab, setActiveTab] = useState(0);
  const crewData = data;

  return (
    <>
      <Head>
        <title>Crew | Space tourism</title>
        <meta name="description" content="Meet your crew | Space tourism" />
      </Head>

      <div className="min-h-screen text-white bg-crew-mobile bg-no-repeat bg-center bg-cover md:bg-crew-tablet xl:bg-crew-desktop">
        <Breadcrumb title="Meet your crew" count="02" />

        <TopLevelPageSection className="md:pb-0 xl:pt-0">
          <section className="relative w-full md:flex md:flex-col-reverse md:justify-between md:gap-8 xl:h-screen xl:pb-0 xl:grid xl:grid-cols-2 xl:max-w-7xl">
            <div className="grid gap-0 w-full mx-auto xl:absolute xl:bottom-0 xl:right-0 xl:mr-0 xl:w-auto">
              {crewData.map((crew, index) => {
                if (index === activeTab) {
                  return (
                    <div key={index}>
                      <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                          duration: 1,
                          ease: 'easeOut',
                          delay: 0.3,
                        }}
                      >
                        <div className="relative w-56 h-56 m-auto sm:w-96 sm:h-96 xl:w-[30rem] xl:h-[30rem]">
                          <Image
                            src={crew.images.png}
                            alt={crew.name}
                            width="100%"
                            height="100%"
                            layout="responsive"
                            objectFit="contain"
                            priority
                          />
                        </div>
                      </motion.div>

                      <motion.hr
                        initial={{ opacity: 0, width: '0%' }}
                        animate={{ opacity: 1, width: '100%' }}
                        transition={{
                          duration: 1,
                          ease: 'easeOut',
                          delay: 0.8,
                        }}
                        className="border-white/25 md:hidden"
                      />
                    </div>
                  );
                }
              })}
            </div>

            <div className="max-w-md grid gap-8 mx-auto md:order-1 xl:pt-0 xl:flex xl:flex-col xl:gap-32 xl:self-end">
              <nav className="flex items-center gap-4 mx-auto mt-8 md:mt-0 xl:mt-0 xl:order-2 xl:ml-0 xl:mb-16">
                {crewData.map((_, index) => {
                  return (
                    <div
                      key={index}
                      className={`w-2 h-2 md:w-4 md:h-4 rounded-full cursor-pointer transition-all duration-1000 ${
                        index === activeTab ? 'bg-white/100' : 'bg-white/25'
                      }`}
                      onClick={() => setActiveTab(index)}
                    ></div>
                  );
                })}
              </nav>

              <div className="xl:order-1">
                {crewData.map((crewMember, index) => {
                  if (index === activeTab) {
                    return (
                      <div
                        key={index}
                        className="grid gap-4 text-center xl:text-left"
                      >
                        <div className="grid gap-2">
                          <motion.h2
                            initial={{ opacity: 0, x: -16 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{
                              duration: 1,
                              ease: 'easeOut',
                              delay: 0.6,
                            }}
                            className="font-bellefair opacity-50"
                          >
                            {crewMember.role}
                          </motion.h2>

                          <motion.h1
                            initial={{ opacity: 0, y: 32 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                              duration: 1,
                              ease: 'easeOut',
                              delay: 0.3,
                            }}
                            className="text-2xl"
                          >
                            {crewMember.name}
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
                          {crewMember.bio}
                        </motion.p>
                      </div>
                    );
                  }
                })}
              </div>
            </div>
          </section>
        </TopLevelPageSection>
      </div>
    </>
  );
};

export default CrewPage;

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
      data: data.crew,
    },
  };
}
