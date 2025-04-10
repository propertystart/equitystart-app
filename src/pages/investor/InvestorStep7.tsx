
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import ApplicationFormWrapper from '@/components/ApplicationFormWrapper';

const InvestorStep7 = () => {
  return (
    <ApplicationFormWrapper
      title="Invest Now pg 2"
      currentStep={7}
      totalSteps={11}
      showPrevious={true}
      previousPath="/investor/step6"
    >
      <div className="py-6">
        <p className="mb-6">
          <strong>EquityStart</strong> is licensed and permitted to operate the EquityStart platform as an authorised representative under AFSL [    ] and as a holder of an Australian Credit License [ACL  ].
        </p>
        
        <p className="mb-6">
          Before going too much further, please download, read and review the EquityStart Fund Information Memorandum.
        </p>
        
        <div className="flex justify-center gap-4 mt-8 mb-8">
          <Button className="bg-blue-900 text-white hover:bg-blue-800">Review now</Button>
          <Button className="bg-blue-900 text-white hover:bg-blue-800">Download for later</Button>
        </div>
        
        <div className="mt-12 mb-6 text-center">
          <Link to="/investor/step8">
            <Button className="bg-blue-900 text-white hover:bg-blue-800">Next</Button>
          </Link>
        </div>
        
        <p className="mt-6">
          By clicking "Next" you confirm you have read and understood the terms of the <strong>EquityStart</strong> Fund IM.
        </p>
      </div>
    </ApplicationFormWrapper>
  );
};

export default InvestorStep7;
