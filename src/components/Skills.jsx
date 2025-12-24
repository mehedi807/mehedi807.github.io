import { skills } from '../data/portfolioData';
import './Skills.css';

const Skills = () => {
  const skillCategories = [
    { title: 'Languages', items: skills.languages, icon: '{ }' },
    { title: 'Frameworks', items: skills.frameworks, icon: '⚡' },
    { title: 'Databases', items: skills.databases, icon: '🗄' },
    { title: 'DevOps & Tools', items: skills.devops, icon: '⚙' },
    { title: 'API Integrations', items: skills.apis, icon: '🔗' },
    { title: 'Practices', items: skills.practices, icon: '📐' }
  ];

  return (
    <section className="skills" id="skills">
      <div className="container">
        <div className="section-header">
          <span className="section-label">// Technical Skills</span>
          <h2 className="section-title">What I Work With</h2>
        </div>

        <div className="skills-grid">
          {skillCategories.map((category) => (
            <div className="skill-category" key={category.title}>
              <div className="category-header">
                <span className="category-icon">{category.icon}</span>
                <h3 className="category-title">{category.title}</h3>
              </div>
              <div className="skill-tags">
                {category.items.map((skill) => (
                  <span className="tech-tag" key={skill}>{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
