
import React from 'react';
import { MapPin, Camera, Share2, TreePine, TrendingUp, Globe } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const TrackingDashboard = () => {
  return (
    <section className="py-16 md:py-24 bg-[#2D7D32]">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <Badge variant="outline" className="mb-4 bg-white/10 border-white/20 text-white font-semibold px-4 py-2">
            <MapPin className="w-4 h-4 mr-2" />
            Proprietary Technology
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Track Your Forest Impact
          </h2>
          <p className="text-lg md:text-xl text-green-100 max-w-3xl mx-auto">
            Our exclusive tracking system gives you real-time access to your trees' locations, growth, and environmental impact.
          </p>
        </div>

        {/* Dashboard Mockup */}
        <div className="max-w-4xl mx-auto">
          <Card className="bg-white shadow-2xl">
            <CardHeader className="bg-gradient-to-r from-[#2D7D32] to-[#4CAF50] text-white">
              <CardTitle className="text-2xl flex items-center">
                <TreePine className="w-6 h-6 mr-3" />
                SaveTheForest Dashboard
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              {/* User Stats */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="text-center p-6 bg-gradient-to-br from-[#2D7D32]/5 to-[#4CAF50]/10 rounded-xl">
                  <TreePine className="w-8 h-8 text-[#2D7D32] mx-auto mb-3" />
                  <div className="text-2xl font-bold text-[#2D7D32] mb-1">15</div>
                  <div className="text-sm text-gray-600">Trees Planted</div>
                  <div className="text-xs text-[#2D7D32] mt-1">12 with GPS coordinates</div>
                </div>
                
                <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl">
                  <TrendingUp className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                  <div className="text-2xl font-bold text-blue-600 mb-1">300 lbs</div>
                  <div className="text-sm text-gray-600">CO2 Removed</div>
                  <div className="text-xs text-blue-600 mt-1">This year</div>
                </div>
                
                <div className="text-center p-6 bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-xl">
                  <Globe className="w-8 h-8 text-emerald-600 mx-auto mb-3" />
                  <div className="text-2xl font-bold text-emerald-600 mb-1">3</div>
                  <div className="text-sm text-gray-600">Countries</div>
                  <div className="text-xs text-emerald-600 mt-1">Brazil, Kenya, Philippines</div>
                </div>
              </div>

              {/* Recent Activity */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-[#2D7D32] mb-4">Recent Tree Updates</h3>
                <div className="space-y-3">
                  <div className="flex items-center p-4 bg-gray-50 rounded-lg">
                    <Camera className="w-5 h-5 text-[#2D7D32] mr-3" />
                    <div className="flex-1">
                      <div className="font-medium">New photos received</div>
                      <div className="text-sm text-gray-600">Your trees in Brazil - 6 months growth</div>
                    </div>
                    <Badge variant="outline" className="text-[#2D7D32] border-[#2D7D32]">New</Badge>
                  </div>
                  
                  <div className="flex items-center p-4 bg-gray-50 rounded-lg">
                    <MapPin className="w-5 h-5 text-blue-600 mr-3" />
                    <div className="flex-1">
                      <div className="font-medium">GPS coordinates updated</div>
                      <div className="text-sm text-gray-600">Tree #KE-2024-0847 location verified</div>
                    </div>
                    <Badge variant="outline" className="text-blue-600 border-blue-600">Verified</Badge>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Button className="bg-[#2D7D32] hover:bg-[#2D7D32]/90 text-white">
                  <Camera className="w-4 h-4 mr-2" />
                  Get Photo Updates
                </Button>
                <Button variant="outline" className="border-[#2D7D32] text-[#2D7D32] hover:bg-[#2D7D32]/10">
                  <Share2 className="w-4 h-4 mr-2" />
                  Share My Forest
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Features List */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 text-white">
            <div className="flex items-start space-x-3">
              <div className="bg-white/20 rounded-full p-2 mt-1">
                <MapPin className="w-4 h-4" />
              </div>
              <div>
                <div className="font-semibold">Real GPS Coordinates</div>
                <div className="text-green-100 text-sm">Exact location of every tree planted</div>
              </div>
            </div>
            
            <div className="flex items-start space-x-3">
              <div className="bg-white/20 rounded-full p-2 mt-1">
                <Camera className="w-4 h-4" />
              </div>
              <div>
                <div className="font-semibold">Growth Photo Updates</div>
                <div className="text-green-100 text-sm">Regular photos showing your trees' progress</div>
              </div>
            </div>
            
            <div className="flex items-start space-x-3">
              <div className="bg-white/20 rounded-full p-2 mt-1">
                <TrendingUp className="w-4 h-4" />
              </div>
              <div>
                <div className="font-semibold">Impact Tracking</div>
                <div className="text-green-100 text-sm">Real-time CO2 removal calculations</div>
              </div>
            </div>
            
            <div className="flex items-start space-x-3">
              <div className="bg-white/20 rounded-full p-2 mt-1">
                <Share2 className="w-4 h-4" />
              </div>
              <div>
                <div className="font-semibold">Social Sharing</div>
                <div className="text-green-100 text-sm">Share your forest impact with friends</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrackingDashboard;
