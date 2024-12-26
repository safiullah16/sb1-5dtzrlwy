import React from 'react';
import { LucideIcon } from 'lucide-react';
import ProgressBar from './ProgressBar';

interface AchievementCardProps {
  icon: LucideIcon;
  name: string;
  description: string;
  progress: number;
  total: number;
  imageUrl: string;
}

const AchievementCard: React.FC<AchievementCardProps> = ({
  icon: Icon,
  name,
  description,
  progress,
  total,
  imageUrl,
}) => {
  return (
    <div className="card overflow-hidden hover:scale-105 transition-transform duration-300">
      <div 
        className="h-48 bg-cover bg-center relative"
        style={{ backgroundImage: `url(${imageUrl})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 to-transparent" />
        <div className="absolute bottom-4 left-4 right-4">
          <div className="flex items-center">
            <div className="p-2 rounded-full bg-indigo-900/70 mr-3">
              <Icon className="w-5 h-5 text-indigo-400" />
            </div>
            <h3 className="text-lg font-semibold text-white">{name}</h3>
          </div>
        </div>
      </div>
      <div className="p-6">
        <p className="text-sm text-gray-400 mb-4">{description}</p>
        <ProgressBar progress={progress} total={total} />
      </div>
    </div>
  );
};

export default AchievementCard;