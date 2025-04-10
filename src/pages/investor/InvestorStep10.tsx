
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import ApplicationFormWrapper from '@/components/ApplicationFormWrapper';

const InvestorStep10 = () => {
  return (
    <ApplicationFormWrapper
      title="Investment Criteria"
      currentStep={10}
      totalSteps={11}
      nextButtonText="Next"
      onNext={() => {}}
      showPrevious={true}
      onPrevious={() => {}}
    >
      <div className="py-6">
        <h1 className="text-xl font-semibold text-center mb-6">Now all of that's out of the way it's time to join a new generation of investors</h1>
        
        <p className="mb-4">Please tell us what you're looking for in an investment opportunity by selecting at least two (2) options from the following:</p>
        
        <div className="space-y-6">
          <div>
            <p className="font-semibold mb-2">I want to invest</p>
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <input type="checkbox" id="invest1" />
                <label htmlFor="invest1">$25,000-$50,000 per investment</label>
              </div>
              <div className="flex items-center gap-2">
                <input type="checkbox" id="invest2" />
                <label htmlFor="invest2">$50,000-$100,000 per investment</label>
              </div>
              <div className="flex items-center gap-2">
                <input type="checkbox" id="invest3" />
                <label htmlFor="invest3">$100,000-$150,000 per investment</label>
              </div>
              <div className="flex items-center gap-2">
                <input type="checkbox" id="invest4" />
                <label htmlFor="invest4">150,000-$200,000 per investment</label>
              </div>
              <div className="flex items-center gap-2">
                <input type="checkbox" id="invest5" />
                <label htmlFor="invest5">$200,000-$250,000 per investment</label>
              </div>
              <div className="flex items-center gap-2">
                <input type="checkbox" id="invest6" />
                <label htmlFor="invest6">$250,000 + per investment</label>
              </div>
            </div>
          </div>
          
          <div>
            <p className="font-semibold mb-2">My preferred loan term is</p>
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <input type="checkbox" id="term1" />
                <label htmlFor="term1">1-2 years</label>
              </div>
              <div className="flex items-center gap-2">
                <input type="checkbox" id="term2" />
                <label htmlFor="term2">2-3 years</label>
              </div>
              <div className="flex items-center gap-2">
                <input type="checkbox" id="term3" />
                <label htmlFor="term3">3-4 years</label>
              </div>
              <div className="flex items-center gap-2">
                <input type="checkbox" id="term4" />
                <label htmlFor="term4">4-5years</label>
              </div>
            </div>
          </div>
          
          <div>
            <p className="font-semibold mb-2">The Borrower(s) should have annual income of</p>
            <div className="space-y-1">
              {/* Income options */}
              <div className="flex items-center gap-2">
                <input type="checkbox" id="income1" />
                <label htmlFor="income1">&lt; $150,000</label>
              </div>
              <div className="flex items-center gap-2">
                <input type="checkbox" id="income2" />
                <label htmlFor="income2">$150,000-$200,000</label>
              </div>
              <div className="flex items-center gap-2">
                <input type="checkbox" id="income3" />
                <label htmlFor="income3">$200,000-$250,000</label>
              </div>
              <div className="flex items-center gap-2">
                <input type="checkbox" id="income4" />
                <label htmlFor="income4">$250,000-$300,000</label>
              </div>
              <div className="flex items-center gap-2">
                <input type="checkbox" id="income5" />
                <label htmlFor="income5">&gt; $300,000</label>
              </div>
            </div>
          </div>
          
          <div>
            <p className="font-semibold mb-2">I would prefer to invest in</p>
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <input type="checkbox" id="state1" />
                <label htmlFor="state1">NSW</label>
              </div>
              <div className="flex items-center gap-2">
                <input type="checkbox" id="state2" />
                <label htmlFor="state2">VIC</label>
              </div>
              <div className="flex items-center gap-2">
                <input type="checkbox" id="state3" />
                <label htmlFor="state3">QLD</label>
              </div>
              <div className="flex items-center gap-2">
                <input type="checkbox" id="state4" />
                <label htmlFor="state4">SA</label>
              </div>
              <div className="flex items-center gap-2">
                <input type="checkbox" id="state5" />
                <label htmlFor="state5">WA</label>
              </div>
              <div className="flex items-center gap-2">
                <input type="checkbox" id="state6" />
                <label htmlFor="state6">TAS</label>
              </div>
              <div className="flex items-center gap-2">
                <input type="checkbox" id="state7" />
                <label htmlFor="state7">NT</label>
              </div>
              <div className="flex items-center gap-2">
                <input type="checkbox" id="state8" />
                <label htmlFor="state8">ACT</label>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-8 text-center">
          <Link to="/investor/step11">
            <Button className="bg-blue-900 text-white hover:bg-blue-800">NEXT</Button>
          </Link>
        </div>
      </div>
    </ApplicationFormWrapper>
  );
};

export default InvestorStep10;
