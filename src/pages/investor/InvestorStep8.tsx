
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import ApplicationFormWrapper from '@/components/ApplicationFormWrapper';

const InvestorStep8 = () => {
  return (
    <ApplicationFormWrapper
      title="Investor Details"
      currentStep={8}
      totalSteps={11}
      showPrevious={true}
      previousPath="/investor/step7"
    >
      <div className="py-6">
        <h1 className="text-xl font-semibold mb-6">Almost there! Tell us how you are investing?</h1>
        
        <div className="space-y-4 mb-8">
          <div className="flex gap-8 items-center">
            <div className="bg-blue-300 w-24 h-10 flex items-center justify-center">Own Name</div>
            <div className="bg-blue-300 w-48 h-10 flex items-center justify-center">With my partner, jointly</div>
            <div className="bg-blue-300 w-32 h-10 flex items-center justify-center">As a company</div>
            <div className="bg-blue-300 w-24 h-10 flex items-center justify-center">As a Trust</div>
          </div>
          
          <div className="grid grid-cols-3 gap-4">
            <div className="col-span-1">
              <p>Investor 1 Name</p>
              <div className="bg-blue-300 h-10 w-full mt-1"></div>
            </div>
            <div className="col-span-1">
              <p>Title</p>
              <div className="bg-blue-300 h-10 w-20 mt-1"></div>
            </div>
            <div className="col-span-1">
              <p>DOB</p>
              <div className="bg-blue-300 h-10 w-24 mt-1"></div>
            </div>
          </div>
          
          <div className="grid grid-cols-3 gap-4">
            <div className="col-span-1">
              <p>Investor 2 Name</p>
              <div className="bg-blue-300 h-10 w-full mt-1"></div>
            </div>
            <div className="col-span-1">
              <p>Title</p>
              <div className="bg-blue-300 h-10 w-20 mt-1"></div>
            </div>
            <div className="col-span-1">
              <p>DOB</p>
              <div className="bg-blue-300 h-10 w-24 mt-1"></div>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-8">
          <div>
            <p className="mb-2">Preferred Contact</p>
            <div className="bg-blue-300 h-10 w-full"></div>
          </div>
          
          <div>
            <div className="mb-2">
              <p>Please upload ASIC Company Search</p>
              <p>Trust Dropdown</p>
              <div className="bg-blue-300 h-10 w-full mb-2"></div>
              <p>Trust Declaration Unregistered MIS</p>
            </div>
            
            <div className="bg-blue-300 p-3 mb-4">
              <p className="text-sm">We confirm we are an unregistered managed investment scheme with wholesale clients only and we do not make small scale offerings under $1012E of the Act.</p>
            </div>
            
            <p className="mb-2">Please upload a certified copy of the Trust Deed AND if individual trustee, see id documents OR If corporate trustee, please upload ASIC Company Search</p>
          </div>
        </div>
        
        <div className="mt-8 text-center">
          <Link to="/investor/step9">
            <Button className="bg-blue-900 text-white hover:bg-blue-800">Next</Button>
          </Link>
        </div>
      </div>
    </ApplicationFormWrapper>
  );
};

export default InvestorStep8;
