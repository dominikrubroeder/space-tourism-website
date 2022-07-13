import { useState } from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import Breadcrumb from '../../components/layout/Breadcrumb';
import TopLevelPageSection from '../../components/layout/TopLevelPageSection';
import NavText from '../../components/typography/NavText';
import Subheading from '../../components/typography/Subheading';
import Subheading2 from '../../components/typography/Subheading2';
import { destinationsData } from '../../data';

const DestinationPage = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <>
      <Head>
        <title>Destination | Space tourism website</title>
        <meta
          name="description"
          content="Pick your destination | Space tourism website"
        />
      </Head>

      <div className="min-h-screen text-white bg-destination-mobile bg-no-repeat bg-center bg-cover md:bg-destination-tablet xl:bg-destination-desktop">
        <Breadcrumb title="Pick your destination" count="01" />

        <TopLevelPageSection>
          <section className="w-full xl:grid xl:gap-8 xl:grid-cols-2 xl:max-w-7xl">
            {destinationsData.map((destination, index) => {
              if (index === activeTab) {
                return (
                  <motion.img
                    key={index}
                    src={destination.images.webp}
                    alt={destination.name}
                    initial={{ opacity: 0, x: 32 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 1,
                      ease: 'easeOut',
                      delay: 0.3,
                    }}
                    className="w-[10.625rem] h-[10.625rem] mx-auto mb-4 md:mb-8 md:w-[18.75rem] md:h-[18.75rem] xl:w-[27.85rem] xl:h-[27.85rem]"
                  />
                );
              }
            })}

            <div className="max-w-md grid gap-8 mx-auto">
              <nav className="flex items-center gap-7 mx-auto">
                {destinationsData.map((destination, index) => {
                  return (
                    <NavText
                      key={index}
                      className={`list-none py-2 border-b-2 border-transparent transition-all duration-1000 ${
                        index === activeTab
                          ? 'text-white border-white'
                          : 'text-space-accent'
                      }`}
                      onClick={() => setActiveTab(index)}
                    >
                      {destination.name}
                    </NavText>
                  );
                })}
              </nav>

              <div className="text-center xl:text-left">
                {destinationsData.map((destination, index) => {
                  if (index === activeTab) {
                    return (
                      <motion.h1
                        key={index}
                        initial={{ opacity: 0, y: 32 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                          duration: 1,
                          ease: 'easeOut',
                          delay: 0.3,
                        }}
                        className={`text-[3.5rem] leading-none md:text-[5rem] md:mb-4 xl:mb-8 xl:text-[6.25rem]`}
                      >
                        {destination.name}
                      </motion.h1>
                    );
                  }
                })}

                {destinationsData.map((destination, index) => {
                  if (index === activeTab) {
                    return (
                      <motion.p
                        key={index}
                        initial={{ opacity: 0, y: -32 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                          duration: 1,
                          ease: 'easeOut',
                          delay: 0.3,
                        }}
                        className="min-h-[8rem] md:min-h-[6rem] text-space-accent"
                      >
                        {destination.description}
                      </motion.p>
                    );
                  }
                })}
              </div>

              <motion.hr
                initial={{ opacity: 0, width: '0%' }}
                animate={{ opacity: 1, width: '100%' }}
                transition={{
                  duration: 1,
                  ease: 'easeOut',
                  delay: 0.6,
                }}
                className="border-white/25"
              />

              <div className="grid gap-8 md:grid-cols-2">
                <div>
                  <Subheading2 className="text-space-accent">
                    Avg. distance
                  </Subheading2>

                  {destinationsData.map((destination, index) => {
                    if (index === activeTab) {
                      return (
                        <motion.div
                          key={index}
                          initial="hidden"
                          whileInView="visible"
                          transition={{
                            duration: 1,
                            ease: 'easeOut',
                            delay: 1,
                          }}
                          variants={{
                            visible: { opacity: 1, y: 0 },
                            hidden: { opacity: 0, y: -32 },
                          }}
                        >
                          <Subheading>{destination.distance}</Subheading>
                        </motion.div>
                      );
                    }
                  })}
                </div>

                <div>
                  <Subheading2 className="text-space-accent">
                    Est. travel time
                  </Subheading2>

                  {destinationsData.map((destination, index) => {
                    if (index === activeTab) {
                      return (
                        <motion.div
                          key={index}
                          initial="hidden"
                          whileInView="visible"
                          transition={{
                            duration: 1,
                            ease: 'easeOut',
                            delay: 1,
                          }}
                          variants={{
                            visible: { opacity: 1, x: 0 },
                            hidden: { opacity: 0, x: -32 },
                          }}
                        >
                          <Subheading key={index}>
                            {destination.travel}
                          </Subheading>
                        </motion.div>
                      );
                    }
                  })}
                </div>
              </div>
            </div>
          </section>
        </TopLevelPageSection>
      </div>
    </>
  );
};

export default DestinationPage;
