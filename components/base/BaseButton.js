export default function BaseButton(props) {
  const variant = props.variant;
  const outterClasses = props.className;

  return (
    <button
      className={`flex items-center justify-center font-bellefair text-[2rem] rounded-full cursor-pointer transition-all ${
        variant === 'explore'
          ? `w-[17.2rem] h-[17.2rem] text-space-dark bg-white ${outterClasses}`
          : ''
      }`}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
}
