import { useState } from 'react';
import Breadcrumb from '../../components/layout/Breadcrumb';
import TopLevelPageSection from '../../components/layout/TopLevelPageSection';
import NavText from '../../components/typography/NavText';
import Subheading from '../../components/typography/Subheading';
import Subheading2 from '../../components/typography/Subheading2';

const technologies = [
  {
    name: 'Launch vehicle',
    images: {
      portrait: './assets/technology/image-launch-vehicle-portrait.jpg',
      landscape: './assets/technology/image-launch-vehicle-landscape.jpg',
    },
    description:
      "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
  },
  {
    name: 'Spaceport',
    images: {
      portrait: './assets/technology/image-spaceport-portrait.jpg',
      landscape: './assets/technology/image-spaceport-landscape.jpg',
    },
    description:
      'A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.',
  },
  {
    name: 'Space capsule',
    images: {
      portrait: './assets/technology/image-space-capsule-portrait.jpg',
      landscape: './assets/technology/image-space-capsule-landscape.jpg',
    },
    description:
      "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
  },
];

const TechnologyPage = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="min-h-screen text-white bg-technology-mobile bg-no-repeat bg-center bg-cover md:bg-technology-tablet xl:bg-technology-desktop">
      <TopLevelPageSection>
        <Breadcrumb title="Space Launch 101" count="03" />

        <div className="w-full grid gap-8 xl:grid-cols-2 xl:max-w-7xl xl:flex">
          {technologies.map((technology, index) => {
            if (index === activeTab) {
              return (
                <div
                  key={index}
                  className={`w-full h-[19.375rem] bg-center bg-cover bg-no-repeat bg-technology-launch-vehicle-landscape xl:bg-technology-launch-vehicle-portrait xl:w-80 xl:order-2`}
                ></div>
              );
            }
          })}

          <div className="max-w-md grid gap-8 mx-auto xl:ml-0 xl:flex xl:gap-4 xl:order-1">
            <nav className="flex items-center gap-4 mx-auto xl:flex-col">
              {technologies.map((_, index) => {
                return (
                  <li
                    key={index}
                    className={`w-10 h-10 rounded-full border border-white/50 list-none flex items-center justify-center md:w-[3.75rem] md:h-[3.75rem] md:text-2xl ${
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
              {technologies.map((technology, index) => {
                if (index === activeTab) {
                  return (
                    <div key={index} className="grid gap-4 md:gap-8">
                      <div className="grid gap-1 md:gap-4">
                        <h5 className="uppercase text-space-accent text-sm font-barlow-condensed tracking-[0.1475rem] md:text-[1rem]">
                          The terminology ...
                        </h5>
                        <h1 className="text-2xl md:text-[2.5rem]">
                          {technology.name}
                        </h1>
                      </div>
                      <p className="text-space-accent">
                        {technology.description}
                      </p>
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

export default TechnologyPage;
