import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import styles from './register.module.css';

export const Register = () => {
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = e => {
    e.preventDefault();
    navigate('/');
  };

  return (
    <div className={styles.centerBlock}>
      <h1 className={styles.brandTitle}>FinTrack</h1>
      <div className={styles.registerBlock}>
        <form action="#" onSubmit={handleLogin}>
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={e => setName(e.target.value)}
            autoComplete="name"
          />
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
          <button type="submit">Sign Up</button>
        </form>
      </div>
    </div>
  );
};
