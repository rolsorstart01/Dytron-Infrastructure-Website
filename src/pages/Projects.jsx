import React, { useState } from 'react';
import { Building, MapPin, CheckCircle } from 'lucide-react';
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

  return (
    <div className="projects-page animate-fade-in">
      <section className="page-header">
        <div className="container">
          <h1 className="page-title">Our Projects</h1>
          <p className="page-subtitle">A footprint of structural excellence across East & Northeast India</p>
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

          <div className="projects-grid">
            {activeTab === 'active' && activeProjects.map(project => (
              <div key={project.id} className="project-card animate-fade-in">
                <div className="project-card-header bg-blue">
                  <h3>{project.title}</h3>
                </div>
                <div className="project-card-body">
                  <div className="project-meta">
                    <span className="meta-item"><MapPin size={16}/> {project.location}</span>
                  </div>
                  <p className="project-details">{project.details}</p>
                  <div className="project-client">
                    <strong>Client:</strong> {project.client}
                  </div>
                </div>
              </div>
            ))}

            {activeTab === 'past' && pastProjects.map(project => (
              <div key={project.id} className="project-card animate-fade-in">
                <div className="project-card-header bg-gold">
                  <h3 className="text-blue">{project.title}</h3>
                </div>
                <div className="project-card-body">
                  <div className="project-meta">
                    <span className="meta-item"><MapPin size={16}/> {project.location}</span>
                    <span className="meta-category"><Building size={16}/> {project.category}</span>
                  </div>
                  <p className="project-details">{project.details}</p>
                  <div className="project-status">
                    <CheckCircle size={16} className="text-gold"/> Successfully Completed
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
