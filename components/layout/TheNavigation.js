import { useRouter } from 'next/router';
import Link from 'next/link';
import NavText from '../typography/NavText';

const navigationItems = [
  {
    title: 'Home',
    url: '/',
  },
  {
    title: 'Destination',
    url: '/destination',
  },
  {
    title: 'Crew',
    url: '/crew',
  },
  {
    title: 'Technology',
    url: '/technology',
  },
];

const TheNavigation = (props) => {
  const router = useRouter();

  return (
    <nav className={props.className}>
      {navigationItems.map((navigationItem, index) => {
        return (
          <li
            key={index}
            className={`list-none text-white transition-all md:border-b-2 ${
              router.pathname === navigationItem.url
                ? 'md:border-white'
                : 'md:border-transparent'
            }`}
          >
            <Link href={navigationItem.url}>
              <a className="flex items-center gap-4 md:py-10 transition-all">
                <span className="md:hidden xl:inline-block">0{index}</span>
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
