const Resume = () => {
  const experiences = [
    {
      role: 'Full Stack Software Developer',
      company: 'Enterprise Solutions',
      period: 'Dec 2024 - Present',
      details: [
        'Build and maintain scalable web-based portals utilizing .NET Core backend APIs and React frontend components.',
        'Optimize relational databases (SQL Server, MySQL) by restructuring schemas and indexes to handle calculation-heavy payroll systems.',
        'Design custom file encoders and XML/PDF layout compilers complying with strict government standard layouts (SAT CFDI, IMSS IDSE).',
      ],
    },
    {
      role: 'QA Automation Engineer',
      company: 'Software Quality Systems',
      period: 'Prior Experience',
      details: [
        'Wrote robust end-to-end automated scripts utilizing frameworks like Playwright and Selenium to ensure release stability.',
        'Validated RESTful interfaces with comprehensive Postman assertion runs, asserting status codes, body payloads, and security states.',
        'Analyzed core application logic to map test matrices, executing complete regression cycles and reducing release hotfixes.',
      ],
    },
  ];

  return (
    <section
      className="bg-surface-container-low py-16 md:py-24 border-t border-b border-outline/10"
      id="resume"
    >
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-start">
          {/* Left Column: Timeline */}
          <div className="lg:col-span-7 space-y-8">
            <div>
              <span className="font-label-md text-label-sm md:text-label-md text-secondary uppercase tracking-[0.2em] block mb-4">
                Career History
              </span>
              <h2 className="font-headline-md text-3xl md:text-headline-md text-on-surface">
                Work Experience
              </h2>
            </div>

            <div className="space-y-8 pl-4 border-l border-outline/25">
              {experiences.map((exp, idx) => (
                <div key={idx} className="relative space-y-2">
                  {/* Timeline point */}
                  <span className="absolute -left-[21px] top-1.5 h-3.5 w-3.5 rounded-full bg-primary border-2 border-surface"></span>

                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="font-headline-sm text-lg md:text-xl font-bold text-on-surface">
                      {exp.role}
                    </h3>
                    <span className="font-label-md text-xs text-secondary bg-surface-container px-3 py-1 rounded-full border border-outline/5">
                      {exp.period}
                    </span>
                  </div>

                  <p className="font-body-md text-sm text-primary font-medium">{exp.company}</p>

                  <ul className="space-y-2 text-sm font-body-md text-secondary leading-relaxed pl-4 list-disc">
                    {exp.details.map((detail, dIdx) => (
                      <li key={dIdx}>{detail}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Download Actions */}
          <div className="lg:col-span-5 lg:pl-6 space-y-6">
            <div className="bg-surface p-6 md:p-8 rounded-2xl border border-outline/10 shadow-sm space-y-6">
              <h3 className="font-headline-sm text-lg font-bold text-on-surface border-b border-outline/10 pb-4">
                Curriculum Vitae
              </h3>
              <p className="font-body-md text-sm text-secondary leading-relaxed">
                Access my complete professional CV detailing education, certifications, frameworks,
                and tools. Available in both English and Spanish.
              </p>

              <div className="space-y-4">
                {/* English CV */}
                <div className="flex items-center justify-between p-4 rounded-xl bg-surface-container-low border border-outline/5 hover:border-primary/20 transition-all group">
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-primary text-3xl">
                      description
                    </span>
                    <div>
                      <h4 className="font-headline-sm text-sm font-bold text-on-surface">
                        Claudia Vega - CV
                      </h4>
                      <p className="font-body-md text-xs text-secondary">English Version</p>
                    </div>
                  </div>
                  <a
                    href="https://drive.google.com/file/d/1wFoyOVi_QzhVNHnL4fDBecnMh0eKppyn/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-surface text-primary border border-outline/15 hover:bg-primary hover:text-white rounded-lg transition-all"
                    title="View Document"
                  >
                    <span className="material-symbols-outlined text-xl flex items-center justify-center">
                      open_in_new
                    </span>
                  </a>
                </div>

                {/* Spanish CV */}
                <div className="flex items-center justify-between p-4 rounded-xl bg-surface-container-low border border-outline/5 hover:border-primary/20 transition-all group">
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-primary text-3xl">
                      description
                    </span>
                    <div>
                      <h4 className="font-headline-sm text-sm font-bold text-on-surface">
                        Claudia Vega - CV
                      </h4>
                      <p className="font-body-md text-xs text-secondary">Spanish Version</p>
                    </div>
                  </div>
                  <a
                    href="https://drive.google.com/file/d/1TyWSNuit12xp8HG8zIN_2SwsM8O17FaY/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-surface text-primary border border-outline/15 hover:bg-primary hover:text-white rounded-lg transition-all"
                    title="View Document"
                  >
                    <span className="material-symbols-outlined text-xl flex items-center justify-center">
                      open_in_new
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
