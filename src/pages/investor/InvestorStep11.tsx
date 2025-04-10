
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import ApplicationFormWrapper from '@/components/ApplicationFormWrapper';

const InvestorStep11 = () => {
  return (
    <ApplicationFormWrapper
      title="Investor Logout"
      currentStep={11}
      totalSteps={11}
      nextButtonText="Finish"
      onNext={() => {}}
      showPrevious={true}
      onPrevious={() => {}}
    >
      <div className="py-6">
        <h1 className="text-xl font-semibold mb-6">You have just taken the first step in building your EquityStart investment portfolio</h1>
        
        <p className="mb-4">
          The EquityStart platform will now seek to match your investment criteria to live opportunities.
        </p>
        
        <p className="mb-8">
          Keep a lookout! Live opportunities will be sent your way via SMS.
        </p>
        
        <div className="text-center mb-12">
          <Link to="/">
            <Button className="bg-blue-900 text-white hover:bg-blue-800">Logout</Button>
          </Link>
        </div>
        
        <div className="mt-12">
          <p className="font-semibold">OR</p>
          
          <h2 className="text-lg font-semibold mt-4 mb-4">You have just taken the first step in building your EquityStart investment portfolio</h2>
          
          <p className="mb-8">
            The EquityStart platform has matched several live opportunities to your investment criteria
          </p>
          
          <div className="text-center">
            <Link to="/">
              <Button className="bg-blue-900 text-white hover:bg-blue-800">View Live Investments</Button>
            </Link>
          </div>
        </div>
      </div>
    </ApplicationFormWrapper>
  );
};

export default InvestorStep11;
