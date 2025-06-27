
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Play } from 'lucide-react';

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
          alt="African reforestation landscape"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 lg:px-6 text-center text-white">
        <div className="max-w-4xl mx-auto animate-fade-in">
          {/* Badge */}
          <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
            <span className="text-sm font-medium">🌱 Transparent Reforestation in Africa</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-display mb-6">
            <span className="block">Planting Hope,</span>
            <span className="block text-nature-300">Growing Change</span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed">
            Join thousands of changemakers in our mission to restore African forests through transparent monthly subscriptions. 
            Every tree planted supports local communities and fights climate change.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              size="lg" 
              className="bg-gradient-forest hover:opacity-90 text-white font-semibold px-8 py-4 text-lg group"
            >
              Plant Trees Monthly
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white/30 text-white hover:bg-white/10 px-8 py-4 text-lg backdrop-blur-sm"
            >
              <Play className="mr-2 h-5 w-5" />
              Watch Our Story
            </Button>
          </div>

          {/* Impact Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold font-display text-nature-300 mb-1">
                250K+
              </div>
              <div className="text-sm text-gray-300">Trees Planted</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold font-display text-nature-300 mb-1">
                1,200
              </div>
              <div className="text-sm text-gray-300">Hectares Restored</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold font-display text-nature-300 mb-1">
                5,800
              </div>
              <div className="text-sm text-gray-300">Families Supported</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold font-display text-nature-300 mb-1">
                120T
              </div>
              <div className="text-sm text-gray-300">CO₂ Sequestered</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
