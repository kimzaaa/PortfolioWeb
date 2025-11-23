import React from 'react';
import '../components/ProjectCard.css';

export default function ProjectCard({ title, description, year, showcaseuri, link}) {
  
  const isVideo = showcaseuri && (showcaseuri.toLowerCase().endsWith('.mov') || showcaseuri.toLowerCase().endsWith('.mp4') || showcaseuri.toLowerCase().endsWith('.webm'));

  return (
    <div className="card">
        <div className="display-wrapper">
            {showcaseuri ? (
              isVideo ? (
                <video 
                  src={showcaseuri} 
                  className="display-content" 
                  autoPlay 
                  loop 
                  muted 
                  playsInline
                />
              ) : (
                <img src={showcaseuri} alt={title} className="display-content" />
              )
            ) : (
              <div className="display-content placeholder"></div>
            )}
            {link && (
                <a href={link} target="_blank" rel="noopener noreferrer" className="overlay">
                    <span className="visit-button">VISIT SITE</span>
                </a>
            )}
        </div>
        <div className="title-row">
            <div className="title-year-group">
                <p className='title'>{title}</p>
                <p className='year'>{year}</p>
            </div>
            <svg className='arrow' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        </div>
        <p className='description'>{description}</p>
    </div>
  );
}