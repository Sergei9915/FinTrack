import React from 'react';
import { NavLink } from 'react-router-dom';

import styles from './navigation.module.css';

const navLinkClass = ({ isActive }) => (isActive ? styles.active : '');

export const Navigation = () => {
  return (
    <aside className={styles.nav}>
      <nav>
        <ul>
          <li>
            <NavLink to="/" className={navLinkClass}>
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink to="stats" className={navLinkClass}>
              Stats
            </NavLink>
          </li>
          <li>
            <NavLink to="categories" className={navLinkClass}>
              Categories
            </NavLink>
          </li>
          <li>
            <NavLink to="settings" className={navLinkClass}>
              Settings
            </NavLink>
          </li>
        </ul>
      </nav>
    </aside>
  );
};
