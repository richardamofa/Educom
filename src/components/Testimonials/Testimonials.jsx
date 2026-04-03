import React, { useState } from 'react';
import './Testimonials.css';

const testimonials = [
    {
        name: 'Khriya Hummul',
        location: 'Madina, Accra',
        avatar: 'KH',
        color: '#f63bda',
        text: 'The platform has transformed how I approach learning. The interface is intuitive and the course materials are comprehensive. I\'ve seen significant improvement in my academic performance.',
    },
    {
        name: 'Andrea Opare',
        location: 'Tesano, Abeka',
        avatar: 'AO',
        color: '#F97316',
        text: 'Outstanding experience! The instructors are knowledgeable and responsive. The flexibility of studying at my own pace while maintaining quality education is exactly what I needed.',
    },
    {
        name: 'Jude Dela',
        location: 'Abeka, Accra',
        avatar: 'JD',
        color: '#22C55E',
        text: 'A game-changer in digital education. The interactive features and real-time feedback helped me grasp complex concepts easily. Highly recommended for anyone serious about learning.',
    },
    {
        name: 'Ben-Charles',
        location: 'Dansoman, DC',
        avatar: 'BC',
        color: '#2287c5',
        text: 'Exceptional platform with great community support. I\'ve made meaningful connections with peers and received invaluable mentorship. This has truly accelerated my learning journey.',
    },
    {
        name: 'Prince Appiahgyei',
        location: 'Ablekuma, Accra',
        avatar: 'PA',
        color: '#b8c522',
        text: 'Impressed by the quality of content and the modern teaching approach. The resources are well-organized and easily accessible. It\'s made continuing my education while working possible.',
    },
    {
        name: 'Kelly Baidoo',
        location: 'Alajo, Abeka',
        avatar: 'KB',
        color: '#c56922',
        text: 'Best investment I\'ve made in my education. The practical assignments and projects have directly enhanced my professional skills. I feel more confident pursuing my career goals now.',
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
