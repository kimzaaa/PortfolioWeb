import React from 'react';
import '../components/AwardsCard.css';

export default function AwardsCard({ title, year, image}) {
  const imageSrc = typeof image === 'object' && image?.src ? image.src : image;
  const isVideo = typeof imageSrc === 'string' && ['.mov', '.mp4', '.webm'].some(ext => imageSrc.toLowerCase().endsWith(ext));
  
  return (
    <div className="cards">
        <div className="displays">
          {imageSrc ? (
            isVideo ? (
              <video 
                src={imageSrc} 
                className="award-media" 
                autoPlay 
                loop 
                muted 
                playsInline
              />
            ) : (
              <img src={imageSrc} alt={title} className="award-media" />
            )
          ) : (
            <div className="award-media placeholder"></div>
          )}
        </div>
        <div className="title-rows">
            <div className="title-year-groups">
                <p className='titles'>{title}</p>
                <p className='year-under-titles'>{year}</p>
            </div>
            <svg className='arrow' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        </div>
    </div>
  );
}