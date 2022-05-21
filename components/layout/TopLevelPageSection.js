const TopLevelPageSection = ({ children, className }) => {
  return (
    <section
      className={`grid gap-8 p-8 pt-24 mx-auto md:pt-40 xl:max-w-5xl xl:w-full ${className}`}
    >
      {children}
    </section>
  );
};

export default TopLevelPageSection;
