
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Play, Shield, Award, TreePine, Users2 } from 'lucide-react';

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Enhanced Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
          alt="African reforestation landscape showing tree planting efforts"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-forest-900/60 via-forest-800/40 to-forest-900/70"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 lg:px-8 text-center text-white">
        <div className="max-w-5xl mx-auto">
          {/* Enhanced Trust Badge */}
          <div className="inline-flex items-center bg-white/15 backdrop-blur-sm rounded-full px-4 sm:px-6 py-2 sm:py-3 mb-6 sm:mb-8 border border-white/20 text-xs sm:text-sm md:text-base">
            <TreePine className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3 text-mint-300" />
            <span className="font-medium">
              🌍 <strong>2,847 active members</strong> • <strong>254,892 trees planted</strong>
            </span>
          </div>

          {/* Updated Main Headline */}
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold font-display mb-4 sm:mb-6 leading-tight">
            <span className="block text-white drop-shadow-lg">Join the Movement:</span>
            <span className="block text-gradient-mint drop-shadow-lg">Plant Hope, Grow Global Change</span>
          </h1>

          {/* New Subheading */}
          <div className="space-y-3 sm:space-y-4 mb-8 sm:mb-10">
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-100 max-w-4xl mx-auto leading-relaxed font-light px-4">
              Every tree planted fights climate change. <span className="text-gold-300 font-medium">Start your forest impact today.</span>
            </p>
            <p className="text-sm sm:text-base md:text-lg text-mint-200 max-w-3xl mx-auto flex items-center justify-center flex-wrap gap-2 px-4">
              <Shield className="w-4 h-4 sm:w-5 sm:h-5" />
              Every tree GPS-verified • Real-time impact tracking • Cancel anytime
            </p>
          </div>

          {/* Enhanced CTA Buttons */}
          <div className="flex flex-col gap-4 justify-center items-center mb-6 sm:mb-8 px-4">
            <Button 
              size="lg" 
              className="bg-[#2D7D32] hover:bg-[#1B5E20] text-white font-semibold px-6 sm:px-8 md:px-12 py-4 sm:py-6 text-base sm:text-lg md:text-xl rounded-2xl shadow-2xl border-2 border-[#4CAF50]/20 backdrop-blur-sm transform hover:scale-105 transition-all duration-300 w-full sm:w-auto max-w-sm"
            >
              🌱 Plant My First Tree
              <ArrowRight className="ml-2 sm:ml-3 h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6" />
            </Button>
            
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-white/40 text-white hover:bg-white/15 px-6 sm:px-8 md:px-12 py-4 sm:py-6 text-base sm:text-lg md:text-xl rounded-2xl backdrop-blur-sm shadow-xl transition-all duration-300 w-full sm:w-auto max-w-sm"
            >
              <Play className="mr-2 sm:mr-3 h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6" />
              See How It Works
            </Button>
          </div>

          {/* Trust Signal Below CTA */}
          <div className="mb-8 sm:mb-12">
            <p className="text-sm sm:text-base md:text-lg text-mint-200 font-medium">
              Join 1,247 forest heroes worldwide
            </p>
          </div>

          {/* Enhanced Trust Indicators */}
          <div className="flex flex-wrap justify-center items-center gap-2 sm:gap-4 md:gap-8 mb-12 sm:mb-16 text-xs sm:text-sm text-gray-200 px-4">
            <div className="flex items-center bg-white/10 px-2 sm:px-3 py-1 sm:py-2 rounded-full backdrop-blur-sm">
              <Award className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 mr-1 sm:mr-2 text-gold-300" />
              <span>UN Climate Partner</span>
            </div>
            <div className="flex items-center bg-white/10 px-2 sm:px-3 py-1 sm:py-2 rounded-full backdrop-blur-sm">
              <Shield className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 mr-1 sm:mr-2 text-mint-300" />
              <span>GPS-Verified</span>
            </div>
            <div className="flex items-center bg-white/10 px-2 sm:px-3 py-1 sm:py-2 rounded-full backdrop-blur-sm">
              <div className="w-2 h-2 sm:w-3 sm:h-3 bg-forest-400 rounded-full mr-1 sm:mr-2"></div>
              <span>Carbon Certified</span>
            </div>
            <div className="flex items-center bg-white/10 px-2 sm:px-3 py-1 sm:py-2 rounded-full backdrop-blur-sm">
              <Users2 className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 mr-1 sm:mr-2 text-gold-300" />
              <span>5,847 Families</span>
            </div>
          </div>

          {/* Enhanced Impact Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6 max-w-5xl mx-auto px-4">
            {[
              { value: "254K+", label: "Trees Planted", color: "text-forest-300" },
              { value: "1,249", label: "Hectares Restored", color: "text-mint-300" },
              { value: "5,847", label: "Families Supported", color: "text-gold-300" },
              { value: "127T", label: "CO₂ Sequestered", color: "text-sky-300" }
            ].map((stat, index) => (
              <div key={stat.label} className="text-center bg-white/10 backdrop-blur-sm rounded-xl sm:rounded-2xl md:rounded-3xl p-3 sm:p-4 md:p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
                <div className={`text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold font-display ${stat.color} mb-1 sm:mb-2`}>
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm text-gray-300 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 text-white/70 hidden sm:block">
        <div className="w-6 sm:w-8 h-10 sm:h-12 border-2 border-white/30 rounded-full flex justify-center backdrop-blur-sm">
          <div className="w-1 sm:w-1.5 h-3 sm:h-4 bg-white/60 rounded-full mt-2 sm:mt-3"></div>
        </div>
        <div className="text-xs mt-2 font-medium">Scroll to explore</div>
      </div>
    </section>
  );
};

export default HeroSection;
