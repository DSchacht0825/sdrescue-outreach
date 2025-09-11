import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="relative bg-gradient-to-r from-sdrm-blue to-sdrm-navy py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Street Outreach Ministry
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            Bringing Hope Directly to the Streets
          </p>
          <p className="text-lg mb-8 text-gray-300">
            Our outreach team connects with individuals experiencing homelessness where they are, 
            providing immediate assistance, resources, and pathways to recovery.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-sdrm-gold hover:bg-amber-600 text-white px-8 py-3 rounded-lg text-lg font-semibold transition-colors">
              Request Outreach
            </button>
            <button className="bg-white hover:bg-gray-100 text-sdrm-navy px-8 py-3 rounded-lg text-lg font-semibold transition-colors">
              Join Our Team
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;