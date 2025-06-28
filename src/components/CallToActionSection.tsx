
import React from 'react';
import { Button } from '@/components/ui/button';
import { TreePine, Users, Share2, DollarSign, Clock, Target, ArrowRight, Heart } from 'lucide-react';

const CallToActionSection = () => {
  const actionOptions = [
    {
      icon: TreePine,
      title: "Plant Trees Monthly",
      description: "Subscribe to our tree planting program",
      impact: "$10 plants 5 trees",
      urgency: "Trees planted within 48 hours",
      buttonText: "Start Planting",
      buttonStyle: "bg-gradient-forest hover:shadow-forest",
      popular: true
    },
    {
      icon: DollarSign,
      title: "Make a One-Time Donation",
      description: "Support immediate forest restoration",
      impact: "$25 restores 0.1 hectares",
      urgency: "Direct impact on current projects",
      buttonText: "Donate Now",
      buttonStyle: "bg-gradient-warm hover:shadow-warm",
      popular: false
    },
    {
      icon: Users,
      title: "Volunteer Your Time",
      description: "Join our community action programs",
      impact: "4 hours = 1 acre monitoring",
      urgency: "Next volunteer event: March 15th",
      buttonText: "Join Volunteers",
      buttonStyle: "bg-gradient-mint hover:shadow-lg",
      popular: false
    },
    {
      icon: Share2,
      title: "Spread the Word",
      description: "Share our mission with your network",
      impact: "1 share = 10 new awareness",
      urgency: "Every share counts immediately",
      buttonText: "Share Mission",
      buttonStyle: "bg-sage-600 hover:bg-sage-700",
      popular: false
    }
  ];

  const urgencyStats = [
    { label: "Minutes until next forest area is lost", value: "3.2", color: "text-red-500" },
    { label: "Trees needed to offset today's emissions", value: "847", color: "text-orange-500" },
    { label: "Days to reach our monthly goal", value: "12", color: "text-forest-600" }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-forest-900 via-forest-800 to-mint-800 text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-64 h-64 bg-mint-400 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-forest-400 rounded-full filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Urgency Banner */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-red-500/20 border border-red-400/30 rounded-full px-6 py-3 mb-8 backdrop-blur-sm">
            <Clock className="w-5 h-5 mr-3 text-red-300" />
            <span className="text-red-200 font-semibold">URGENT: Every minute counts in the fight against deforestation</span>
          </div>

          {/* Real-time urgency counters */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
            {urgencyStats.map((stat, index) => (
              <div key={stat.label} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div className={`text-4xl font-bold font-display ${stat.color} mb-2`}>
                  {stat.value}
                </div>
                <div className="text-sm text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Main Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-7xl font-bold font-display mb-8 leading-tight">
            The Time to Act is <span className="text-gold-300">NOW</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed mb-8">
            Every second of delay means more forest lost forever. But every action you take creates immediate, 
            measurable impact. Choose how you want to make a difference today.
          </p>

          <div className="inline-flex items-center bg-gold-500/20 border border-gold-400/30 rounded-full px-6 py-3 backdrop-blur-sm">
            <Target className="w-5 h-5 mr-3 text-gold-300" />
            <span className="text-gold-200 font-medium">Goal: Plant 1,000 trees by month end - We're 73% there!</span>
          </div>
        </div>

        {/* Action Options Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {actionOptions.map((option, index) => (
            <div key={option.title} className="relative">
              {option.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gold-500 text-forest-900 px-4 py-2 rounded-full text-sm font-bold z-10">
                  Most Popular
                </div>
              )}
              
              <div className="bg-white/10 backdrop-blur-soft rounded-3xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 h-full flex flex-col">
                <div className="bg-white/20 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                  <option.icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-xl font-bold font-display mb-4">
                  {option.title}
                </h3>

                <p className="text-gray-300 mb-4 flex-grow">
                  {option.description}
                </p>

                <div className="space-y-3 mb-6">
                  <div className="bg-white/10 rounded-xl p-3">
                    <div className="text-sm text-gray-400 mb-1">Impact:</div>
                    <div className="font-semibold text-mint-300">{option.impact}</div>
                  </div>
                  
                  <div className="bg-white/10 rounded-xl p-3">
                    <div className="text-sm text-gray-400 mb-1">Timeline:</div>
                    <div className="font-semibold text-gold-300">{option.urgency}</div>
                  </div>
                </div>

                <Button className={`w-full ${option.buttonStyle} text-white font-semibold py-4 px-6 rounded-2xl transition-all duration-300 hover:scale-105 shadow-lg`}>
                  {option.buttonText}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Message */}
        <div className="text-center">
          <div className="bg-white/10 backdrop-blur-soft rounded-3xl p-10 max-w-4xl mx-auto border border-white/20">
            <Heart className="w-12 h-12 text-pink-300 mx-auto mb-6" />
            <h3 className="text-3xl font-bold font-display mb-6">
              Your Action Creates Ripples of Change
            </h3>
            <p className="text-xl text-gray-200 leading-relaxed mb-8">
              When you plant a tree, you're not just fighting climate change—you're providing clean air for children, 
              creating jobs for families, and preserving habitats for wildlife. Your impact goes far beyond what you can see.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-mint-300">48 hrs</div>
                <div className="text-sm text-gray-400">Your trees get planted</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gold-300">GPS</div>
                <div className="text-sm text-gray-400">Verified location photos</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-pink-300">∞</div>
                <div className="text-sm text-gray-400">Lasting environmental impact</div>
              </div>
            </div>

            <p className="text-lg text-gray-300 italic">
              "The best time to plant a tree was 20 years ago. The second best time is now." - Chinese Proverb
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToActionSection;
