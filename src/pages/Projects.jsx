import React, { useState } from 'react';
import { Building, MapPin, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import './Projects.css';

const Projects = () => {
  const [activeTab, setActiveTab] = useState('active');

  const activeProjects = [
    {
      id: 1,
      title: 'Affordable Housing GWH – Sangati (S+G+9) Block B1 & B2',
      location: 'Shristinagar, Guwahati',
      client: 'Shristi Infrastructure Development Corporation Ltd., Kolkata',
      details: 'Area: Approx. 200,000 Sq. Ft. | Job Value: Approx. 8 Cr.',
    },
    {
      id: 2,
      title: 'Civil Construction Work',
      location: 'Angul, Orissa',
      client: 'Jindal Steel & Power Ltd. (JSPL)',
      details: 'Job Value: Approx. 5 Cr.',
    },
    {
      id: 3,
      title: 'Construction of G+7 Residential Complex',
      location: 'Beltola Survey area, Guwahati',
      client: '-',
      details: 'Only piling and Structure | Job Value: Approx. 4.50 Cr.',
    },
    {
      id: 4,
      title: 'Construction of G+8 Residential Complex',
      location: 'Surya Vilas, Gangtok, Sikkim',
      client: '-',
      details: 'Only structure | Job Value: Approx. 5 Cr.',
    },
    {
      id: 5,
      title: 'Construction of Civil Foundation Work',
      location: 'Hind Motor',
      client: 'Titagarh Rail Systems Limited',
      details: 'Ware House: 8.25 Cr., Passivation Booth: 0.29 Cr., Shot Blasting Booth: 0.26 Cr., Aluminium Coach Manufacturing Shed: 3.35 Cr.',
    }
  ];

  const pastProjects = [
    {
      id: 6,
      title: 'Industrial Project Work',
      location: 'JSPL, Angul, Orissa',
      category: 'Industrial',
      details: 'Heavy industrial infrastructure execution.',
    },
    {
      id: 7,
      title: 'Residential Building Project Work',
      location: 'Gangtok, Sikkim',
      category: 'Residential',
      details: 'Residential complex structural execution.',
    },
    {
      id: 8,
      title: 'Piling Work for Residential Building',
      location: 'Beltola, Guwahati',
      category: 'Residential',
      details: 'Piling work for residential development.',
    },
    {
      id: 9,
      title: 'Medica Hospital',
      location: 'Kolkata',
      category: 'Healthcare',
      details: 'Major structural involvement in specialized healthcare facility.',
    },
    {
      id: 10,
      title: 'Civil Secretariat Building',
      location: 'Itanagar',
      category: 'Civic',
      details: 'Large-scale government administrative complex.',
    },
    {
      id: 11,
      title: 'Delhi Public School',
      location: 'New Town, Kolkata',
      category: 'Education',
      details: 'Institutional campus structural development.',
    },
    {
      id: 12,
      title: 'IIM Shillong',
      location: 'Shillong',
      category: 'Education',
      details: 'Educational campus development.',
    },
    {
      id: 13,
      title: 'IIT Guwahati',
      location: 'Guwahati',
      category: 'Education',
      details: 'Educational campus infrastructure.',
    },
    {
      id: 14,
      title: 'Novotel Guwahati',
      location: 'Guwahati',
      category: 'Hospitality',
      details: 'Hospitality infrastructure execution.',
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
              Ongoing Projects
            </button>
            <button 
              className={`project-tab-btn ${activeTab === 'past' ? 'active' : ''}`}
              onClick={() => setActiveTab('past')}
            >
              Delivered Projects
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
