import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Building2 } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer bg-blue">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="footer-logo">
              <Building2 size={32} className="text-gold" />
              <h3>Dytron Infrastructure</h3>
            </div>
            <p className="tagline text-gold">Innovation in Every Structure</p>
            <p className="company-desc">
              A trusted leader in delivering world-class, sustainable infrastructure through high-quality, cost-effective, and timely EPC/civil contracts.
            </p>
          </div>

          <div className="footer-links">
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/projects">Our Projects</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          <div className="footer-contact">
            <h4>Contact Us</h4>
            <ul>
              <li>
                <MapPin size={18} className="text-gold" />
                <span>Kolkata, West Bengal (HQ)</span>
              </li>
              <li>
                <Phone size={18} className="text-gold" />
                <span>+91 9874248732<br/>+91 9831117297</span>
              </li>
              <li>
                <Mail size={18} className="text-gold" />
                <span>info@dytroninfra.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Dytron Infrastructure Pvt. Ltd. (Formerly Dytron Industries Pvt. Ltd.). All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
