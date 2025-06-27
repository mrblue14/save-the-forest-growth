
import React from 'react';
import { Star, Quote, MapPin, Users } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Environmental Scientist, Seattle',
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
    content: 'SaveTheForest provides the transparency I was looking for. Being able to see exactly where my trees are planted with GPS coordinates and track their growth makes every monthly payment meaningful. I\'ve been a member for 8 months and love getting the photo updates.',
    rating: 5,
    treesPlanted: 120,
    location: 'Trees in Kenya'
  },
  {
    name: 'Marcus Williams',
    role: 'Software Developer, Austin',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
    content: 'I love the real-time impact dashboard. It\'s amazing to see how my small monthly contribution is part of something much bigger - over 250,000 trees planted so far! The quarterly reports showing community impact really show the human side of reforestation.',
    rating: 5,
    treesPlanted: 180,
    location: 'Trees in Ghana'
  },
  {
    name: 'Dr. Amara Okafor',
    role: 'Local Partner & Farmer, Nigeria',
    avatar: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
    content: 'Working with SaveTheForest has transformed our community. The tree planting initiative has created stable jobs for over 200 families in our village and is helping restore our local ecosystem. The fair wages and training have given us hope for a sustainable future.',
    rating: 5,
    treesPlanted: 2400,
    location: 'Community Leader'
  }
];

const partners = [
  { name: 'UN Climate Action', logo: '🌍' },
  { name: 'African Forest Initiative', logo: '🌿' },
  { name: 'Rainforest Alliance', logo: '🌳' },
  { name: 'Climate Action Network', logo: '🌱' },
  { name: 'One Tree Planted', logo: '🌲' },
  { name: 'Green Belt Movement', logo: '🍃' }
];

const SocialProof = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 lg:px-6">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold font-display text-forest-800 mb-6">
            Trusted by Changemakers Worldwide
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Join thousands of individuals and organizations making a real difference
          </p>
          
          {/* Trust Stats */}
          <div className="flex justify-center items-center gap-8 mt-8 text-sm text-gray-600">
            <div className="flex items-center">
              <Users className="w-4 h-4 mr-2 text-forest-500" />
              <span>2,800+ Active Members</span>
            </div>
            <div className="flex items-center">
              <Star className="w-4 h-4 mr-2 text-gold-500" />
              <span>4.9/5 Average Rating</span>
            </div>
            <div className="flex items-center">
              <MapPin className="w-4 h-4 mr-2 text-earth-500" />
              <span>12 African Countries</span>
            </div>
          </div>
        </div>

        {/* Enhanced Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 rounded-3xl p-8 relative animate-fade-in hover:shadow-xl transition-shadow duration-300" style={{ animationDelay: `${index * 0.2}s` }}>
              {/* Quote Icon */}
              <Quote className="h-8 w-8 text-forest-300 mb-4" />
              
              {/* Rating */}
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-gold-400 fill-current" />
                ))}
              </div>

              {/* Content */}
              <p className="text-gray-700 mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>

              {/* Impact Stats */}
              <div className="bg-white rounded-xl p-4 mb-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-forest-600 mb-1">
                    {testimonial.treesPlanted.toLocaleString()}
                  </div>
                  <div className="text-sm text-gray-500">{testimonial.location}</div>
                </div>
              </div>

              {/* Author */}
              <div className="flex items-center">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <div className="font-semibold text-forest-800">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced Partners Section */}
        <div className="text-center">
          <h3 className="text-xl font-semibold text-forest-800 mb-8">
            Certified & Partnering with Leading Organizations
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-6 gap-6 max-w-5xl mx-auto mb-12">
            {partners.map((partner, index) => (
              <div key={index} className="flex flex-col items-center p-4 hover:bg-gray-50 rounded-xl transition-colors group">
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">{partner.logo}</div>
                <div className="text-sm text-gray-600 text-center font-medium">
                  {partner.name}
                </div>
              </div>
            ))}
          </div>

          {/* Certifications */}
          <div className="bg-forest-50 rounded-2xl p-8 max-w-3xl mx-auto">
            <h4 className="font-bold text-forest-800 mb-4">🏆 Our Certifications</h4>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600">
              <span className="bg-white px-3 py-2 rounded-full">✓ B-Corp Verified</span>
              <span className="bg-white px-3 py-2 rounded-full">✓ Carbon Neutral Certified</span>
              <span className="bg-white px-3 py-2 rounded-full">✓ UN Climate Action Partner</span>
              <span className="bg-white px-3 py-2 rounded-full">✓ Rainforest Alliance Verified</span>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-forest-500 to-nature-500 rounded-3xl p-10 text-white max-w-3xl mx-auto">
            <h3 className="text-3xl font-bold font-display mb-4">
              Ready to Join Our Forest Community?
            </h3>
            <p className="mb-8 opacity-90 text-lg">
              Start your reforestation journey today and become part of a global movement for change.
            </p>
            <button className="bg-gradient-warm text-white font-semibold px-10 py-4 rounded-xl hover:opacity-90 transition-all text-lg shadow-lg">
              Plant Your First Trees
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
