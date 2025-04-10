
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import ApplicationFormWrapper from '@/components/ApplicationFormWrapper';

const InvestorStep5 = () => {
  return (
    <ApplicationFormWrapper
      title="Our commitments to you"
      currentStep={5}
      totalSteps={11}
      nextButtonText="Next"
      onNext={() => {}}
      showPrevious={true}
      onPrevious={() => {}}
    >
      <div className="py-6">
        <div className="space-y-6">
          <div>
            <h2 className="text-lg font-semibold mb-1">Security</h2>
            <p>Each step in a transaction generates a data-block that is recorded in the distributed Blockchain ledger generating an immutable audit trail</p>
          </div>
          
          <div>
            <h2 className="text-lg font-semibold mb-1">Market leading data</h2>
            <p>Smart protocols and machine learning algorithms are configured to collect, collate and analyze data that is specific to your investment</p>
          </div>
          
          <div>
            <h2 className="text-lg font-semibold mb-1">Transparency</h2>
            <p>Transactions are decentralised and all data and documentation is available for your review 24x7</p>
          </div>
          
          <div>
            <h2 className="text-lg font-semibold mb-1">Dedicated Support</h2>
            <p>We're available to you 24x7</p>
          </div>
          
          <div>
            <h2 className="text-lg font-semibold mb-1">Checks & balances</h2>
            <p>Our credit underwriting experience means we are there to actively manage your loan transactions</p>
          </div>
          
          <div>
            <h2 className="text-lg font-semibold mb-1">Quality Execution</h2>
            <p>Experience counts. Our team has settled billions of dollars in loans</p>
          </div>
        </div>
        
        <div className="mt-8 text-center">
          <Link to="/investor/step6">
            <Button className="bg-blue-900 text-white hover:bg-blue-800">Invest Now</Button>
          </Link>
        </div>
      </div>
    </ApplicationFormWrapper>
  );
};

export default InvestorStep5;
