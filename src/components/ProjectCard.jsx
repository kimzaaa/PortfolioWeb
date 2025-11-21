import React from 'react';
import '../components/ProjectCard.css';

export default function ProjectCard({ title, description, year}) {
  return (
    <div className="card">
        <div className="display"></div>
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