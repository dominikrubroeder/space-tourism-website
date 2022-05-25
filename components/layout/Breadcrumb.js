import FadeUpWhenInView from '../animation/FadeUpWhenInView';

const Breadcrumb = ({ title, count }) => {
  return (
    <div className="relative flex justify-center font-barlow-condensed uppercase text-[1rem] gap-2 top-20 mb-8 md:fixed md:top-40 md:left-8 md:gap-6 md:max-w-6xl md:w-full md:mx-auto md:text-[1.25rem] xl:left-32 xl:text-[1.75rem] tracking-[0.1rem] md:tracking-[0.2rem] xl:tracking-[0.25rem] md:justify-start">
      <span className="opacity-25">{count}</span>
      <span>{title}</span>
    </div>
  );
};

export default Breadcrumb;
