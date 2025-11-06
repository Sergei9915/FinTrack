import React from 'react';
import { FormFields } from '../FormFields/FormFields';

import styles from './AuthForm.module.css';

export const AuthForm = ({ type, onSubmit }) => {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>FinTrack</h1>
      <form action="#" onSubmit={onSubmit} className={styles.authForm}>
        <FormFields type={type} />
        <button type="submit">
          {type === 'register' ? 'Sign Up' : 'Log In'}
        </button>
      </form>
    </div>
  );
};
