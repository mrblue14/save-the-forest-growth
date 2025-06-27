
import React from 'react';
import { Button } from '@/components/ui/button';
import { Check, Star, Crown, TreePine } from 'lucide-react';

const tiers = [
  {
    name: 'Seed',
    price: 10,
    icon: TreePine,
    trees: 5,
    co2: '2.5 tons',
    popular: false,
    features: [
      '5 trees planted monthly',
      'Basic impact tracking',
      'Monthly progress emails',
      'Digital certificate'
    ],
    gradient: 'from-forest-400 to-forest-600',
    badge: null
  },
  {
    name: 'Sapling',
    price: 25,
    icon: Star,
    trees: 15,
    co2: '7.5 tons',
    popular: true,
    features: [
      '15 trees planted monthly',
      'Detailed impact dashboard',
      'GPS-tagged tree photos',
      'Quarterly impact reports',
      'Priority customer support'
    ],
    gradient: 'from-nature-400 to-nature-600',
    badge: 'Most Popular'
  },
  {
    name: 'Forest',
    price: 50,
    icon: Crown,
    trees: 35,
    co2: '17.5 tons',
    popular: false,
    features: [
      '35 trees planted monthly',
      'Premium impact analytics',
      'Exclusive project updates',
      'Personal impact coordinator',
      'Annual site visit opportunity',
      'Custom impact reports'
    ],
    gradient: 'from-earth-400 to-earth-600',
    badge: 'Maximum Impact'
  }
];

const SubscriptionTiers = () => {
  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold font-display text-forest-800 mb-4">
            Choose Your Impact Level
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Every subscription directly funds tree planting, supports African communities, 
            and helps fight climate change. Choose the plan that matches your commitment.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {tiers.map((tier, index) => (
            <div key={tier.name} className={`relative bg-white rounded-3xl shadow-xl border-2 ${tier.popular ? 'border-nature-300 scale-105' : 'border-gray-100'} overflow-hidden animate-fade-in`} style={{ animationDelay: `${index * 0.1}s` }}>
              {/* Popular Badge */}
              {tier.badge && (
                <div className={`absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r ${tier.gradient} text-white px-6 py-2 rounded-full text-sm font-semibold`}>
                  {tier.badge}
                </div>
              )}

              <div className="p-8">
                {/* Icon and Name */}
                <div className="text-center mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-r ${tier.gradient} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                    <tier.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold font-display text-forest-800">
                    {tier.name}
                  </h3>
                </div>

                {/* Price */}
                <div className="text-center mb-6">
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold font-display text-forest-800">
                      ${tier.price}
                    </span>
                    <span className="text-gray-500 ml-2">/month</span>
                  </div>
                </div>

                {/* Impact Stats */}
                <div className="bg-gray-50 rounded-2xl p-4 mb-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold font-display text-forest-600 mb-1">
                      {tier.trees} Trees
                    </div>
                    <div className="text-sm text-gray-600 mb-2">planted monthly</div>
                    <div className="text-sm text-gray-500">
                      ≈ {tier.co2} CO₂ offset annually
                    </div>
                  </div>
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <Check className="h-5 w-5 text-forest-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <Button 
                  className={`w-full ${tier.popular ? 'bg-gradient-to-r ' + tier.gradient + ' hover:opacity-90' : 'bg-gray-100 hover:bg-gray-200 text-gray-800'} text-white font-semibold py-3 px-6 rounded-xl transition-all`}
                >
                  {tier.popular ? 'Start Planting Today' : 'Choose ' + tier.name}
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Info */}
        <div className="text-center mt-12">
          <p className="text-gray-500 text-sm max-w-2xl mx-auto">
            All plans include transparent impact tracking, regular updates from our African partners, 
            and the ability to modify or cancel your subscription at any time.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SubscriptionTiers;
