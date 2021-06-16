import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import classes from './nav-bar.module.css';

type PropType = {};

export function NavBar(props: PropType) {
  const router = useRouter();

  const [showMobileNav, setShowMobileNav] = React.useState(false);

  const getActiveClass = (path: string): string | undefined => {
    if (path === router.pathname) return classes.active_route;
    return undefined;
  };

  const hideNav = () => setShowMobileNav(false);

  return (
    <div className={classes.container}>
      <nav className={classes.nav}>
        <strong className={classes.logo}>OppCal.</strong>

        <div>
          <button
            type="button"
            onClick={() => setShowMobileNav(!showMobileNav)}
            className={classes.nav_handler_mobile}
          >
            🍔
          </button>
        </div>

        <ul className={(showMobileNav && classes.show) || undefined}>
          <li className={getActiveClass('/')} onClick={hideNav}>
            <Link href="/">Opportunities</Link>
          </li>

          <li className={getActiveClass('/submit')} onClick={hideNav}>
            <Link href="/submit">Post an Opportunity</Link>
          </li>

          <li className={getActiveClass('/calendar')} onClick={hideNav}>
            <Link href="/calendar">Calender</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
