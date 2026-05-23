import { useState } from 'react';

const Skills = () => {
  const [activeTab, setActiveTab] = useState('frontend');

  const categories = [
    {
      id: 'frontend',
      label: 'Frontend',
      icon: 'layers',
      description: 'I focus on building responsive, modular user interfaces with strict type-safety, clean state management, and smooth transitions.',
      skills: ['React', 'React Native', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3']
    },
    {
      id: 'backend',
      label: 'Backend Dev',
      icon: 'code',
      description: 'Designing RESTful web services, solid routing architectures, and scalable business logic using Microsoft technologies and modern Node runtimes.',
      skills: ['.NET', 'C#', 'REST APIs', 'Node.js']
    },
    {
      id: 'database',
      label: 'Database',
      icon: 'database',
      description: 'Structuring normalized relational schemas, writing high-performance queries, and applying indexing strategies to handle heavy transactions.',
      skills: ['SQL Server', 'MySQL', 'Query Optimization', 'Relational Design']
    },
    {
      id: 'infrastructure',
      label: 'Infrastructure & Tools',
      icon: 'terminal',
      description: 'Orchestrating multi-container environments, setting up reverse proxies, and maintaining test environments.',
      skills: ['Docker', 'Nginx', 'Git', 'Postman']
    },
    {
      id: 'qa',
      label: 'Quality Assurance',
      icon: 'fact_check',
      description: 'My native advantage. I design comprehensive test plans, write end-to-end regression scripts, and perform rigorous validation.',
      skills: ['Automated Scripts', 'API Testing', 'Regression Testing', 'Manual Testing']
    }
  ];

  const activeCategory = categories.find(cat => cat.id === activeTab) || categories[0];

  return (
    <section className="bg-surface-container-low py-16 md:py-24 border-t border-b border-outline/10" id="competencies">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter">
          
          {/* Left Column - Context */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <span className="font-label-md text-label-sm md:text-label-md text-secondary uppercase tracking-[0.2em] block mb-4">
                Technical Stack
              </span>
              <h2 className="font-headline-md text-3xl md:text-headline-md text-on-surface mb-6">
                Core Competencies
              </h2>
              <p className="font-body-lg text-body-md md:text-body-lg text-secondary leading-relaxed mb-8 max-w-md">
                A modern technical stack reinforced by a testing-first engineering mindset. Every technology is applied with rigorous error boundaries, efficiency, and architectural structure in mind.
              </p>
            </div>
            
            <div className="hidden lg:block bg-primary-fixed text-on-primary-fixed-variant p-6 rounded-xl border border-primary/10">
              <span className="material-symbols-outlined text-primary text-3xl mb-3">verified</span>
              <h4 className="font-headline-sm text-lg font-medium text-on-primary-fixed mb-2">
                The QA-to-Developer Advantage
              </h4>
              <p className="font-body-md text-sm text-secondary leading-relaxed">
                By understanding how code breaks from a QA perspective, I write developer code that is resilient to edge cases and race conditions by default.
              </p>
            </div>
          </div>
          
          {/* Right Column - Interactive Explorer */}
          <div className="lg:col-span-7 bg-surface p-6 md:p-8 rounded-2xl border border-outline/10 shadow-sm flex flex-col md:flex-row gap-gutter">
            
            {/* Vertical Menu Tabs */}
            <div className="flex md:flex-col overflow-x-auto md:overflow-x-visible pb-4 md:pb-0 gap-2 md:w-1/3 border-b md:border-b-0 md:border-r border-outline/10">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveTab(cat.id)}
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-all duration-200 shrink-0 ${
                    activeTab === cat.id
                      ? 'bg-primary-fixed text-primary font-bold shadow-xs'
                      : 'text-secondary hover:text-on-surface hover:bg-surface-container-low'
                  }`}
                >
                  <span className="material-symbols-outlined text-xl">{cat.icon}</span>
                  <span className="font-label-md text-sm">{cat.label}</span>
                </button>
              ))}
            </div>
            
            {/* Display Panel */}
            <div className="md:w-2/3 flex flex-col justify-between pt-4 md:pt-0 md:pl-6 min-h-[250px]">
              <div className="animate-fadeIn">
                <div className="flex items-center gap-3 mb-4">
                  <span className="material-symbols-outlined text-primary bg-primary-fixed p-2.5 rounded-lg text-2xl">
                    {activeCategory.icon}
                  </span>
                  <h3 className="font-headline-sm text-headline-sm text-on-surface">
                    {activeCategory.label}
                  </h3>
                </div>
                <p className="font-body-md text-secondary leading-relaxed mb-6">
                  {activeCategory.description}
                </p>
              </div>
              
              <div>
                <h4 className="font-label-md text-xs text-secondary uppercase tracking-widest mb-3">
                  Key Technologies & Tools
                </h4>
                <div className="flex flex-wrap gap-2">
                  {activeCategory.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="bg-surface-container hover:bg-surface-container-high text-primary hover:text-on-surface px-4 py-2 text-sm rounded-lg font-medium border border-outline/10 transition-colors cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Skills;
