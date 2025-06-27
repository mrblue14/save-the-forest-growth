
import React from 'react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Environmental Scientist',
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
    content: 'SaveTheForest provides the transparency I was looking for. Being able to see exactly where my trees are planted and track their growth makes every monthly payment meaningful.',
    rating: 5
  },
  {
    name: 'Marcus Williams',
    role: 'Software Developer',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
    content: 'I love the real-time impact dashboard. It\'s amazing to see how my small monthly contribution is part of something much bigger - over 250,000 trees planted so far!',
    rating: 5
  },
  {
    name: 'Dr. Amara Okafor',
    role: 'Local Partner, Nigeria',
    avatar: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
    content: 'Working with SaveTheForest has transformed our community. The tree planting initiative has created jobs for over 200 families and is restoring our local ecosystem.',
    rating: 5
  }
];

const partners = [
  { name: 'Tree Nation', logo: '🌳' },
  { name: 'One Tree Planted', logo: '🌲' },
  { name: 'African Forest Initiative', logo: '🌿' },
  { name: 'Climate Action Network', logo: '🌍' },
  { name: 'Reforestation Alliance', logo: '🌱' },
  { name: 'Green Belt Movement', logo: '🍃' }
];

const SocialProof = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold font-display text-forest-800 mb-4">
            Trusted by Changemakers Worldwide
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Join thousands of individuals and organizations making a real difference
          </p>
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 rounded-2xl p-8 relative animate-fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
              {/* Quote Icon */}
              <Quote className="h-8 w-8 text-forest-300 mb-4" />
              
              {/* Rating */}
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Content */}
              <p className="text-gray-700 mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>

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

        {/* Partners */}
        <div className="text-center">
          <h3 className="text-xl font-semibold text-forest-800 mb-8">
            Partnering with Leading Organizations
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-6 gap-6 max-w-4xl mx-auto">
            {partners.map((partner, index) => (
              <div key={index} className="flex flex-col items-center p-4 hover:bg-gray-50 rounded-xl transition-colors">
                <div className="text-3xl mb-2">{partner.logo}</div>
                <div className="text-sm text-gray-600 text-center font-medium">
                  {partner.name}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-forest-500 to-nature-500 rounded-2xl p-8 text-white max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold font-display mb-4">
              Ready to Join Our Forest Community?
            </h3>
            <p className="mb-6 opacity-90">
              Start your reforestation journey today and become part of a global movement for change.
            </p>
            <button className="bg-white text-forest-600 font-semibold px-8 py-3 rounded-xl hover:bg-gray-50 transition-all">
              Plant Your First Trees
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
