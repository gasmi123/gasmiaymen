
import React, { forwardRef } from 'react';
// @ts-ignore: image import without type declaration
import image from './images/gasmiaymen.jpg';

const Hero = forwardRef<HTMLElement>((props, ref) => {
  return (
    <section id="home" ref={ref} className="min-h-screen flex items-center justify-center bg-dark-bg py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-12 animate-fade-in-up">
          <div className="md:w-1/2 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-dark-text mb-4">
              Gasmi Aymen 
            </h1>
            <p className="text-2xl md:text-3xl text-brand-secondary mb-6 font-medium">
              Full-Stack Developer
            </p>
            <p className="text-lg text-dark-subtext leading-relaxed max-w-xl mx-auto md:mx-0">
              I specialize in building exceptional, high-quality websites and applications. With a passion for clean code and user-centric design, I turn complex problems into elegant, intuitive solutions.
            </p>
            <div className="mt-8 flex justify-center md:justify-start gap-4">
               <a href="#contact" className="px-6 py-3 bg-brand-primary text-white font-semibold rounded-md hover:bg-brand-secondary transition-transform duration-300 hover:scale-105 shadow-lg">
                Get In Touch
              </a>
              <a href="/resume.pdf" download className="px-6 py-3 bg-dark-card text-dark-text font-semibold rounded-md hover:bg-slate-700 transition-transform duration-300 hover:scale-105 shadow-lg">
                Download Resume
              </a>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden shadow-2xl border-4 border-brand-secondary">
              <img
                src={image}
                alt="Professional portrait of Jane Doe"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

Hero.displayName = 'Hero';

export default Hero;
