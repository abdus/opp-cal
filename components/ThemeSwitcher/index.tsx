import React from 'react';
import classes from './theme-switcher.module.css';

export function ThemeSwitcher() {
  const [theme, setTheme] = React.useState('dark');

  React.useEffect(() => {
    const SITE_THEME = window.localStorage.getItem('site_theme');

    if (SITE_THEME) {
      setTheme(SITE_THEME);
    } else {
      setTheme('dark');
      window.localStorage.setItem('site_theme', 'dark');
    }
  }, []);

  React.useEffect(() => {
    const root = document.querySelector('html');
    root?.setAttribute('data-theme', theme);
    window.localStorage.setItem('site_theme', theme);
  }, [theme]);

  return (
    <div className={classes.wrapper}>
      <input
        type="checkbox"
        name="aa"
        checked={theme === 'dark'}
        onChange={(ev) => setTheme(ev.target.checked ? 'dark' : 'light')}
      />
      <span>{theme === 'dark' ? '🌞' : '🕯️'}</span>
    </div>
  );
}
