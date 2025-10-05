import React from 'react';
import { useNavigate } from 'react-router-dom';

export const Login = () => {
  const navigate = useNavigate();

  const handleRegister = () => {
    navigate('/register');
  };

  return (
    <div>
      <p>Hello Login</p>
      <button onClick={handleRegister}>Login</button>
    </div>
  );
};
