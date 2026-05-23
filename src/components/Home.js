const Home = () => {
  return (
    <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop pt-24 pb-16 md:pt-32 md:pb-24" id="home">
      <div className="max-w-4xl">
        <p className="font-label-md text-label-sm md:text-label-md text-primary mb-6 uppercase tracking-[0.2em]">
          Full Stack Software Developer
        </p>
        
        <h1 className="font-headline-lg text-4xl md:text-headline-lg text-on-background mb-8 leading-[1.15]">
          Engineering digital stability through <span className="italic text-primary font-medium">precision</span> and <span className="italic text-primary font-medium">deliberate</span> software execution.
        </h1>
        
        <p className="font-body-lg text-body-md md:text-body-lg text-secondary max-w-2xl mb-8 leading-relaxed">
          I build scalable, data-intensive web applications with React and .NET, leveraging a strong QA background to deliver highly reliable production code.
        </p>
        
        <div className="flex flex-wrap items-center gap-4 mb-12 text-body-md text-secondary">
          <div className="flex items-center gap-2 bg-surface-container px-4 py-2 rounded-full border border-outline/10">
            <span className="material-symbols-outlined text-primary text-lg">location_on</span>
            <span>Based in Mexico</span>
          </div>
          <div className="flex items-center gap-2 bg-surface-container px-4 py-2 rounded-full border border-outline/10">
            <span className="material-symbols-outlined text-primary text-lg">flight_takeoff</span>
            <span>Open to Relocation (Guadalajara, CDMX, Monterrey, Querétaro)</span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <a 
            href="https://drive.google.com/file/d/1OcA_yAQcf28qbQaJ2RREURyepvVy4xK9/view?usp=sharing" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-primary text-on-primary px-8 py-4 font-label-md text-label-md uppercase tracking-widest hover:bg-primary-container transition-all shadow-sm rounded-lg"
          >
            <span className="material-symbols-outlined mr-2">download</span>
            Download Resume (PDF)
          </a>
          <a 
            href="https://github.com/claudiamv31" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center border border-primary text-primary px-8 py-4 font-label-md text-label-md uppercase tracking-widest hover:bg-primary/5 transition-all rounded-lg"
          >
            <span className="fa-brands fa-github mr-2 text-lg"></span>
            GitHub Profile
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;
