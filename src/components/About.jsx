import { aboutText } from '../data/portfolioData';
import './About.css';

const aboutBullets = [
  "Experienced in REST API design and database architecture",
  "Built production apps with payment integration",
  "Integrated multiple third-party APIs and AI services"
];

const About = () => {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="section-header">
          <span className="section-label">// About Me</span>
          <h2 className="section-title">Who I Am</h2>
        </div>

        <div className="about-content">
          <div className="about-text">
            {aboutText.split('\n').map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
          
          <div className="about-bullets">
            {aboutBullets.map((bullet, index) => (
              <div className="bullet-item" key={index}>
                <span className="bullet-icon">▹</span>
                <span className="bullet-text">{bullet}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
