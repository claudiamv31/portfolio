const Contact = () => {
  return (
    <section className="bg-surface py-16 md:py-24" id="contact">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        {/* Banner Card */}
        <div className="relative bg-primary text-on-primary p-8 md:p-16 rounded-3xl overflow-hidden shadow-md mb-16 select-none">
          {/* Decorative background waves */}
          <div className="absolute inset-0 pointer-events-none opacity-10">
            <svg viewBox="0 0 800 400" className="w-full h-full object-cover">
              <path
                d="M 0 300 C 200 200, 400 400, 800 300 C 900 200, 1000 400, 1200 300 L 1200 400 L 0 400 Z"
                fill="white"
              />
              <path
                d="M 0 350 C 300 280, 500 450, 800 380 C 1000 320, 1100 450, 1200 380 L 1200 400 L 0 400 Z"
                fill="white"
              />
            </svg>
          </div>

          <div className="relative z-10 max-w-2xl space-y-6">
            <h2 className="font-headline-md text-3xl md:text-5xl text-white font-medium leading-[1.15]">
              Let's build reliable, scalable systems.
            </h2>
            <p className="font-body-lg text-body-md md:text-body-lg text-[#d1e8d5] leading-relaxed">
              I am currently accepting inquiries for Full Stack Developer roles. If you need an
              engineer who natively understands stability, test coverage, and optimized backend
              logic, let's connect.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href="mailto:claudiavega3108@gmail.com"
                className="inline-flex items-center justify-center bg-white text-primary hover:bg-[#faf9f7] px-8 py-4 font-label-md text-label-md uppercase tracking-widest transition-all rounded-lg font-bold"
              >
                <span className="material-symbols-outlined mr-2">send</span>
                Send Email
              </a>
              <a
                href="https://drive.google.com/file/d/1wFoyOVi_QzhVNHnL4fDBecnMh0eKppyn/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center border border-white/40 hover:border-white text-white hover:bg-white/10 px-8 py-4 font-label-md text-label-md uppercase tracking-widest transition-all rounded-lg"
              >
                <span className="material-symbols-outlined mr-2">download</span>
                Download CV
              </a>
            </div>
          </div>
        </div>

        {/* Footer Navigation */}
        <div className="flex flex-col md:flex-row items-center justify-between border-t border-outline/10 pt-8 gap-gutter text-secondary">
          <div className="font-headline-sm text-lg font-bold text-on-surface tracking-tighter">
            Claudia Vega
          </div>

          <div className="text-center font-body-md text-xs md:text-sm">
            &copy; {new Date().getFullYear()} Claudia Vega. All rights reserved. Relentless
            execution.
          </div>

          <div className="flex items-center gap-6">
            <a
              href="mailto:claudiavega3108@gmail.com"
              className="text-secondary hover:text-primary transition-colors text-sm font-label-md uppercase tracking-wider flex items-center gap-1.5"
            >
              <span className="material-symbols-outlined text-base">mail</span>
              Email
            </a>
            <a
              href="https://www.linkedin.com/in/claudia-mariana-vega-soto-102572211/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary hover:text-primary transition-colors text-sm font-label-md uppercase tracking-wider flex items-center gap-1.5"
            >
              <span className="fa-brands fa-linkedin text-base"></span>
              LinkedIn
            </a>
            <a
              href="https://github.com/claudiamv31"
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary hover:text-primary transition-colors text-sm font-label-md uppercase tracking-wider flex items-center gap-1.5"
            >
              <span className="fa-brands fa-github text-base"></span>
              GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
