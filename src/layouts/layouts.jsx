import { Outlet } from 'react-router-dom';
import { Navigation } from '@/components/Navigation/Navigation';

import styles from './layouts.module.css';

export const Layout = () => {
  return (
    <div className={styles.layouts}>
      <Navigation />
      <main>
        <Outlet />
      </main>
    </div>
  );
};
