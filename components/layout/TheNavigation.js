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

const TheNavigation = (props) => {
  return (
    <nav className={props.className}>
      {navigationItems.map((navigationItem, index) => {
        return (
          <li key={index} className="list-none text-white">
            <Link
              href={
                index === 0 ? '/' : `/${navigationItem.title.toLowerCase()}`
              }
            >
              <a className="flex items-center gap-4 md:py-10">
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
