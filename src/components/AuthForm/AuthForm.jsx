import React, { useState } from 'react';

import styles from './authform.module.css';

export const AuthForm = ({ type, onSubmit }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className={styles.centerBlock}>
      <h1 className={styles.brandTitle}>FinTrack</h1>
      <div className={styles.registerBlock}>
        <form action="#" onSubmit={onSubmit}>
          {type === 'login' ? null : (
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={e => setName(e.target.value)}
              autoComplete="name"
            />
          )}
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            autoComplete="email"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            autoComplete="current-password"
          />
          <button type="submit">
            {type === 'register' ? 'Sign Up' : 'Log In'}
          </button>
        </form>
      </div>
    </div>
  );
};
