import React from 'react';

const FoundersLetter = () => {
  return (
    <section className="py-32 mt-20 relative overflow-hidden">
      <div className="background-blur absolute opacity-20"></div>
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-12 animate-fade-in">
          <h1 className="font-lexend text-4xl md:text-5xl font-bold mb-8 bg-accent/10 inline-block px-4 py-1 rounded animate-fade-in">Founder's Letter</h1>
          <p className="text-lg leading-relaxed">
            Welcome to our company. We are excited to have you on board and look forward to achieving great things together.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FoundersLetter;