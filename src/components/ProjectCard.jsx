import React from 'react';
import '../components/ProjectCard.css';

export default function ProjectCard({ id, title, description, year, showcaseuri, link}) {
  
  const isVideo = typeof showcaseuri === 'string' && ['.mov', '.mp4', '.webm', '.nov'].some(ext => showcaseuri.toLowerCase().endsWith(ext));
  const detailsLink = id ? `/projects/${id}` : '#';

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
            <a href={detailsLink} className="overlay">
                <span className="visit-button">VIEW DETAILS</span>
            </a>
        </div>
        <div className="title-row">
            <div className="title-year-group">
                <a href={detailsLink} style={{ textDecoration: 'none', color: 'inherit' }}>
                    <p className='title'>{title}</p>
                </a>
                <p className='year'>{year}</p>
            </div>
            <a href={detailsLink} style={{ display: 'flex', alignItems: 'center' }}>
                <svg className='arrow' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </a>
        </div>
        <p className='description'>{description}</p>
    </div>
  );
}