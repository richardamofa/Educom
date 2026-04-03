import React, { useState } from 'react';
import './Testimonials.css';

const testimonials = [
  {
    name: 'Alex Goncharov',
    location: 'Los Angeles, CA',
    avatar: 'AG',
    color: '#3B82F6',
    text: 'Easy secure access to digital should be the status in the education. Easy secure access to. One of the advantages of online learning at home is that the learning process.',
  },
  {
    name: 'Andrew Smith',
    location: 'Salt Lake, DC',
    avatar: 'AS',
    color: '#F97316',
    text: 'Easy secure access to digital should be the status in the education. Easy secure access to. One of the advantages of online learning at home is that the learning process.',
  },
  {
    name: 'Sarah Johnson',
    location: 'New York, NY',
    avatar: 'SJ',
    color: '#22C55E',
    text: 'Easy secure access to digital should be the status in the education. Easy secure access to. One of the advantages of online learning at home is that the learning process.',
  },
];

const Testimonials = () => {
  const [active, setActive] = useState(0);

  const prev = () => setActive((a) => (a === 0 ? testimonials.length - 1 : a - 1));
  const next = () => setActive((a) => (a === testimonials.length - 1 ? 0 : a + 1));

  const visible = [
    testimonials[active],
    testimonials[(active + 1) % testimonials.length],
  ];

  return (
    <section className="testimonials">
      <div className="container">
        <div className="testimonials__header">
          <h2 className="section-title testimonials__title">
            What our Client<br />are Saying
          </h2>
          <div className="testimonials__controls">
            <button className="testi-btn testi-btn--prev" onClick={prev} aria-label="Previous">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M13 4l-6 6 6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <button className="testi-btn testi-btn--next" onClick={next} aria-label="Next">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M7 4l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>

        <div className="testimonials__grid">
          {visible.map((t, i) => (
            <div className="testi-card" key={i}>
              <div className="testi-card__quote" style={{ color: '#FBBF24' }}>
                <svg width="40" height="32" viewBox="0 0 40 32" fill="currentColor">
                  <path d="M0 32V19.2C0 8.533 6.4 2.133 19.2 0L21.6 3.6C15.467 5.067 12.267 8.267 12 13.2H18.4V32H0ZM22.4 32V19.2C22.4 8.533 28.8 2.133 41.6 0L44 3.6C37.867 5.067 34.667 8.267 34.4 13.2H40.8V32H22.4Z"/>
                </svg>
              </div>
              <p className="testi-card__text">{t.text}</p>
              <div className="testi-card__author">
                <div
                  className="testi-card__avatar"
                  style={{ background: t.color }}
                >
                  {t.avatar}
                </div>
                <div>
                  <div className="testi-card__name">{t.name}</div>
                  <div className="testi-card__location">{t.location}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
