
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import ApplicationFormWrapper from '@/components/ApplicationFormWrapper';

const InvestorStep6a = () => {
  return (
    <ApplicationFormWrapper
      title="Accountants Certificate"
      currentStep={6}
      totalSteps={11}
      showPrevious={true}
      previousPath="/investor/step6"
    >
      <div className="py-6">
        <h1 className="text-xl font-bold mb-4">Accountant's Certificate [Auto-populate with investor name and send to accountant]</h1>
        
        <p className="mb-4">Under Section 761G(7)(c) of the Corporations Act 2001</p>
        
        <div className="space-y-4 mb-6">
          <div className="flex items-center gap-2">
            <span>I,</span>
            <div className="bg-blue-300 px-4 py-2 flex-grow text-center">Name</div>
          </div>
          
          <div className="flex items-center gap-2">
            <span>Of</span>
            <div className="bg-blue-300 px-4 py-2 flex-grow text-center">Address</div>
          </div>
          
          <div className="flex items-center gap-2">
            <span>Being a Qualified Accountant</span>
            <div className="bg-blue-300 px-4 py-2 flex-grow text-center">DropBox Definition</div>
          </div>
          
          <div className="flex items-center gap-2">
            <span>certify that</span>
            <div className="bg-blue-300 px-4 py-2 flex-grow text-center">Investor Name</div>
          </div>
        </div>
        
        <div className="space-y-2 mb-6">
          <div className="flex items-start gap-2">
            <input type="checkbox" id="netAssets" className="mt-1" />
            <label htmlFor="netAssets">has net assets in excess of AUD2.5 million OR</label>
          </div>
          
          <div className="flex items-start gap-2">
            <input type="checkbox" id="grossIncome" className="mt-1" />
            <label htmlFor="grossIncome">had gross income in excess of $250,000 per annum for each of the last two financial years</label>
          </div>
        </div>
        
        <div className="flex gap-4 mb-4">
          <div className="bg-blue-900 text-white px-4 py-2 w-48 text-center">E-signature here</div>
          <div className="bg-blue-900 text-white px-4 py-2 w-36 text-center">Date</div>
        </div>
        
        <div className="mb-6">
          <div className="bg-blue-900 text-white px-4 py-2 w-60 text-center">My Qualification</div>
        </div>
        
        <div className="mb-6">
          <div className="bg-blue-900 text-white px-4 py-2 w-48 text-center">Submit Certificate</div>
        </div>
        
        <div className="mt-8 text-center">
          <Link to="/investor/step7">
            <Button className="bg-blue-900 text-white hover:bg-blue-800">Continue</Button>
          </Link>
        </div>
      </div>
    </ApplicationFormWrapper>
  );
};

export default InvestorStep6a;
