// src/pages/SignupPage.js
import React from 'react';
import SignupForm from '../components/Signup/SignupForm';
import SignupButton from '../components/Signup/SignupButton';

function SignupPage() {
  return (
    <div>
      <h1>Sign Up</h1>
      <SignupForm />
      <SignupButton />
    </div>
  );
}

export default SignupPage;
