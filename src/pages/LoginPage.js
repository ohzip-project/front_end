// src/pages/LoginPage.js
import React from 'react';
import LoginForm from '../components/Login/LoginForm';
import LoginButton from '../components/Login/LoginButton';

function LoginPage() {
  return (
    <div>
      <h1>Log In</h1>
      <LoginForm />
      <LoginButton />
    </div>
  );
}

export default LoginPage;
