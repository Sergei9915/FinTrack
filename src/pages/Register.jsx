import React from 'react';
import { useNavigate } from 'react-router-dom';

export const Register = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/login');
  };

  return (
    <div>
      <p>Hello Register</p>
      <button onClick={handleLogin}>Register</button>
    </div>
  );
};
