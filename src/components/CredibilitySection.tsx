
import React from 'react';
import { Globe, Users, TreePine, MapPin, CheckCircle } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const CredibilitySection = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <Badge variant="outline" className="mb-4 bg-[#2D7D32]/5 border-[#2D7D32] text-[#2D7D32] font-semibold px-4 py-2">
            <Globe className="w-4 h-4 mr-2" />
            Global Impact
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold text-[#2D7D32] mb-4">
            Trusted Global Planting Network
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Our worldwide network of verified partners ensures every tree planted meets the highest standards.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mb-12 md:mb-16">
          <div className="text-center">
            <div className="bg-[#2D7D32] rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <Globe className="w-8 h-8 text-white" />
            </div>
            <div className="text-2xl md:text-3xl font-bold text-[#2D7D32] mb-2">33+</div>
            <div className="text-sm text-gray-600">Countries Worldwide</div>
          </div>
          
          <div className="text-center">
            <div className="bg-[#4CAF50] rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <Users className="w-8 h-8 text-white" />
            </div>
            <div className="text-2xl md:text-3xl font-bold text-[#2D7D32] mb-2">80+</div>
            <div className="text-sm text-gray-600">Partner Organizations</div>
          </div>
          
          <div className="text-center">
            <div className="bg-emerald-600 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <TreePine className="w-8 h-8 text-white" />
            </div>
            <div className="text-2xl md:text-3xl font-bold text-[#2D7D32] mb-2">8M+</div>
            <div className="text-sm text-gray-600">Trees Planted</div>
          </div>
          
          <div className="text-center">
            <div className="bg-green-600 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <CheckCircle className="w-8 h-8 text-white" />
            </div>
            <div className="text-2xl md:text-3xl font-bold text-[#2D7D32] mb-2">200K+</div>
            <div className="text-sm text-gray-600">Trusted Planters</div>
          </div>
        </div>

        {/* World Map Visual */}
        <div className="bg-white rounded-2xl p-8 shadow-lg mb-12">
          <h3 className="text-xl font-bold text-[#2D7D32] mb-6 text-center">Active Planting Locations</h3>
          <div className="relative bg-gradient-to-b from-blue-50 to-green-50 rounded-xl p-8 min-h-[300px] flex items-center justify-center">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 text-center">
              <div className="flex flex-col items-center">
                <MapPin className="w-6 h-6 text-[#2D7D32] mb-2" />
                <div className="font-semibold text-[#2D7D32]">Brazil</div>
                <div className="text-sm text-gray-600">Amazon Restoration</div>
              </div>
              <div className="flex flex-col items-center">
                <MapPin className="w-6 h-6 text-[#2D7D32] mb-2" />
                <div className="font-semibold text-[#2D7D32]">Kenya</div>
                <div className="text-sm text-gray-600">Savanna Reforestation</div>
              </div>
              <div className="flex flex-col items-center">
                <MapPin className="w-6 h-6 text-[#2D7D32] mb-2" />
                <div className="font-semibold text-[#2D7D32]">Philippines</div>
                <div className="text-sm text-gray-600">Mangrove Restoration</div>
              </div>
              <div className="flex flex-col items-center">
                <MapPin className="w-6 h-6 text-[#2D7D32] mb-2" />
                <div className="font-semibold text-[#2D7D32]">Indonesia</div>
                <div className="text-sm text-gray-600">Forest Recovery</div>
              </div>
              <div className="flex flex-col items-center">
                <MapPin className="w-6 h-6 text-[#2D7D32] mb-2" />
                <div className="font-semibold text-[#2D7D32]">Madagascar</div>
                <div className="text-sm text-gray-600">Biodiversity Protection</div>
              </div>
              <div className="flex flex-col items-center">
                <MapPin className="w-6 h-6 text-[#2D7D32] mb-2" />
                <div className="font-semibold text-[#2D7D32]">India</div>
                <div className="text-sm text-gray-600">Community Forests</div>
              </div>
            </div>
          </div>
        </div>

        {/* Verified Partners */}
        <div className="text-center">
          <Badge variant="outline" className="bg-blue-50 border-blue-600 text-blue-600 font-semibold px-6 py-3">
            <CheckCircle className="w-5 h-5 mr-2" />
            Verified Partner Organizations
          </Badge>
          <p className="text-sm text-gray-600 mt-4 max-w-2xl mx-auto">
            All our planting partners undergo rigorous verification and continuous monitoring to ensure the highest environmental and social standards.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CredibilitySection;
