import React from 'react';
import { MapPin } from 'lucide-react';
import { motion } from 'framer-motion';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-page">
      <section className="page-header">
        <div className="container">
          <motion.h1 
            className="page-title tracking-tight text-center"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            CONTACT
          </motion.h1>
          <motion.p 
            className="page-subtitle text-center tracking-widest"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            LET'S BUILD THE FUTURE TOGETHER
          </motion.p>
        </div>
      </section>

      <section className="section contact-section">
        <div className="container">
          <motion.div 
            className="regional-base-card glass-panel"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="base-header">
              <MapPin size={32} className="text-gold" />
              <h2 className="tracking-tight">CENTRAL HEADQUARTERS</h2>
            </div>
            
            <div className="base-content">
              <h3 className="tracking-widest text-gold">KOLKATA, WEST BENGAL</h3>
              <p className="base-desc text-secondary">
                Strategically located in Kolkata, we serve major infrastructure projects across East and Northeast India. Connect with us instantly using the quick-actions below.
              </p>
              
              <div className="service-areas-wrapper">
                <h4 className="tracking-widest text-secondary mb-1">SERVICE REGIONS</h4>
                <ul className="service-areas text-primary">
                  <li><CheckIcon /> West Bengal</li>
                  <li><CheckIcon /> Assam</li>
                  <li><CheckIcon /> Sikkim</li>
                  <li><CheckIcon /> Arunachal Pradesh</li>
                  <li><CheckIcon /> Odisha</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

const CheckIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gold">
    <polyline points="20 6 9 17 4 12"></polyline>
  </svg>
);

export default Contact;
