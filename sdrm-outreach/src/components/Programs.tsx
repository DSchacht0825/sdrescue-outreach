import React from 'react';

const Programs = () => {
  const outreachServices = [
    {
      id: 1,
      name: 'Street Engagement',
      description: 'Direct contact with unsheltered individuals to build trust and offer assistance',
      icon: '🤝'
    },
    {
      id: 2,
      name: 'Resource Navigation',
      description: 'Connecting individuals to shelters, healthcare, and essential services',
      icon: '🧭'
    },
    {
      id: 3,
      name: 'Crisis Intervention',
      description: 'Immediate support during mental health or substance use crises',
      icon: '🆘'
    },
    {
      id: 4,
      name: 'Mobile Hygiene Services',
      description: 'Showers, clean clothes, and hygiene supplies through our mobile unit',
      icon: '🚿'
    },
    {
      id: 5,
      name: 'Food & Water Distribution',
      description: 'Regular distribution of meals, water, and snacks at encampments',
      icon: '🍞'
    },
    {
      id: 6,
      name: 'Housing First Advocacy',
      description: 'Rapid rehousing assistance and permanent supportive housing connections',
      icon: '🏠'
    }
  ];

  return (
    <section id="services" className="py-16 bg-transparent">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-sdrm-navy mb-4">
            Outreach Services
          </h2>
          <p className="text-lg text-sdrm-gray max-w-2xl mx-auto">
            Our comprehensive outreach approach meets people where they are, 
            providing immediate relief while building pathways to permanent solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {outreachServices.map(service => (
            <div key={service.id} className="bg-sdrm-light p-6 rounded-lg hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-sdrm-navy mb-2">
                {service.name}
              </h3>
              <p className="text-sdrm-gray">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Programs;