
import React, { forwardRef, useState } from 'react';
import { GithubIcon, LinkedinIcon, MailIcon } from './icons/SocialIcons';

const AnimatedSection = forwardRef<HTMLElement, { children: React.ReactNode, id: string }>(({ children, id }, ref) => {
    return (
        <section id={id} ref={ref} className="py-20 bg-slate-950/50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {children}
            </div>
        </section>
    );
});
AnimatedSection.displayName = 'AnimatedSection';

const SectionTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-dark-text relative pb-4">
        {children}
        <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-24 h-1 bg-brand-primary rounded"></span>
    </h2>
);


const Contact = forwardRef<HTMLElement>((props, ref) => {
    const [status, setStatus] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('Message sent successfully!');
        setTimeout(() => setStatus(''), 3000);
        // In a real app, you would handle form submission here (e.g., API call)
        (e.target as HTMLFormElement).reset();
    };


  return (
    <AnimatedSection id="contact" ref={ref}>
      <SectionTitle>Get In Touch</SectionTitle>
      <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
        <div className="flex flex-col">
            <h3 className="text-2xl font-bold text-dark-text mb-4">Let's Connect</h3>
            <p className="text-dark-subtext mb-6">
                I'm currently open to new opportunities and collaborations. If you have a project in mind or just want to say hi, feel free to reach out. I'll get back to you as soon as possible!
            </p>
            <div className="space-y-4">
                 <a href="mailto:your.email@example.com" className="flex items-center space-x-3 text-dark-subtext hover:text-brand-secondary transition-colors">
                    <MailIcon className="w-6 h-6" />
                    <span>your.email@example.com</span>
                </a>
                <a href="#" className="flex items-center space-x-3 text-dark-subtext hover:text-brand-secondary transition-colors">
                    <LinkedinIcon className="w-6 h-6" />
                    <span>linkedin.com/in/yourprofile</span>
                </a>
                <a href="#" className="flex items-center space-x-3 text-dark-subtext hover:text-brand-secondary transition-colors">
                    <GithubIcon className="w-6 h-6" />
                    <span>github.com/yourusername</span>
                </a>
            </div>
        </div>
        <form onSubmit={handleSubmit} className="space-y-6 bg-dark-card p-8 rounded-lg shadow-lg">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-dark-subtext">Name</label>
            <input type="text" id="name" name="name" required className="mt-1 block w-full bg-slate-700 border-slate-600 rounded-md shadow-sm py-2 px-3 text-dark-text focus:outline-none focus:ring-brand-primary focus:border-brand-primary" />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-dark-subtext">Email</label>
            <input type="email" id="email" name="email" required className="mt-1 block w-full bg-slate-700 border-slate-600 rounded-md shadow-sm py-2 px-3 text-dark-text focus:outline-none focus:ring-brand-primary focus:border-brand-primary" />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-dark-subtext">Message</label>
            <textarea id="message" name="message" rows={4} required className="mt-1 block w-full bg-slate-700 border-slate-600 rounded-md shadow-sm py-2 px-3 text-dark-text focus:outline-none focus:ring-brand-primary focus:border-brand-primary"></textarea>
          </div>
          <div>
            <button type="submit" className="w-full py-3 px-4 bg-brand-primary text-white font-semibold rounded-md hover:bg-brand-secondary transition-transform duration-300 hover:scale-105 shadow-lg">
              Send Message
            </button>
          </div>
          {status && <p className="text-center text-green-400">{status}</p>}
        </form>
      </div>
    </AnimatedSection>
  );
});
Contact.displayName = 'Contact';

export default Contact;
