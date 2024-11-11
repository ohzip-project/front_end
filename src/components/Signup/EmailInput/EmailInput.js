// src/components/Signup/EmailInput/EmailInput.js
import React, { useState } from 'react';
import './EmailInput.module.css';

function EmailInput() {
  const [emailId, setEmailId] = useState('');
  const [emailDomain, setEmailDomain] = useState('');
  const [isCustomDomain, setIsCustomDomain] = useState(false);
  const [error, setError] = useState('');
  const [domainError, setDomainError] = useState('');

  const domains = [
    'naver.com',
    'hanmail.net',
    'daum.net',
    'gmail.com',
    'nate.com',
    'hotmail.com',
    'outlook.com',
    'icloud.com',
    '직접입력'
  ];

  const handleEmailIdChange = (event) => {
    const value = event.target.value;
    const isValid = /^[a-z0-9._-]+$/.test(value);

    if (isValid || value === '') {
      setEmailId(value);
      setError('');
    } else {
      setError('이메일 아이디는 영문 소문자, 숫자, ., -, _ 만 사용할 수 있습니다.');
    }
  };

  const handleDomainChange = (event) => {
    const value = event.target.value;
    if (value === '직접입력') {
      setIsCustomDomain(true);
      setEmailDomain('');
      setDomainError('');
    } else {
      setIsCustomDomain(false);
      setEmailDomain(value);
    }
  };

  const handleCustomDomainChange = (event) => {
    const value = event.target.value;
    const isValid = /^[a-z.]+$/.test(value);  // 영문 소문자와 .만 허용

    if (isValid || value === '') {
      setEmailDomain(value);
      setDomainError('');
    } else {
      setDomainError('도메인은 영문 소문자와 "."만 사용할 수 있습니다.');
    }
  };

  return (
    <div className="email-input-container">
      <div className="email-input-row">
        <input
          type="text"
          placeholder="이메일"
          value={emailId}
          onChange={handleEmailIdChange}
          className="email-id-input"
        />
        <span className="email-at">@</span>
        {!isCustomDomain ? (
          <select
            className="email-domain-select"
            value={emailDomain}
            onChange={handleDomainChange}
          >
            <option value="">선택해주세요</option>
            {domains.map((domain, index) => (
              <option key={index} value={domain}>
                {domain}
              </option>
            ))}
          </select>
        ) : (
          <input
            type="text"
            placeholder="도메인 입력"
            value={emailDomain}
            onChange={handleCustomDomainChange}
            className="custom-domain-input"
          />
        )}
      </div>
      {error && <div className="error-message">{error}</div>}
      {domainError && <div className="error-message">{domainError}</div>}
    </div>
  );
}

export default EmailInput;
