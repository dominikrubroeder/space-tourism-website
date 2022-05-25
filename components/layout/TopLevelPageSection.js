import FadeUpWhenInView from '../animation/FadeUpWhenInView';

const TopLevelPageSection = ({ children, className }) => {
  return (
    <FadeUpWhenInView htmlTag="section">
      <div
        className={`grid gap-8 p-8 pt-24 mx-auto md:pt-40 xl:max-w-5xl xl:w-full ${className}`}
      >
        {children}
      </div>
    </FadeUpWhenInView>
  );
};

export default TopLevelPageSection;
