import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Building2 } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer bg-obsidian-base border-t">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="footer-logo">
              <Building2 size={32} className="text-gold" />
              <h3 className="tracking-tight">DYTRON</h3>
            </div>
            <p className="tagline text-gold tracking-widest">INNOVATION IN EVERY STRUCTURE</p>
            <p className="company-desc text-secondary">
              A trusted leader in delivering world-class, sustainable infrastructure through high-quality, cost-effective, and timely EPC/civil contracts.
            </p>
          </div>

          <div className="footer-links">
            <h4 className="tracking-widest">QUICK LINKS</h4>
            <ul>
              <li><Link to="/">HOME</Link></li>
              <li><Link to="/about">ABOUT US</Link></li>
              <li><Link to="/projects">OUR PROJECTS</Link></li>
              <li><Link to="/contact">CONTACT</Link></li>
            </ul>
          </div>

          <div className="footer-contact">
            <h4 className="tracking-widest">CONNECT</h4>
            <ul>
              <li>
                <MapPin size={18} className="text-gold" />
                <span>Kolkata, West Bengal </span>
              </li>
              <li>
                <Phone size={18} className="text-gold" />
                <span>+91 9874248732</span>
              </li>
              <li>
                <Mail size={18} className="text-gold" />
                <a href="https://mail.google.com/mail/u/0/#inbox?compose=CllgCJNqKqvSVqgQHKtQxTQNgKGTVlccwdrDhQgdfxjmFRBTGKCtpfPsGrfrVvjtgFMXNXvVbxq" target="_blank" rel="noopener noreferrer"><span>info@dytroninfra.com</span></a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="tracking-widest">&copy; {new Date().getFullYear()} DYTRON INFRASTRUCTURE PVT. LTD. ALL RIGHTS RESERVED.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
