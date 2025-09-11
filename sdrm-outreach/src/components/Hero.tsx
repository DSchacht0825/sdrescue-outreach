import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="relative bg-transparent py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-6" style={{textShadow: '2px 2px 4px rgba(0,0,0,0.8)'}}>
            Street Outreach Ministry
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-100" style={{textShadow: '1px 1px 3px rgba(0,0,0,0.7)'}}>
            Bringing Hope Directly to the Streets
          </p>
          <p className="text-lg mb-8 text-gray-100" style={{textShadow: '1px 1px 3px rgba(0,0,0,0.7)'}}>
            Our outreach team connects with individuals experiencing homelessness where they are, 
            providing immediate assistance, resources, and pathways to recovery.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;