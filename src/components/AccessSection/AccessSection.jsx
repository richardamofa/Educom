import React from 'react';
import './AccessSection.css';
import AccessImage from '../../assets/access.png';
import { FaGraduationCap } from 'react-icons/fa';
import { FaGlobe,  FaBolt, FaDollarSign, FaBriefcase } from 'react-icons/fa';

const features = [
  { icon: FaGlobe, label: 'World-class', color: '#3B82F6' },
  { icon: FaBolt, label: 'Flexible', color: '#F97316' },
  { icon: FaDollarSign, label: 'Affordable', color: '#22C55E' },
  { icon: FaBriefcase, label: 'Job-relevant', color: '#8B5CF6' },
];

const AccessSection = () => {
  return (
    <section className="access">
      <div className="access__wave-top"></div>
      <div className="container access__inner">
        
        {/* Left illustration */}
        <div className="access__visual">
          <div className="access__circle"></div>
                    <img src={AccessImage} alt='accessImage' className='access__image' />
          <div className="access__float-badge">
            <span>
                <FaGraduationCap className='access__float-icon' />
            </span>
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
            {features.map((f, i) => {
                const Icon = f.icon;

                return (
                <li key={i} className="access__feature-item">
                    <span 
                    className="access__feature-icon"
                    style={{   
                        color: f.color,
                        background: `${f.color}20`
                    }}
                    >
                    <Icon />
                    </span>
                    {f.label}
                </li>
                );
            })}
            </ul>
          <button className="btn-primary access__btn">Get Started</button>
        </div>
      </div>
    </section>
  );
};

export default AccessSection;
