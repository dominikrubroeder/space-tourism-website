import { useState } from 'react';
import NavText from '../../components/typography/NavText';
import Subheading from '../../components/typography/Subheading';
import Subheading2 from '../../components/typography/Subheading2';

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
    <div className="min-h-screen text-white bg-crew-mobile bg-no-repeat bg-center bg-cover md:bg-crew-tablet xl:bg-crew-desktop xl:flex xl:flex-col xl:items-center xl:justify-center">
      <section className="grid gap-8 p-8 pt-24 md:pt-40">
        <div className="flex gap-2 font-barlow-condensed uppercase">
          <span className="opacity-25">02</span>Meet your crew
        </div>

        <div className="w-full grid gap-8 xl:grid-cols-2 xl:max-w-7xl">
          <div className="grid gap-0">
            {crews.map((crew, index) => {
              if (index === activeTab) {
                return (
                  <figure key={index} className="mx-auto max-w-[50vh] h-[35vh]">
                    <img
                      src={crew.images.webp}
                      className="w-full h-full object-contain block rounded-3xl"
                      alt={crew.name}
                    />
                  </figure>
                );
              }
            })}
            <hr className="border-white/25" />
          </div>

          <div className="max-w-md grid gap-8 mx-auto">
            <nav className="flex items-center gap-4 mx-auto">
              {crews.map((_, index) => {
                return (
                  <div
                    key={index}
                    className={`w-2 h-2 rounded-full ${
                      index === activeTab ? 'bg-white/100' : 'bg-white/25'
                    }`}
                    onClick={() => setActiveTab(index)}
                  ></div>
                );
              })}
            </nav>

            <div>Content</div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CrewPage;
