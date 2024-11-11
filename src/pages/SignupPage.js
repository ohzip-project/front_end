// src/pages/SignupPage.js
import React from 'react';
import Logo from '../components/common/Logo';
import SnsLoginButtons from '../components/Signup/SnsLoginButtons';
import EmailInput from '../components/Signup/EmailInput';
import EmailVerificationButton from '../components/Signup/EmailVerificationButton';
import PasswordInput from '../components/Signup/PasswordInput';
import PasswordConfirmInput from '../components/Signup/PasswordConfirmInput';
import NicknameInput from '../components/Signup/NicknameInput';
import TermsAgreement from '../components/Signup/TermsAgreement';
import SignupButton from '../components/Signup/SignupButton';

function SignupPage() {
  return (
    <div className="signup-page">
      <h1>회원가입</h1>
      <p>SNS 계정으로 간편하게 회원가입</p>
      <SnsLoginButtons />

      <div className="email-section">
        <EmailInput />
        <EmailVerificationButton />
      </div>

      <PasswordInput />
      <PasswordConfirmInput />
      <NicknameInput />
      
      <TermsAgreement />

      <SignupButton />

      <p>이미 아이디가 있으신가요? <a href="/login">로그인</a></p>
    </div>
  );
}

export default SignupPage;
