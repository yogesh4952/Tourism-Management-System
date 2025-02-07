import { useEffect, useState } from 'react';
import ThemeTogglerIcon from '../Icon/ThemeTogglerIcon';

export const ThemeToggle = () => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <button
      className={`border border-gray-300 rounded-full p-1 ${
        theme === 'light' ? 'bg-gray-300  ' : 'bg-gray-800 border-gray-700'
      }`}
      aria-label='Toggle Theme'
      onClick={() => setTheme(theme === 'light' ? 'dracula' : 'light')}
    >
      <ThemeTogglerIcon theme={theme} />
    </button>
  );
};

export default ThemeToggle;
