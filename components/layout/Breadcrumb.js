const Breadcrumb = ({ title, count }) => {
  return (
    <div className="flex gap-2 justify-center font-barlow-condensed uppercase md:justify-start">
      <span className="opacity-25">{count}</span>
      <span>{title}</span>
    </div>
  );
};

export default Breadcrumb;
