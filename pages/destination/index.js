import { useState } from 'react';
import { motion } from 'framer-motion';
import Breadcrumb from '../../components/layout/Breadcrumb';
import TopLevelPageSection from '../../components/layout/TopLevelPageSection';
import NavText from '../../components/typography/NavText';
import Subheading from '../../components/typography/Subheading';
import Subheading2 from '../../components/typography/Subheading2';
import FadeUpWhenInView from '../../components/animation/FadeUpWhenInView';

const destinations = [
  {
    name: 'Moon',
    images: {
      png: './assets/destination/image-moon.png',
      webp: './assets/destination/image-moon.webp',
    },
    description:
      'See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.',
    distance: '384,400 km',
    travel: '3 days',
  },
  {
    name: 'Mars',
    images: {
      png: './assets/destination/image-mars.png',
      webp: './assets/destination/image-mars.webp',
    },
    description:
      'Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!',
    distance: '225 mil. km',
    travel: '9 months',
  },
  {
    name: 'Europa',
    images: {
      png: './assets/destination/image-europa.png',
      webp: './assets/destination/image-europa.webp',
    },
    description:
      'The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.',
    distance: '628 mil. km',
    travel: '3 years',
  },
  {
    name: 'Titan',
    images: {
      png: './assets/destination/image-titan.png',
      webp: './assets/destination/image-titan.webp',
    },
    description:
      'The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.',
    distance: '1.6 bil. km',
    travel: '7 years',
  },
];

const DestinationPage = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="min-h-screen text-white bg-destination-mobile bg-no-repeat bg-center bg-cover md:bg-destination-tablet xl:bg-destination-desktop">
      <Breadcrumb title="Pick your destination" count="01" />

      <TopLevelPageSection>
        <section className="w-full xl:grid xl:gap-8 xl:grid-cols-2 xl:max-w-7xl">
          {destinations.map((destination, index) => {
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
              {destinations.map((destination, index) => {
                return (
                  <NavText
                    key={index}
                    className={`list-none py-2 border-b-2 border-transparent transition-all ${
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
              {destinations.map((destination, index) => {
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

              {destinations.map((destination, index) => {
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

                {destinations.map((destination, index) => {
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

                {destinations.map((destination, index) => {
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
  );
};

export default DestinationPage;
