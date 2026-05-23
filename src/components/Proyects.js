import { useState } from 'react';
import clavtvImg from '../assets/clavtv.png';
import pokewiki from '../assets/pokewiki.png';

const Projects = () => {
  const [expandedProject, setExpandedProject] = useState(null);

  const toggleProject = (projectId) => {
    if (expandedProject === projectId) {
      setExpandedProject(null);
    } else {
      setExpandedProject(projectId);
    }
  };

  const caseStudies = [
    {
      id: 'sat-pdf',
      number: '01',
      category: 'DOCUMENT PROCESSING & OPTIMIZATION',
      title: 'High-Performance SAT XML Invoice Processor',
      subtitle: 'Dynamic resource-aware PDF document generator service.',
      description: 'Engineered a mission-critical service designed to parse Mexican Tax Authority (SAT) XML invoices (CFDI) and compile them into standardized PDF documents under heavy concurrent loads.',
      tech: ['.NET Core', 'C#', 'QuestPDF', 'iTextSharp', 'XML/CFDI'],
      challenge: 'Heavy multi-page XMLs (with thousands of transaction lines) caused garbage collector spikes and memory exhaustion when rendering layouts, leading to container crashes.',
      complexity: 'Designed a dynamic layout router. The service pre-parses XML structures to measure item density and reads process memory limits. It dynamically switches between memory-streamed iTextSharp for heavy data grids and QuestPDF for visually complex, layout-driven invoices, optimizing memory utilization by 65%.',
      solution: 'Implemented parallelized chunk-processing and custom memory buffers. Reduced average rendering time by 40% and eliminated all Out-Of-Memory (OOM) exceptions in production.',
      svg: (
        <svg viewBox="0 0 400 250" className="w-full h-full bg-[#efeeec] text-primary p-4 rounded-xl border border-outline/10">
          <rect x="20" y="20" width="100" height="40" rx="8" fill="#475b4c" />
          <text x="70" y="45" fill="white" fontStyle="bold" fontSize="12" textAnchor="middle">SAT XML Input</text>
          
          <path d="M 120 40 L 170 40" stroke="#475b4c" strokeWidth="2" fill="none" markerEnd="url(#arrow)" />
          
          <rect x="170" y="20" width="120" height="80" rx="8" fill="white" stroke="#475b4c" strokeWidth="2" />
          <text x="230" y="45" fill="#1a1c1b" fontSize="10" fontWeight="bold" textAnchor="middle">Complexity Scanner</text>
          <text x="230" y="65" fill="#5e5f5c" fontSize="8" textAnchor="middle">Check nodes & memory</text>
          <text x="230" y="82" fill="#475b4c" fontSize="9" fontWeight="bold" textAnchor="middle">RAM &lt; 200MB ?</text>
          
          <path d="M 230 100 L 230 150" stroke="#475b4c" strokeWidth="2" strokeDasharray="4" fill="none" />
          
          {/* Path 1: QuestPDF */}
          <path d="M 290 60 L 320 60 L 320 150" stroke="#475b4c" strokeWidth="2" fill="none" />
          <rect x="280" y="150" width="100" height="40" rx="8" fill="white" stroke="#475b4c" strokeWidth="2" />
          <text x="330" y="175" fill="#1a1c1b" fontSize="10" fontWeight="bold" textAnchor="middle">QuestPDF Path</text>
          <text x="330" y="190" fill="#5e5f5c" fontSize="8" textAnchor="middle">(Complex Layout)</text>

          {/* Path 2: iTextSharp */}
          <rect x="180" y="150" width="100" height="40" rx="8" fill="white" stroke="#475b4c" strokeWidth="2" />
          <text x="230" y="175" fill="#1a1c1b" fontSize="10" fontWeight="bold" textAnchor="middle">iText Stream</text>
          <text x="230" y="190" fill="#5e5f5c" fontSize="8" textAnchor="middle">(Heavy Grid Data)</text>
          
          <path d="M 230 190 L 230 220 L 150 220" stroke="#475b4c" strokeWidth="2" fill="none" />
          <path d="M 330 190 L 330 220 L 250 220" stroke="#475b4c" strokeWidth="2" fill="none" />
          
          <rect x="70" y="200" width="80" height="35" rx="8" fill="#475b4c" />
          <text x="110" y="222" fill="white" fontSize="10" textAnchor="middle">PDF Output</text>
          
          <defs>
            <marker id="arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
              <path d="M 0 0 L 10 5 L 0 10 z" fill="#475b4c" />
            </marker>
          </defs>
        </svg>
      )
    },
    {
      id: 'imss-payroll',
      number: '02',
      category: 'GOVERNMENT INTEGRATION & BUSINESS LOGIC',
      title: 'Enterprise Payroll & IMSS Government Portal Integration',
      subtitle: 'Modernizing legacy payroll compliance to cloud modules.',
      description: 'Redesigned legacy desktop payroll modules into modern web tools, building integrations for worker movement notifications (hires, layoffs, wage shifts) matching the IMSS (IDSE) DISPMAG government layout.',
      tech: ['.NET Framework', 'C#', 'SQL Server', 'React', 'Entity Framework'],
      challenge: 'The IDSE government portal utilizes a rigid, legacy, position-based text file layout (DISPMAG). An offset of a single character rejected the entire batch upload of worker movements.',
      complexity: 'Engineered a declarative validation and formatting schema engine in C# that maps C# properties to fixed-width string segments. Developed optimized SQL procedures with composite indexes and CTEs to execute massive historical calculations and generate error-free files.',
      solution: 'Replaced hours of manual error correction with a 1-click batch builder. Reduced government portal validation errors to absolute zero and accelerated report generation from 45 seconds to less than 3 seconds.',
      svg: (
        <svg viewBox="0 0 400 250" className="w-full h-full bg-[#efeeec] text-primary p-4 rounded-xl border border-outline/10">
          <rect x="20" y="30" width="90" height="40" rx="6" fill="white" stroke="#475b4c" strokeWidth="2" />
          <text x="65" y="55" fill="#1a1c1b" fontSize="10" fontWeight="bold" textAnchor="middle">SQL DB (Payroll)</text>
          
          <path d="M 110 50 L 160 50" stroke="#475b4c" strokeWidth="2" markerEnd="url(#arrow)" fill="none" />
          
          <rect x="160" y="20" width="120" height="90" rx="8" fill="#475b4c" />
          <text x="220" y="45" fill="white" fontSize="10" fontWeight="bold" textAnchor="middle">DISPMAG Builder</text>
          <text x="220" y="65" fill="#d1e8d5" fontSize="8" textAnchor="middle">- Fixed-width mappings</text>
          <text x="220" y="80" fill="#d1e8d5" fontSize="8" textAnchor="middle">- Space-padding logic</text>
          <text x="220" y="95" fill="#d1e8d5" fontSize="8" textAnchor="middle">- Modulo 11 check</text>
          
          <path d="M 280 65 L 320 65 L 320 150" stroke="#475b4c" strokeWidth="2" fill="none" />
          
          <rect x="270" y="150" width="110" height="50" rx="6" fill="white" stroke="#475b4c" strokeWidth="2" />
          <text x="325" y="170" fill="#1a1c1b" fontSize="9" fontWeight="bold" textAnchor="middle">IDSE DISPMAG File</text>
          <text x="325" y="185" fill="#ba1a1a" fontSize="8" fontStyle="italic" textAnchor="middle">["001235489874   ..."]</text>
          
          <path d="M 325 200 L 325 225 L 250 225" stroke="#475b4c" strokeWidth="2" fill="none" />
          
          <rect x="140" y="205" width="110" height="35" rx="6" fill="#475b4c" />
          <text x="195" y="226" fill="white" fontSize="10" textAnchor="middle">IDSE Portal Success</text>
        </svg>
      )
    },
    {
      id: 'docker-app',
      number: '03',
      category: 'CONTAINERIZED ARCHITECTURE & SECURITY',
      title: 'Containerized Full-Stack Architecture',
      subtitle: 'Multi-service tracker orchestrated inside isolated Docker containers.',
      description: 'Architected and deployed a multi-tier tracking system, bundling React frontend, .NET 8 Web API backend, and a PostgreSQL database in structured Docker containers.',
      tech: ['.NET 8', 'React', 'PostgreSQL', 'Docker Compose', 'JWT', 'UUIDv7'],
      challenge: 'Ensuring seamless local environment orchestration, protecting database queries against performance drops as tables scale, and designing a secure authentication cycle.',
      complexity: 'Configured a multi-stage Docker build pipeline for optimized images. Adopted time-ordered UUIDv7 as primary database keys to maintain indexing performance under high insert rates. Engineered JWT auth flows utilizing secure HttpOnly cookies, protecting against XSS/CSRF.',
      solution: 'Enabled single-command deployment with uniform local/production configurations. Standardized clean separation of concerns using C# DbContext patterns.',
      svg: (
        <svg viewBox="0 0 400 250" className="w-full h-full bg-[#efeeec] text-primary p-4 rounded-xl border border-outline/10">
          <rect x="10" y="10" width="380" height="230" rx="10" fill="none" stroke="#475b4c" strokeWidth="2" strokeDasharray="6" />
          <text x="25" y="28" fill="#475b4c" fontSize="10" fontWeight="bold">Docker Compose Network</text>
          
          {/* Container 1 */}
          <rect x="30" y="60" width="90" height="120" rx="8" fill="white" stroke="#475b4c" strokeWidth="2" />
          <text x="75" y="90" fill="#1a1c1b" fontSize="12" fontWeight="bold" textAnchor="middle">React SPA</text>
          <text x="75" y="110" fill="#5e5f5c" fontSize="9" textAnchor="middle">Vite / HTML / CSS</text>
          
          <path d="M 120 120 L 160 120" stroke="#475b4c" strokeWidth="2" markerEnd="url(#arrow)" fill="none" />
          
          {/* Container 2 */}
          <rect x="160" y="60" width="100" height="120" rx="8" fill="#475b4c" />
          <text x="210" y="90" fill="white" fontSize="11" fontWeight="bold" textAnchor="middle">.NET 8 API</text>
          <text x="210" y="110" fill="#d1e8d5" fontSize="8" textAnchor="middle">JWT Handlers</text>
          <text x="210" y="125" fill="#d1e8d5" fontSize="8" textAnchor="middle">Entity Framework</text>
          <text x="210" y="140" fill="#d1e8d5" fontSize="8" textAnchor="middle">UUIDv7 Logic</text>

          <path d="M 260 120 L 290 120" stroke="#475b4c" strokeWidth="2" markerEnd="url(#arrow)" fill="none" />
          
          {/* Container 3 */}
          <rect x="290" y="60" width="80" height="120" rx="8" fill="white" stroke="#475b4c" strokeWidth="2" />
          <text x="330" y="90" fill="#1a1c1b" fontSize="11" fontWeight="bold" textAnchor="middle">PostgreSQL</text>
          <text x="330" y="110" fill="#5e5f5c" fontSize="9" textAnchor="middle">Stored Procs</text>
          <text x="330" y="125" fill="#5e5f5c" fontSize="8" textAnchor="middle">UUIDv7 Index</text>
        </svg>
      )
    }
  ];

  const personalProjects = [
    {
      id: 'clavtv',
      title: 'ClavTV Show Explorer',
      description: 'An interactive streaming encyclopedia and show discovery web portal that updates trending catalogs and allows users to search for matching series.',
      tech: ['React', 'JavaScript', 'HTML5', 'CSS3', 'TMDB API'],
      image: clavtvImg,
      link: 'https://clautv.netlify.app'
    },
    {
      id: 'pokeapp',
      title: 'PokeApp Wiki Directory',
      description: 'A comprehensive Pokémon catalog displaying creature stats, elements, regional profiles, and an interactive favorite bookmarks manager.',
      tech: ['React', 'JavaScript', 'HTML5', 'CSS3', 'PokeAPI'],
      image: pokewiki,
      link: 'https://pokewikiapp.netlify.app'
    }
  ];

  return (
    <section className="bg-surface py-16 md:py-24" id="projects">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        
        {/* Header */}
        <div className="mb-12 md:mb-16 grid grid-cols-1 lg:grid-cols-12 gap-gutter items-end">
          <div className="lg:col-span-6">
            <span className="font-label-md text-label-sm md:text-label-md text-secondary uppercase tracking-[0.2em] block mb-4">
              Case Studies
            </span>
            <h2 className="font-headline-md text-3xl md:text-headline-md text-on-surface">
              Selected Works
            </h2>
          </div>
          <div className="lg:col-span-6">
            <p className="font-body-lg text-body-md md:text-body-lg text-secondary leading-relaxed lg:text-right">
              A collection of systems-level challenges solved through elegant backend engineering, robust API pipelines, and meticulous data validation.
            </p>
          </div>
        </div>

        {/* Case Studies List */}
        <div className="space-y-16 md:space-y-24 mb-24">
          {caseStudies.map((project, index) => {
            const isExpanded = expandedProject === project.id;
            const isEven = index % 2 === 0;

            return (
              <div 
                key={project.id} 
                className={`grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center border-b border-outline/10 pb-16 md:pb-20 last:border-0`}
              >
                {/* Visual Diagram - Alternating order on desktop */}
                <div className={`lg:col-span-5 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                  <div className="relative group overflow-hidden rounded-xl shadow-xs transition-all duration-300 hover:shadow-md">
                    {project.svg}
                  </div>
                </div>

                {/* Case Study Content */}
                <div className={`lg:col-span-7 space-y-6 ${isEven ? 'lg:order-2 lg:pl-8' : 'lg:order-1 lg:pr-8'}`}>
                  <div className="flex items-center gap-4">
                    <span className="font-headline-sm text-lg text-primary font-bold">
                      Case Study {project.number}
                    </span>
                    <span className="h-px bg-outline/20 flex-1"></span>
                    <span className="font-label-md text-xs text-secondary tracking-widest uppercase">
                      {project.category}
                    </span>
                  </div>

                  <h3 className="font-headline-md text-2xl md:text-3xl text-on-surface leading-tight font-medium">
                    {project.title}
                  </h3>

                  <p className="font-body-lg text-body-md md:text-body-lg text-secondary leading-relaxed">
                    {project.description}
                  </p>

                  {/* Badges */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.tech.map((t, idx) => (
                      <span 
                        key={idx} 
                        className="bg-surface-container text-primary font-label-md text-xs px-3 py-1.5 rounded-md font-medium"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Toggle Technical Deep Dive */}
                  <div className="pt-4">
                    <button
                      onClick={() => toggleProject(project.id)}
                      className="inline-flex items-center justify-center gap-2 border border-primary text-primary px-5 py-2.5 font-label-md text-xs uppercase tracking-widest hover:bg-primary/5 transition-all rounded-lg"
                    >
                      <span>{isExpanded ? 'Hide Engineering Specs' : 'View Engineering Specs'}</span>
                      <span className="material-symbols-outlined text-sm font-bold">
                        {isExpanded ? 'keyboard_arrow_up' : 'keyboard_arrow_down'}
                      </span>
                    </button>
                  </div>

                  {/* Expandable Technical Specifications */}
                  {isExpanded && (
                    <div className="bg-surface-container-low p-6 rounded-xl border border-outline/10 mt-6 space-y-4 animate-slideDown">
                      <div>
                        <h4 className="font-label-md text-xs text-primary uppercase tracking-widest mb-1 font-bold">
                          The Challenge
                        </h4>
                        <p className="font-body-md text-secondary leading-relaxed">
                          {project.challenge}
                        </p>
                      </div>
                      <div>
                        <h4 className="font-label-md text-xs text-primary uppercase tracking-widest mb-1 font-bold">
                          Engineering Complexity
                        </h4>
                        <p className="font-body-md text-secondary leading-relaxed">
                          {project.complexity}
                        </p>
                      </div>
                      <div>
                        <h4 className="font-label-md text-xs text-primary uppercase tracking-widest mb-1 font-bold">
                          Outcome & Solution
                        </h4>
                        <p className="font-body-md text-secondary leading-relaxed">
                          {project.solution}
                        </p>
                      </div>
                    </div>
                  )}

                </div>
              </div>
            );
          })}
        </div>

        {/* Personal Projects Section */}
        <div className="pt-16 border-t border-outline/10">
          <div className="mb-10">
            <span className="font-label-md text-label-sm md:text-label-md text-secondary uppercase tracking-[0.2em] block mb-3">
              Web Applications
            </span>
            <h3 className="font-headline-md text-2xl md:text-3xl text-on-surface">
              Personal Projects
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
            {personalProjects.map((p) => (
              <div 
                key={p.id} 
                className="group bg-surface-container-low rounded-2xl border border-outline/10 overflow-hidden shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="aspect-[16/9] w-full overflow-hidden bg-surface-container-high border-b border-outline/10">
                    <img 
                      src={p.image} 
                      alt={p.title} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6 space-y-4">
                    <h4 className="font-headline-sm text-xl text-on-surface font-semibold group-hover:text-primary transition-colors">
                      {p.title}
                    </h4>
                    <p className="font-body-md text-sm text-secondary leading-relaxed">
                      {p.description}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0 space-y-4">
                  <div className="flex flex-wrap gap-1.5">
                    {p.tech.map((t, idx) => (
                      <span 
                        key={idx} 
                        className="bg-surface px-2.5 py-1 rounded text-xs text-secondary font-label-md border border-outline/5"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <a 
                    href={p.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 text-primary font-label-md text-xs uppercase tracking-widest font-bold group/btn pt-2 hover:opacity-80 transition-opacity"
                  >
                    <span>Visit Live Portal</span>
                    <span className="material-symbols-outlined text-sm font-bold transition-transform group-hover/btn:translate-x-1">
                      arrow_forward
                    </span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Projects;
