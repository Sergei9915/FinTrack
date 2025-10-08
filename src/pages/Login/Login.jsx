import React from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthForm } from '@/components/AuthForm/AuthForm';

export const Login = () => {
  const navigate = useNavigate();

  const handleLogin = e => {
    e.preventDefault();
    navigate('/register');
  };

  return <AuthForm type="login" onSubmit={handleLogin} />;
};
