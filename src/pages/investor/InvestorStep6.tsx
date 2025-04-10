
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import ApplicationFormWrapper from '@/components/ApplicationFormWrapper';

const InvestorStep6 = () => {
  return (
    <ApplicationFormWrapper
      title="Invest Now pg 1"
      currentStep={6}
      totalSteps={11}
      showPrevious={true}
      previousPath="/investor/step5"
    >
      <div className="py-6">
        <h1 className="text-xl font-semibold mb-4">Let's get started. But first, we need to cross our t's and dot our i's....</h1>
        
        <h2 className="text-lg font-semibold mt-6 mb-4">Eligibility</h2>
        
        <p className="mb-4">If you answer "Yes" to any of the following questions, then it's time to invest.</p>
        
        <div className="space-y-3 mb-6">
          <div className="flex items-start gap-2">
            <input type="checkbox" id="amount" className="mt-1" />
            <label htmlFor="amount">Are you investing more than $500,000?</label>
          </div>
          
          <div className="flex items-start gap-2">
            <input type="checkbox" id="assets" className="mt-1" />
            <label htmlFor="assets" className="flex-1">
              Are your net assets greater than $2,500,000?
              <Link to="/investor/step6a" className="ml-4 inline-block bg-blue-900 text-white text-sm px-2 py-1 rounded">
                Send Accountants Certificate to my Accountant
              </Link>
            </label>
          </div>
          
          <div className="flex items-start gap-2">
            <input type="checkbox" id="income" className="mt-1" />
            <label htmlFor="income" className="flex-1">
              Has your gross income been greater than $250,000 for the last two financial years?
              <Link to="/investor/step6a" className="ml-4 inline-block bg-blue-900 text-white text-sm px-2 py-1 rounded">
                Send Accountants Certificate to my Accountant
              </Link>
            </label>
          </div>
          
          <div className="flex items-start gap-2">
            <input type="checkbox" id="experience" className="mt-1" />
            <label htmlFor="experience">Have you got experience in investing in similar mortgage products or loans?</label>
          </div>
          
          <div className="flex items-start gap-2">
            <input type="checkbox" id="overseas" className="mt-1" />
            <label htmlFor="overseas">Are you located overseas and not a resident of Australia?</label>
          </div>
        </div>
        
        <div className="flex justify-center gap-4 mt-8">
          <Link to="/investor/step7">
            <Button className="bg-blue-900 text-white hover:bg-blue-800">Invest Now</Button>
          </Link>
          <Link to="/investor/step6a">
            <Button className="bg-blue-900 text-white hover:bg-blue-800">What is an accountant's certificate?</Button>
          </Link>
        </div>
        
        <div className="mt-8">
          <h3 className="text-lg font-semibold mb-4">[ACCOUNTANT DETAILS]</h3>
          <div className="space-y-3">
            <div className="bg-blue-300 p-3 text-center">Firm Name</div>
            <div className="bg-blue-300 p-3 text-center">Contact Name</div>
            <div className="bg-blue-300 p-3 text-center">Email Address</div>
          </div>
        </div>
      </div>
    </ApplicationFormWrapper>
  );
};

export default InvestorStep6;
