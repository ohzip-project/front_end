import React from 'react';

function TermsCheckbox({ label }) {
  return (
    <div>
      <input type="checkbox" id={label} />
      <label htmlFor={label}>{label}</label>
    </div>
  );
}

export default TermsCheckbox;
