import React, { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="flex flex-col items-center">
            <img 
              src="/SDRMLogo2016-3 2.png" 
              alt="San Diego Rescue Mission" 
              className="h-12 md:h-16"
            />
            <span className="text-sm text-sdrm-gray mt-1">Changing Lives Since 1955</span>
          </div>
          
          <nav className="hidden md:flex space-x-6">
            <a 
              href="https://savings-tracker-frontend.vercel.app" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sdrm-navy hover:text-sdrm-blue transition-colors"
            >
              Budget Tool
            </a>
            <a 
              href="https://amazing-brigadeiros-75b20a.netlify.app/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sdrm-navy hover:text-sdrm-blue transition-colors"
            >
              Stabilization
            </a>
            <a 
              href="https://housing-contacts-database-production.up.railway.app" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sdrm-navy hover:text-sdrm-blue transition-colors"
            >
              Housing Database
            </a>
          </nav>

          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t">
            <a 
              href="https://savings-tracker-frontend.vercel.app" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block py-2 text-sdrm-navy hover:text-sdrm-blue"
            >
              Budget Tool
            </a>
            <a 
              href="https://amazing-brigadeiros-75b20a.netlify.app/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block py-2 text-sdrm-navy hover:text-sdrm-blue"
            >
              Stabilization
            </a>
            <a 
              href="https://housing-contacts-database-production.up.railway.app" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block py-2 text-sdrm-navy hover:text-sdrm-blue"
            >
              Housing Database
            </a>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;