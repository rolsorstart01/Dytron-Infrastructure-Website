import React, { useState } from 'react';
import { Building, MapPin, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import './Projects.css';

const Projects = () => {
  const [activeTab, setActiveTab] = useState('active');

  const activeProjects = [
    {
      id: 1,
      title: 'Affordable Housing GWH – Sangati',
      location: 'Guwahati, Assam',
      client: 'Shristi Infrastructure Development Corporation Ltd.',
      details: 'S+G+9 Block B1 & B2, ~200,000 Sqft structure execution.',
    },
    {
      id: 2,
      title: 'Industrial Civil Works',
      location: 'Angul, Odisha',
      client: 'Jindal Steel & Power Ltd. (JSPL)',
      details: 'Heavy industrial infrastructure execution.',
    },
    {
      id: 3,
      title: 'G+7 Residential Complex',
      location: 'Beltola, Guwahati',
      client: 'Private Developer',
      details: 'Core piling and structural execution.',
    },
    {
      id: 4,
      title: 'Surya Vilas',
      location: 'Gangtok, Sikkim',
      client: 'Real Estate Associates',
      details: 'G+8 Residential complex structural frame.',
    }
  ];

  const pastProjects = [
    {
      id: 5,
      title: 'Medica Hospital',
      location: 'Mukundapur, Kolkata',
      category: 'Healthcare',
      details: 'Major structural involvement in specialized healthcare facility.',
    },
    {
      id: 6,
      title: 'Civil Secretariat Building',
      location: 'Itanagar, Arunachal Pradesh',
      category: 'Civic',
      details: 'Large-scale government administrative complex.',
    },
    {
      id: 7,
      title: 'Delhi Public School',
      location: 'New Town, Kolkata',
      category: 'Education',
      details: 'Institutional campus structural development.',
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  return (
    <div className="projects-page">
      <section className="page-header">
        <div className="container">
          <motion.h1 
            className="page-title tracking-tight text-center"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            OUR PROJECTS
          </motion.h1>
          <motion.p 
            className="page-subtitle text-center tracking-widest"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            A FOOTPRINT OF STRUCTURAL EXCELLENCE
          </motion.p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="projects-tabs">
            <button 
              className={`project-tab-btn ${activeTab === 'active' ? 'active' : ''}`}
              onClick={() => setActiveTab('active')}
            >
              Active Works in Hand
            </button>
            <button 
              className={`project-tab-btn ${activeTab === 'past' ? 'active' : ''}`}
              onClick={() => setActiveTab('past')}
            >
              Personnel Track Record
            </button>
          </div>

          <motion.div 
            className="projects-grid"
            variants={containerVariants}
            initial="hidden"
            animate="show"
            key={activeTab} // Re-trigger animation on tab change
          >
            {activeTab === 'active' && activeProjects.map(project => (
              <motion.div key={project.id} className="project-card grayscale-hover" variants={itemVariants}>
                <div className="project-card-inner glass-panel">
                  <div className="project-card-header bg-obsidian-light border-b">
                    <h3 className="tracking-tight">{project.title}</h3>
                  </div>
                  <div className="project-card-body">
                    <div className="project-meta text-secondary">
                      <span className="meta-item"><MapPin size={16} className="text-gold" /> {project.location}</span>
                    </div>
                    <p className="project-details">{project.details}</p>
                    <div className="project-client">
                      <strong className="text-gold">Client:</strong> <span className="text-secondary">{project.client}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}

            {activeTab === 'past' && pastProjects.map(project => (
              <motion.div key={project.id} className="project-card grayscale-hover" variants={itemVariants}>
                <div className="project-card-inner glass-panel">
                  <div className="project-card-header bg-obsidian-light border-b">
                    <h3 className="tracking-tight">{project.title}</h3>
                  </div>
                  <div className="project-card-body">
                    <div className="project-meta text-secondary">
                      <span className="meta-item"><MapPin size={16} className="text-gold" /> {project.location}</span>
                      <span className="meta-category"><Building size={16} className="text-gold" /> {project.category}</span>
                    </div>
                    <p className="project-details">{project.details}</p>
                    <div className="project-status">
                      <CheckCircle size={16} className="text-gold"/> <span className="text-secondary">Successfully Completed</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
