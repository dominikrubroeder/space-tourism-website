import { useState } from 'react';
import TheNavigation from './TheNavigation';
import TheSidebarTrigger from './TheSidebarTrigger';

const TheSidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:hidden">
      <TheSidebarTrigger onClick={setIsOpen} />
      <TheNavigation
        className={`fixed h-screen right-0 top-0 bg-white/5 backdrop-blur p-8 pt-32 z-40 transition-all ease-out duration-1000 md:hidden ${
          isOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full'
        }`}
        onClick={() => setIsOpen(false)}
      />
    </div>
  );
};

export default TheSidebar;
