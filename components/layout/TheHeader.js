import TheLogo from './TheLogo';
import TheNavigation from './TheNavigation';
import TheSidebar from './TheSidebar';

const TheHeader = () => {
  return (
    <header className="fixed top-0 flex items-center justify-between w-full p-4 md:p-0 md:pl-8 md:top-0 xl:pl-10 xl:top-10 xl:justify-start">
      <TheLogo />
      <div className="hidden xl:translate-x-10 xl:h-[1px] xl:block xl:w-full xl:bg-white"></div>
      <TheNavigation className="hidden md:flex md:gap-12 md:bg-white/5 md:backdrop-blur md:px-16 lg:px-32" />
      <TheSidebar />
    </header>
  );
};

export default TheHeader;
