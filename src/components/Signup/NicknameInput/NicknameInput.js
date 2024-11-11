// src/components/Signup/NicknameInput/NicknameInput.js
import React, { useState } from 'react';
import styles from './NicknameInput.module.css';

function NicknameInput() {
  const [nickname, setNickname] = useState('');
  const [isValid, setIsValid] = useState(true);

  const handleChange = (e) => {
    const value = e.target.value;
    setNickname(value);
    // 닉네임 길이 검사
    setIsValid(value.length >= 2 && value.length <= 20);
  };

  return (
    <div className={styles.container}>
      <label htmlFor="nickname">닉네임</label>
      <input
        type="text"
        id="nickname"
        value={nickname}
        onChange={handleChange}
        placeholder="별명 (2-20자)"
        className={isValid ? styles.input : styles.inputError}
      />
      {!isValid && <p className={styles.errorMessage}>2-20자 사이로 입력해주세요.</p>}
    </div>
  );
}

export default NicknameInput;
