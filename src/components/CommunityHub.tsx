import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Users, Trophy, MapPin, Calendar, MessageCircle, Heart, Share2, Target, Leaf } from 'lucide-react';
import OptimizedImage from './OptimizedImage';
import { trackEvent } from './AnalyticsTracker';

const CommunityHub = () => {
  const [activeTab, setActiveTab] = useState('challenges');

  const challenges = [
    {
      id: 1,
      title: 'Plant 1,000 Trees in Ghana',
      location: 'Tamale, Ghana',
      progress: 750,
      target: 1000,
      endDate: 'December 31, 2024',
      participants: 234,
      image: 'https://images.unsplash.com/photo-1518495973542-4542c06a5843?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Help restore the forests of Northern Ghana by joining our community-driven planting challenge.',
      prize: 'Special Ghana Guardian Badge + Impact Certificate'
    },
    {
      id: 2,
      title: 'DR Congo Forest Revival',
      location: 'Kikwit, DR Congo',
      progress: 380,
      target: 500,
      endDate: 'January 15, 2025',
      participants: 156,
      image: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Support local communities in Kikwit by contributing to this focused reforestation effort.',
      prize: 'Congo Champion Badge + Community Impact Video'
    }
  ];

  const impactStories = [
    {
      id: 1,
      author: 'Maria K.',
      location: 'Kenya',
      story: 'Your subscription helped my village plant 50 trees last month! The children are so excited to watch them grow.',
      image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      likes: 47,
      date: '2 days ago',
      trees: 50
    },
    {
      id: 2,
      author: 'James M.',
      location: 'Tanzania',
      story: 'Thanks to SaveTheForest subscribers, we now have shade for our school playground and cleaner air for our students!',
      image: 'https://images.unsplash.com/photo-1518495973542-4542c06a5843?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      likes: 89,
      date: '5 days ago',
      trees: 120
    },
    {
      id: 3,
      author: 'Fatima A.',
      location: 'Ghana',
      story: 'The forest is coming back to life! Birds have returned and our crops are growing better with the improved soil.',
      image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      likes: 156,
      date: '1 week ago',
      trees: 200
    }
  ];

  const liveActivity = [
    { location: 'Kikwit, DR Congo', trees: 247, time: '2 hours ago', link: '/impact-map/kikwit' },
    { location: 'Tamale, Ghana', trees: 189, time: '5 hours ago', link: '/impact-map/tamale' },
    { location: 'Mbeya, Tanzania', trees: 156, time: '1 day ago', link: '/impact-map/mbeya' },
    { location: 'Kumasi, Ghana', trees: 134, time: '2 days ago', link: '/impact-map/kumasi' },
    { location: 'Lubumbashi, DR Congo', trees: 98, time: '3 days ago', link: '/impact-map/lubumbashi' }
  ];

  const joinChallenge = (challengeId: number) => {
    // Track the event for analytics
    trackEvent('click', 'Community', `Join Challenge ${challengeId}`);
    
    // Redirect to subscription page with challenge context
    window.location.href = '/pricing?challenge=' + challengeId;
  };

  const shareStory = (story: any) => {
    const text = `Inspiring story from ${story.author} in ${story.location}: "${story.story}" 🌳 Join SaveTheForest to make a difference: ${window.location.origin} #PlantTrees #CommunityImpact`;
    
    if (navigator.share) {
      navigator.share({
        title: 'Community Impact Story',
        text: text,
        url: window.location.origin
      });
    } else {
      window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}`, '_blank');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-sage-50 to-mint-50 py-12">
      <div className="container mx-auto px-4 lg:px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-mint-100 text-mint-700 px-6 py-3 rounded-full text-sm font-semibold mb-6">
            <Users className="w-4 h-4 mr-2" />
            Community Hub
          </div>
          <h1 className="text-4xl md:text-6xl font-bold font-display text-forest-800 mb-8 leading-tight">
            Join the <span className="text-gradient-mint">Forest Movement</span>
          </h1>
          <p className="text-xl md:text-2xl text-sage-600 max-w-4xl mx-auto leading-relaxed">
            Connect with fellow forest protectors, share your impact, and participate in community challenges 
            that make a real difference across Africa.
          </p>
        </div>

        {/* Navigation Tabs */}
        <div className="flex flex-wrap justify-center mb-12 bg-white/70 backdrop-blur-sm rounded-2xl p-2 max-w-2xl mx-auto">
          {[
            { id: 'challenges', label: 'Planting Challenges', icon: Target },
            { id: 'stories', label: 'Impact Stories', icon: Heart },
            { id: 'activity', label: 'Live Activity', icon: Leaf }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center px-6 py-3 rounded-xl font-medium transition-all ${
                activeTab === tab.id
                  ? 'bg-gradient-forest text-white shadow-lg'
                  : 'text-sage-600 hover:text-forest-600 hover:bg-sage-50'
              }`}
            >
              <tab.icon className="w-4 h-4 mr-2" />
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content based on active tab */}
        {activeTab === 'challenges' && (
          <div className="space-y-8">
            <h2 className="text-3xl font-bold font-display text-forest-800 text-center mb-12">
              Active Planting Challenges
            </h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {challenges.map((challenge) => (
                <div key={challenge.id} className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300">
                  <div className="relative h-48">
                    <OptimizedImage
                      src={challenge.image}
                      alt={`${challenge.title} - ${challenge.location}`}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-full px-4 py-2">
                      <div className="flex items-center text-sm font-medium text-forest-800">
                        <MapPin className="w-4 h-4 mr-2" />
                        {challenge.location}
                      </div>
                    </div>
                    <div className="absolute top-4 right-4 bg-mint-500 text-white rounded-full px-4 py-2">
                      <div className="flex items-center text-sm font-semibold">
                        <Users className="w-4 h-4 mr-2" />
                        {challenge.participants}
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-8">
                    <h3 className="text-2xl font-bold font-display text-forest-800 mb-4">
                      {challenge.title}
                    </h3>
                    <p className="text-sage-600 mb-6 leading-relaxed">
                      {challenge.description}
                    </p>
                    
                    {/* Progress Bar */}
                    <div className="mb-6">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium text-forest-600">Progress</span>
                        <span className="text-sm font-bold text-forest-800">
                          {challenge.progress}/{challenge.target} trees
                        </span>
                      </div>
                      <div className="w-full bg-sage-200 rounded-full h-3">
                        <div 
                          className="bg-gradient-mint h-3 rounded-full transition-all duration-1000"
                          style={{ width: `${(challenge.progress / challenge.target) * 100}%` }}
                        ></div>
                      </div>
                      <p className="text-xs text-sage-500 mt-2">
                        {Math.round((challenge.progress / challenge.target) * 100)}% complete
                      </p>
                    </div>
                    
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center text-sm text-sage-600">
                        <Calendar className="w-4 h-4 mr-2" />
                        Ends {challenge.endDate}
                      </div>
                      <div className="flex items-center text-sm text-gold-600">
                        <Trophy className="w-4 h-4 mr-2" />
                        {challenge.prize}
                      </div>
                    </div>
                    
                    <Button 
                      onClick={() => joinChallenge(challenge.id)}
                      className="w-full bg-gradient-forest hover:opacity-90 text-white font-semibold py-4 rounded-2xl shadow-lg hover:scale-105 transition-all duration-300"
                    >
                      Join Challenge
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'stories' && (
          <div className="space-y-8">
            <h2 className="text-3xl font-bold font-display text-forest-800 text-center mb-12">
              Community Impact Stories
            </h2>
            
            <div className="max-w-4xl mx-auto space-y-8">
              {impactStories.map((story) => (
                <div key={story.id} className="bg-white rounded-3xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="md:w-1/4">
                      <OptimizedImage
                        src={story.image}
                        alt={`Impact story from ${story.location}`}
                        className="w-full h-48 md:h-32 object-cover rounded-2xl"
                        loading="lazy"
                      />
                    </div>
                    
                    <div className="md:w-3/4">
                      <div className="flex items-center justify-between mb-4">
                        <div>
                          <h3 className="font-bold text-forest-800">{story.author}</h3>
                          <p className="text-sm text-sage-600 flex items-center">
                            <MapPin className="w-3 h-3 mr-1" />
                            {story.location} • {story.date}
                          </p>
                        </div>
                        <div className="text-center bg-forest-50 rounded-xl px-4 py-2">
                          <div className="text-lg font-bold text-forest-600">{story.trees}</div>
                          <div className="text-xs text-sage-600">trees</div>
                        </div>
                      </div>
                      
                      <p className="text-lg text-sage-700 leading-relaxed mb-4">
                        "{story.story}"
                      </p>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center text-sm text-sage-600">
                          <Heart className="w-4 h-4 mr-2 text-red-400" />
                          {story.likes} likes
                        </div>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => shareStory(story)}
                          className="text-sage-600 hover:text-forest-600"
                        >
                          <Share2 className="w-4 h-4 mr-2" />
                          Share Story
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'activity' && (
          <div className="space-y-8">
            <h2 className="text-3xl font-bold font-display text-forest-800 text-center mb-12">
              Live Planting Activity
            </h2>
            
            <div className="max-w-3xl mx-auto bg-white rounded-3xl shadow-xl p-8">
              <div className="space-y-6">
                {liveActivity.map((activity, index) => (
                  <div key={index} className="flex items-center justify-between p-6 bg-gradient-to-r from-forest-50 to-mint-50 rounded-2xl hover:shadow-md transition-all">
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-forest-500 rounded-full mr-4 animate-pulse"></div>
                      <div>
                        <a 
                          href={activity.link}
                          className="font-semibold text-forest-800 hover:text-forest-600 hover:underline transition-colors"
                        >
                          {activity.trees} trees planted in {activity.location}
                        </a>
                        <div className="text-sm text-sage-600">{activity.time}</div>
                      </div>
                    </div>
                    <Leaf className="w-5 h-5 text-forest-500" />
                  </div>
                ))}
              </div>
              
              <div className="mt-8 text-center">
                <Button 
                  onClick={() => window.location.href = '/impact'}
                  className="bg-gradient-forest text-white hover:opacity-90 px-8 py-3 rounded-2xl font-semibold"
                >
                  View Full Impact Map
                </Button>
              </div>
            </div>
          </div>
        )}

        {/* Bottom CTA */}
        <div className="text-center mt-20">
          <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-10 max-w-3xl mx-auto shadow-lg border border-sage-200">
            <h3 className="text-3xl font-bold font-display text-forest-800 mb-6">
              Ready to Make Your Impact?
            </h3>
            <p className="text-xl text-sage-600 mb-8 leading-relaxed">
              Join our community of forest protectors and start your tree-planting journey today. 
              Every subscription creates real change.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={() => window.location.href = '/pricing'}
                className="bg-gradient-forest hover:shadow-forest text-white font-semibold px-8 py-4 text-lg rounded-2xl shadow-lg hover:scale-105 transition-all duration-300"
              >
                <Leaf className="w-5 h-5 mr-2" />
                Start Planting Trees
              </Button>
              <Button 
                variant="outline" 
                onClick={() => window.location.href = '/about'}
                className="border-2 border-sage-300 text-sage-700 hover:bg-sage-50 px-8 py-4 text-lg rounded-2xl"
              >
                <Users className="w-5 h-5 mr-2" />
                Learn More About Us
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunityHub;
