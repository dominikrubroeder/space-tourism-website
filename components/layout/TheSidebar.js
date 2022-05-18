import { useState } from 'react';
import TheNavigation from './TheNavigation';
import TheSidebarTrigger from './TheSidebarTrigger';

const TheSidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:hidden">
      <TheSidebarTrigger onClick={setIsOpen} />
      {isOpen && (
        <TheNavigation
          className="fixed h-screen right-0 top-0 bg-white/80 p-8 pt-32 z-40 md:hidden"
          onClickNavigationItem={() => setIsOpen(false)}
        />
      )}
    </div>
  );
};

export default TheSidebar;
