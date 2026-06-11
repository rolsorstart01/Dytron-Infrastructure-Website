import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Activity, Users, Clock, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './Home.css';

const FadeInWhenVisible = ({ children, delay = 0, className = "" }) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  return (
    <motion.div
      ref={ref}
      initial={{ y: 50, opacity: 0 }}
      animate={inView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

const Home = () => {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-bg grayscale-hover"></div>
        <div className="hero-overlay"></div>
        <div className="container hero-content">
          <motion.h1 
            className="hero-title tracking-tighter"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            DYTRON<br/>
            <span className="text-gold">INFRASTRUCTURE</span>
          </motion.h1>
          
          <motion.p 
            className="hero-tagline"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            INNOVATION IN EVERY STRUCTURE
          </motion.p>
          
          <motion.div 
            className="hero-ctas"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link to="/projects" className="btn btn-primary">
              View Our Projects <ArrowRight size={18} className="ml-2" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Bento Grid Strengths */}
      <section className="section">
        <div className="container">
          <FadeInWhenVisible>
            <h2 className="section-title tracking-tight">CORE STRENGTHS</h2>
          </FadeInWhenVisible>
          
          <div className="bento-strengths-grid">
            <FadeInWhenVisible delay={0.1} className="bento-card strength-main">
              <div className="strength-icon">
                <Users size={40} />
              </div>
              <h3 className="tracking-tight">Experienced Management</h3>
              <p className="text-secondary">Led by a team with 25–30 years of field expertise in complex civil engineering.</p>
            </FadeInWhenVisible>
            
            <FadeInWhenVisible delay={0.2} className="bento-card">
              <div className="strength-icon">
                <Activity size={32} />
              </div>
              <h3 className="tracking-tight">Dynamic Labor Capacity</h3>
              <p className="text-secondary">Maintaining a mobile, highly skilled workforce of 100–125 active workers.</p>
            </FadeInWhenVisible>
            
            <FadeInWhenVisible delay={0.3} className="bento-card">
              <div className="strength-icon">
                <Clock size={32} />
              </div>
              <h3 className="tracking-tight">On-Time Execution</h3>
              <p className="text-secondary">Committed to strict project timelines without compromising structural integrity.</p>
            </FadeInWhenVisible>
            
            <FadeInWhenVisible delay={0.4} className="bento-card strength-wide">
              <div className="strength-icon">
                <ShieldCheck size={32} />
              </div>
              <h3 className="tracking-tight">Quality Assurance</h3>
              <p className="text-secondary">Utilizing top-tier QC tools and heavy machinery for world-class results. Safety and precision at every level.</p>
            </FadeInWhenVisible>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
