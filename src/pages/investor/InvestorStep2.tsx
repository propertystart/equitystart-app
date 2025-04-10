
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import ApplicationFormWrapper from '@/components/ApplicationFormWrapper';

const InvestorStep2 = () => {
  return (
    <ApplicationFormWrapper
      title="Start Investing"
      currentStep={2}
      totalSteps={11}
      nextButtonText="Next"
      onNext={() => {}}
      showPrevious={true}
      onPrevious={() => {}}
    >
      <div className="py-6">
        <h1 className="text-xl font-semibold mb-6">Become a better investor on the go and <strong>share in property value increases</strong> without the headache of owning the property</h1>
        
        <p className="mb-6">
          By becoming an EquityStart investor you help others on the ladder to wealth creation whilst also growing your own wealth. Together, we all benefit.
        </p>
        
        <div className="mb-6">
          <h2 className="text-lg font-semibold mb-2">Our Technology</h2>
          <p className="mb-3">
            Investors benefit from learning algorithms and proprietary AI that analyses historical and recent locational data to value your EquityStart investments at any time
          </p>
          <p>
            Being able to mark to market creates liquidity and the ability for EquityStart investors buy or sell their positions across a liquid market in a secure Blockchain ledger
          </p>
        </div>
        
        <div className="mt-4 mb-6 border p-4 bg-gray-50 rounded-md">
          <p className="text-sm">
            An AUD100,000 investment in a 3 bedroom home in NSW would have participated in a 25.58% capital over a five year loan term from 2020. This is in addition to interest rate return of 6.25% in this example.
          </p>
          <p className="text-sm font-semibold mt-2">
            The EquityStart investor would have obtained a total return of some 11.37% per annum, subject to independent valuation, refinance or sale of the home at end of loan term.
          </p>
        </div>
        
        <div className="mt-8 flex justify-center gap-4">
          <Link to="/investor/step3">
            <Button className="bg-blue-900 text-white hover:bg-blue-800">Invest Now</Button>
          </Link>
          <Link to="/investor/step3">
            <Button className="bg-blue-900 text-white hover:bg-blue-800">How it all works</Button>
          </Link>
        </div>
      </div>
    </ApplicationFormWrapper>
  );
};

export default InvestorStep2;
