const Subheading2 = (props) => {
  return (
    <div
      className={`font-barlow-condensed text-sm tracking-[0.15rem] uppercase ${props.className}`}
    >
      {props.children}
    </div>
  );
};

export default Subheading2;
