import React, { useState } from 'react';
import './Newsletter.css';
import { GiPartyPopper } from 'react-icons/gi';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
      setEmail('');
    }
  };

  return (
    <section className="newsletter">
      <div className="container newsletter__inner">
        <div className="newsletter__decor newsletter__decor--1"></div>
        <div className="newsletter__decor newsletter__decor--2"></div>
        <div className="newsletter__content">
          <h2 className="newsletter__title">Subscribe Us To Newsletter</h2>
          <p className="newsletter__desc">
            Get updated with our educational news. We Promise not to<br />
            spam-mail you. Subscribe now.
          </p>
          {/* check if submitted and display message */}
          {submitted ? (
            <div className="newsletter__success">
             <GiPartyPopper className='celebration-icon' /> Thank you! You've subscribed successfully.
            </div>
          ) : (
            <form className="newsletter__form" onSubmit={handleSubmit}>
              <input
                type="email"
                className="newsletter__input"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button type="submit" className="newsletter__submit">
                Submit
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
