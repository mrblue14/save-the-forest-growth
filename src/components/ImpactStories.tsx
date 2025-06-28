
import React from 'react';
import { Button } from '@/components/ui/button';
import { Quote, MapPin, Calendar, Users, TreePine, Heart } from 'lucide-react';

const ImpactStories = () => {
  const stories = [
    {
      id: 1,
      title: "Maria's Forest Revival",
      location: "Kikwit, DR Congo",
      date: "March 2024",
      image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      story: "When Maria joined our reforestation program, her village was struggling with soil erosion and declining crop yields. Today, after planting 2,400 trees with community support, her family has stable employment, her children attend school regularly, and the local ecosystem is thriving again.",
      impact: {
        trees: 2400,
        families: 15,
        hectares: 8
      },
      quote: "SaveTheForest didn't just plant trees in our village—they planted hope for our children's future.",
      author: "Maria Lubamba, Community Leader"
    },
    {
      id: 2,
      title: "The Tamale Transformation",
      location: "Tamale, Ghana",
      date: "January 2024",
      image: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      story: "A barren landscape that once suffered from deforestation is now home to a thriving young forest. Local youth have found meaningful employment as tree planters and forest guardians, creating a sustainable cycle of environmental and economic restoration.",
      impact: {
        trees: 1800,
        families: 23,
        hectares: 12
      },
      quote: "I never thought I'd see green hills again in my lifetime. Now my grandchildren will grow up with forests.",
      author: "Kwame Asante, Village Elder"
    },
    {
      id: 3,
      title: "Wildlife Returns to Mbeya",
      location: "Mbeya, Tanzania",
      date: "November 2023",
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      story: "Our reforestation efforts have created a wildlife corridor that has brought back native species not seen in the area for over a decade. The community now benefits from eco-tourism while maintaining their role as forest guardians.",
      impact: {
        trees: 3200,
        families: 31,
        hectares: 15
      },
      quote: "The birds came back first, then the antelope. Our forest is alive again, and so is our community.",
      author: "Amina Hassan, Eco-Tourism Guide"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-sage-50 to-mint-50">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center bg-mint-100 text-mint-700 px-6 py-3 rounded-full text-sm font-semibold mb-6">
            <Heart className="w-4 h-4 mr-2" />
            Real Impact Stories
          </div>
          <h2 className="text-4xl md:text-6xl font-bold font-display text-forest-800 mb-8 leading-tight">
            Lives Changed, <span className="text-gradient-mint">Forests Restored</span>
          </h2>
          <p className="text-xl md:text-2xl text-sage-600 max-w-4xl mx-auto leading-relaxed">
            Behind every tree planted is a human story of hope, resilience, and transformation. 
            Meet the communities whose lives have been changed through our collective action.
          </p>
        </div>

        {/* Stories Grid */}
        <div className="space-y-20">
          {stories.map((story, index) => (
            <div key={story.id} className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 items-center animate-fade-in`} style={{ animationDelay: `${index * 0.2}s` }}>
              
              {/* Image */}
              <div className="lg:w-1/2">
                <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                  <img 
                    src={story.image} 
                    alt={story.title}
                    className="w-full h-80 lg:h-96 object-cover hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                  
                  {/* Location Badge */}
                  <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 flex items-center">
                    <MapPin className="w-4 h-4 text-forest-600 mr-2" />
                    <span className="text-sm font-medium text-forest-800">{story.location}</span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="lg:w-1/2">
                <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-10 shadow-lg border border-sage-200">
                  
                  {/* Header */}
                  <div className="mb-6">
                    <div className="flex items-center text-sm text-sage-600 mb-3">
                      <Calendar className="w-4 h-4 mr-2" />
                      {story.date}
                    </div>
                    <h3 className="text-3xl font-bold font-display text-forest-800 mb-4">
                      {story.title}
                    </h3>
                  </div>

                  {/* Story */}
                  <p className="text-lg text-sage-700 leading-relaxed mb-8">
                    {story.story}
                  </p>

                  {/* Impact Stats */}
                  <div className="grid grid-cols-3 gap-6 mb-8">
                    <div className="text-center bg-forest-50 rounded-2xl p-4">
                      <div className="text-2xl font-bold text-forest-600 mb-1">{story.impact.trees.toLocaleString()}</div>
                      <div className="text-sm text-sage-600 font-medium">Trees Planted</div>
                    </div>
                    <div className="text-center bg-mint-50 rounded-2xl p-4">
                      <div className="text-2xl font-bold text-mint-600 mb-1">{story.impact.families}</div>
                      <div className="text-sm text-sage-600 font-medium">Families Helped</div>
                    </div>
                    <div className="text-center bg-earth-50 rounded-2xl p-4">
                      <div className="text-2xl font-bold text-earth-600 mb-1">{story.impact.hectares}</div>
                      <div className="text-sm text-sage-600 font-medium">Hectares Restored</div>
                    </div>
                  </div>

                  {/* Quote */}
                  <div className="border-l-4 border-forest-300 pl-6 mb-6">
                    <Quote className="w-6 h-6 text-forest-300 mb-3" />
                    <p className="text-lg text-forest-700 italic mb-3">
                      "{story.quote}"
                    </p>
                    <p className="text-sm text-sage-600 font-medium">
                      — {story.author}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-20">
          <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-10 max-w-3xl mx-auto shadow-lg border border-sage-200">
            <h3 className="text-3xl font-bold font-display text-forest-800 mb-6">
              Your Story Starts Here
            </h3>
            <p className="text-xl text-sage-600 mb-8 leading-relaxed">
              Every subscription creates a new chapter in someone's life. Join our community and 
              help write the next success story.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-gradient-forest hover:shadow-forest text-white font-semibold px-8 py-4 text-lg rounded-2xl shadow-lg hover:scale-105 transition-all duration-300">
                <TreePine className="w-5 h-5 mr-2" />
                Plant Trees Monthly
              </Button>
              <Button variant="outline" className="border-2 border-sage-300 text-sage-700 hover:bg-sage-50 px-8 py-4 text-lg rounded-2xl">
                <Users className="w-5 h-5 mr-2" />
                Join Our Community
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactStories;
