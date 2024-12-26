import React from 'react';
import { ChevronRight } from 'lucide-react';

const WorkoutPlans = () => {
  const levels = ['beginner', 'intermediate', 'advanced'];

  return (
    <section className="py-12 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-100 mb-8">Training Programs</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {levels.map((level) => (
            <div key={level} className="card overflow-hidden">
              <div className="h-48 bg-gradient-to-r from-indigo-900 to-purple-900 flex items-center justify-center">
                <h3 className="text-2xl font-bold text-indigo-200 capitalize">{level}</h3>
              </div>
              <div className="p-6">
                <p className="text-gray-400 mb-4">
                  {level === 'beginner' && 'Perfect for those just starting their fitness journey'}
                  {level === 'intermediate' && 'For those with some training experience'}
                  {level === 'advanced' && 'Challenging workouts for experienced athletes'}
                </p>
                <button className="btn-primary w-full flex items-center justify-between">
                  <span>View Program</span>
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkoutPlans;