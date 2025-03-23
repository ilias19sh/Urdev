import React, { useState, useEffect } from 'react';

interface StatProps {
  value: number;
  label: string;
  suffix?: string;
  duration?: number;
}

const StatCounter: React.FC<StatProps> = ({ value, label, suffix = '', duration = 2000 }) => {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    let start = 0;
    const end = value;
    const increment = end / (duration / 50);
    const timer = setInterval(() => {
      start += increment;
      setCount(Math.min(start, end));
      if (start >= end) clearInterval(timer);
    }, 50);
    
    return () => {
      clearInterval(timer);
    };
  }, [value, duration]);
  
  return (
    <div className="text-center p-6">
      <div className="text-4xl font-bold text-red-600 mb-2 flex justify-center">
        {Math.floor(count)}
        <span>{suffix}</span>
      </div>
      <div className="text-gray-600 font-medium">{label}</div>
    </div>
  );
};

const StatsSection = () => {
  const stats = [
    { value: 100, label: "Projets réalisés", suffix: "+" },
    { value: 98, label: "Clients satisfaits", suffix: "%" },
    { value: 3, label: "Années d'expérience" },
    { value: 24, label: "Heures de support/mois" }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl font-space-grotesk highlight-title">
            Urdev en chiffres
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-600">
            Des résultats concrets qui parlent d'eux-mêmes
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 glass-effect"
            >
              <StatCounter
                value={stat.value}
                label={stat.label}
                suffix={stat.suffix}
                duration={2000 + (index * 300)}
              />
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <div className="inline-block px-6 py-3 rounded-lg bg-red-50 border border-red-200">
            <p className="text-red-700">
              <span className="font-semibold">Notre engagement :</span> Qualité, réactivité et satisfaction client à 100%
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection; 