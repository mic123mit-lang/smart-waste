'use client';

import { useEffect, useState } from 'react';

export default function ThemeToggle() {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');

  useEffect(() => {
    const storedTheme = window.localStorage.getItem('smart-waste-theme');
    const initial = storedTheme === 'light' ? 'light' : 'dark';
    setTheme(initial);
    document.body.dataset.theme = initial;
  }, []);

  function toggleTheme() {
    const nextTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(nextTheme);
    document.body.dataset.theme = nextTheme;
    window.localStorage.setItem('smart-waste-theme', nextTheme);
  }

  return (
    <button className="theme-toggle" onClick={toggleTheme} type="button" aria-label="Toggle theme">
      {theme === 'dark' ? '☀️ Light' : '🌙 Dark'}
    </button>
  );
}
