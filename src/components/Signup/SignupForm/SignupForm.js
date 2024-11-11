// src/components/Signup/SignupForm/SignupForm.js
import React from 'react';
import EmailInput from '../EmailInput/EmailInput';
import EmailVerificationButton from '../EmailVerificationButton/EmailVerificationButton';
import EmailVerificationInput from '../EmailVerificationInput/EmailVerificationInput';
import NicknameInput from '../NicknameInput/NicknameInput';
import styles from './SignupForm.module.css';

function SignupForm() {
  return (
    <div className={styles.container}>
      <h2>회원가입</h2>
      <EmailInput />
      <EmailVerificationButton />
      <EmailVerificationInput />
      <NicknameInput />
    </div>
  );
}

export default SignupForm;
