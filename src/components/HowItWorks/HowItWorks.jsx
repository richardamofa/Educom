import React from 'react';
import './HowItWorks.css';
import { FaBook, FaSearch, FaCalendarAlt, FaTrophy } from 'react-icons/fa';

const steps = [
  {
    icon: <FaBook />,
    bg: 'var(--bg-blue-card)',
    iconColor: 'blue',
    iconBg: '#BFDBFE',
    title: 'Set Your Plan',
    desc: 'We always stay organized for what we want to teach people. It always good.',
  },
  {
    icon: <FaSearch />,
    bg: 'var(--bg-yellow-card)',
    iconColor: 'orange',
    iconBg: '#FDE68A',
    title: 'Find Your Course',
    desc: 'We always stay organized for what we want to teach people. It always good.',
  },
  {
    icon: <FaCalendarAlt />,
    bg: 'var(--bg-green-card)',
    iconColor: 'green',
    iconBg: '#BBF7D0',
    title: 'Book Your Seat',
    desc: 'We always stay organized for what we want to teach people. It always good.',
  },
  {
    icon: <FaTrophy />,
    bg: 'var(--bg-pink-card)',
    iconColor: 'red',
    iconBg: '#FECDD3',
    title: 'Get Certificate',
    desc: 'We always stay organized for what we want to teach people. It always good.',
  },
];

const HowItWorks = () => {
  return (
    <section className="how-it-works">
      <div className="container">
        <h2 className="section-title how-it-works__title">How is work</h2>
        <div className="how-it-works__grid">
          {steps.map((step, i) => (
            <div className="how-card" key={i} style={{ '--card-bg': step.bg }}>
              <div className="how-card__icon-wrap" style={{ background: step.iconBg }}>
                <span className="how-card__icon" style={{ color: step.iconColor }}>{step.icon}</span>
              </div>
              <h3 className="how-card__title">{step.title}</h3>
              <p className="how-card__desc">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
