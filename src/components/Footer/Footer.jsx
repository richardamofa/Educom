import React from 'react';
import './Footer.css';

const footerLinks = {
  Programs: ['Learning Modules', 'Partnership', 'Event', 'Watch Demo'],
  About: ['Our Company', 'Career', 'Investor Relations', 'Social Impact'],
  Resources: ['Contact', 'Give Feedback', 'System Status', 'Privacy Policy'],
};

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <a href="#" className="footer__logo">
            <span className="logo-edu">Edu</span><span className="logo-com">.com</span>
          </a>
          <p className="footer__tagline">
            Solution for easy and flexible online learning. You can study anywhere through this platform.
          </p>
          <div className="footer__socials">
            <a href="#" className="social-btn" aria-label="Facebook">f</a>
            <a href="#" className="social-btn" aria-label="Twitter">t</a>
            <a href="#" className="social-btn" aria-label="Instagram">in</a>
          </div>
        </div>

        {Object.entries(footerLinks).map(([group, links]) => (
          <div className="footer__col" key={group}>
            <h4 className="footer__col-title">{group}</h4>
            <ul className="footer__links">
              {links.map((link, i) => (
                <li key={i}>
                  <a href="#" className="footer__link">{link}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="footer__bottom">
        <div className="container">
          <p>© {new Date().getFullYear()} Edu.com. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
