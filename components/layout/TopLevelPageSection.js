import FadeUpWhenInView from '../animation/FadeUpWhenInView';

const TopLevelPageSection = ({ children, className }) => {
  return (
    <FadeUpWhenInView htmlTag="section">
      <div
        className={`grid gap-8 p-8 pt-24 mx-auto min-h-screen md:pt-56 xl:flex xl:flex-col xl:justify-center xl:max-w-6xl xl:w-full ${className}`}
      >
        {children}
      </div>
    </FadeUpWhenInView>
  );
};

export default TopLevelPageSection;
