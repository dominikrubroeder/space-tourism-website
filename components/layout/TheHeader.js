import TheLogo from './TheLogo';
import TheNavigation from './TheNavigation';
import TheSidebarTrigger from './TheSidebarTrigger';

const TheHeader = () => {
  return (
    <header className="fixed top-4 md:top-10 flex items-center justify-between md:justify-start gap-8 px-4 md:pr-0 w-full">
      <TheLogo />
      <div className="hidden md:h-[1px] md:w-full md:bg-white"></div>
      <TheNavigation />
      <TheSidebarTrigger />
    </header>
  );
};

export default TheHeader;
