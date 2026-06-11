import React from 'react';
import { MessageCircle, Phone, Mail, MapPin } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-page animate-fade-in">
      <section className="page-header">
        <div className="container">
          <h1 className="page-title">Contact Us</h1>
          <p className="page-subtitle">Let's build the future together</p>
        </div>
      </section>

      <section className="section contact-section">
        <div className="container">
          <div className="contact-grid">
            
            {/* Direct Communication Cards */}
            <div className="contact-channels">
              <div className="channel-card whatsapp-card glass-panel">
                <div className="channel-icon-wrapper whatsapp">
                  <MessageCircle size={36} />
                </div>
                <h3>WhatsApp Direct</h3>
                <p>Chat with our team instantly for quick communications and inquiries.</p>
                <a href="https://wa.me/919874248732" target="_blank" rel="noopener noreferrer" className="btn whatsapp-btn">
                  Start Chat
                </a>
              </div>

              <div className="channel-card glass-panel">
                <div className="channel-icon-wrapper">
                  <Phone size={36} />
                </div>
                <h3>Call Us</h3>
                <p>Speak directly with our representatives.</p>
                <div className="phone-lines">
                  <a href="tel:+919874248732" className="phone-link">+91 9874248732</a>
                  <a href="tel:+919831117297" className="phone-link">+91 9831117297</a>
                </div>
              </div>

              <div className="channel-card glass-panel">
                <div className="channel-icon-wrapper">
                  <Mail size={36} />
                </div>
                <h3>Email Us</h3>
                <p>Send us your project details or general queries.</p>
                <a href="mailto:info@dytroninfra.com" className="email-link">info@dytroninfra.com</a>
              </div>
            </div>

            {/* Regional Base Info */}
            <div className="regional-base-wrapper">
              <div className="regional-base-card bg-blue">
                <div className="base-header">
                  <MapPin size={40} className="text-gold" />
                  <h2>Central Headquarters</h2>
                </div>
                <div className="base-content">
                  <h3>Kolkata, West Bengal</h3>
                  <p className="base-desc">
                    Strategically located in Kolkata, we serve major infrastructure projects across East and Northeast India.
                  </p>
                  <ul className="service-areas">
                    <li><CheckIcon /> West Bengal</li>
                    <li><CheckIcon /> Assam</li>
                    <li><CheckIcon /> Sikkim</li>
                    <li><CheckIcon /> Arunachal Pradesh</li>
                    <li><CheckIcon /> Odisha</li>
                  </ul>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

const CheckIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gold">
    <polyline points="20 6 9 17 4 12"></polyline>
  </svg>
);

export default Contact;
