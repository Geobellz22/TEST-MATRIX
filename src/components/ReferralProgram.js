// src/components/ReferralProgram.js
import React from 'react';
import './ReferralProgram.css';

const ReferralProgram = () => {
  return (
    <div className="referral-program">
      <h2>Referral Program</h2>
      <p>Invite others and earn rewards based on referral levels:</p>
      <ul>
        <li>Level 1: 4%</li>
        <li>Level 2: 6%</li>
        <li>Level 3: 8%</li>
        <li>Level 4: 10%</li>
      </ul>
      <p>
        <strong>Referral Link:</strong>
      </p>
      <input type="text" value="http://example.com/referral-link" readOnly />
      <button onClick={() => navigator.clipboard.writeText("http://example.com/referral-link")}>
        Copy Link
      </button>
    </div>
  );
};

export default ReferralProgram;
