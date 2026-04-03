import React from 'react';
import './AccessSection.css';

const features = [
  { icon: '🌐', label: 'World-class', color: '#3B82F6' },
  { icon: '⚡', label: 'Flexible', color: '#F97316' },
  { icon: '💰', label: 'Affordable', color: '#22C55E' },
  { icon: '💼', label: 'Job-relevant', color: '#8B5CF6' },
];

const AccessSection = () => {
  return (
    <section className="access">
      <div className="access__wave-top"></div>
      <div className="container access__inner">
        {/* Left illustration */}
        <div className="access__visual">
          <div className="access__circle"></div>
          <svg className="access__figure" viewBox="0 0 280 320" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Person sitting cross-legged reading tablet */}
            {/* Body */}
            <ellipse cx="140" cy="220" rx="55" ry="40" fill="#FBBF24"/>
            {/* Legs crossed */}
            <ellipse cx="108" cy="260" rx="35" ry="16" fill="#FBBF24" transform="rotate(-15 108 260)"/>
            <ellipse cx="172" cy="260" rx="35" ry="16" fill="#FBBF24" transform="rotate(15 172 260)"/>
            {/* Shoes */}
            <ellipse cx="175" cy="268" rx="20" ry="10" fill="#EF4444"/>
            <ellipse cx="105" cy="268" rx="20" ry="10" fill="#EF4444"/>
            {/* Socks */}
            <rect x="156" y="258" width="20" height="12" rx="4" fill="#fff"/>
            <rect x="104" y="258" width="20" height="12" rx="4" fill="#fff"/>
            {/* Head */}
            <circle cx="140" cy="130" r="38" fill="#FDDCAB"/>
            {/* Hair */}
            <path d="M103 120 Q108 82 140 78 Q172 82 177 120 Q170 98 140 95 Q110 98 103 120Z" fill="#1E293B"/>
            {/* Eyes */}
            <circle cx="128" cy="126" r="3.5" fill="#1E293B"/>
            <circle cx="152" cy="126" r="3.5" fill="#1E293B"/>
            {/* Smile */}
            <path d="M130 142 Q140 150 150 142" stroke="#1E293B" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
            {/* Tablet */}
            <rect x="100" y="175" width="80" height="58" rx="8" fill="#1E293B"/>
            <rect x="104" y="179" width="72" height="50" rx="6" fill="#3B82F6"/>
            <rect x="106" y="181" width="68" height="46" rx="5" fill="#EFF6FF"/>
            {/* Tablet content */}
            <rect x="112" y="187" width="40" height="5" rx="2.5" fill="#BFDBFE"/>
            <rect x="112" y="196" width="56" height="3" rx="1.5" fill="#DBEAFE"/>
            <rect x="112" y="203" width="48" height="3" rx="1.5" fill="#DBEAFE"/>
            <rect x="112" y="210" width="36" height="3" rx="1.5" fill="#DBEAFE"/>
            {/* Arms holding tablet */}
            <path d="M88 190 Q95 200 100 205" stroke="#FDDCAB" strokeWidth="18" strokeLinecap="round"/>
            <path d="M192 190 Q185 200 180 205" stroke="#FDDCAB" strokeWidth="18" strokeLinecap="round"/>
          </svg>

          <div className="access__float-badge">
            <span>🎓</span>
            <div>
              <div className="float-title">50k+ Courses</div>
              <div className="float-sub">Updated daily</div>
            </div>
          </div>
        </div>

        {/* Right content */}
        <div className="access__content">
          <h2 className="access__title">
            Access to everything<br />
            <span>for everyone</span>
          </h2>
          <p className="access__desc">
            Easy secure access to digital learning resources should be the status in the education.
          </p>
          <ul className="access__features">
            {features.map((f, i) => (
              <li key={i} className="access__feature-item">
                <span className="access__feature-dot" style={{ background: f.color }}></span>
                {f.label}
              </li>
            ))}
          </ul>
          <button className="btn-primary access__btn">Get Started</button>
        </div>
      </div>
    </section>
  );
};

export default AccessSection;
