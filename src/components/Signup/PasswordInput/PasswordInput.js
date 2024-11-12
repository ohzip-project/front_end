import React, { useState } from "react"; //react library
import styles from "./PasswordInput.module.css";

function PasswordInput() {
  const [password, setPassword] = useState(""); //비밀번호 상태
  const [error, setError] = useState(""); //오류 메세지 상태

  // 비밀번호 입력 시 유효성 검사
  const handlePasswordChange = (e) => {
    const input = e.target.value;
    setPassword(input);

    // 비밀번호가 입력되지 않았을 때
    if (input === "") {
      setError("필수 입력 항목입니다.");
    }
    // 비밀번호가 8자리 미만이거나, 특정 형식에 맞지 않을 때
    else if (!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(input)) {
      setError("비밀번호는 영문, 숫자를 포함하여 8자 이상이어야 합니다.");
    }
    //비밀번호가 유효할 때
    else {
      setError("");
    }
  };

  return (
    <div className={styles.box}>
      <label htmlFor="password" className={styles.h3}>
        비밀번호
      </label>
      <p className={styles["info-text"]}>
        영문, 숫자를 포함한 8자 이상의 비밀번호를 입력해주세요.
      </p>

      <input
        type="password"
        id="password"
        placeholder="비밀번호"
        maxLength="16"
        className={styles.int}
        value={password}
        onChange={handlePasswordChange} //비밀번호 입력 시 유효성 검사 함수 호출
      />
      {error && <span className={styles["error-message"]}>{error}</span>}
    </div>
  );
}

export default PasswordInput;
//이 컴포넌트를 다른 파일에서 사용할 수 있도록 PasswordInput을 내보냄
//다른 파일에서 import PasswordInput from './PasswordInput.js'로 컴포넌트 불러오기 가능
