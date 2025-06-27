
import React from 'react';
import { Button } from '@/components/ui/button';
import { Check, Star, Crown, TreePine, Zap } from 'lucide-react';

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
      'Digital certificate',
      'Cancel anytime'
    ],
    gradient: 'from-forest-400 to-forest-600',
    badge: null,
    description: 'Perfect for getting started'
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
      'Priority customer support',
      'Community forum access'
    ],
    gradient: 'from-warm-400 to-warm-600',
    badge: 'Most Popular',
    description: 'Best value for maximum impact'
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
      'Custom impact reports',
      'VIP community access'
    ],
    gradient: 'from-gold-400 to-gold-600',
    badge: 'Maximum Impact',
    description: 'For serious environmental leaders'
  }
];

const SubscriptionTiers = () => {
  return (
    <section id="pricing" className="py-24 bg-white">
      <div className="container mx-auto px-4 lg:px-6">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold font-display text-forest-800 mb-6">
            Choose Your Impact Level
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Every subscription directly funds tree planting, supports African communities, 
            and helps fight climate change. Choose the plan that matches your commitment.
          </p>
          <div className="mt-6 inline-flex items-center bg-gold-50 text-gold-800 px-4 py-2 rounded-full text-sm font-medium">
            <Zap className="w-4 h-4 mr-2" />
            All plans include GPS verification & impact tracking
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {tiers.map((tier, index) => (
            <div key={tier.name} className={`relative bg-white rounded-3xl shadow-2xl border-2 ${tier.popular ? 'border-warm-300 scale-105 shadow-warm-200/20' : 'border-gray-100'} overflow-hidden animate-fade-in hover:shadow-3xl transition-all duration-300`} style={{ animationDelay: `${index * 0.1}s` }}>
              {/* Popular Badge */}
              {tier.badge && (
                <div className={`absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r ${tier.gradient} text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg z-10`}>
                  {tier.badge}
                </div>
              )}

              <div className="p-8">
                {/* Icon and Name */}
                <div className="text-center mb-6">
                  <div className={`w-20 h-20 bg-gradient-to-r ${tier.gradient} rounded-3xl flex items-center justify-center mx-auto mb-4 shadow-lg`}>
                    <tier.icon className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold font-display text-forest-800 mb-2">
                    {tier.name}
                  </h3>
                  <p className="text-gray-500 text-sm">{tier.description}</p>
                </div>

                {/* Price */}
                <div className="text-center mb-8">
                  <div className="flex items-baseline justify-center mb-2">
                    <span className="text-5xl font-bold font-display text-forest-800">
                      ${tier.price}
                    </span>
                    <span className="text-gray-500 ml-2">/month</span>
                  </div>
                  <div className="text-sm text-gray-500">
                    Billed monthly • Cancel anytime
                  </div>
                </div>

                {/* Impact Stats */}
                <div className={`bg-gradient-to-r ${tier.gradient} rounded-2xl p-6 mb-8 text-white`}>
                  <div className="text-center">
                    <div className="text-3xl font-bold font-display mb-2">
                      {tier.trees} Trees
                    </div>
                    <div className="text-sm opacity-90 mb-3">planted monthly</div>
                    <div className="text-sm opacity-80">
                      ≈ {tier.co2} CO₂ offset annually
                    </div>
                  </div>
                </div>

                {/* Features */}
                <ul className="space-y-4 mb-10">
                  {tier.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <Check className="h-5 w-5 text-forest-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600 leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <Button 
                  className={`w-full ${tier.popular ? 'bg-gradient-to-r ' + tier.gradient + ' hover:opacity-90 shadow-lg' : 'bg-gray-100 hover:bg-gray-200 text-gray-800'} text-white font-semibold py-4 px-6 rounded-xl transition-all text-lg`}
                >
                  {tier.popular ? 'Start Planting Today' : 'Choose ' + tier.name}
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Info with Trust Signals */}
        <div className="text-center mt-16">
          <div className="bg-gray-50 rounded-2xl p-8 max-w-3xl mx-auto">
            <h3 className="text-lg font-bold text-forest-800 mb-4">
              🔒 Secure & Transparent
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              All plans include transparent impact tracking, regular updates from our African partners, 
              SSL-secured payments, and the ability to modify or cancel your subscription at any time. 
              Your first trees are planted within 48 hours of subscription.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SubscriptionTiers;
