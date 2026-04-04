import React from 'react';
import './Hero.css';
import heroImage from '../../assets/hero.png';
import {FaTrophy, FaUserGraduate, FaPlay} from 'react-icons/fa'
import { IoPlay } from 'react-icons/io5';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero__blob hero__blob--1"></div>
      <div className="hero__blob hero__blob--2"></div>
      <div className="container hero__inner">
        <div className="hero__content">
          <div className="hero__badge">
            <span className="badge-dot"></span> Online Learning Platform
          </div>
          <h1 className="hero__title">
            A New Way of<br />
            <span className="hero__title-highlight">Digital Literacy</span>
          </h1>
          <p className="hero__desc">
            A Solution for easy and flexible online learning, you can study anywhere through this platform.
          </p>
          <div className="hero__actions">
            <button className="btn-primary hero__btn-main">
              Get Started
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
          <div className="hero__badges">
            <div className="hero__badge-item">
              <span className="badge-icon badge-icon--blue">✓</span>
              Experienced mentor
            </div>
            <div className="hero__badge-item">
              <span className="badge-icon badge-icon--orange">
                <IoPlay />
              </span>
              Quality Videos
            </div>
            <div className="hero__badge-item">
              <span className="badge-icon badge-icon--green">$</span>
              Affordable prices
            </div>
          </div>
        </div>

        <div className="hero__visual">
          <div className="hero__illustration">
            <div className="hero__circle hero__circle--lg"></div>
            <div className="hero__circle hero__circle--sm"></div>
            <img src={heroImage} alt='' className='hero__image' />
            {/* Student SVG illustration */}
            <div>
            {/*
            <svg className="hero__figure" viewBox="0 0 320 380" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Stool 
              <rect x="170" y="290" width="8" height="80" rx="4" fill="#C4A882"/>
              <rect x="120" y="360" width="108" height="10" rx="5" fill="#C4A882"/>
              <rect x="145" y="300" width="60" height="8" rx="4" fill="#D4B896"/>
              {/* Laptop 
              <rect x="110" y="230" width="120" height="75" rx="8" fill="#1E293B"/>
              <rect x="114" y="234" width="112" height="65" rx="6" fill="#3B82F6"/>
              <rect x="116" y="236" width="108" height="61" rx="5" fill="#EFF6FF"/>
              {/* Screen content
              <rect x="122" y="242" width="60" height="6" rx="3" fill="#BFDBFE"/>
              <rect x="122" y="252" width="80" height="4" rx="2" fill="#DBEAFE"/>
              <rect x="122" y="260" width="70" height="4" rx="2" fill="#DBEAFE"/>
              <rect x="122" y="268" width="50" height="4" rx="2" fill="#DBEAFE"/>
              <rect x="100" y="305" width="140" height="8" rx="4" fill="#334155"/>
              {/* Person body 
              <ellipse cx="170" cy="190" rx="28" ry="35" fill="#FBBF24"/>
              {/* Head
              <circle cx="170" cy="140" r="32" fill="#FDDCAB"/>
              {/* Hair 
              <path d="M140 130 Q145 95 170 92 Q195 95 200 130 Q195 108 170 105 Q145 108 140 130Z" fill="#1E293B"/>
              <path d="M200 130 Q205 115 202 105 Q210 120 207 140Z" fill="#1E293B"/>
              {/* Ponytail 
              <path d="M200 118 Q215 115 212 130 Q205 125 200 128Z" fill="#1E293B"/>
              {/* Face features 
              <circle cx="160" cy="138" r="3" fill="#1E293B"/>
              <circle cx="180" cy="138" r="3" fill="#1E293B"/>
              <path d="M162 150 Q170 156 178 150" stroke="#1E293B" strokeWidth="2" strokeLinecap="round" fill="none"/>
              {/* Arms 
              <path d="M143 185 Q118 210 115 235" stroke="#FDDCAB" strokeWidth="18" strokeLinecap="round"/>
              <path d="M197 185 Q222 210 225 235" stroke="#FDDCAB" strokeWidth="18" strokeLinecap="round"/>
              {/* Legs 
              <path d="M155 220 Q145 260 148 290" stroke="#FBBF24" strokeWidth="20" strokeLinecap="round"/>
              <path d="M185 220 Q195 260 192 290" stroke="#FBBF24" strokeWidth="20" strokeLinecap="round"/>
              {/* Shoes 
              <ellipse cx="148" cy="295" rx="18" ry="9" fill="#1E293B"/>
              <ellipse cx="192" cy="295" rx="18" ry="9" fill="#1E293B"/>
            </svg> */}
            </div>

            {/* Book stack */}
            <div className="hero__books">
              <div className="book book--1"></div>
              <div className="book book--2"></div>
              <div className="book book--3"></div>
              <div className="book book--4"></div>
              <div className="book book--5"></div>
            </div>

            {/* Floating cards */}
            <div className="hero__float-card hero__float-card--1">
              <span className="float-card-icon">
                <FaTrophy className="trophy-icon" />
              </span>
              <div>
                <div className="float-card-title">Top Rated</div>
                <div className="float-card-sub">4.9 ★ Rating</div>
              </div>
            </div>
            <div className="hero__float-card hero__float-card--2">
              <span className="float-card-icon">
                <FaUserGraduate className='graduate-icon' />
              </span>
              <div>
                <div className="float-card-title">250k+</div>
                <div className="float-card-sub">Students</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
