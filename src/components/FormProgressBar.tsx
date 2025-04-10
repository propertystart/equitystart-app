
import React from 'react';

interface FormProgressBarProps {
  currentStep: number;
  totalSteps: number;
}

const FormProgressBar: React.FC<FormProgressBarProps> = ({ currentStep, totalSteps }) => {
  const percentage = (currentStep / totalSteps) * 100;
  
  return (
    <div className="w-full mb-8">
      <div className="relative pt-1">
        <div className="flex items-center justify-between mb-2">
          <div>
            <span className="text-xs font-semibold inline-block text-equityblue">
              Step {currentStep} of {totalSteps}
            </span>
          </div>
          <div>
            <span className="text-xs font-semibold inline-block text-equityblue">
              {Math.round(percentage)}%
            </span>
          </div>
        </div>
        <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200">
          <div
            style={{ width: `${percentage}%` }}
            className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-equityblue transition-all duration-300 ease-in-out"
          ></div>
        </div>
      </div>
    </div>
  );
};

export default FormProgressBar;
