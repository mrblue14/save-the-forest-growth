
import React from 'react';
import { Shield, CheckCircle, Phone, Star, Camera } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const GuaranteeSection = () => {
  const guarantees = [
    {
      icon: Shield,
      title: "100% Impact Guarantee",
      description: "If we can't provide GPS proof within 60 days, get your full refund - no questions asked."
    },
    {
      icon: Camera,
      title: "Photo Documentation",
      description: "Visual proof of every tree planted with growth updates throughout the year."
    },
    {
      icon: Phone,
      title: "Direct Contact",
      description: "Speak directly with our verification team about your trees and their progress."
    },
    {
      icon: CheckCircle,
      title: "Satisfaction Guaranteed",
      description: "Join thousands of satisfied forest heroes who trust our transparent process."
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-[#2D7D32] to-[#4CAF50]">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <Badge variant="outline" className="mb-4 bg-white/20 border-white/30 text-white font-semibold px-4 py-2">
            <Shield className="w-4 h-4 mr-2" />
            Our Promise
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            SaveTheForest Guarantee
          </h2>
          <p className="text-lg md:text-xl text-green-100 max-w-3xl mx-auto">
            Your trust is our foundation. We stand behind every tree planted with our comprehensive guarantee.
          </p>
        </div>

        {/* Guarantee Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
          {guarantees.map((guarantee, index) => (
            <Card key={index} className="shadow-2xl hover:shadow-3xl transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="bg-[#2D7D32] rounded-full p-4 w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                  <guarantee.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#2D7D32] mb-4 text-center">
                  {guarantee.title}
                </h3>
                <p className="text-gray-600 text-center">
                  {guarantee.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Main Guarantee Statement */}
        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-2xl max-w-4xl mx-auto mb-12">
          <div className="text-center mb-8">
            <div className="bg-[#2D7D32] rounded-full p-6 w-20 h-20 mx-auto mb-6 flex items-center justify-center">
              <Shield className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-[#2D7D32] mb-4">
              60-Day GPS Proof Guarantee
            </h3>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-6">
              We're so confident in our tracking system that we guarantee GPS coordinates and photos of your trees within 60 days of planting, or we'll refund your entire donation.
            </p>
            <div className="bg-gradient-to-r from-[#2D7D32]/5 to-[#4CAF50]/10 rounded-xl p-6 mb-6">
              <div className="text-3xl font-bold text-[#2D7D32] mb-2">100%</div>
              <div className="text-gray-700">Money-Back Guarantee</div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <CheckCircle className="w-8 h-8 text-[#2D7D32] mx-auto mb-3" />
              <div className="font-semibold text-[#2D7D32] mb-1">GPS Verified</div>
              <div className="text-sm text-gray-600">Exact coordinates provided</div>
            </div>
            <div>
              <Camera className="w-8 h-8 text-[#2D7D32] mx-auto mb-3" />
              <div className="font-semibold text-[#2D7D32] mb-1">Photo Proof</div>
              <div className="text-sm text-gray-600">Visual documentation included</div>
            </div>
            <div>
              <Star className="w-8 h-8 text-[#2D7D32] mx-auto mb-3" />
              <div className="font-semibold text-[#2D7D32] mb-1">Satisfaction</div>
              <div className="text-sm text-gray-600">98% satisfaction rate</div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <Button size="lg" className="bg-white text-[#2D7D32] hover:bg-gray-100 px-8 py-4 text-lg font-semibold shadow-lg">
            <Shield className="w-5 h-5 mr-2" />
            Try Risk-Free Today
          </Button>
          <p className="text-green-100 text-sm mt-4">
            No hidden fees • No subscription • Full transparency
          </p>
          
          <div className="mt-8 flex items-center justify-center space-x-4">
            <Badge className="bg-white/20 text-white border-white/30 px-4 py-2">
              <CheckCircle className="w-4 h-4 mr-2" />
              Satisfaction Guaranteed
            </Badge>
            <Badge className="bg-white/20 text-white border-white/30 px-4 py-2">
              <Shield className="w-4 h-4 mr-2" />
              100% Secure
            </Badge>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GuaranteeSection;
