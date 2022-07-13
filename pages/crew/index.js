import { useState } from 'react';
import Head from 'next/head';
import Breadcrumb from '../../components/layout/Breadcrumb';
import TopLevelPageSection from '../../components/layout/TopLevelPageSection';
import { motion } from 'framer-motion';
import { crewsData } from '../../data';
import Image from 'next/image';

const CrewPage = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <>
      <Head>
        <title>Crew | Space tourism website</title>
        <meta
          name="description"
          content="Meet your crew | Space tourism website"
        />
      </Head>

      <div className="min-h-screen text-white bg-crew-mobile bg-no-repeat bg-center bg-cover md:bg-crew-tablet xl:bg-crew-desktop">
        <Breadcrumb title="Meet your crew" count="02" />

        <TopLevelPageSection className="xl:pt-0 xl:pb-0">
          <section className="relative w-full md:block xl:h-screen xl:pb-0 xl:grid xl:grid-cols-2 xl:max-w-7xl">
            <div className="grid gap-0 w-full mx-auto md:fixed md:bottom-0 xl:absolute xl:right-0 xl:mr-0 xl:w-auto">
              {crewsData.map((crew, index) => {
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
                        <div className="text-center">
                          <Image
                            width={crew.images.sizes.width}
                            height={crew.images.sizes.height}
                            src={crew.images.png}
                            alt={crew.name}
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
                {crewsData.map((_, index) => {
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
                {crewsData.map((crewMember, index) => {
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
