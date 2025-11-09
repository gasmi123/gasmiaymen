
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark-card">
      <div className="container mx-auto py-4 px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm text-dark-subtext">
          &copy; {new Date().getFullYear()} Your Name. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
