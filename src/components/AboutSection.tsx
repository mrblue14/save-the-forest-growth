
import React from 'react';
import { Button } from '@/components/ui/button';
import { TreePine, Users, Globe, Target, ArrowRight } from 'lucide-react';

const AboutSection = () => {
  const milestones = [
    { year: '2020', event: 'SaveTheForest Founded', desc: 'Started with a mission to restore African forests' },
    { year: '2021', event: '50,000 Trees Planted', desc: 'Reached our first major milestone' },
    { year: '2022', event: '100 Communities Engaged', desc: 'Expanded to support local families' },
    { year: '2024', event: '250,000+ Trees Growing', desc: 'Creating lasting environmental impact' }
  ];

  const values = [
    {
      icon: TreePine,
      title: 'Environmental Impact',
      description: 'Every tree we plant contributes to carbon sequestration, biodiversity, and climate resilience.'
    },
    {
      icon: Users,
      title: 'Community Empowerment',
      description: 'We create sustainable jobs and support local families while restoring their natural environment.'
    },
    {
      icon: Globe,
      title: 'Global Responsibility',
      description: 'Addressing climate change requires collective action across borders and communities.'
    },
    {
      icon: Target,
      title: 'Transparent Impact',
      description: 'Every dollar is tracked, every tree is GPS-verified, and every impact is measurable.'
    }
  ];

  return (
    <section id="about" className="py-24 bg-gradient-to-br from-white to-sage-50">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center bg-forest-100 text-forest-700 px-6 py-3 rounded-full text-sm font-semibold mb-6">
            <TreePine className="w-4 h-4 mr-2" />
            Our Story
          </div>
          <h2 className="text-4xl md:text-6xl font-bold font-display text-forest-800 mb-8 leading-tight">
            Planting Hope, <span className="text-gradient-forest">Growing Change</span>
          </h2>
          <p className="text-xl md:text-2xl text-sage-600 max-w-4xl mx-auto leading-relaxed">
            SaveTheForest was born from a simple belief: that every tree planted today creates a better tomorrow. 
            We're not just restoring forests—we're rebuilding communities, fighting climate change, and creating 
            lasting hope for future generations.
          </p>
        </div>

        {/* Mission Statement */}
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-10 mb-16 shadow-lg border border-sage-200 max-w-5xl mx-auto">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold font-display text-forest-800 mb-4">Our Mission</h3>
            <p className="text-lg text-sage-700 leading-relaxed">
              To combat deforestation and climate change through transparent, community-driven reforestation 
              initiatives that create sustainable livelihoods and restore critical ecosystems across Africa.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-forest-600 mb-2">254,892</div>
              <div className="text-sage-600 font-medium">Trees Planted & Growing</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-mint-600 mb-2">5,847</div>
              <div className="text-sage-600 font-medium">Families Supported</div>
            </div>
          </div>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {values.map((value, index) => (
            <div key={value.title} className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-sage-200 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="bg-forest-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                <value.icon className="w-8 h-8 text-forest-600" />
              </div>
              <h3 className="text-xl font-bold font-display text-forest-800 mb-4 text-center">
                {value.title}
              </h3>
              <p className="text-sage-600 text-center leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>

        {/* Timeline */}
        <div className="bg-gradient-to-r from-forest-500 to-mint-500 rounded-3xl p-10 text-white mb-16">
          <h3 className="text-3xl font-bold font-display text-center mb-12">Our Journey</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {milestones.map((milestone, index) => (
              <div key={milestone.year} className="text-center">
                <div className="bg-white/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold">{milestone.year}</span>
                </div>
                <h4 className="text-lg font-semibold mb-2">{milestone.event}</h4>
                <p className="text-sm opacity-90">{milestone.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h3 className="text-3xl font-bold font-display text-forest-800 mb-6">
            Ready to Join Our Mission?
          </h3>
          <p className="text-xl text-sage-600 mb-8 max-w-2xl mx-auto">
            Every subscription, every tree, every action matters. Be part of the solution.
          </p>
          <Button className="bg-gradient-warm hover:shadow-warm text-white font-semibold px-10 py-6 text-xl rounded-2xl group shadow-lg transform hover:scale-105 transition-all duration-300">
            Start Planting Trees Today
            <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
