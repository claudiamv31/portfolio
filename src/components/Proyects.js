import { useState } from 'react';
import clavtvImg from '../assets/clavtv.png';
import dianaflow from '../assets/dianaflow.png';
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
      subtitle: 'Optimized XML-to-PDF generation engine using FastReport.',
      description:
        'Engineered a high-efficiency document service that parses Mexican Tax Authority (SAT) XML invoices and compiles them into standardized PDFs. By refactoring the data extraction and layout mapping pipeline, the new service cuts document generation time by 50% compared to the legacy system.',
      tech: ['.NET Core', 'C#', 'XML/CFDI', 'FastReport', 'Optimization'],
      challenge:
        'The legacy document generation system was slow and resource-heavy, causing bottlenecks and delays when compiling multi-page XML invoices with extensive transaction lists during peak billing periods.',
      complexity:
        'Streamlined the entire data pipeline into a lightweight, linear architecture. Developed a clean traversal engine in C# that reads the XML structure, extracts the required financial data node by node, maps and formats the information directly into FastReport templates, and outputs the structured .fr3 file to render the final PDF instantly.',
      solution:
        'Halved the document generation time (50% speed increase) across the platform, eliminated processing queues, and drastically improved the user experience during massive payroll or invoicing cycles.',
      svg: (
        <svg
          viewBox="0 0 400 250"
          className="w-full h-full bg-[#efeeec] text-primary p-4 rounded-xl border border-outline/10"
        >
          {/* Definición de la flecha */}
          <defs>
            <marker
              id="arrow"
              viewBox="0 0 10 10"
              refX="6"
              refY="5"
              markerWidth="6"
              markerHeight="6"
              orient="auto-start-reverse"
            >
              <path d="M 0 1 L 10 5 L 0 9 z" fill="#475b4c" />
            </marker>
          </defs>

          {/* Bloque 1: Lectura XML */}
          <rect x="20" y="30" width="100" height="40" rx="6" fill="#475b4c" />
          <text x="70" y="54" fill="white" fontWeight="bold" fontSize="10" textAnchor="middle">
            1. Read SAT XML
          </text>
          <text x="70" y="65" fill="#d1e8d5" fontSize="7" textAnchor="middle">
            Load Invoice File
          </text>

          {/* Flecha 1 -> 2 */}
          <line
            x1="120"
            y1="50"
            x2="142"
            y2="50"
            stroke="#475b4c"
            strokeWidth="2"
            markerEnd="url(#arrow)"
          />

          {/* Bloque 2: Recorrer Nodos */}
          <rect
            x="150"
            y="30"
            width="100"
            height="40"
            rx="6"
            fill="white"
            stroke="#475b4c"
            strokeWidth="2"
          />
          <text x="200" y="54" fill="#1a1c1b" fontSize="10" fontWeight="bold" textAnchor="middle">
            2. Node Traversal
          </text>
          <text x="200" y="65" fill="#5e5f5c" fontSize="7" textAnchor="middle">
            Extract Data Keys
          </text>

          {/* Flecha 2 -> 3 (Baja y va a la izquierda) */}
          <line x1="200" y1="70" x2="200" y2="105" stroke="#475b4c" strokeWidth="2" />
          <line x1="200" y1="105" x2="70" y2="105" stroke="#475b4c" strokeWidth="2" />
          <line
            x1="70"
            y1="105"
            x2="70"
            y2="122"
            stroke="#475b4c"
            strokeWidth="2"
            markerEnd="url(#arrow)"
          />

          {/* Bloque 3: Recabar y Formatear */}
          <rect
            x="20"
            y="130"
            width="100"
            height="40"
            rx="6"
            fill="white"
            stroke="#475b4c"
            strokeWidth="2"
          />
          <text x="70" y="154" fill="#1a1c1b" fontSize="10" fontWeight="bold" textAnchor="middle">
            3. Data Mapping
          </text>
          <text x="70" y="165" fill="#5e5f5c" fontSize="7" textAnchor="middle">
            Format for Template
          </text>

          {/* Flecha 3 -> 4 */}
          <line
            x1="120"
            y1="150"
            x2="142"
            y2="150"
            stroke="#475b4c"
            strokeWidth="2"
            markerEnd="url(#arrow)"
          />

          {/* Bloque 4: Estructura FastReport (.fr3) */}
          <rect x="150" y="130" width="100" height="40" rx="6" fill="#475b4c" />
          <text x="200" y="154" fill="white" fontWeight="bold" fontSize="10" textAnchor="middle">
            4. FR3 Template
          </text>
          <text x="200" y="165" fill="#d1e8d5" fontSize="7" textAnchor="middle">
            Generate Layout Data
          </text>

          {/* Flecha 4 -> Salida Final */}
          <line
            x1="250"
            y1="150"
            x2="272"
            y2="150"
            stroke="#475b4c"
            strokeWidth="2"
            markerEnd="url(#arrow)"
          />

          {/* Bloque Final: PDF Listo */}
          <rect
            x="280"
            y="125"
            width="100"
            height="50"
            rx="6"
            fill="white"
            stroke="#ba1a1a"
            strokeWidth="1.5"
          />
          <text x="330" y="148" fill="#1a1c1b" fontSize="10" fontWeight="bold" textAnchor="middle">
            Final PDF Output
          </text>
          <text x="330" y="162" fill="#ba1a1a" fontSize="8" fontWeight="bold" textAnchor="middle">
            ⚡ 50% Faster Performance
          </text>
        </svg>
      ),
    },
    {
      id: 'payroll-modules',
      number: '02',
      category: 'FULL-STACK INTEGRATION & DATABASE OPTIMIZATION',
      title: 'Enterprise Payroll & Business Module Modernization',
      subtitle: 'Migrating desktop core features into secure, high-performance web tools.',
      description:
        'Collaborated on modernizing legacy desktop business and payroll functionality into responsive web modules, successfully integrating React frontends with secure .NET/C# REST APIs and optimized SQL Server databases.',
      tech: ['React', '.NET', 'C#', 'SQL Server', 'REST APIs'],
      challenge:
        'Legacy application logic required users to depend on isolated desktop environments, creating challenges for remote operations and causing slow data rendering when processing extensive payroll calculation histories.',
      complexity:
        'Engineered reusable, state-managed React components for the user interface and built robust backend API controllers in C# to handle secure business logic pipelines. Wrote and optimized complex SQL Server queries, using indexing and execution analysis to ensure high-speed data validation and accurate financial calculations.',
      solution:
        'Successfully transitioned core business features into modern web services, eliminating environment dependencies, streamlining internal processes, and drastically reducing data validation and query response times.',
      svg: (
        <svg
          viewBox="0 0 400 250"
          className="w-full h-full bg-[#efeeec] text-primary p-4 rounded-xl border border-outline/10"
        >
          {/* Definición de la flecha */}
          <defs>
            <marker
              id="arrow2"
              viewBox="0 0 10 10"
              refX="6"
              refY="5"
              markerWidth="6"
              markerHeight="6"
              orient="auto-start-reverse"
            >
              <path d="M 0 1 L 10 5 L 0 9 z" fill="#475b4c" />
            </marker>
          </defs>

          {/* Bloque 1: React Frontend (Izquierda) */}
          <rect x="15" y="45" width="95" height="50" rx="6" fill="#475b4c" />
          <text x="62" y="70" fill="white" fontWeight="bold" fontSize="10" textAnchor="middle">
            React Frontend
          </text>
          <text x="62" y="83" fill="#d1e8d5" fontSize="8" textAnchor="middle">
            UI Modules
          </text>

          {/* Flecha Frontend -> API Backend */}
          <line
            x1="110"
            y1="70"
            x2="137"
            y2="70"
            stroke="#475b4c"
            strokeWidth="2"
            markerEnd="url(#arrow2)"
          />

          {/* Bloque 2: API .NET / C# (Centro) */}
          <rect
            x="145"
            y="35"
            width="110"
            height="70"
            rx="6"
            fill="white"
            stroke="#475b4c"
            strokeWidth="2"
          />
          <text x="200" y="57" fill="#1a1c1b" fontSize="10" fontWeight="bold" textAnchor="middle">
            .NET / C# API
          </text>
          <text x="200" y="73" fill="#5e5f5c" fontSize="8" textAnchor="middle">
            REST Endpoints
          </text>
          <text x="200" y="86" fill="#5e5f5c" fontSize="8" textAnchor="middle">
            Controllers
          </text>

          {/* Flecha API Backend -> SQL Server */}
          <line
            x1="255"
            y1="70"
            x2="282"
            y2="70"
            stroke="#475b4c"
            strokeWidth="2"
            markerEnd="url(#arrow2)"
          />

          {/* Bloque 3: Base de Datos SQL (Derecha) */}
          <rect x="290" y="45" width="95" height="50" rx="6" fill="#475b4c" />
          <text x="337" y="70" fill="white" fontWeight="bold" fontSize="10" textAnchor="middle">
            SQL Server
          </text>
          <text x="337" y="83" fill="#d1e8d5" fontSize="8" textAnchor="middle">
            Optimized Queries
          </text>

          {/* Flujo de regreso inferior para la Validación de Datos */}
          {/* Línea hacia abajo desde SQL */}
          <line x1="337" y1="95" x2="337" y2="155" stroke="#475b4c" strokeWidth="2" />
          {/* Línea horizontal hacia la izquierda */}
          <line
            x1="337"
            y1="155"
            x2="262"
            y2="155"
            stroke="#475b4c"
            strokeWidth="2"
            markerEnd="url(#arrow2)"
          />

          {/* Bloque 4: Motor de Validación de Datos */}
          <rect
            x="135"
            y="130"
            width="120"
            height="50"
            rx="6"
            fill="white"
            stroke="#ba1a1a"
            strokeWidth="1.5"
          />
          <text x="195" y="152" fill="#1a1c1b" fontSize="9" fontWeight="bold" textAnchor="middle">
            Data Validation Flow
          </text>
          <text x="195" y="167" fill="#ba1a1a" fontSize="8" textAnchor="middle">
            Accurate Calculations
          </text>

          {/* Línea de retorno desde Validación hacia el Frontend */}
          <line
            x1="135"
            y1="155"
            x2="62"
            y2="155"
            stroke="#475b4c"
            strokeWidth="1.5"
            strokeDasharray="3"
          />
          <line
            x1="62"
            y1="155"
            x2="62"
            y2="103"
            stroke="#475b4c"
            strokeWidth="1.5"
            strokeDasharray="3"
            markerEnd="url(#arrow2)"
          />
        </svg>
      ),
    },
  ];

  const personalProjects = [
    {
      id: 'clavtv',
      title: 'ClavTV Show Explorer',
      description:
        'An interactive streaming encyclopedia and show discovery web portal that updates trending catalogs and allows users to search for matching series.',
      tech: ['React', 'JavaScript', 'HTML5', 'CSS3', 'TMDB API'],
      image: clavtvImg,
      link: 'https://clautv.netlify.app',
    },
    {
      id: 'pokeapp',
      title: 'PokeApp Wiki Directory',
      description:
        'A comprehensive Pokémon catalog displaying creature stats, elements, regional profiles, and an interactive favorite bookmarks manager.',
      tech: ['React', 'JavaScript', 'HTML5', 'CSS3', 'PokeAPI'],
      image: pokewiki,
      link: 'https://pokewikiapp.netlify.app',
    },
    {
      id: 'dianaflow',
      title: 'DianaFlow Wellness Tracker',
      description:
        'A personal cycle tracking web app with secure authentication, onboarding, calendar logging, statistics, archive history, and profile management.',
      tech: ['React', 'JavaScript', 'HTML5', 'CSS3', 'React Calendar'],
      image: dianaflow,
      link: 'https://dianaflow.netlify.app',
    },
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
              A collection of systems-level challenges solved through elegant backend engineering,
              robust API pipelines, and meticulous data validation.
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
                <div
                  className={`lg:col-span-7 space-y-6 ${isEven ? 'lg:order-2 lg:pl-8' : 'lg:order-1 lg:pr-8'}`}
                >
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
                      <span>
                        {isExpanded ? 'Hide Engineering Specs' : 'View Engineering Specs'}
                      </span>
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
