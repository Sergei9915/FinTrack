import React from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthForm } from '@/components/AuthForm/AuthForm';

export const Register = () => {
  const navigate = useNavigate();

  const handleRegister = e => {
    e.preventDefault();
    navigate('/login');
  };

  return <AuthForm type="register" onSubmit={handleRegister} />;
};
