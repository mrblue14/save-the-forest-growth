
import React from 'react';
import { CreditCard, TreePine, BarChart3, Users } from 'lucide-react';

const steps = [
  {
    icon: CreditCard,
    title: 'Choose Your Plan',
    description: 'Select a monthly subscription tier that fits your impact goals and budget.',
    color: 'bg-forest-100 text-forest-600'
  },
  {
    icon: TreePine,
    title: 'Trees Get Planted',
    description: 'Your monthly contribution directly funds tree planting in African communities.',
    color: 'bg-nature-100 text-nature-600'
  },
  {
    icon: BarChart3,
    title: 'Track Your Impact',
    description: 'Monitor your environmental impact with real-time data and GPS-tagged photos.',
    color: 'bg-earth-100 text-earth-600'
  },
  {
    icon: Users,
    title: 'Support Communities',
    description: 'Your investment creates jobs and supports local families across Africa.',
    color: 'bg-accent/10 text-accent'
  }
];

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 lg:px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold font-display text-forest-800 mb-4">
            How It Works
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Four simple steps to start making a real difference for our planet and communities
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
              {/* Step Number */}
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-gradient-forest rounded-full flex items-center justify-center text-white font-bold text-sm z-10">
                {index + 1}
              </div>

              {/* Card */}
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 h-full">
                {/* Icon */}
                <div className={`w-16 h-16 ${step.color} rounded-2xl flex items-center justify-center mb-6`}>
                  <step.icon className="h-8 w-8" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold font-display text-forest-800 mb-4">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Connector Arrow (desktop only) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-20">
                  <div className="w-8 h-0.5 bg-gradient-to-r from-forest-300 to-forest-500"></div>
                  <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-0 h-0 border-l-4 border-l-forest-500 border-t-2 border-t-transparent border-b-2 border-b-transparent"></div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-md mx-auto">
            <h3 className="text-2xl font-bold font-display text-forest-800 mb-4">
              Ready to Start Planting?
            </h3>
            <p className="text-gray-600 mb-6">
              Join our community and begin your reforestation journey today.
            </p>
            <button className="w-full bg-gradient-forest text-white font-semibold py-3 px-6 rounded-xl hover:opacity-90 transition-all">
              Choose Your Plan
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
