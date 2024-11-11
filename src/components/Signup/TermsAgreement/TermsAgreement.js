import React from 'react';
import TermsCheckbox from './TermsCheckbox';

function TermsAgreement() {
  return (
    <div className="terms-agreement">
      <TermsCheckbox label="전체동의" />
      <TermsCheckbox label="만 14세 이상입니다" />
      <TermsCheckbox label="이용약관 동의" />
      <TermsCheckbox label="개인정보 수집 및 이용동의" />
      <TermsCheckbox label="마케팅 메일 수신 동의" />
    </div>
  );
}

export default TermsAgreement;
