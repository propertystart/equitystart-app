
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import ApplicationFormWrapper from '@/components/ApplicationFormWrapper';

const InvestorStep10 = () => {
  const [selectedInvestments, setSelectedInvestments] = useState<string[]>([]);
  const [selectedTerms, setSelectedTerms] = useState<string[]>([]);
  const [selectedIncomes, setSelectedIncomes] = useState<string[]>([]);
  const [selectedStates, setSelectedStates] = useState<string[]>([]);
  
  const handleOptionChange = (category: string, value: string) => {
    switch(category) {
      case 'investment':
        setSelectedInvestments(prev => 
          prev.includes(value) ? prev.filter(item => item !== value) : [...prev, value]
        );
        break;
      case 'term':
        setSelectedTerms(prev => 
          prev.includes(value) ? prev.filter(item => item !== value) : [...prev, value]
        );
        break;
      case 'income':
        setSelectedIncomes(prev => 
          prev.includes(value) ? prev.filter(item => item !== value) : [...prev, value]
        );
        break;
      case 'state':
        setSelectedStates(prev => 
          prev.includes(value) ? prev.filter(item => item !== value) : [...prev, value]
        );
        break;
      default:
        break;
    }
  };

  return (
    <ApplicationFormWrapper
      title="Investment Criteria"
      currentStep={10}
      totalSteps={11}
      nextButtonText="Next"
      nextPath="/investor/step11"
      previousPath="/investor/step9"
      showPrevious={true}
    >
      <div className="py-6">
        <h1 className="text-xl font-semibold text-center mb-6">Now all of that's out of the way it's time to join a new generation of investors</h1>
        
        <p className="mb-4">Please tell us what you're looking for in an investment opportunity by selecting at least two (2) options from the following:</p>
        
        <div className="space-y-6">
          <div>
            <p className="font-semibold mb-2">I want to invest</p>
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <input 
                  type="checkbox" 
                  id="invest1" 
                  checked={selectedInvestments.includes('25k-50k')}
                  onChange={() => handleOptionChange('investment', '25k-50k')}
                />
                <label htmlFor="invest1">$25,000-$50,000 per investment</label>
              </div>
              <div className="flex items-center gap-2">
                <input 
                  type="checkbox" 
                  id="invest2"
                  checked={selectedInvestments.includes('50k-100k')}
                  onChange={() => handleOptionChange('investment', '50k-100k')}
                />
                <label htmlFor="invest2">$50,000-$100,000 per investment</label>
              </div>
              <div className="flex items-center gap-2">
                <input 
                  type="checkbox" 
                  id="invest3"
                  checked={selectedInvestments.includes('100k-150k')}
                  onChange={() => handleOptionChange('investment', '100k-150k')}
                />
                <label htmlFor="invest3">$100,000-$150,000 per investment</label>
              </div>
              <div className="flex items-center gap-2">
                <input 
                  type="checkbox" 
                  id="invest4"
                  checked={selectedInvestments.includes('150k-200k')}
                  onChange={() => handleOptionChange('investment', '150k-200k')}
                />
                <label htmlFor="invest4">150,000-$200,000 per investment</label>
              </div>
              <div className="flex items-center gap-2">
                <input 
                  type="checkbox" 
                  id="invest5"
                  checked={selectedInvestments.includes('200k-250k')}
                  onChange={() => handleOptionChange('investment', '200k-250k')}
                />
                <label htmlFor="invest5">$200,000-$250,000 per investment</label>
              </div>
              <div className="flex items-center gap-2">
                <input 
                  type="checkbox" 
                  id="invest6"
                  checked={selectedInvestments.includes('250k+')}
                  onChange={() => handleOptionChange('investment', '250k+')}
                />
                <label htmlFor="invest6">$250,000 + per investment</label>
              </div>
            </div>
          </div>
          
          <div>
            <p className="font-semibold mb-2">My preferred loan term is</p>
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <input 
                  type="checkbox" 
                  id="term1"
                  checked={selectedTerms.includes('1-2')}
                  onChange={() => handleOptionChange('term', '1-2')}
                />
                <label htmlFor="term1">1-2 years</label>
              </div>
              <div className="flex items-center gap-2">
                <input 
                  type="checkbox" 
                  id="term2"
                  checked={selectedTerms.includes('2-3')}
                  onChange={() => handleOptionChange('term', '2-3')}
                />
                <label htmlFor="term2">2-3 years</label>
              </div>
              <div className="flex items-center gap-2">
                <input 
                  type="checkbox" 
                  id="term3"
                  checked={selectedTerms.includes('3-4')}
                  onChange={() => handleOptionChange('term', '3-4')}
                />
                <label htmlFor="term3">3-4 years</label>
              </div>
              <div className="flex items-center gap-2">
                <input 
                  type="checkbox" 
                  id="term4"
                  checked={selectedTerms.includes('4-5')}
                  onChange={() => handleOptionChange('term', '4-5')}
                />
                <label htmlFor="term4">4-5 years</label>
              </div>
            </div>
          </div>
          
          <div>
            <p className="font-semibold mb-2">The Borrower(s) should have annual income of</p>
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <input 
                  type="checkbox" 
                  id="income1"
                  checked={selectedIncomes.includes('lt-150k')}
                  onChange={() => handleOptionChange('income', 'lt-150k')} 
                />
                <label htmlFor="income1">&lt; $150,000</label>
              </div>
              <div className="flex items-center gap-2">
                <input 
                  type="checkbox" 
                  id="income2"
                  checked={selectedIncomes.includes('150k-200k')}
                  onChange={() => handleOptionChange('income', '150k-200k')} 
                />
                <label htmlFor="income2">$150,000-$200,000</label>
              </div>
              <div className="flex items-center gap-2">
                <input 
                  type="checkbox" 
                  id="income3"
                  checked={selectedIncomes.includes('200k-250k')}
                  onChange={() => handleOptionChange('income', '200k-250k')} 
                />
                <label htmlFor="income3">$200,000-$250,000</label>
              </div>
              <div className="flex items-center gap-2">
                <input 
                  type="checkbox" 
                  id="income4"
                  checked={selectedIncomes.includes('250k-300k')}
                  onChange={() => handleOptionChange('income', '250k-300k')} 
                />
                <label htmlFor="income4">$250,000-$300,000</label>
              </div>
              <div className="flex items-center gap-2">
                <input 
                  type="checkbox" 
                  id="income5"
                  checked={selectedIncomes.includes('gt-300k')}
                  onChange={() => handleOptionChange('income', 'gt-300k')} 
                />
                <label htmlFor="income5">&gt; $300,000</label>
              </div>
            </div>
          </div>
          
          <div>
            <p className="font-semibold mb-2">I would prefer to invest in</p>
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <input 
                  type="checkbox" 
                  id="state1"
                  checked={selectedStates.includes('NSW')}
                  onChange={() => handleOptionChange('state', 'NSW')}
                />
                <label htmlFor="state1">NSW</label>
              </div>
              <div className="flex items-center gap-2">
                <input 
                  type="checkbox" 
                  id="state2"
                  checked={selectedStates.includes('VIC')}
                  onChange={() => handleOptionChange('state', 'VIC')}
                />
                <label htmlFor="state2">VIC</label>
              </div>
              <div className="flex items-center gap-2">
                <input 
                  type="checkbox" 
                  id="state3"
                  checked={selectedStates.includes('QLD')}
                  onChange={() => handleOptionChange('state', 'QLD')}
                />
                <label htmlFor="state3">QLD</label>
              </div>
              <div className="flex items-center gap-2">
                <input 
                  type="checkbox" 
                  id="state4"
                  checked={selectedStates.includes('SA')}
                  onChange={() => handleOptionChange('state', 'SA')}
                />
                <label htmlFor="state4">SA</label>
              </div>
              <div className="flex items-center gap-2">
                <input 
                  type="checkbox" 
                  id="state5"
                  checked={selectedStates.includes('WA')}
                  onChange={() => handleOptionChange('state', 'WA')}
                />
                <label htmlFor="state5">WA</label>
              </div>
              <div className="flex items-center gap-2">
                <input 
                  type="checkbox" 
                  id="state6"
                  checked={selectedStates.includes('TAS')}
                  onChange={() => handleOptionChange('state', 'TAS')}
                />
                <label htmlFor="state6">TAS</label>
              </div>
              <div className="flex items-center gap-2">
                <input 
                  type="checkbox" 
                  id="state7"
                  checked={selectedStates.includes('NT')}
                  onChange={() => handleOptionChange('state', 'NT')}
                />
                <label htmlFor="state7">NT</label>
              </div>
              <div className="flex items-center gap-2">
                <input 
                  type="checkbox" 
                  id="state8"
                  checked={selectedStates.includes('ACT')}
                  onChange={() => handleOptionChange('state', 'ACT')}
                />
                <label htmlFor="state8">ACT</label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ApplicationFormWrapper>
  );
};

export default InvestorStep10;
