import React from 'react';
import { Users, Star, Globe, Award, Trophy, Heart } from 'lucide-react';

const Achievements = () => {
  const achievements = [
    {
      id: '1',
      icon: Users,
      name: 'Global Community',
      description: 'Over 1 million active users worldwide',
      progress: 1200000,
      total: 1000000,
    },
    {
      id: '2',
      icon: Star,
      name: 'App Store Rating',
      description: 'Average rating across all platforms',
      progress: 4.8,
      total: 5,
    },
    {
      id: '3',
      icon: Globe,
      name: 'Countries Reached',
      description: 'Available and active worldwide',
      progress: 120,
      total: 195,
    },
    {
      id: '4',
      icon: Award,
      name: 'Industry Awards',
      description: 'Recognition for excellence in fitness tech',
      progress: 15,
      total: 20,
    },
    {
      id: '5',
      icon: Trophy,
      name: 'Success Stories',
      description: 'Documented transformation journeys',
      progress: 50000,
      total: 50000,
    },
    {
      id: '6',
      icon: Heart,
      name: 'Lives Impacted',
      description: 'Health improvements reported',
      progress: 850000,
      total: 1000000,
    },
  ];

  return (
    <section className="py-12 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="flex items-center mb-8">
          <Trophy className="w-8 h-8 text-indigo-400 mr-3" />
          <h2 className="text-3xl font-bold text-gray-100">Our Milestones</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {achievements.map(({ id, icon: Icon, name, description, progress, total }) => (
            <div key={id} className="card p-6 hover:scale-105 transition-transform duration-300">
              <div className="flex items-center mb-4">
                <div className="p-3 rounded-full bg-indigo-900/50 mr-4">
                  <Icon className="w-6 h-6 text-indigo-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-100">{name}</h3>
                  <p className="text-sm text-gray-400">{description}</p>
                </div>
              </div>
              
              <div className="relative pt-1">
                <div className="flex mb-2 items-center justify-between">
                  <div className="text-xs text-gray-400">Progress</div>
                  <div className="text-xs text-indigo-400 font-semibold">
                    {typeof progress === 'number' && typeof total === 'number' 
                      ? Math.min(Math.round((progress / total) * 100), 100)
                      : 0}%
                  </div>
                </div>
                <div className="overflow-hidden h-2 text-xs flex rounded bg-gray-700">
                  <div
                    style={{ width: `${Math.min((progress / total) * 100, 100)}%` }}
                    className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-gradient-to-r from-indigo-500 to-purple-500"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;