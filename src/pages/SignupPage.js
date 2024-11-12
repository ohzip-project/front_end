// src/pages/SignupPage.js
import React from "react";
import EmailInput from "../components/Signup/EmailInput/EmailInput.js";
import EmailVerificationButtons from "../components/Signup/EmailVerificationButtons/EmailVerificationButtons.js";
import PasswordInput from "../components/Signup/PasswordInput/PasswordInput.js";
import PasswordConfirmInput from "../components/Signup/PasswordConfirmInput/PasswordConfirmInput.js";
import NicknameInput from "../components/Signup/NicknameInput/NicknameInput.js";
import TermsAgreement from "../components/Signup/TermsAgreement/TermsAgreement.js";
import TermsCheckbox from "../components/Signup/TermsCheckbox/TermsCheckbox.js";
import SignupButton from "../components/Signup/SignupButton/SignupButton.js";
import SocialLoginButtons from "../components/Signup/SocialLoginButtons/SocialLoginButtons.js";
// import SignupForm from "../components/Signup/SignupForm/SignupForm.js";

function SignupPage() {
  return (
    <div className="SignUp-page">
      <h1>회원가입</h1>
      <p>SNS 계정으로 간편하게 회원가입</p>
      <SocialLoginButtons />

      <div className="Email-section">
        <EmailInput />
        <EmailVerificationButtons />
      </div>

      <div className="Password-section">
        <PasswordInput />
        <PasswordConfirmInput />
      </div>

      <NicknameInput />

      <div className="TermsAgreement-section">
        <TermsAgreement />
        <TermsCheckbox />
      </div>

      <SignupButton />

      <p>
        이미 아이디가 있으신가요? <a href="/login">로그인</a>
      </p>
    </div>
  );
}

export default SignupPage;
