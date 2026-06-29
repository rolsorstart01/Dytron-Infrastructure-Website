import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Phone, Mail } from 'lucide-react';
import './FloatingDock.css';

const FloatingDock = () => {
  return (
    <motion.div 
      className="floating-dock glass-panel"
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 1, duration: 0.5, type: 'spring' }}
    >
      <a href="https://wa.me/919874248732" target="_blank" rel="noopener noreferrer" className="dock-item whatsapp" aria-label="WhatsApp">
        <MessageCircle size={22} />
      </a>
      <a href="tel:+919874248732" className="dock-item" aria-label="Call Us">
        <Phone size={22} />
      </a>
      <a href="https://mail.google.com/mail/u/0/#inbox?compose=CllgCJNqKqvSVqgQHKtQxTQNgKGTVlccwdrDhQgdfxjmFRBTGKCtpfPsGrfrVvjtgFMXNXvVbxq" target="_blank" rel="noopener noreferrer" className="dock-item" aria-label="Email Us">
        <Mail size={22} />
      </a>
    </motion.div>
  );
};

export default FloatingDock;
