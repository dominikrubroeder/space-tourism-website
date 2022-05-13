import TheLogo from './TheLogo';
import TheNavigation from './TheNavigation';

const TheHeader = () => {
  return (
    <header className="fixed top-10 flex items-center gap-8 pl-10 w-full">
      <TheLogo />
      <div className="h-[1px] w-full bg-white"></div>
      <TheNavigation />
    </header>
  );
};

export default TheHeader;
