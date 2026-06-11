import React, { useState } from 'react';
import { Quote, PenTool, Truck, Package } from 'lucide-react';
import './About.css';

const About = () => {
  const [activeTab, setActiveTab] = useState('engineering');

  return (
    <div className="about-page animate-fade-in">
      {/* Header Banner */}
      <section className="page-header">
        <div className="container">
          <h1 className="page-title">About Us</h1>
          <p className="page-subtitle">Built on a foundation of trust and technical excellence</p>
        </div>
      </section>

      {/* Company Profile */}
      <section className="section profile-section">
        <div className="container">
          <div className="profile-grid">
            <div className="profile-content">
              <h2>Company Profile</h2>
              <p className="lead-text">
                <strong>Dytron Infrastructure Pvt. Ltd.</strong> (Formerly known as Dytron Industries Pvt. Ltd.) was established on <strong>17.09.2019</strong>.
              </p>
              <p>
                We are driven by an association of technically knowledgeable manpower, united by a singular goal: executing complex civil engineering projects with uncompromising quality. Over the years, we have evolved into a dynamic organization capable of meeting modern infrastructure demands with precision and efficiency.
              </p>
            </div>
            <div className="profile-image">
              {/* Optional: We can add an image here later, currently a stylized box */}
              <div className="profile-graphic">
                <div className="graphic-blue"></div>
                <div className="graphic-gold"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Chairman's Message */}
      <section className="section chairman-section bg-light">
        <div className="container">
          <div className="blockquote-wrapper glass-panel">
            <Quote size={60} className="quote-icon" />
            <blockquote className="chairman-quote">
              <p>
                "Our vision is to be a trusted leader in delivering world-class, sustainable infrastructure. We are on a mission to execute high-quality, cost-effective, and timely EPC/civil contracts that stand the test of time and empower communities."
              </p>
              <footer>
                <strong>Chairman & Managing Director</strong>
                <br />
                <span>Dytron Infrastructure Pvt. Ltd.</span>
              </footer>
            </blockquote>
          </div>
        </div>
      </section>

      {/* Technical Capabilities & Fleet */}
      <section className="section capabilities-section">
        <div className="container">
          <h2 className="section-title">Technical Capabilities & Fleet</h2>
          
          <div className="tabs-container">
            <div className="tabs-header">
              <button 
                className={`tab-btn ${activeTab === 'engineering' ? 'active' : ''}`}
                onClick={() => setActiveTab('engineering')}
              >
                <PenTool size={20} /> Engineering & Q.C. Tools
              </button>
              <button 
                className={`tab-btn ${activeTab === 'machinery' ? 'active' : ''}`}
                onClick={() => setActiveTab('machinery')}
              >
                <Truck size={20} /> Heavy Machinery
              </button>
              <button 
                className={`tab-btn ${activeTab === 'inventory' ? 'active' : ''}`}
                onClick={() => setActiveTab('inventory')}
              >
                <Package size={20} /> Inventory Scale
              </button>
            </div>

            <div className="tabs-content">
              {activeTab === 'engineering' && (
                <div className="tab-pane animate-fade-in">
                  <ul className="capability-list">
                    <li>Electronic Theodolites</li>
                    <li>Auto Levels</li>
                    <li>Sokkia Total Stations</li>
                    <li>Compressive Strength Testing Equipment</li>
                    <li>Advanced Surveying Tools</li>
                  </ul>
                </div>
              )}
              
              {activeTab === 'machinery' && (
                <div className="tab-pane animate-fade-in">
                  <ul className="capability-list">
                    <li>Bellstone Mini Batching Plants</li>
                    <li>Mechanical Concrete Mixers</li>
                    <li>Vacuum Dewatering Rigs</li>
                    <li>5-Ton Tower Crane</li>
                    <li>5 Sets of Bore Piling Rigs</li>
                  </ul>
                </div>
              )}
              
              {activeTab === 'inventory' && (
                <div className="tab-pane animate-fade-in">
                  <ul className="capability-list">
                    <li>2000+ Steel Props</li>
                    <li>1600+ Sqm Cuplock Systems</li>
                    <li>Adjustable Spans</li>
                    <li>Extensive Shuttering Materials</li>
                    <li>Robust Scaffolding Frameworks</li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
