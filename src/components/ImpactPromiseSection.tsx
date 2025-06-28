
import React from 'react';
import { Shield, MapPin, Heart, CheckCircle } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const ImpactPromiseSection = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <Badge variant="outline" className="mb-4 bg-[#2D7D32]/5 border-[#2D7D32] text-[#2D7D32] font-semibold px-4 py-2">
            <Shield className="w-4 h-4 mr-2" />
            Our Impact Promise
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold text-[#2D7D32] mb-4">
            Your Trust is Our Foundation
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            We're committed to complete transparency and accountability in every tree planted.
          </p>
        </div>

        {/* Promise Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          
          {/* GPS Proof Guarantee */}
          <div className="bg-gradient-to-br from-[#2D7D32]/5 to-[#4CAF50]/10 rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="bg-[#2D7D32] rounded-full p-4 w-16 h-16 mx-auto mb-6 flex items-center justify-center">
              <MapPin className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-[#2D7D32] mb-4">
              GPS Proof Within 30 Days
            </h3>
            <p className="text-gray-600 mb-6">
              Receive exact GPS coordinates and photos of your trees within 30 days of planting, or get a full refund - guaranteed.
            </p>
            <div className="bg-white rounded-lg p-4 border-2 border-[#2D7D32] font-semibold text-[#2D7D32]">
              💯 100% Money-Back Guarantee
            </div>
          </div>

          {/* SaveTheForest Verified Badge */}
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="bg-blue-600 rounded-full p-4 w-16 h-16 mx-auto mb-6 flex items-center justify-center">
              <CheckCircle className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-[#2D7D32] mb-4">
              SaveTheForest Verified
            </h3>
            <p className="text-gray-600 mb-6">
              Every project is independently verified by our environmental science team and local forestry experts.
            </p>
            <div className="bg-white rounded-lg p-4 border-2 border-blue-600">
              <div className="flex items-center justify-center space-x-2">
                <Shield className="w-5 h-5 text-blue-600" />
                <span className="font-semibold text-blue-600">VERIFIED</span>
              </div>
              <div className="text-sm text-gray-600 mt-1">Trusted & Authenticated</div>
            </div>
          </div>

          {/* Zero Administrative Fees */}
          <div className="bg-gradient-to-br from-green-50 to-emerald-100 rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="bg-emerald-600 rounded-full p-4 w-16 h-16 mx-auto mb-6 flex items-center justify-center">
              <Heart className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-[#2D7D32] mb-4">
              Zero Administrative Fees
            </h3>
            <p className="text-gray-600 mb-6">
              100% of your donation goes directly to trees. No hidden costs, no administrative fees, no overhead charges.
            </p>
            <div className="bg-white rounded-lg p-4 border-2 border-emerald-600">
              <div className="text-2xl font-bold text-emerald-600 mb-1">100%</div>
              <div className="text-sm text-gray-600">Goes to Trees</div>
            </div>
          </div>
        </div>

        {/* Trust Statement */}
        <div className="mt-12 md:mt-16 text-center">
          <div className="bg-gradient-to-r from-[#2D7D32] to-[#4CAF50] rounded-2xl p-8 md:p-12 text-white max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Your Impact, Our Commitment
            </h3>
            <p className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto">
              We believe in radical transparency. Every dollar, every tree, every impact metric is tracked, verified, and reported back to you.
            </p>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold">2,847</div>
                <div className="text-sm opacity-80">Trees Verified</div>
              </div>
              <div>
                <div className="text-3xl font-bold">100%</div>
                <div className="text-sm opacity-80">Transparency Rate</div>
              </div>
              <div>
                <div className="text-3xl font-bold">30 Days</div>
                <div className="text-sm opacity-80">Max Response Time</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactPromiseSection;
