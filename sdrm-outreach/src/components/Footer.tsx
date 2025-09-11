import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-sdrm-navy text-white py-8">
      <div className="container mx-auto px-4">
        <div className="text-center mb-6">
          <h3 className="text-xl font-semibold mb-2">SDRM Outreach Ministry</h3>
          <p className="text-gray-300">
            Serving San Diego's unsheltered community with compassion and dignity
          </p>
        </div>
        
        <div className="text-center text-gray-300">
          <p className="mb-2">Part of San Diego Rescue Mission</p>
          <p>&copy; 2024 San Diego Rescue Mission. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;