import React, { useState } from "react";
import styles from "./PasswordConfirmInput.module.css";

function PasswordConfirmInput({ password }) {
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleConfirmPasswordChange = (e) => {
    const input = e.target.value;
    setConfirmPassword(input);

    // 비밀번호가 입력되지 않았을 때
    if (input === "") {
      setError("확인을 위해 비밀번호를 한 번 더 입력해주세요.");
    }
    // 비밀번호 확인 입력이 원래 비밀번호와 일치하는지 확인
    else if (input !== password) {
      setError("비밀번호가 일치하지 않습니다.");
    }
    //비밀번호가 유효할 때
    else {
      setError("");
    }
  };

  return (
    <div className={styles.box}>
      <label
        htmlFor="confirm-password"
        className={`${styles.h3} ${error ? styles["error-label"] : ""}`}
      >
        비밀번호 확인
      </label>
      <input
        type="password"
        id="confirm-password"
        placeholder="비밀번호 확인"
        maxLength="16"
        className={styles.int}
        value={confirmPassword}
        onChange={handleConfirmPasswordChange}
      />
      {error && <span className={styles["error-message"]}>{error}</span>}
    </div>
  );
}

export default PasswordConfirmInput;
