import React, { useState, useEffect } from 'react';
import { Quote, PenTool, Truck, Package } from 'lucide-react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import './About.css';

const FadeIn = ({ children, delay = 0, className = "" }) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  return (
    <motion.div
      ref={ref}
      initial={{ y: 30, opacity: 0 }}
      animate={inView ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

const AnimatedNumber = ({ end, duration, inView }) => {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    if (!inView) return;
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / (duration * 1000), 1);
      // easeOutQuart function for smoother deceleration
      const easeOut = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(easeOut * end));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }, [end, duration, inView]);

  return <>{count.toLocaleString()}</>;
};

const MetricCounter = ({ end, suffix = "", title }) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.5 });
  return (
    <div className="metric-box" ref={ref}>
      <h4 className="metric-number text-gold tracking-tighter" style={{ fontFamily: 'system-ui, -apple-system, sans-serif', fontVariantNumeric: 'tabular-nums', fontWeight: 'bold' }}>
        <AnimatedNumber end={end} duration={3.0} inView={inView} />{suffix}
      </h4>
      <p className="metric-title text-secondary tracking-widest">{title}</p>
    </div>
  );
};

const About = () => {
  return (
    <div className="about-page">
      <section className="page-header">
        <div className="container">
          <FadeIn>
            <h1 className="page-title tracking-tight text-center">ABOUT US</h1>
            <p className="page-subtitle text-center tracking-widest">BUILT ON A FOUNDATION OF TRUST & TECHNICAL EXCELLENCE</p>
          </FadeIn>
        </div>
      </section>

      <section className="section">
        <div className="container profile-grid">
          <FadeIn className="profile-content">
            <h2 className="tracking-tight">COMPANY PROFILE</h2>
            <br></br>
            <p className="lead-text text-gold">
              <strong>Dytron Infrastructure Pvt. Ltd.</strong> (Formerly known as Dytron Industries Pvt. Ltd.) was established on <strong>17.09.2019</strong>.
            </p>
            <p className="text-secondary">
              We are driven by an association of technically knowledgeable manpower, united by a singular goal: executing complex civil engineering projects with uncompromising quality. Over the years, we have evolved into a dynamic organization capable of meeting modern infrastructure demands with precision and efficiency.
            </p>
          </FadeIn>
          
          <FadeIn delay={0.2} className="profile-graphic-container">
            <div className="profile-graphic">
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="section bg-obsidian-light">
        <div className="container">
          <FadeIn className="blockquote-wrapper glass-panel">
            <div className="quote-header">
              <Quote size={40} className="quote-icon" />
            </div>
            <blockquote className="chairman-quote">
              <p>
                <strong>Vision:</strong> To be a trusted leader in the construction industry, delivering world class infrastructure and sustainable spaces that inspire growth, improve quality of life and stand the test of time.
              </p>
              <br />
              <p>
                <strong>Mission:</strong> To deliver high quality, cost effective and timely construction solutions that exceed client expectations. We are committed to building lasting relationships with clients, partners and communities through integrity and transparency.
              </p>
              <footer>
                <strong className="text-gold tracking-widest">CHAIRMAN'S MESSAGE</strong>
                <br />
                <span className="text-secondary">Dytron Infrastructure Pvt. Ltd.</span>
              </footer>
            </blockquote>
          </FadeIn>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <FadeIn>
            <h2 className="section-title tracking-tight text-center">FLEET MATRIX</h2>
          </FadeIn>
          <br></br>
          <div className="bento-fleet-grid">
            <FadeIn delay={0.1} className="bento-card fleet-card">
              <div className="fleet-header">
                <PenTool size={24} className="text-gold" />
                <h3>Engineering & Q.C. Tools</h3>
              </div>
              <ul className="capability-list text-secondary">
                <li>Electronic Theodolites</li>
                <li>Auto Levels</li>
                <li>Sokkia Total Stations</li>
                <li>Compressive Strength Testing Equipment</li>
                <li>Advanced Surveying Tools</li>
              </ul>
            </FadeIn>

            <FadeIn delay={0.2} className="bento-card fleet-card fleet-wide">
              <div className="fleet-header">
                <Truck size={24} className="text-gold" />
                <h3>Heavy Machinery</h3>
              </div>
              <ul className="capability-list text-secondary">
                <li>Bellstone Mini Batching Plants</li>
                <li>Mechanical Concrete Mixers</li>
                <li>Vacuum Dewatering Rigs</li>
                <li>5-Ton Tower Crane</li>
                <li>Bore Piling Rigs</li>
              </ul>
            </FadeIn>

            <FadeIn delay={0.3} className="bento-card fleet-card fleet-metrics">
               <div className="fleet-header mb-2">
                <Package size={24} className="text-gold" />
                <h3>Inventory Scale</h3>
              </div>
              <div className="metrics-grid">
                <MetricCounter end={2000} suffix="+" title="STEEL PROPS" />
                <MetricCounter end={1600} suffix="+" title="SQM CUPLOCK" />
                <MetricCounter end={5} title="PILING RIG SETS" />
                <MetricCounter end={100} suffix="+" title="ACTIVE WORKERS" />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
