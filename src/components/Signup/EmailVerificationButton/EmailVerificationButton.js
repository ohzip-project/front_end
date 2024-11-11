// src/components/Signup/EmailVerificationButton/EmailVerificationButton.js
import React, { useState } from 'react';
import styles from './EmailVerificationButton.module.css';

function EmailVerificationButton() {
  const [isSent, setIsSent] = useState(false);

  const handleVerification = () => {
    // 여기에서 백엔드로 인증 요청을 보냅니다.
    setIsSent(true);
  };

  return (
    <div className={styles.container}>
      <button onClick={handleVerification} disabled={isSent} className={styles.button}>
        {isSent ? '이메일 인증 완료' : '이메일 인증하기'}
      </button>
      {isSent && <p className={styles.infoMessage}>이메일로 인증 코드가 전송되었습니다.</p>}
    </div>
  );
}

export default EmailVerificationButton;
