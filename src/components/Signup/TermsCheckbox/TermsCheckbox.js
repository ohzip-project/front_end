import React from "react";
import styles from "./TermsCheckbox.module.css";

function TermsCheckbox({ label }) {
  return (
    <div className={styles.checkboxContainer}>
      <input type="checkbox" id={label} className={styles.checkboxInput} />
      <label htmlFor={label} className={styles.checkboxLabel}>
        <span className={styles.customCheckbox}></span> {/* 커스텀 체크박스 */}
        {label}
      </label>
    </div>
  );
}

export default TermsCheckbox;
