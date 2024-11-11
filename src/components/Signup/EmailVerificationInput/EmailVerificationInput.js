// src/components/Signup/EmailVerificationInput/EmailVerificationInput.js
import React, { useState } from 'react';
import styles from './EmailVerificationInput.module.css';

function EmailVerificationInput() {
  const [code, setCode] = useState('');
  const [isVerified, setIsVerified] = useState(false);

  const handleChange = (e) => {
    setCode(e.target.value);
  };

  const verifyCode = () => {
    // 여기에서 백엔드에 인증 코드를 검증하는 로직을 추가합니다.
    setIsVerified(true); // 예시로 인증 성공 상태로 설정
  };

  return (
    <div className={styles.container}>
      <label htmlFor="verificationCode">인증 코드</label>
      <input
        type="text"
        id="verificationCode"
        value={code}
        onChange={handleChange}
        placeholder="인증 코드 6자리"
        className={styles.input}
      />
      <button onClick={verifyCode} className={styles.verifyButton}>확인</button>
      {isVerified && <p className={styles.successMessage}>인증이 완료되었습니다.</p>}
    </div>
  );
}

export default EmailVerificationInput;
