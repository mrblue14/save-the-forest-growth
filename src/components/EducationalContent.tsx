
import React from 'react';
import { Button } from '@/components/ui/button';
import { BookOpen, Download, ExternalLink, Leaf, Globe, TrendingUp, Users } from 'lucide-react';

const EducationalContent = () => {
  const articles = [
    {
      title: "Why Forests Matter: The Hidden Heroes of Climate Action",
      excerpt: "Discover how forests act as Earth's lungs, absorbing CO₂, producing oxygen, and regulating our climate. Learn why protecting existing forests and planting new ones is crucial for our planet's future.",
      readTime: "5 min read",
      category: "Climate Science",
      image: "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      keyPoints: [
        "Forests absorb 2.6 billion tons of CO₂ annually",
        "One mature tree produces oxygen for 2 people per year",
        "Forest biodiversity supports 80% of terrestrial species"
      ]
    },
    {
      title: "The Impact of Deforestation: Understanding the Crisis",
      excerpt: "Every minute, the world loses forest area the size of 20 football fields. Understand the causes, consequences, and what we can do to reverse this devastating trend.",
      readTime: "7 min read",
      category: "Environmental Issues",
      image: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      keyPoints: [
        "10 million hectares of forest lost annually",
        "Deforestation causes 15% of global CO₂ emissions",
        "1.6 billion people depend on forests for livelihood"
      ]
    },
    {
      title: "How Tree Planting Helps Fight Climate Change",
      excerpt: "From carbon sequestration to biodiversity restoration, learn how strategic reforestation creates lasting environmental impact and supports communities worldwide.",
      readTime: "6 min read",
      category: "Solutions",
      image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      keyPoints: [
        "One tree absorbs 48 lbs of CO₂ per year",
        "Reforestation can provide 30% of climate mitigation needed",
        "Native tree species increase biodiversity by 40%"
      ]
    }
  ];

  const resources = [
    {
      title: "Forest Conservation Guide for Schools",
      description: "Educational materials and activities to teach students about forest conservation and climate action.",
      type: "PDF Guide",
      icon: BookOpen,
      size: "2.1 MB"
    },
    {
      title: "Community Tree Planting Handbook",
      description: "Step-by-step guide for organizing tree planting events in your community, including species selection and care tips.",
      type: "Interactive Guide",
      icon: Users,
      size: "3.4 MB"
    },
    {
      title: "Climate Impact Infographics",
      description: "Visual resources showing the connection between forests and climate change, perfect for presentations and social sharing.",
      type: "Infographic Pack",
      icon: TrendingUp,
      size: "1.8 MB"
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center bg-earth-100 text-earth-700 px-6 py-3 rounded-full text-sm font-semibold mb-6">
            <BookOpen className="w-4 h-4 mr-2" />
            Learn & Share
          </div>
          <h2 className="text-4xl md:text-6xl font-bold font-display text-forest-800 mb-8 leading-tight">
            Knowledge for <span className="text-gradient-earth">Action</span>
          </h2>
          <p className="text-xl md:text-2xl text-sage-600 max-w-4xl mx-auto leading-relaxed">
            Understanding the science behind forest conservation empowers better decisions. 
            Explore our educational resources and share the knowledge that drives change.
          </p>
        </div>

        {/* Featured Articles */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold font-display text-forest-800 mb-12 text-center">
            Essential Reading
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {articles.map((article, index) => (
              <div key={article.title} className="bg-sage-50 rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                
                {/* Image */}
                <div className="relative overflow-hidden">
                  <img 
                    src={article.image} 
                    alt={article.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-xs font-semibold text-forest-700">
                    {article.category}
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <div className="flex items-center text-sm text-sage-600 mb-4">
                    <span>{article.readTime}</span>
                  </div>
                  
                  <h4 className="text-xl font-bold font-display text-forest-800 mb-4 leading-tight">
                    {article.title}
                  </h4>
                  
                  <p className="text-sage-600 mb-6 leading-relaxed">
                    {article.excerpt}
                  </p>

                  {/* Key Points */}
                  <div className="space-y-2 mb-6">
                    {article.keyPoints.map((point, idx) => (
                      <div key={idx} className="flex items-start text-sm">
                        <Leaf className="w-4 h-4 text-forest-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-sage-700">{point}</span>
                      </div>
                    ))}
                  </div>

                  <Button variant="outline" className="w-full border-2 border-sage-300 text-sage-700 hover:bg-sage-100 group-hover:border-forest-300 group-hover:text-forest-700 transition-colors">
                    Read Full Article
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Downloadable Resources */}
        <div className="bg-gradient-to-br from-forest-50 to-mint-50 rounded-3xl p-10 mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold font-display text-forest-800 mb-4">
              Free Educational Resources
            </h3>
            <p className="text-lg text-sage-600 max-w-2xl mx-auto">
              Download guides, infographics, and materials to help spread forest conservation awareness 
              in your community, school, or organization.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {resources.map((resource, index) => (
              <div key={resource.title} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-sage-200">
                <div className="bg-forest-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                  <resource.icon className="w-8 h-8 text-forest-600" />
                </div>
                
                <h4 className="text-xl font-bold font-display text-forest-800 mb-3">
                  {resource.title}
                </h4>
                
                <p className="text-sage-600 mb-6 leading-relaxed">
                  {resource.description}
                </p>

                <div className="flex items-center justify-between text-sm text-sage-500 mb-6">
                  <span>{resource.type}</span>
                  <span>{resource.size}</span>
                </div>

                <Button className="w-full bg-forest-600 hover:bg-forest-700 text-white">
                  <Download className="w-4 h-4 mr-2" />
                  Download Free
                </Button>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-earth-500 to-gold-500 rounded-3xl p-10 text-white max-w-4xl mx-auto">
            <Globe className="w-16 h-16 mx-auto mb-6 opacity-80" />
            <h3 className="text-3xl font-bold font-display mb-6">
              Share the Knowledge, Multiply the Impact
            </h3>
            <p className="text-lg mb-8 opacity-90 leading-relaxed">
              Education is the foundation of environmental action. Share these resources with your network 
              and help create a community of informed forest protectors.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-white text-earth-700 hover:bg-gray-100 font-semibold px-8 py-4 text-lg rounded-2xl">
                Share Resources
              </Button>
              <Button variant="outline" className="border-2 border-white/30 text-white hover:bg-white/10 px-8 py-4 text-lg rounded-2xl">
                Subscribe to Updates
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationalContent;
