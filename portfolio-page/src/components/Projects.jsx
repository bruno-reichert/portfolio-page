import React from 'react';
import { translations } from '../i18n';
import { projectsData } from '../data';

export default function Projects({ language }) {
  const text = translations[language].projects;
  const projects = projectsData[language];

  return (
    <section id="projects" className="projects-section">
      
      {/* Spreadsheet Eyebrow */}
      <div className="eyebrow-cell">
        C1 · {language === 'pt' ? 'Projetos' : 'Projects'}
      </div>

      <div className="section-header-area">
        <h2 className="projects-heading">{text.title}</h2>
      </div>

      {/* Grid of Project Cards */}
      <div className="projects-grid">
        {projects.map((project) => (
          <article key={project.id} className="project-card">
            
            <div className="card-top">
              {/* Tech stack tags */}
              <div className="project-tags">
                {project.tags.map((tag, idx) => (
                  <span key={idx} className="tech-tag">{tag}</span>
                ))}
              </div>
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
            </div>

            {/* Action Links */}
            <div className="project-links">
              <a 
                href={project.github} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="project-link code"
              >
                <span className="link-prompt">&gt;</span> {text.codeLink}
              </a>
              
              {project.demo && (
                <a 
                  href={project.demo} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="project-link demo"
                >
                  <span className="link-prompt">&gt;</span>{' '}
                  {project.demoType === 'api-docs' ? text.apiDocsLink : text.demoLink}
                </a>
              )}
            </div>

          </article>
        ))}
      </div>

      {/* DataCamp Projects Footer Highlight */}
      <div className="datacamp-callout">
        <p className="datacamp-text">
          {text.datacampLink}{' '}
          <a 
            href="https://github.com/bruno-reichert/datacamp-projects" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="datacamp-link"
          >
            github.com/bruno-reichert/datacamp-projects &rarr;
          </a>
        </p>
      </div>

    </section>
  );
}