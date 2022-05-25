import { useRouter } from 'next/router';
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

  const onClickHandler = (url) => {
    if (props.onClick) props.onClick();
    router.push(url);
  };

  return (
    <nav className={props.className}>
      {navigationItems.map((navigationItem, index, array) => {
        return (
          <li
            key={index}
            className={`list-none text-white flex items-center gap-4 transition-all md:py-10 md:border-b-2 ${
              router.pathname === navigationItem.url
                ? 'md:border-white'
                : 'md:border-transparent'
            }
            ${index === array.length ? '' : 'mb-4 md:mb-0'}`}
            onClick={() => onClickHandler(navigationItem.url)}
          >
            <span className="font-barlow-condensed font-bold md:hidden xl:inline-block">
              0{index}
            </span>
            <NavText>{navigationItem.title.toUpperCase()}</NavText>
          </li>
        );
      })}
    </nav>
  );
};

export default TheNavigation;
