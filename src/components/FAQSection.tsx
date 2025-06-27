
import React from 'react';
import { ChevronDown, MapPin, Shield, Clock, Leaf } from 'lucide-react';

const faqs = [
  {
    icon: Leaf,
    question: 'How many trees will actually be planted with my subscription?',
    answer: 'Every dollar of your subscription goes directly to tree planting. We plant exactly the number of trees promised in your tier, with GPS verification and photo documentation sent to you monthly.'
  },
  {
    icon: MapPin, 
    question: 'Where exactly are the trees planted in Africa?',
    answer: 'We work with local partners in Kenya, Tanzania, Ghana, and the Democratic Republic of Congo. Each tree is GPS-tagged and you receive the exact coordinates and photos of your trees within 30 days of planting.'
  },
  {
    icon: Shield,
    question: 'How do I know my trees are actually being planted?',
    answer: 'Full transparency is our priority. You receive GPS coordinates, timestamped photos, and can track your trees\' growth through our impact dashboard. We also provide quarterly third-party verification reports.'
  },
  {
    icon: Clock,
    question: 'When do the trees get planted after I subscribe?',
    answer: 'Your first trees are planted within 48 hours of subscription during planting season (March-May and September-November). During off-season, funds are held in escrow until optimal planting conditions.'
  },
  {
    question: 'Can I cancel or change my subscription anytime?',
    answer: 'Absolutely! You can modify, pause, or cancel your subscription at any time through your account dashboard. There are no long-term commitments or cancellation fees.'
  },
  {
    question: 'How do you support local African communities?',
    answer: 'Every tree planted creates employment for local families. We work directly with African farmers and cooperatives, providing fair wages, training, and long-term economic opportunities in rural communities.'
  }
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = React.useState<number | null>(0);

  return (
    <section className="py-20 bg-forest-50">
      <div className="container mx-auto px-4 lg:px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold font-display text-forest-800 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Get answers to common questions about our tree planting process and impact
          </p>
        </div>

        {/* FAQ Items */}
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <button
                className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <div className="flex items-center">
                  {faq.icon && (
                    <div className="w-10 h-10 bg-forest-100 rounded-xl flex items-center justify-center mr-4">
                      <faq.icon className="w-5 h-5 text-forest-600" />
                    </div>
                  )}
                  <span className="font-semibold text-forest-800 text-lg pr-4">
                    {faq.question}
                  </span>
                </div>
                <ChevronDown 
                  className={`w-5 h-5 text-forest-600 transition-transform ${openIndex === index ? 'rotate-180' : ''}`}
                />
              </button>
              {openIndex === index && (
                <div className="px-6 pb-6">
                  <div className="ml-14 text-gray-600 leading-relaxed">
                    {faq.answer}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">Still have questions?</p>
          <button className="bg-gradient-warm text-white font-semibold px-6 py-3 rounded-xl hover:opacity-90 transition-all">
            Contact Our Team
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
