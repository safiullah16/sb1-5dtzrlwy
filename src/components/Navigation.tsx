import React from 'react';
import { Dumbbell, Utensils, Trophy, Home } from 'lucide-react';

const Navigation = () => {
  return (
    <nav className="bg-gray-900 text-gray-100 p-4 border-b border-gray-800">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Dumbbell className="w-6 h-6 text-indigo-400" />
          <span className="text-xl font-bold">FitTrack Pro</span>
        </div>
        <div className="flex space-x-6">
          {[
            { icon: Home, label: 'Home', href: '#' },
            { icon: Dumbbell, label: 'Workouts', href: '#workouts' },
            { icon: Utensils, label: 'Nutrition', href: '#nutrition' },
            { icon: Trophy, label: 'Challenges', href: '#challenges' }
          ].map(({ icon: Icon, label, href }) => (
            <a
              key={label}
              href={href}
              className="flex items-center space-x-1 hover:text-indigo-400 transition-colors duration-300"
            >
              <Icon className="w-5 h-5" />
              <span>{label}</span>
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;