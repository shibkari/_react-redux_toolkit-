import React from 'react';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { toggleTheme } from '../redux/slices/themeSlice';

const ThemeToggle = () => {
  const theme = useAppSelector((state) => state.theme.theme);
  const dispatch = useAppDispatch();

  return (
    <div className="theme-toggle">
      <button onClick={() => dispatch(toggleTheme())} className={`toggle-btn ${theme}`}>
        {theme === 'light' ? 'Темна тема' : 'Світла тема'}
      </button>
    </div>
  );
};

export default React.memo(ThemeToggle);

