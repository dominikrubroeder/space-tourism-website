import TheLogo from './TheLogo';
import TheNavigation from './TheNavigation';
import TheSidebar from './TheSidebar';

const TheHeader = () => {
  return (
    <header className="fixed top-4 md:top-10 flex items-center justify-between md:justify-start gap-8 px-4 md:pr-0 w-full">
      <TheLogo />
      <div className="hidden md:h-[1px] md:w-full md:bg-white"></div>
      <TheNavigation className="hidden md:flex md:gap-12 md:bg-white/5 md:backdrop-opacity-10 md:px-10" />
      <TheSidebar />
    </header>
  );
};

export default TheHeader;
