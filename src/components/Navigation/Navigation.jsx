import React from 'react';
import { NavLink } from 'react-router-dom';
import { ROUTES } from '@/constants/router';

import styles from './navigation.module.css';

const navLinkClass = ({ isActive }) => (isActive ? styles.active : '');

export const Navigation = () => {
  return (
    <aside className={styles.nav}>
      <nav>
        <ul>
          {ROUTES.map(({ path, label }) => (
            <li key={path}>
              <NavLink to={path} className={navLinkClass}>
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};
