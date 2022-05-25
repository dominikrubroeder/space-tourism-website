import { useState } from 'react';
import Breadcrumb from '../../components/layout/Breadcrumb';
import TopLevelPageSection from '../../components/layout/TopLevelPageSection';
import { motion } from 'framer-motion';

const crews = [
  {
    name: 'Douglas Hurley',
    images: {
      png: './assets/crew/image-douglas-hurley.png',
      webp: './assets/crew/image-douglas-hurley.webp',
    },
    role: 'Commander',
    bio: 'Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.',
  },
  {
    name: 'Mark Shuttleworth',
    images: {
      png: './assets/crew/image-mark-shuttleworth.png',
      webp: './assets/crew/image-mark-shuttleworth.webp',
    },
    role: 'Mission Specialist',
    bio: 'Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.',
  },
  {
    name: 'Victor Glover',
    images: {
      png: './assets/crew/image-victor-glover.png',
      webp: './assets/crew/image-victor-glover.webp',
    },
    role: 'Pilot',
    bio: 'Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.',
  },
  {
    name: 'Anousheh Ansari',
    images: {
      png: './assets/crew/image-anousheh-ansari.png',
      webp: './assets/crew/image-anousheh-ansari.webp',
    },
    role: 'Flight Engineer',
    bio: 'Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.',
  },
];

const CrewPage = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="min-h-screen text-white bg-crew-mobile bg-no-repeat bg-center bg-cover md:bg-crew-tablet xl:bg-crew-desktop">
      <TopLevelPageSection>
        <Breadcrumb title="Meet your crew" count="02" />

        <div className="w-full grid gap-8 md:flex md:flex-col xl:grid xl:grid-cols-2 xl:max-w-7xl">
          <div className="grid gap-0 md:order-2">
            {crews.map((crew, index) => {
              if (index === activeTab) {
                return (
                  <>
                    <motion.figure
                      key={index}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{
                        duration: 1,
                        ease: 'easeOut',
                        delay: 0.3,
                      }}
                      className="mx-auto max-w-[50vh] h-[35vh] xl:h-[65vh] xl:w-[50vw]"
                    >
                      <img
                        src={crew.images.webp}
                        className="w-full h-full object-contain block rounded-3xl"
                        alt={crew.name}
                      />
                    </motion.figure>

                    <motion.hr
                      initial={{ opacity: 0, width: '0%' }}
                      animate={{ opacity: 1, width: '100%' }}
                      transition={{
                        duration: 1,
                        ease: 'easeOut',
                        delay: 0.8,
                      }}
                      className="border-white/25"
                    />
                  </>
                );
              }
            })}
          </div>

          <div className="max-w-md grid gap-8 mx-auto md:order-1 xl:flex xl:flex-col xl:gap-32">
            <nav className="flex items-center gap-4 mx-auto xl:order-2 xl:ml-0">
              {crews.map((_, index) => {
                return (
                  <div
                    key={index}
                    className={`w-2 h-2 rounded-full cursor-pointer ${
                      index === activeTab ? 'bg-white/100' : 'bg-white/25'
                    }`}
                    onClick={() => setActiveTab(index)}
                  ></div>
                );
              })}
            </nav>

            <div className="xl:order-1">
              {crews.map((crewMember, index) => {
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
        </div>
      </TopLevelPageSection>
    </div>
  );
};

export default CrewPage;
