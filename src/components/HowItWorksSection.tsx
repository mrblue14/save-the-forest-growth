
import React from 'react';
import { DollarSign, MapPin, TreePine, Camera, Share2 } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const HowItWorksSection = () => {
  const steps = [
    {
      number: 1,
      icon: DollarSign,
      title: "You donate → Instant confirmation",
      description: "Make your donation and receive immediate confirmation with your unique tree tracking ID."
    },
    {
      number: 2,
      icon: MapPin,
      title: "We select optimal planting location",
      description: "Our experts choose the perfect location based on soil, climate, and local ecosystem needs."
    },
    {
      number: 3,
      icon: TreePine,
      title: "Local teams plant your trees",
      description: "Trained local planters use sustainable methods to ensure your trees have the best chance to thrive."
    },
    {
      number: 4,
      icon: MapPin,
      title: "GPS coordinates sent to you",
      description: "Within 30 days, receive the exact GPS location of your planted trees with verification photos."
    },
    {
      number: 5,
      icon: Camera,
      title: "Photo updates throughout growth",
      description: "Regular updates showing your trees' progress, growth milestones, and environmental impact."
    }
  ];

  const standards = [
    "Species selection based on local ecosystem needs",
    "Soil testing and preparation protocols",
    "Optimal planting season timing",
    "Local community involvement and training",
    "Long-term maintenance and monitoring",
    "Biodiversity and habitat restoration focus"
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <Badge variant="outline" className="mb-4 bg-[#2D7D32]/5 border-[#2D7D32] text-[#2D7D32] font-semibold px-4 py-2">
            <TreePine className="w-4 h-4 mr-2" />
            Our Process
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold text-[#2D7D32] mb-4">
            How SaveTheForest Works
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            From your donation to thriving forests - every step is transparent, verified, and designed for maximum impact.
          </p>
          <Badge className="bg-[#2D7D32] text-white px-6 py-2">
            Managed by SaveTheForest
          </Badge>
        </div>

        {/* Process Steps */}
        <div className="max-w-4xl mx-auto mb-16">
          {steps.map((step, index) => (
            <div key={step.number} className="flex items-start mb-8 last:mb-0">
              <div className="flex-shrink-0 mr-6">
                <div className="bg-[#2D7D32] rounded-full p-4 w-16 h-16 flex items-center justify-center">
                  <step.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-center mt-2">
                  <Badge variant="outline" className="text-[#2D7D32] border-[#2D7D32]">
                    Step {step.number}
                  </Badge>
                </div>
              </div>
              <div className="flex-1 pt-2">
                <h3 className="text-xl font-bold text-[#2D7D32] mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {step.description}
                </p>
                {index < steps.length - 1 && (
                  <div className="h-8 w-px bg-gray-200 ml-8"></div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Planting Standards */}
        <div className="bg-gradient-to-br from-[#2D7D32]/5 to-[#4CAF50]/10 rounded-2xl p-8 md:p-12">
          <h3 className="text-2xl md:text-3xl font-bold text-[#2D7D32] mb-6 text-center">
            Our Planting Standards
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {standards.map((standard, index) => (
              <div key={index} className="flex items-center space-x-3">
                <div className="bg-[#2D7D32] rounded-full p-1">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <span className="text-gray-700">{standard}</span>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Badge className="bg-[#2D7D32] text-white px-6 py-3">
              <Share2 className="w-4 h-4 mr-2" />
              Certified Sustainable Practices
            </Badge>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
