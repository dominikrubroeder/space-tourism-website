import Link from 'next/link';
import FadeUpWhenInView from '../animation/FadeUpWhenInView';

export default function ExploreButton(props) {
  return (
    <FadeUpWhenInView>
      <Link href="/destination">
        <button
          className="flex items-center justify-center font-bellefair text-[1.25rem] mx-auto md:text-[2rem] rounded-full cursor-pointer relative text-space-dark bg-white w-[9.375rem] h-[9.375rem] after:w-[9.375rem] after:h-[9.375rem] md:w-[17.2rem] md:h-[17.2rem] md:shrink-0 md:after:w-[17.2rem] md:after:h-[17.2rem] after:rounded-full after:bg-white/10 after:absolute after:inset-0 hover:after:scale-150 after:transition-all transition-all"
          onClick={props.onClick}
        >
          {props.children}
        </button>
      </Link>
    </FadeUpWhenInView>
  );
}
