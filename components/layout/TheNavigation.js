import Link from 'next/link';
import NavText from '../typography/NavText';

const navigationItems = [
  {
    title: 'Home',
  },
  {
    title: 'Destination',
  },
  {
    title: 'Crew',
  },
  {
    title: 'Technology',
  },
];

const TheNavigation = () => {
  return (
    <nav className="flex gap-12 bg-white/5 backdrop-opacity-[5rem] px-10">
      {navigationItems.map((navigationItem, index) => {
        return (
          <li key={index} className="list-none">
            <Link
              href={
                index === 0 ? '/' : `/${navigationItem.title.toLowerCase()}`
              }
            >
              <a className="flex items-center gap-4 py-10">
                <span>0{index}</span>
                <NavText>{navigationItem.title.toUpperCase()}</NavText>
              </a>
            </Link>
          </li>
        );
      })}
    </nav>
  );
};

export default TheNavigation;
