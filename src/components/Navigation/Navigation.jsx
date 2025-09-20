import React from 'react';
import { Link, NavLink } from 'react-router-dom';

import styles from './Navigation.module.css';

export const Navigation = () => {
  return (
    <aside className={styles.nav}>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Dashboard</NavLink>
          </li>
          <li>
            <NavLink to="stats">Stats</NavLink>
          </li>
          <li>
            <NavLink to="categories">Categories</NavLink>
          </li>
          <li>
            <NavLink to="settings">Settings</NavLink>
          </li>
        </ul>
      </nav>
    </aside>
  );
};
