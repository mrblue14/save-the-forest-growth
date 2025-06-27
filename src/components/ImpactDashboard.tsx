
import React from 'react';
import { BarChart3, MapPin, Users, Leaf } from 'lucide-react';

const ImpactDashboard = () => {
  const stats = [
    {
      icon: Leaf,
      label: 'Trees Planted',
      value: '254,892',
      change: '+1,247 this month',
      color: 'text-forest-600 bg-forest-50'
    },
    {
      icon: MapPin,
      label: 'Hectares Restored',
      value: '1,249',
      change: '+23 this month',
      color: 'text-nature-600 bg-nature-50'
    },
    {
      icon: Users,
      label: 'Families Supported',
      value: '5,847',
      change: '+89 this month',
      color: 'text-earth-600 bg-earth-50'
    },
    {
      icon: BarChart3,
      label: 'CO₂ Sequestered',
      value: '127.5 tons',
      change: '+5.2 tons this month',
      color: 'text-accent bg-accent/10'
    }
  ];

  return (
    <section id="impact" className="py-20 bg-gradient-to-br from-forest-50 to-nature-50">
      <div className="container mx-auto px-4 lg:px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold font-display text-forest-800 mb-4">
            Real-Time Impact Dashboard
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See the live impact of our community's commitment to reforestation. 
            Every number represents real trees, real families, and real change.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div key={stat.label} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="flex items-start justify-between mb-4">
                <div className={`p-3 rounded-xl ${stat.color}`}>
                  <stat.icon className="h-6 w-6" />
                </div>
                <div className="text-right">
                  <div className="text-2xl md:text-3xl font-bold font-display text-forest-800">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-500 mt-1">
                    {stat.change}
                  </div>
                </div>
              </div>
              <h3 className="text-lg font-semibold text-forest-700">
                {stat.label}
              </h3>
            </div>
          ))}
        </div>

        {/* Interactive Map Preview */}
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
          <div className="relative h-96 bg-gradient-to-br from-forest-100 to-nature-100">
            {/* Map Placeholder */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="h-16 w-16 text-forest-400 mx-auto mb-4" />
                <h3 className="text-2xl font-bold font-display text-forest-800 mb-2">
                  Interactive Impact Map
                </h3>
                <p className="text-gray-600 max-w-md">
                  Explore our planting sites across Africa with GPS coordinates, 
                  progress photos, and community stories.
                </p>
                <button className="mt-4 bg-gradient-forest text-white px-6 py-3 rounded-xl font-semibold hover:opacity-90 transition-all">
                  View Full Map
                </button>
              </div>
            </div>

            {/* Map Markers */}
            <div className="absolute top-1/4 left-1/3 w-4 h-4 bg-forest-500 rounded-full animate-pulse"></div>
            <div className="absolute top-2/3 left-2/3 w-4 h-4 bg-nature-500 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
            <div className="absolute top-1/2 left-1/4 w-4 h-4 bg-earth-500 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
          </div>

          {/* Recent Activity */}
          <div className="p-8">
            <h3 className="text-xl font-bold font-display text-forest-800 mb-6">
              Recent Planting Activity
            </h3>
            <div className="space-y-4">
              {[
                { location: 'Kikwit, DR Congo', trees: 247, time: '2 hours ago' },
                { location: 'Tamale, Ghana', trees: 189, time: '5 hours ago' },
                { location: 'Mbeya, Tanzania', trees: 156, time: '1 day ago' }
              ].map((activity, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-forest-500 rounded-full mr-3"></div>
                    <div>
                      <div className="font-semibold text-forest-800">{activity.location}</div>
                      <div className="text-sm text-gray-600">{activity.trees} trees planted</div>
                    </div>
                  </div>
                  <div className="text-sm text-gray-500">{activity.time}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactDashboard;
