import { education } from '../data/portfolioData';
import './Education.css';

const Education = () => {
  return (
    <section className="education" id="education">
      <div className="container">
        <div className="section-header">
          <span className="section-label">// Education</span>
          <h2 className="section-title">Academic Background</h2>
        </div>

        <div className="education-card card">
          <div className="education-icon">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
              <path d="M6 12v5c3 3 9 3 12 0v-5"/>
            </svg>
          </div>
          <div className="education-content">
            <h3 className="education-degree">{education.degree}</h3>
            <p className="education-institution">{education.institution}</p>
            <div className="education-meta">
              <span className="education-location">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
                {education.location}
              </span>
              <span className="education-period">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                  <line x1="16" y1="2" x2="16" y2="6"/>
                  <line x1="8" y1="2" x2="8" y2="6"/>
                  <line x1="3" y1="10" x2="21" y2="10"/>
                </svg>
                {education.period}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
