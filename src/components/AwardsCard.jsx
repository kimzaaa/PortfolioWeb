import React from 'react';
import '../components/AwardsCard.css';

export default function AwardsCard({ title, year}) {
  return (
    <div className="cards">
        <div className="displays"></div>
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