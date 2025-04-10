
import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '@/components/Logo';
import { Button } from '@/components/ui/button';
import ApplicationFormWrapper from '@/components/ApplicationFormWrapper';

const InvestorStep1 = () => {
  return (
    <ApplicationFormWrapper
      title="Find out how"
      currentStep={1}
      totalSteps={11}
      nextButtonText="Start Investing"
      onNext={() => {}}
      showPrevious={false}
    >
      <div className="py-6">
        <h1 className="text-2xl font-bold text-center mb-6">Why should the big end of town get all of the upside??</h1>
        
        <p className="mb-4">EquityStart provides <strong>sophisticated investors</strong> with the opportunity to lend directly to home Borrowers</p>
        
        <ul className="space-y-4 my-6">
          <li className="flex gap-2 items-start">
            <span className="inline-block mt-1 border border-black w-4 h-4 flex-shrink-0"></span>
            <span>Invest when you want and how you want 24 x 7</span>
          </li>
          <li className="flex gap-2 items-start">
            <span className="inline-block mt-1 border border-black w-4 h-4 flex-shrink-0"></span>
            <span>Your loan is secured by a registered mortgage</span>
          </li>
          <li className="flex gap-2 items-start">
            <span className="inline-block mt-1 border border-black w-4 h-4 flex-shrink-0"></span>
            <span>Provides for regular interest rate returns and a share in home value appreciation during the loan term</span>
          </li>
          <li className="flex gap-2 items-start">
            <span className="inline-block mt-1 border border-black w-4 h-4 flex-shrink-0"></span>
            <span>Our proprietary AI uses a wealth of third party data and allows you to "value" your investment at any</span>
          </li>
          <li className="flex gap-2 items-start">
            <span className="inline-block mt-1 border border-black w-4 h-4 flex-shrink-0"></span>
            <span>EquityStart has created a liquid market which allows you to buy or sell investment positions day or night</span>
          </li>
          <li className="flex gap-2 items-start">
            <span className="inline-block mt-1 border border-black w-4 h-4 flex-shrink-0"></span>
            <span>All transactions and trading occur in a secure, decentralised Blockchain</span>
          </li>
        </ul>
        
        <div className="mt-8 text-center">
          <Link to="/investor/step2">
            <Button className="bg-blue-900 text-white hover:bg-blue-800 px-8 py-2">Start Investing</Button>
          </Link>
        </div>
      </div>
    </ApplicationFormWrapper>
  );
};

export default InvestorStep1;
