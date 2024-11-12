import React from "react";
import TermsCheckbox from "../TermsCheckbox/TermsCheckbox";
import styles from "./TermsAgreement.module.css";

function TermsAgreement() {
  return (
    <div>
      <label htmlFor="TermsAgreement" className={styles.h3}>
        약관동의
      </label>
      <div className={styles.termsAgreementBox}>
        <TermsCheckbox
          label={
            <>
              전체동의
              <span className={styles.grayText}>
                {" "}
                선택항목에 대한 동의 포함
              </span>
            </>
          }
        />
        <hr className={styles.divider} />
        <TermsCheckbox
          label={
            <>
              만 14세 이상입니다 <span className={styles.blueText}>(필수)</span>
            </>
          }
        />
        <TermsCheckbox
          label={
            <>
              이용약관 <span className={styles.blueText}>(필수)</span>
            </>
          }
        />
        <TermsCheckbox
          label={
            <>
              개인정보수집 및 이용동의{" "}
              <span className={styles.blueText}>(필수)</span>
            </>
          }
        />
        <TermsCheckbox
          label={
            <>
              개인정보 마케팅 활용 동의{" "}
              <span className={styles.grayText}>(선택)</span>
            </>
          }
        />
        <TermsCheckbox
          label={
            <>
              이벤트, 쿠폰, 특가 알림 메일 및 SMS 등 수신{" "}
              <span className={styles.grayText}>(선택)</span>
            </>
          }
        />
      </div>
    </div>
  );
}

export default TermsAgreement;
