const Subheading2 = (props) => {
  return (
    <div
      className={`font-barlow-condensed text-sm tracking-[0.15rem] uppercase mb-2 ${props.className}`}
    >
      {props.children}
    </div>
  );
};

export default Subheading2;
