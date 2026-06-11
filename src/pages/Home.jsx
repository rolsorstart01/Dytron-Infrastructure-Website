import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Activity, Users, Clock, ShieldCheck } from 'lucide-react';
import './Home.css';

const Home = () => {
  return (
    <div className="home-page animate-fade-in">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-overlay"></div>
        <div className="container hero-content">
          <h1 className="hero-title">Dytron Infrastructure Pvt. Ltd.</h1>
          <p className="hero-tagline">Innovation in Every Structure</p>
          <div className="hero-ctas">
            <Link to="/projects" className="btn btn-primary">
              View Our Portfolio <ArrowRight size={18} className="ml-2" />
            </Link>
            <Link to="/contact" className="btn btn-outline">
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Strengths Grid */}
      <section className="section bg-light">
        <div className="container">
          <h2 className="section-title">Our Core Strengths</h2>
          
          <div className="strengths-grid">
            <div className="strength-card">
              <div className="strength-icon">
                <Users size={32} />
              </div>
              <h3>Experienced Management</h3>
              <p>Led by a team with 25–30 years of field expertise in complex civil engineering.</p>
            </div>
            
            <div className="strength-card">
              <div className="strength-icon">
                <Activity size={32} />
              </div>
              <h3>Dynamic Labor Capacity</h3>
              <p>Maintaining a mobile, highly skilled workforce of 100–125 active workers.</p>
            </div>
            
            <div className="strength-card">
              <div className="strength-icon">
                <Clock size={32} />
              </div>
              <h3>On-Time Execution</h3>
              <p>Committed to strict project timelines without compromising structural integrity.</p>
            </div>
            
            <div className="strength-card">
              <div className="strength-icon">
                <ShieldCheck size={32} />
              </div>
              <h3>Quality Assurance</h3>
              <p>Utilizing top-tier QC tools and heavy machinery for world-class results.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
