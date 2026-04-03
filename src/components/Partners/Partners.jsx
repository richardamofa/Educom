import React from 'react';
import './Partners.css';

const partners = [
  { name: 'Udemy', logo: 'U' },
  { name: 'Coursera', logo: 'C' },
  { name: 'facebook', logo: 'f' },
  { name: 'Google', logo: 'G' },
];

const Partners = () => {
  return (
    <section className="partners">
      <div className="container partners__inner">
        {partners.map((p, i) => (
          <div className="partners__item" key={i}>
            <span className="partners__logo-icon">{p.logo}</span>
            <span className="partners__name">{p.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Partners;
