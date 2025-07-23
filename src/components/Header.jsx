import React from 'react';
import { Link } from 'react-router-dom';

import { FaSun, FaMoon } from 'react-icons/fa';

function Header({ theme, toggleTheme }) {
  return (
    <header className={`app-header ${theme}`}>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
      <div className="theme-switch-wrapper">
        <label className="theme-switch" htmlFor="checkbox">
          <input type="checkbox" id="checkbox" onChange={toggleTheme} checked={theme === 'dark'} />
          <div className="slider round">
            <span className="icon sun-icon"><FaSun /></span>
            <span className="icon moon-icon"><FaMoon /></span>
          </div>
        </label>
      </div>
    </header>
  );
}

export default Header;