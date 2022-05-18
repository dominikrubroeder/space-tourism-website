import { useState } from 'react';
import Subheading from '../../components/typography/Subheading';
import Subheading2 from '../../components/typography/Subheading2';

const DestinationPage = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="h-screen flex flex-col items-center justify-center text-white bg-destination-mobile bg-no-repeat bg-center bg-cover md:bg-destination-tablet xl:bg-destination-desktop">
      <section>
        <div>Pick your destination</div>
        <div className="w-full xl:grid xl:gap-4 xl:grid-cols-2 xl:max-w-7xl">
          <img src="/assets/destination/image-moon.webp" alt="Moon image" />

          <div className="max-w-md grid gap-4">
            <nav className="flex items-center gap-4">
              <li className="list-none">Moon</li>
              <li className="list-none">Mars</li>
              <li className="list-none">Europe</li>
              <li className="list-none">Titan</li>
            </nav>

            <div>
              <h2 className="leading-none">Moon</h2>
              <p>
                See our planet as you’ve never seen it before. A perfect
                relaxing trip away to help regain perspective and come back
                refreshed. While you’re there, take in some history by visiting
                the Luna 2 and Apollo 11 landing sites.
              </p>
            </div>

            <hr />

            <div className="grid grid-cols-2 gap-2">
              <div>
                <Subheading2>Avg. distance</Subheading2>
                <Subheading>384,400 km</Subheading>
              </div>
              <div>
                <Subheading2>Est. travel time</Subheading2>
                <Subheading>3 days</Subheading>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DestinationPage;
