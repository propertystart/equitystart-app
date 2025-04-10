
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import ApplicationFormWrapper from '@/components/ApplicationFormWrapper';

const InvestorStep9 = () => {
  return (
    <ApplicationFormWrapper
      title="Individual Investors"
      currentStep={9}
      totalSteps={11}
      showPrevious={true}
      previousPath="/investor/step8"
    >
      <div className="py-6">
        <h1 className="text-xl font-semibold mb-6">Individual Investors Contact Details [duplicate as required]</h1>
        
        <div className="space-y-4 mb-8">
          <div className="bg-blue-300 h-10 flex items-center justify-center">Address</div>
          <div className="bg-blue-300 h-10 flex items-center justify-center"></div>
          <div className="bg-blue-300 h-10 flex items-center justify-center">Mobile/Cell number</div>
          <div className="bg-blue-300 h-10 flex items-center justify-center">Email</div>
        </div>
        
        <div className="mb-6">
          <p className="mb-2">Please provide your Tax File Number [TFN]</p>
          <div className="bg-blue-300 h-10 w-3/5"></div>
        </div>
        
        <div className="mb-6">
          <p className="mb-2">If you have a TFN exemption, please provide details here</p>
          <div className="bg-blue-300 h-10 w-full"></div>
        </div>
        
        <div className="mt-8 text-center">
          <Link to="/investor/step10">
            <Button className="bg-blue-900 text-white hover:bg-blue-800">Next</Button>
          </Link>
        </div>
      </div>
    </ApplicationFormWrapper>
  );
};

export default InvestorStep9;
