import { useState } from 'react';
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
    <div className="min-h-screen flex flex-col items-center justify-center text-white bg-destination-mobile bg-no-repeat bg-center bg-cover md:bg-destination-tablet xl:bg-destination-desktop">
      <section className="p-8">
        <div>Pick your destination</div>

        <div className="w-full xl:grid xl:gap-4 xl:grid-cols-2 xl:max-w-7xl">
          {destinations.map((destination, index) => {
            if (index === activeTab) {
              return (
                <img
                  key={index}
                  src={destination.images.webp}
                  alt={destination.name}
                />
              );
            }
          })}

          <div className="max-w-md grid gap-4">
            <nav className="flex items-center gap-4">
              {destinations.map((destination, index) => {
                return (
                  <NavText
                    key={index}
                    className={`list-none py-2 border-b-2 border-transparent ${
                      index === activeTab ? 'border-white' : ''
                    }`}
                    onClick={() => setActiveTab(index)}
                  >
                    {destination.name}
                  </NavText>
                );
              })}
            </nav>

            <div>
              {destinations.map((destination, index) => {
                if (index === activeTab) {
                  return <h2 key={index}>{destination.name}</h2>;
                }
              })}

              {destinations.map((destination, index) => {
                if (index === activeTab) {
                  return <p key={index}>{destination.description}</p>;
                }
              })}
            </div>

            <hr />

            <div className="grid grid-cols-2 gap-2">
              <div>
                <Subheading2>Avg. distance</Subheading2>

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
              <div>
                <Subheading2>Est. travel time</Subheading2>

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
      </section>
    </div>
  );
};

export default DestinationPage;
