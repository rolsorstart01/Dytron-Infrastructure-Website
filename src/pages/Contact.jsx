import React, { useState } from 'react';
import { MapPin, Phone, Mail, CheckCircle, Send } from 'lucide-react';
import { motion } from 'framer-motion';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate submission
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

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
            CONTACT US
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
        <div className="container contact-container-centered">
          
          {/* Info Card (Centered) */}
          <motion.div 
            className="contact-info-card glass-panel"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="info-header">
              <MapPin size={32} className="text-gold" />
              <h2 className="tracking-tight">CENTRAL HEADQUARTERS</h2>
            </div>
            
            <div className="info-content">
              <h3 className="tracking-widest text-gold">KOLKATA, WEST BENGAL</h3>
              <p className="info-desc text-secondary">
                Strategically located to manage and execute major infrastructure projects across Eastern and Northeastern India.
              </p>
              
              <div className="contact-detail-items">
                <motion.div 
                  className="detail-item"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <div className="icon-wrapper">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <span className="label text-secondary">Address</span>
                    <span className="value">Kolkata, West Bengal</span>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="detail-item"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <div className="icon-wrapper">
                    <Phone size={20} />
                  </div>
                  <div>
                    <span className="label text-secondary">Phone</span>
                    <span className="value">+91 9874248732</span>
                    <span className="value">+91 9831117297</span>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="detail-item"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <div className="icon-wrapper">
                    <Mail size={20} />
                  </div>
                  <div>
                    <span className="label text-secondary">Email</span>
                    <a href="https://mail.google.com/mail/u/0/#inbox?compose=CllgCJNqKqvSVqgQHKtQxTQNgKGTVlccwdrDhQgdfxjmFRBTGKCtpfPsGrfrVvjtgFMXNXvVbxq" target="_blank" rel="noopener noreferrer"><span className="value">info@dytroninfra.com</span></a>
                  </div>
                </motion.div>
              </div>
              
              <div className="service-regions-box">
                <h4 className="tracking-widest text-secondary">ACTIVE SERVICE REGIONS</h4>
                <ul className="regions-list">
                  <motion.li whileHover={{ scale: 1.05 }}><CheckIcon /> West Bengal</motion.li>
                  <motion.li whileHover={{ scale: 1.05 }}><CheckIcon /> Assam</motion.li>
                  <motion.li whileHover={{ scale: 1.05 }}><CheckIcon /> Sikkim</motion.li>
                  <motion.li whileHover={{ scale: 1.05 }}><CheckIcon /> Odisha</motion.li>
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
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gold">
    <polyline points="20 6 9 17 4 12"></polyline>
  </svg>
);

export default Contact;
