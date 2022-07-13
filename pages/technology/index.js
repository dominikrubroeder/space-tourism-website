import { useState } from 'react';
import { motion } from 'framer-motion';
import Breadcrumb from '../../components/layout/Breadcrumb';
import TopLevelPageSection from '../../components/layout/TopLevelPageSection';
import { technologiesData } from '../../data';
import Head from 'next/head';

const TechnologyPage = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <>
      <Head>
        <title>Technology | Space tourism website</title>
        <meta
          name="description"
          content="Space launch 101 | Space tourism website"
        />
      </Head>

      <div className="min-h-screen text-white bg-technology-mobile bg-no-repeat bg-center bg-cover md:bg-technology-tablet xl:bg-technology-desktop">
        <Breadcrumb title="Space Launch 101" count="03" />

        <TopLevelPageSection>
          <div className="w-full grid gap-8 xl:grid-cols-2 xl:max-w-7xl xl:flex">
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
                    className={`w-full h-[19.375rem] bg-center bg-cover bg-no-repeat ${technology.imageClasses.landscape} xl:${technology.imageClasses.portrait} xl:fixed xl:right-0 xl:bottom-20 xl:w-[32.2rem] xl:h-[32.2rem] xl:order-2`}
                  ></motion.div>
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
