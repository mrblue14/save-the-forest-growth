
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Badge, Trophy, Leaf, Users, Target, Share2, Calendar } from 'lucide-react';
import OptimizedImage from './OptimizedImage';

const UserDashboard = () => {
  const [user] = useState({
    name: 'Sarah Johnson',
    treesPlanted: 120,
    co2Offset: 60,
    monthsActive: 8,
    currentTier: 'Sapling',
    joinDate: 'March 2024'
  });

  const badges = [
    { 
      id: 1, 
      name: 'Seed Starter', 
      description: '10 Trees Planted', 
      earned: true, 
      icon: '🌱',
      earnedDate: 'March 2024'
    },
    { 
      id: 2, 
      name: 'Forest Friend', 
      description: '50 Trees Planted', 
      earned: true, 
      icon: '🌿',
      earnedDate: 'June 2024'
    },
    { 
      id: 3, 
      name: 'Climate Hero', 
      description: '100 Trees Planted', 
      earned: true, 
      icon: '🏆',
      earnedDate: 'October 2024'
    },
    { 
      id: 4, 
      name: 'Forest Guardian', 
      description: '500 Trees Planted', 
      earned: false, 
      icon: '🛡️',
      progress: 24 // 120/500 = 24%
    }
  ];

  const nextMilestone = {
    name: 'Tree Champion',
    target: 150,
    current: user.treesPlanted,
    remaining: 150 - user.treesPlanted
  };

  const shareAchievement = (badge) => {
    const text = `I just earned the ${badge.name} badge by planting ${badge.description.toLowerCase()} with SaveTheForest! Join me in restoring African forests: ${window.location.origin} #PlantTrees #ReforestationAfrica #ClimateAction`;
    
    if (navigator.share) {
      navigator.share({
        title: `${badge.name} Achievement!`,
        text: text,
        url: window.location.origin
      });
    } else {
      window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}`, '_blank');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-forest-50 to-nature-50 py-12">
      <div className="container mx-auto px-4 lg:px-6 max-w-6xl">
        {/* Header */}
        <div className="bg-white rounded-3xl shadow-xl p-8 mb-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center mb-6 md:mb-0">
              <div className="w-20 h-20 bg-gradient-forest rounded-full flex items-center justify-center mr-6">
                <span className="text-2xl font-bold text-white">{user.name.split(' ').map(n => n[0]).join('')}</span>
              </div>
              <div>
                <h1 className="text-3xl font-bold font-display text-forest-800 mb-2">
                  Welcome back, {user.name.split(' ')[0]}!
                </h1>
                <p className="text-sage-600">
                  Member since {user.joinDate} • {user.currentTier} Subscriber
                </p>
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-forest-600 mb-1">{user.treesPlanted}</div>
              <div className="text-sm text-sage-600">Trees Planted</div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Impact Stats */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-3xl shadow-xl p-8 mb-8">
              <h2 className="text-2xl font-bold font-display text-forest-800 mb-6 flex items-center">
                <Trophy className="w-6 h-6 mr-3 text-gold-500" />
                Your Environmental Impact
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center bg-forest-50 rounded-2xl p-6">
                  <Leaf className="w-8 h-8 text-forest-500 mx-auto mb-3" />
                  <div className="text-3xl font-bold text-forest-600 mb-2">{user.treesPlanted}</div>
                  <div className="text-sm text-sage-600">Trees Planted</div>
                </div>
                
                <div className="text-center bg-sky-50 rounded-2xl p-6">
                  <div className="text-2xl mb-3">🌍</div>
                  <div className="text-3xl font-bold text-sky-600 mb-2">{user.co2Offset}</div>
                  <div className="text-sm text-sage-600">Tons CO₂ Offset</div>
                </div>
                
                <div className="text-center bg-warm-50 rounded-2xl p-6">
                  <Calendar className="w-8 h-8 text-warm-500 mx-auto mb-3" />
                  <div className="text-3xl font-bold text-warm-600 mb-2">{user.monthsActive}</div>
                  <div className="text-sm text-sage-600">Months Active</div>
                </div>
              </div>
            </div>

            {/* Progress to Next Milestone */}
            <div className="bg-white rounded-3xl shadow-xl p-8 mb-8">
              <h2 className="text-2xl font-bold font-display text-forest-800 mb-6 flex items-center">
                <Target className="w-6 h-6 mr-3 text-mint-500" />
                Next Milestone
              </h2>
              
              <div className="bg-gradient-to-r from-mint-50 to-forest-50 rounded-2xl p-6">
                <div className="flex justify-between items-center mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-forest-800">{nextMilestone.name}</h3>
                    <p className="text-sage-600">Plant {nextMilestone.target} trees total</p>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-mint-600">{nextMilestone.remaining}</div>
                    <div className="text-sm text-sage-600">trees to go</div>
                  </div>
                </div>
                
                <div className="w-full bg-sage-200 rounded-full h-3 mb-4">
                  <div 
                    className="bg-gradient-mint h-3 rounded-full transition-all duration-500"
                    style={{ width: `${(nextMilestone.current / nextMilestone.target) * 100}%` }}
                  ></div>
                </div>
                
                <p className="text-sm text-sage-600 text-center">
                  {Math.round((nextMilestone.current / nextMilestone.target) * 100)}% complete
                </p>
              </div>
            </div>
          </div>

          {/* Badges & Achievements */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-3xl shadow-xl p-8">
              <h2 className="text-2xl font-bold font-display text-forest-800 mb-6 flex items-center">
                <Badge className="w-6 h-6 mr-3 text-gold-500" />
                Your Badges
              </h2>
              
              <div className="space-y-4">
                {badges.map((badge) => (
                  <div 
                    key={badge.id} 
                    className={`p-4 rounded-2xl border-2 transition-all ${
                      badge.earned 
                        ? 'bg-gradient-to-r from-gold-50 to-warm-50 border-gold-200' 
                        : 'bg-sage-50 border-sage-200 opacity-60'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center">
                        <span className="text-2xl mr-3">{badge.icon}</span>
                        <div>
                          <h3 className="font-semibold text-forest-800">{badge.name}</h3>
                          <p className="text-sm text-sage-600">{badge.description}</p>
                        </div>
                      </div>
                      
                      {badge.earned && (
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => shareAchievement(badge)}
                          className="text-sage-600 hover:text-forest-600"
                        >
                          <Share2 className="w-4 h-4" />
                        </Button>
                      )}
                    </div>
                    
                    {badge.earned ? (
                      <p className="text-xs text-sage-500">Earned {badge.earnedDate}</p>
                    ) : (
                      <div className="w-full bg-sage-200 rounded-full h-2">
                        <div 
                          className="bg-mint-400 h-2 rounded-full transition-all duration-500"
                          style={{ width: `${badge.progress}%` }}
                        ></div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
              
              <div className="mt-8 text-center">
                <Button 
                  className="bg-gradient-forest text-white hover:opacity-90 w-full"
                  onClick={() => window.location.href = '/community'}
                >
                  <Users className="w-4 h-4 mr-2" />
                  Join Community Challenges
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
