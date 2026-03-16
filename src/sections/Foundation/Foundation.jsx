import React from 'react';
import './Foundation.css';

const Foundation = () => {
  return (
    <section className="fin-container">
      <div className="fin-content">
        <header className="fin-header">
          <h1 className="fin-title">
            A <span className="fin-serif">strong</span> financial<br/>foundation
          </h1>
          <p className="fin-subtitle">
            High-yield accounts, high cashback cards for Pro <br />customers, and flexible working capital to fuel your business.
          </p>
        </header>

        <div className="fin-bento-grid">
          {/* Top Left: Checking */}
          <div className="fin-card fin-checking">
            <div className="fin-card-body">
              <h3>Checking and Treasury</h3>
              <p>Free domestic wires and ACH transfers for Pro users, up to 3.83% APY, and millions in FDIC insurance.</p>
            </div>
          </div>

          {/* Top Right: Working Capital */}
          <div className="fin-card fin-capital">
            <div className="fin-card-body">
              <h3>Working Capital</h3>
              <p>Apply for business financing, term loans, and lines of credit through our partners.</p>
            </div>
          </div>

          {/* Bottom: Corporate Cards (Wide) */}
          <div className="fin-card fin-wide-card">
            <div className="fin-card-body">
              <div className="fin-badge-group">
                <span className="fin-badge">Silver — $1M+</span>
                <span className="fin-badge">Gold — $10M+</span>
                <span className="fin-badge">Black — $100M+</span>
              </div>
              <h3>Corporate cards with world-class rewards</h3>
              <p>Unlimited cashback, unlimited virtual and physical cards, unparalleled spend controls.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Foundation;