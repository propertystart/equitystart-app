
import React, { ReactNode } from 'react';
import Logo from './Logo';
import FormProgressBar from './FormProgressBar';
import { Link } from 'react-router-dom';

interface ApplicationFormWrapperProps {
  children: ReactNode;
  title: string;
  currentStep: number;
  totalSteps: number;
  onNext?: () => void;
  onPrevious?: () => void;
  showPrevious?: boolean;
  nextButtonText?: string;
}

const ApplicationFormWrapper: React.FC<ApplicationFormWrapperProps> = ({
  children,
  title,
  currentStep,
  totalSteps,
  onNext,
  onPrevious,
  showPrevious = true,
  nextButtonText = 'Next'
}) => {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="py-4 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex justify-center md:justify-start">
            <Logo />
          </div>
          <div className="text-center md:text-left mt-2">
            <h2 className="text-equityred font-medium text-sm md:text-base">{title}</h2>
          </div>
        </div>
      </header>

      <main className="flex-grow container mx-auto px-4 py-8">
        <FormProgressBar currentStep={currentStep} totalSteps={totalSteps} />
        
        <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-md">
          {children}
        </div>
        
        <div className="max-w-2xl mx-auto mt-6 flex justify-between">
          {showPrevious && currentStep > 1 ? (
            <button onClick={onPrevious} className="bg-gray-200 text-gray-800 py-2 px-6 rounded hover:bg-gray-300 transition-colors">
              Previous
            </button>
          ) : (
            <div></div>
          )}
          
          {onNext && (
            <button onClick={onNext} className="btn-primary">
              {nextButtonText}
            </button>
          )}
        </div>
      </main>
      
      <footer className="bg-footergray py-4 mt-auto">
        <div className="container mx-auto px-4 text-center text-sm text-gray-600">
          <p>© {new Date().getFullYear()} EquityStart. All rights reserved.</p>
          <div className="mt-2 flex justify-center gap-4">
            <Link to="/disclaimer" className="hover:underline">Disclaimer</Link>
            <Link to="/compliance" className="hover:underline">Compliance</Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ApplicationFormWrapper;
