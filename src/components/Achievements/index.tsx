import React from 'react';
import { Trophy } from 'lucide-react';
import AchievementCard from './AchievementCard';
import { achievements } from './achievementsData';

const Achievements = () => {
  return (
    <section className="py-12 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="flex items-center mb-8">
          <Trophy className="w-8 h-8 text-indigo-400 mr-3" />
          <h2 className="text-3xl font-bold text-gray-100">Our Milestones</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {achievements.map((achievement) => (
            <AchievementCard key={achievement.id} {...achievement} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;