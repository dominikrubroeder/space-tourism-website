import { useState } from 'react';
import { motion } from 'framer-motion';
import Breadcrumb from '../../components/layout/Breadcrumb';
import TopLevelPageSection from '../../components/layout/TopLevelPageSection';
import NavText from '../../components/typography/NavText';
import Subheading from '../../components/typography/Subheading';
import Subheading2 from '../../components/typography/Subheading2';

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
      <TopLevelPageSection>
        <Breadcrumb title="Pick your destination" count="01" />

        <div className="w-full grid gap-8 xl:grid-cols-2 xl:max-w-7xl">
          {destinations.map((destination, index) => {
            if (index === activeTab) {
              return (
                <img
                  key={index}
                  src={destination.images.webp}
                  alt={destination.name}
                  className="w-[10.625rem] h-[10.625rem] mx-auto md:w-[18.75rem] md:h-[18.75rem] xl:w-full xl:h-full"
                />
              );
            }
          })}

          <div className="max-w-md grid gap-8 mx-auto">
            <nav className="flex items-center gap-4 mx-auto">
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
                      className={`text-[3.5rem] leading-none md:text-[5rem] xl:text-[6.25rem] transition-all}`}
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
                      className="min-h-[10rem] md:min-h-[6rem] text-space-accent"
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
              <div className="text-center xl:text-left">
                <Subheading2 className="text-space-accent">
                  Avg. distance
                </Subheading2>

                {destinations.map((destination, index) => {
                  if (index === activeTab) {
                    return (
                      <Subheading key={index}>
                        {destination.distance}
                      </Subheading>
                    );
                  }
                })}
              </div>

              <div className="text-center xl:text-left">
                <motion.div
                  initial={{ opacity: 0, y: 32 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 1,
                    ease: 'easeOut',
                    delay: 0.3,
                  }}
                >
                  <Subheading2 className="text-space-accent">
                    Est. travel time
                  </Subheading2>
                </motion.div>

                {destinations.map((destination, index) => {
                  if (index === activeTab) {
                    return (
                      <Subheading key={index}>{destination.travel}</Subheading>
                    );
                  }
                })}
              </div>
            </div>
          </div>
        </div>
      </TopLevelPageSection>
    </div>
  );
};

export default DestinationPage;
