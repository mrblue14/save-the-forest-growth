
import React from 'react';
import { Button } from '@/components/ui/button';
import { Check, Star, Crown, TreePine, Zap, Heart, Shield, Users, Globe, Award, TrendingUp } from 'lucide-react';

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
    gradient: 'from-forest-500 to-forest-700',
    bgColor: 'bg-forest-50',
    borderColor: 'border-forest-200',
    badge: null,
    description: 'Perfect for getting started',
    story: 'Maria from Kenya plants your trees and supports her family of 4'
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
    gradient: 'from-gold-400 to-gold-600',
    bgColor: 'bg-gold-50',
    borderColor: 'border-gold-300',
    badge: 'Most Popular',
    description: 'Best value for maximum impact',
    story: 'Your support funds 3 community jobs and restores critical wildlife habitat'
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
    gradient: 'from-mint-500 to-mint-700',
    bgColor: 'bg-mint-50',
    borderColor: 'border-mint-300',
    badge: 'Maximum Impact',
    description: 'For serious environmental leaders',
    story: 'Fund an entire village conservation program and protect endangered species'
  }
];

const realTimeStats = [
  { label: 'Trees planted today', value: '1,247', icon: TreePine, color: 'text-forest-600' },
  { label: 'Active members', value: '2,847', icon: Users, color: 'text-mint-600' },
  { label: 'Countries served', value: '12', icon: Globe, color: 'text-earth-600' },
  { label: 'Families supported', value: '5,847', icon: Heart, color: 'text-gold-600' }
];

const trustBadges = [
  { name: 'B-Corp Certified', icon: '🏆', desc: 'Verified social impact' },
  { name: 'UN Climate Partner', icon: '🌍', desc: 'Official climate action' },
  { name: 'SSL Secured', icon: '🔒', desc: '256-bit encryption' },
  { name: 'Cancel Anytime', icon: '✨', desc: 'No long-term commitment' }
];

const SubscriptionTiers = () => {
  return (
    <section id="pricing" className="py-32 bg-gradient-to-br from-sage-50 to-mint-50">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Enhanced Section Header with Social Proof */}
        <div className="text-center mb-24">
          <div className="inline-flex items-center bg-forest-100 text-forest-700 px-6 py-3 rounded-full text-sm font-semibold mb-6">
            <Heart className="w-4 h-4 mr-2" />
            Join 2,847+ Climate Heroes
          </div>
          <h2 className="text-4xl md:text-6xl font-bold font-display text-forest-800 mb-8 leading-tight">
            Choose Your <span className="text-gradient-forest">Impact Level</span>
          </h2>
          <p className="text-xl md:text-2xl text-sage-600 max-w-4xl mx-auto leading-relaxed font-light mb-8">
            Every subscription directly funds tree planting, supports African communities, 
            and helps fight climate change. <span className="text-forest-700 font-medium">Choose the plan that matches your commitment.</span>
          </p>

          {/* Real-time Impact Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-8">
            {realTimeStats.map((stat, index) => (
              <div key={stat.label} className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 border border-sage-200 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="flex items-center justify-center mb-2">
                  <stat.icon className={`w-5 h-5 ${stat.color} mr-2`} />
                  <span className="text-2xl font-bold text-forest-800">{stat.value}</span>
                </div>
                <div className="text-sm text-sage-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="inline-flex items-center bg-gold-100 text-gold-800 px-6 py-3 rounded-full text-sm font-medium border border-gold-200">
            <Zap className="w-4 h-4 mr-2" />
            All plans include GPS verification & impact tracking
          </div>
        </div>

        {/* Enhanced Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-16">
          {tiers.map((tier, index) => (
            <div key={tier.name} className={`relative ${tier.bgColor} rounded-3xl shadow-2xl ${tier.borderColor} border-2 ${tier.popular ? 'scale-105 shadow-gold/20 ring-4 ring-gold-200' : 'shadow-forest/10'} overflow-hidden animate-fade-in hover:shadow-3xl transition-all duration-500 group`} style={{ animationDelay: `${index * 0.2}s` }}>
              {/* Popular Badge */}
              {tier.badge && (
                <div className={`absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r ${tier.gradient} text-white px-8 py-3 rounded-full text-sm font-bold shadow-lg z-10 border-2 border-white`}>
                  {tier.badge}
                </div>
              )}

              <div className="p-10">
                {/* Icon and Name */}
                <div className="text-center mb-8">
                  <div className={`w-24 h-24 bg-gradient-to-r ${tier.gradient} rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <tier.icon className="h-12 w-12 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold font-display text-forest-800 mb-3">
                    {tier.name}
                  </h3>
                  <p className="text-sage-600 font-medium">{tier.description}</p>
                </div>

                {/* Price */}
                <div className="text-center mb-10">
                  <div className="flex items-baseline justify-center mb-3">
                    <span className="text-6xl font-bold font-display text-forest-800">
                      ${tier.price}
                    </span>
                    <span className="text-sage-500 ml-2 text-lg">/month</span>
                  </div>
                  <div className="text-sm text-sage-500 font-medium">
                    Billed monthly • Cancel anytime
                  </div>
                </div>

                {/* Impact Story */}
                <div className="bg-white/70 rounded-2xl p-6 mb-8 border border-sage-200">
                  <div className="flex items-center mb-3">
                    <Heart className="w-5 h-5 text-gold-500 mr-2" />
                    <span className="text-sm font-semibold text-forest-700">Your Impact Story</span>
                  </div>
                  <p className="text-sm text-sage-700 leading-relaxed">
                    {tier.story}
                  </p>
                </div>

                {/* Impact Stats */}
                <div className={`bg-gradient-to-r ${tier.gradient} rounded-3xl p-8 mb-10 text-white shadow-lg`}>
                  <div className="text-center">
                    <div className="text-4xl font-bold font-display mb-3">
                      {tier.trees} Trees
                    </div>
                    <div className="text-sm opacity-90 mb-4 font-medium">planted monthly</div>
                    <div className="text-sm opacity-80 bg-white/20 rounded-full px-4 py-2 inline-block">
                      ≈ {tier.co2} CO₂ offset annually
                    </div>
                  </div>
                </div>

                {/* Features */}
                <ul className="space-y-5 mb-12">
                  {tier.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <Check className="h-6 w-6 text-forest-500 mr-4 mt-0.5 flex-shrink-0 bg-forest-100 rounded-full p-1" />
                      <span className="text-sage-700 leading-relaxed font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <Button 
                  className={`w-full ${tier.popular ? 'bg-gradient-to-r ' + tier.gradient + ' hover:shadow-warm shadow-lg hover:scale-105' : 'bg-sage-100 hover:bg-sage-200 text-sage-800 border-2 border-sage-300'} text-white font-bold py-6 px-8 rounded-2xl transition-all text-lg group-hover:shadow-xl duration-300`}
                >
                  {tier.popular ? 'Start Planting Today' : 'Choose ' + tier.name}
                </Button>

                {/* Trust Signal for Popular Plan */}
                {tier.popular && (
                  <div className="text-center mt-4">
                    <div className="flex items-center justify-center text-sm text-sage-600">
                      <TrendingUp className="w-4 h-4 mr-1 text-gold-500" />
                      <span>847 people chose this plan this month</span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced Trust Badges Section */}
        <div className="text-center mb-16">
          <h3 className="text-2xl font-bold text-forest-800 mb-8">
            Trusted & Secure Platform
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {trustBadges.map((badge, index) => (
              <div key={badge.name} className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-sage-200 hover:shadow-lg transition-all duration-300">
                <div className="text-3xl mb-3">{badge.icon}</div>
                <div className="font-semibold text-forest-800 mb-2">{badge.name}</div>
                <div className="text-sm text-sage-600">{badge.desc}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Enhanced Bottom Info with Social Proof */}
        <div className="text-center">
          <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-10 max-w-4xl mx-auto shadow-lg border border-sage-200">
            <div className="flex items-center justify-center mb-6">
              <Shield className="w-8 h-8 text-forest-600 mr-3" />
              <h3 className="text-2xl font-bold text-forest-800">
                Transparent & Secure Process
              </h3>
            </div>
            <p className="text-sage-600 leading-relaxed text-lg mb-6">
              All plans include transparent impact tracking, regular updates from our African partners, 
              SSL-secured payments, and the ability to modify or cancel your subscription at any time. 
              <span className="text-forest-700 font-semibold">Your first trees are planted within 48 hours of subscription.</span>
            </p>
            
            {/* Process Timeline */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-forest-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-forest-600 font-bold">1</span>
                </div>
                <div className="font-semibold text-forest-800 mb-2">Subscribe</div>
                <div className="text-sm text-sage-600">Choose your plan and complete secure checkout</div>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-mint-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-mint-600 font-bold">2</span>
                </div>
                <div className="font-semibold text-forest-800 mb-2">Trees Planted</div>
                <div className="text-sm text-sage-600">Your trees are planted within 48 hours</div>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-gold-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-gold-600 font-bold">3</span>
                </div>
                <div className="font-semibold text-forest-800 mb-2">Track Impact</div>
                <div className="text-sm text-sage-600">Receive GPS photos and growth updates</div>
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              <span className="bg-forest-100 text-forest-700 px-4 py-2 rounded-full text-sm font-medium">✓ 256-bit SSL Security</span>
              <span className="bg-mint-100 text-mint-700 px-4 py-2 rounded-full text-sm font-medium">✓ GPS Verification</span>
              <span className="bg-gold-100 text-gold-700 px-4 py-2 rounded-full text-sm font-medium">✓ Cancel Anytime</span>
              <span className="bg-sage-100 text-sage-700 px-4 py-2 rounded-full text-sm font-medium">✓ 48hr Tree Planting</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SubscriptionTiers;
