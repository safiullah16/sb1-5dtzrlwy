import React from 'react';

interface ProgressBarProps {
  progress: number;
  total: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ progress, total }) => {
  const percentage = Math.min(Math.round((progress / total) * 100), 100);

  return (
    <div className="relative pt-1">
      <div className="flex mb-2 items-center justify-between">
        <div className="text-xs text-gray-400">Progress</div>
        <div className="text-xs text-indigo-400 font-semibold">
          {percentage}%
        </div>
      </div>
      <div className="overflow-hidden h-2 text-xs flex rounded bg-gray-700">
        <div
          style={{ width: `${percentage}%` }}
          className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-gradient-to-r from-indigo-500 to-purple-500"
        />
      </div>
    </div>
  );
};

export default ProgressBar;