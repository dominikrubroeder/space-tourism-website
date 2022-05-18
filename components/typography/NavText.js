const NavText = (props) => {
  return (
    <div
      className={`font-barlow-condensed tracking-[0.17rem] uppercase cursor-pointer transition-all ${props.className}`}
      onClick={props.onClick}
    >
      {props.children}
    </div>
  );
};

export default NavText;
