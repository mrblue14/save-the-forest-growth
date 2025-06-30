
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { TreePine, AlertTriangle, Heart, Globe } from 'lucide-react';

const UrgencySection = () => {
  const [forestLost, setForestLost] = useState(2.4);

  useEffect(() => {
    // Simulate forest loss counter - reduced frequency for mobile performance
    const interval = setInterval(() => {
      setForestLost(prev => Number((prev + 0.1).toFixed(1)));
    }, 60000); // Update every minute instead of 30 seconds

    return () => {
      clearInterval(interval);
    };
  }, []);

  const recentActivities = [
    { name: "Sarah", location: "NYC", action: "planted 5 trees", time: "2 min ago" },
    { name: "Mike", location: "London", action: "donated $50", time: "5 min ago" },
    { name: "Ana", location: "Toronto", action: "planted 3 trees", time: "8 min ago" },
    { name: "James", location: "Sydney", action: "donated $25", time: "12 min ago" },
  ];

  return (
    <section className="bg-white border-b-4 border-[#FF6B35] relative">
      <div className="container mx-auto px-4 py-6 md:py-8">
        {/* Forest Loss Counter */}
        <div className="text-center mb-6 md:mb-8">
          <div className="inline-flex items-center bg-[#FF6B35]/10 border-2 border-[#FF6B35] rounded-2xl px-4 md:px-6 py-3 md:py-4 mb-4">
            <AlertTriangle className="w-5 h-5 md:w-6 md:h-6 text-[#FF6B35] mr-3 animate-pulse" />
            <span className="text-base md:text-xl font-bold text-[#FF6B35]">
              🚨 Forest Lost Today: {forestLost} acres
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
          {/* Impact Calculator */}
          <div className="bg-gradient-to-br from-[#2D7D32]/5 to-[#4CAF50]/10 rounded-3xl p-4 md:p-6 border-2 border-[#2D7D32]/20">
            <div className="text-center">
              <TreePine className="w-8 h-8 text-[#2D7D32] mx-auto mb-3" />
              <h3 className="text-lg md:text-xl font-bold text-[#2D7D32] mb-3">Your Impact Calculator</h3>
              <div className="bg-white rounded-2xl p-4 shadow-lg">
                <div className="text-2xl md:text-3xl font-bold text-[#FF6B35] mb-2">$25 =</div>
                <div className="space-y-2 text-sm md:text-base">
                  <div className="flex items-center justify-center">
                    <TreePine className="w-4 h-4 text-[#2D7D32] mr-2" />
                    <span><strong>10 trees planted</strong></span>
                  </div>
                  <div className="flex items-center justify-center">
                    <Globe className="w-4 h-4 text-blue-500 mr-2" />
                    <span><strong>200 lbs CO₂ removed annually</strong></span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Visual Progress */}
          <div className="bg-gradient-to-br from-mint-50 to-forest-50 rounded-3xl p-4 md:p-6 border-2 border-mint-200">
            <div className="text-center">
              <div className="text-lg md:text-xl font-bold text-forest-700 mb-4">Today's Progress</div>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span>Trees Planted Today</span>
                    <span className="font-bold">847/1000</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div className="bg-[#2D7D32] h-3 rounded-full" style={{width: '84.7%'}}></div>
                  </div>
                </div>
                <div className="text-xs text-gray-600">
                  <span>🌱</span> 153 trees to go for today's goal!
                </div>
              </div>
            </div>
          </div>

          {/* Recent Activity Feed */}
          <div className="bg-gradient-to-br from-gold-50 to-warm-50 rounded-3xl p-4 md:p-6 border-2 border-gold-200">
            <div className="text-center mb-4">
              <Heart className="w-6 h-6 text-[#FF6B35] mx-auto mb-2" />
              <h3 className="text-lg md:text-xl font-bold text-[#FF6B35]">Live Activity</h3>
            </div>
            <div className="space-y-3 max-h-32 overflow-y-auto">
              {recentActivities.map((activity, index) => (
                <div key={index} className="bg-white rounded-xl p-3 text-sm shadow-sm">
                  <div className="font-medium text-gray-800">
                    <span className="text-[#2D7D32] font-bold">{activity.name}</span> from {activity.location}
                  </div>
                  <div className="text-gray-600">
                    {activity.action} • <span className="text-xs">{activity.time}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Quick Action CTA */}
        <div className="text-center mt-6 md:mt-8">
          <Button 
            size="lg"
            className="bg-[#FF6B35] hover:bg-[#E55A2B] text-white font-bold px-6 md:px-8 py-3 md:py-4 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 w-full sm:w-auto"
          >
            🌱 Take Action Now - Plant Trees Today!
          </Button>
          <p className="text-sm text-gray-600 mt-2">
            Join the movement • Make an impact • Save our forests
          </p>
        </div>
      </div>
    </section>
  );
};

export default UrgencySection;
