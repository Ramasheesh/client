// CTAButtons.js
import React from 'react';
import '../styles/CTAButtons.css';

const CTAButtons = () => {
  return (
    <section className="cta-buttons">
      <button onClick={() => window.location.href = '/add-income'}>View Income</button>
      <button onClick={() => window.location.href = '/track-expenses'}>Track Expenses</button>
      <button onClick={() => window.location.href = '/dashboard'}>View Dashboard</button>
    </section>
  );
};

export default CTAButtons;
