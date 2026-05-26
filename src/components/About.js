const About = () => {
  return (
    <section id="about" className="bg-surface py-16 md:py-24 border-t border-outline/10">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-start">
          {/* Left Column - Headline */}
          <div className="lg:col-span-5">
            <span className="font-label-md text-label-sm md:text-label-md text-secondary uppercase tracking-[0.2em] block mb-4">
              Professional Profile
            </span>
            <h2 className="font-headline-md text-3xl md:text-headline-md text-on-surface leading-tight">
              A computer engineer who designs for{' '}
              <span className="italic text-primary font-medium">stability</span> and builds for
              scale.
            </h2>
          </div>

          {/* Right Column - Narrative */}
          <div className="lg:col-span-7 font-body-lg text-body-md md:text-body-lg text-secondary space-y-6 leading-relaxed">
            <p>
              I am a Computer Engineer with a deep passion for full-stack web development. I thrive
              on translating complex business requirements into elegant, high-performance digital
              systems.
            </p>
            <p>
              My engineering approach is uniquely shaped by my background in Quality Assurance. I
              don't just write software that works; I design it to withstand edge cases, high
              concurrency, and unexpected conditions. This dual perspective allows me to bridge the
              gap between fast feature delivery and rigorous operational stability.
            </p>
            <p>
              I thrive on tackling complex technical challenges, consistently leveraging them to
              optimize system performance and expand my engineering capabilities.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
