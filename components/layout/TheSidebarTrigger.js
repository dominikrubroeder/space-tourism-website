const TheSidebarTrigger = (props) => {
  return (
    <button
      className="relative grid gap-1 z-50 md:hidden"
      onClick={() => props.onClick((previousState) => !previousState)}
    >
      <span className="w-6 h-1 block bg-white"></span>
      <span className="w-6 h-1 block bg-white"></span>
      <span className="w-6 h-1 block bg-white"></span>
    </button>
  );
};

export default TheSidebarTrigger;
