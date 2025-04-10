
import React from 'react';

interface StepCardProps {
  number: number;
  title: string;
  description: string;
  icon?: React.ReactNode;
}

const StepCard: React.FC<StepCardProps> = ({
  number,
  title,
  description,
  icon
}) => {
  return (
    <div className="flex items-start mb-6">
      <div className="bg-equityblue text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
        {number}
      </div>
      <div className="ml-4">
        <h3 className="font-semibold text-lg mb-1">{title}</h3>
        <p className="text-gray-700">{description}</p>
      </div>
    </div>
  );
};

export default StepCard;
