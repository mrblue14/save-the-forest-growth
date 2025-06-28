
import React from 'react';
import { MapPin, Camera, Shield, Satellite } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const GPSTrackingSection = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-[#2D7D32]/5 to-[#4CAF50]/10">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <Badge variant="outline" className="mb-4 bg-white border-[#2D7D32] text-[#2D7D32] font-semibold px-4 py-2">
            <Shield className="w-4 h-4 mr-2" />
            100% Transparent Impact
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold text-[#2D7D32] mb-4">
            Track Your Real Trees with GPS Coordinates
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Our proprietary tracking system ensures every tree is real, verified, and making a measurable impact on our planet.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 max-w-6xl mx-auto">
          
          {/* Left Column - Features */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-6 shadow-lg border-l-4 border-[#2D7D32]">
              <div className="flex items-start space-x-4">
                <div className="bg-[#2D7D32]/10 rounded-full p-3">
                  <MapPin className="w-6 h-6 text-[#2D7D32]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#2D7D32] mb-2">
                    GPS coordinates of your exact tree locations
                  </h3>
                  <p className="text-gray-600">
                    Every tree gets precise GPS coordinates recorded at the moment of planting. 
                    View your trees on our interactive map with satellite imagery.
                  </p>
                  <div className="mt-3 text-sm bg-gray-50 rounded-lg p-3">
                    <span className="font-mono text-[#2D7D32]">
                      📍 Example: 9.0579° N, 1.2178° W, Ghana
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg border-l-4 border-[#FF6B35]">
              <div className="flex items-start space-x-4">
                <div className="bg-[#FF6B35]/10 rounded-full p-3">
                  <Camera className="w-6 h-6 text-[#FF6B35]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#2D7D32] mb-2">
                    Real photos of your trees being planted
                  </h3>
                  <p className="text-gray-600">
                    Receive actual photos of your trees at planting and quarterly growth updates. 
                    No stock photos - only real documentation of your impact.
                  </p>
                  <div className="mt-3 grid grid-cols-3 gap-2">
                    <div className="bg-gray-200 rounded-lg h-16 flex items-center justify-center text-xs text-gray-500">
                      📸 Planting
                    </div>
                    <div className="bg-gray-200 rounded-lg h-16 flex items-center justify-center text-xs text-gray-500">
                      🌱 3 Months
                    </div>
                    <div className="bg-gray-200 rounded-lg h-16 flex items-center justify-center text-xs text-gray-500">
                      🌳 1 Year
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg border-l-4 border-blue-500">
              <div className="flex items-start space-x-4">
                <div className="bg-blue-500/10 rounded-full p-3">
                  <Satellite className="w-6 h-6 text-blue-500" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#2D7D32] mb-2">
                    Satellite Verification System
                  </h3>
                  <p className="text-gray-600">
                    Advanced satellite monitoring tracks forest growth and verifies survival rates. 
                    Our AI-powered system ensures accountability at scale.
                  </p>
                  <div className="mt-3 text-sm text-blue-600">
                    ✓ Monthly satellite scans • ✓ AI growth analysis • ✓ Survival verification
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Visual Demo */}
          <div className="lg:pl-8">
            <div className="bg-white rounded-2xl p-6 shadow-xl">
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold text-[#2D7D32] mb-2">
                  Your Tree Dashboard Preview
                </h3>
                <p className="text-gray-600 text-sm">
                  See exactly where your trees are planted
                </p>
              </div>

              {/* Mock Dashboard */}
              <div className="space-y-4">
                <div className="bg-gradient-to-r from-[#2D7D32] to-[#4CAF50] rounded-lg p-4 text-white">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm opacity-90">Your Trees</span>
                    <Badge variant="secondary" className="bg-white/20 text-white">
                      Live Tracking
                    </Badge>
                  </div>
                  <div className="text-2xl font-bold">47 Trees Planted</div>
                  <div className="text-sm opacity-90">Across 3 locations in Ghana</div>
                </div>

                <div className="bg-gray-100 rounded-lg p-4 text-center">
                  <div className="bg-green-200 h-32 rounded-lg flex items-center justify-center mb-3">
                    <div className="text-gray-600">
                      🗺️ Interactive Map View
                      <br />
                      <span className="text-sm">Click to see your trees</span>
                    </div>
                  </div>
                  <div className="text-xs text-gray-500 space-y-1">
                    <div>📍 Kumasi Region: 23 trees</div>
                    <div>📍 Tamale Region: 15 trees</div>
                    <div>📍 Accra Region: 9 trees</div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-blue-50 rounded-lg p-3 text-center">
                    <div className="text-lg font-bold text-blue-600">94%</div>
                    <div className="text-xs text-gray-600">Survival Rate</div>
                  </div>
                  <div className="bg-green-50 rounded-lg p-3 text-center">
                    <div className="text-lg font-bold text-green-600">2.1 tons</div>
                    <div className="text-xs text-gray-600">CO₂ Removed</div>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="mt-8 text-center">
              <Button 
                size="lg"
                className="bg-[#2D7D32] hover:bg-[#1B5E20] text-white font-bold px-8 py-4 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 min-h-[48px]"
              >
                🌱 Start Tracking Your Trees Today
              </Button>
              <p className="text-sm text-gray-600 mt-3">
                Get your first tree GPS coordinates within 48 hours
              </p>
            </div>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-12 md:mt-16 text-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="text-2xl font-bold text-[#2D7D32] mb-2">99.7%</div>
              <div className="text-sm text-gray-600">GPS Accuracy Rate</div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="text-2xl font-bold text-[#FF6B35] mb-2">24/7</div>
              <div className="text-sm text-gray-600">Satellite Monitoring</div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="text-2xl font-bold text-blue-600 mb-2">100%</div>
              <div className="text-sm text-gray-600">Transparency Promise</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GPSTrackingSection;
