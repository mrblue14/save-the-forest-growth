
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Play, Shield, Award, TreePine, Users2 } from 'lucide-react';

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Enhanced Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
          alt="African reforestation landscape showing tree planting efforts"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-forest-900/60 via-forest-800/40 to-forest-900/70"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 lg:px-8 text-center text-white">
        <div className="max-w-5xl mx-auto animate-fade-in">
          {/* Enhanced Trust Badge */}
          <div className="inline-flex items-center bg-white/15 backdrop-blur-soft rounded-full px-6 py-3 mb-8 border border-white/20 text-sm md:text-base">
            <TreePine className="w-5 h-5 mr-3 text-mint-300" />
            <span className="font-medium">
              🌍 <strong>2,847 active members</strong> • <strong>254,892 trees planted</strong> • <strong>12 African countries</strong>
            </span>
          </div>

          {/* Updated Main Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-display mb-6 leading-tight">
            <span className="block text-white drop-shadow-lg">Join the Movement:</span>
            <span className="block text-gradient-mint drop-shadow-lg">Plant Hope, Grow Global Change</span>
          </h1>

          {/* New Subheading */}
          <div className="space-y-4 mb-10">
            <p className="text-xl md:text-2xl lg:text-3xl text-gray-100 max-w-4xl mx-auto leading-relaxed font-light">
              Every tree planted fights climate change. <span className="text-gold-300 font-medium">Start your forest impact today.</span>
            </p>
            <p className="text-base md:text-lg text-mint-200 max-w-3xl mx-auto flex items-center justify-center flex-wrap gap-2">
              <Shield className="w-5 h-5" />
              Every tree GPS-verified • Real-time impact tracking • Cancel anytime
            </p>
          </div>

          {/* Enhanced CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center mb-8">
            <Button 
              size="lg" 
              className="bg-[#2D7D32] hover:bg-[#1B5E20] hover:shadow-2xl text-white font-semibold px-8 md:px-12 py-4 md:py-6 text-lg md:text-xl rounded-2xl group shadow-2xl border-2 border-[#4CAF50]/20 backdrop-blur-sm transform hover:scale-105 transition-all duration-300 min-h-[48px] md:min-h-[60px] w-full sm:w-auto"
            >
              🌱 Plant My First Tree
              <ArrowRight className="ml-3 h-5 w-5 md:h-6 md:w-6 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-white/40 text-white hover:bg-white/15 px-8 md:px-12 py-4 md:py-6 text-lg md:text-xl rounded-2xl backdrop-blur-soft group shadow-xl transition-all duration-300 min-h-[48px] md:min-h-[60px] w-full sm:w-auto"
            >
              <Play className="mr-3 h-5 w-5 md:h-6 md:w-6 group-hover:scale-110 transition-transform" />
              See How It Works
            </Button>
          </div>

          {/* Trust Signal Below CTA */}
          <div className="mb-12">
            <p className="text-base md:text-lg text-mint-200 font-medium">
              Join 1,247 forest heroes worldwide
            </p>
          </div>

          {/* Enhanced Trust Indicators */}
          <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8 mb-16 text-sm text-gray-200">
            <div className="flex items-center bg-white/10 px-3 py-2 rounded-full backdrop-blur-sm">
              <Award className="w-4 h-4 md:w-5 md:h-5 mr-2 text-gold-300" />
              <span className="text-xs md:text-sm">UN Climate Partner</span>
            </div>
            <div className="flex items-center bg-white/10 px-3 py-2 rounded-full backdrop-blur-sm">
              <Shield className="w-4 h-4 md:w-5 md:h-5 mr-2 text-mint-300" />
              <span className="text-xs md:text-sm">GPS-Verified Planting</span>
            </div>
            <div className="flex items-center bg-white/10 px-3 py-2 rounded-full backdrop-blur-sm">
              <div className="w-3 h-3 bg-forest-400 rounded-full mr-2 animate-pulse"></div>
              <span className="text-xs md:text-sm">Carbon Neutral Certified</span>
            </div>
            <div className="flex items-center bg-white/10 px-3 py-2 rounded-full backdrop-blur-sm">
              <Users2 className="w-4 h-4 md:w-5 md:h-5 mr-2 text-gold-300" />
              <span className="text-xs md:text-sm">5,847 Families Supported</span>
            </div>
          </div>

          {/* Enhanced Impact Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-5xl mx-auto">
            {[
              { value: "254K+", label: "Trees Planted", color: "text-forest-300" },
              { value: "1,249", label: "Hectares Restored", color: "text-mint-300" },
              { value: "5,847", label: "Families Supported", color: "text-gold-300" },
              { value: "127T", label: "CO₂ Sequestered", color: "text-sky-300" }
            ].map((stat, index) => (
              <div key={stat.label} className="text-center bg-white/10 backdrop-blur-soft rounded-2xl md:rounded-3xl p-4 md:p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className={`text-2xl md:text-3xl lg:text-4xl font-bold font-display ${stat.color} mb-2`}>
                  {stat.value}
                </div>
                <div className="text-xs md:text-sm text-gray-300 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/70 animate-float">
        <div className="w-8 h-12 border-2 border-white/30 rounded-full flex justify-center backdrop-blur-sm">
          <div className="w-1.5 h-4 bg-white/60 rounded-full mt-3 animate-pulse"></div>
        </div>
        <div className="text-xs mt-2 font-medium">Scroll to explore</div>
      </div>
    </section>
  );
};

export default HeroSection;
