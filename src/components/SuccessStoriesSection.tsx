
import React from 'react';
import { Star, TreePine, Globe, CheckCircle, Users } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';

const SuccessStoriesSection = () => {
  const stats = [
    {
      icon: TreePine,
      number: "15,000+",
      label: "Trees Planted",
      description: "By SaveTheForest supporters"
    },
    {
      icon: Globe,
      number: "15+",
      label: "Countries",
      description: "Active through our network"
    },
    {
      icon: Star,
      number: "98%",
      label: "Satisfaction",
      description: "With tree tracking system"
    },
    {
      icon: Users,
      number: "2,847",
      label: "Forest Heroes",
      description: "Growing community"
    }
  ];

  const testimonials = [
    {
      name: "Sarah M.",
      location: "California, USA",
      text: "Got GPS coordinates and photos within 2 weeks! I can actually see my trees growing in Brazil. This is incredible!",
      rating: 5,
      trees: 8,
      verified: true
    },
    {
      name: "Mike R.",
      location: "London, UK",
      text: "SaveTheForest makes tree planting transparent and real. Love getting the photo updates showing my forest's progress.",
      rating: 5,
      trees: 15,
      verified: true
    },
    {
      name: "Elena K.",
      location: "Sydney, Australia",
      text: "Finally found a tree planting service I can trust. The GPS tracking gives me confidence my money makes a real difference.",
      rating: 5,
      trees: 25,
      verified: true
    },
    {
      name: "David L.",
      location: "Toronto, Canada",
      text: "The transparency is amazing. I get regular updates with photos and can track exactly where my trees are planted.",
      rating: 5,
      trees: 12,
      verified: true
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <Badge variant="outline" className="mb-4 bg-[#2D7D32]/5 border-[#2D7D32] text-[#2D7D32] font-semibold px-4 py-2">
            <CheckCircle className="w-4 h-4 mr-2" />
            Success Stories
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold text-[#2D7D32] mb-4">
            SaveTheForest Impact
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Real results from real people making a difference in forest restoration worldwide.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="bg-[#2D7D32] rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-2xl md:text-3xl font-bold text-[#2D7D32] mb-1">
                {stat.number}
              </div>
              <div className="font-semibold text-gray-800 mb-1">
                {stat.label}
              </div>
              <div className="text-sm text-gray-600">
                {stat.description}
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="mb-12">
          <h3 className="text-2xl md:text-3xl font-bold text-[#2D7D32] mb-8 text-center">
            What Our Forest Heroes Say
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="bg-[#2D7D32] rounded-full w-12 h-12 flex items-center justify-center text-white font-bold mr-4">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold text-gray-800">
                        {testimonial.name}
                      </div>
                      <div className="text-sm text-gray-600">
                        {testimonial.location}
                      </div>
                    </div>
                    {testimonial.verified && (
                      <Badge className="bg-blue-600 text-white">
                        <CheckCircle className="w-3 h-3 mr-1" />
                        Verified
                      </Badge>
                    )}
                  </div>
                  
                  <div className="flex mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  
                  <p className="text-gray-700 mb-4 italic">
                    "{testimonial.text}"
                  </p>
                  
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center text-[#2D7D32]">
                      <TreePine className="w-4 h-4 mr-1" />
                      {testimonial.trees} trees planted
                    </div>
                    <Badge variant="outline" className="text-[#2D7D32] border-[#2D7D32]">
                      Forest Hero
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Verified Reviews Section */}
        <div className="text-center bg-gradient-to-r from-[#2D7D32] to-[#4CAF50] rounded-2xl p-8 md:p-12 text-white">
          <Badge variant="outline" className="mb-4 bg-white/20 border-white/30 text-white">
            <Star className="w-4 h-4 mr-2" />
            Verified Reviews
          </Badge>
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Trusted by Forest Heroes Worldwide
          </h3>
          <p className="text-green-100 max-w-2xl mx-auto mb-6">
            All reviews are verified from actual SaveTheForest supporters who have received GPS coordinates and photo updates of their planted trees.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold mb-1">4.9/5</div>
              <div className="text-sm opacity-90">Average Rating</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-1">847</div>
              <div className="text-sm opacity-90">Verified Reviews</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-1">98%</div>
              <div className="text-sm opacity-90">Would Recommend</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuccessStoriesSection;
