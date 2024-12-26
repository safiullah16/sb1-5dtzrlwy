import React from 'react';
import { Trophy, Clock, Target } from 'lucide-react';

const Challenges = () => {
  const challenges = [
    {
      id: '1',
      name: '30-Day Push-Up Challenge',
      description: 'Progressively increase your push-ups from 10 to 100 per day',
      duration: '30 days',
      difficulty: 'medium'
    },
    {
      id: '2',
      name: 'Core Strength Builder',
      description: 'Daily core exercises to build a strong foundation',
      duration: '21 days',
      difficulty: 'hard'
    },
    {
      id: '3',
      name: 'Flexibility Journey',
      description: 'Improve your flexibility with daily stretching routines',
      duration: '14 days',
      difficulty: 'easy'
    }
  ];

  return (
    <section className="py-12 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="flex items-center mb-8">
          <Trophy className="w-8 h-8 text-yellow-500 mr-3" />
          <h2 className="text-3xl font-bold text-gray-100">Fitness Challenges</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {challenges.map((challenge) => (
            <div key={challenge.id} className="card">
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-100 mb-2">{challenge.name}</h3>
                <p className="text-gray-400 mb-4">{challenge.description}</p>
                <div className="flex items-center text-sm text-gray-400 mb-4">
                  <Clock className="w-4 h-4 mr-1" />
                  <span>{challenge.duration}</span>
                  <Target className="w-4 h-4 ml-4 mr-1" />
                  <span className="capitalize">{challenge.difficulty}</span>
                </div>
                <button className="btn-secondary w-full">
                  Join Challenge
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Challenges;