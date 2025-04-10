
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import ApplicationFormWrapper from '@/components/ApplicationFormWrapper';

const InvestorStep3 = () => {
  return (
    <ApplicationFormWrapper
      title="How it all works"
      currentStep={3}
      totalSteps={11}
      showPrevious={true}
      previousPath="/investor/step2"
    >
      <div className="py-6">
        <h1 className="text-xl font-bold mb-2">How it all works</h1>
        <p className="mb-6">Paving the way for a tech innovation for sophisticated investors</p>
        
        <ul className="space-y-4 my-6">
          <li className="flex gap-2 items-start">
            <span className="inline-block mt-1 border border-black w-4 h-4 flex-shrink-0"></span>
            <span>Set your own investment criteria and manage your investment strategy in real-time</span>
          </li>
          <li className="flex gap-2 items-start">
            <span className="inline-block mt-1 border border-black w-4 h-4 flex-shrink-0"></span>
            <span>EquityStart AI will match your criteria to Borrowers and help manage your investment portfolio</span>
          </li>
          <li className="flex gap-2 items-start">
            <span className="inline-block mt-1 border border-black w-4 h-4 flex-shrink-0"></span>
            <span>Invest directly into new mortgage loans</span>
          </li>
          <li className="flex gap-2 items-start">
            <span className="inline-block mt-1 border border-black w-4 h-4 flex-shrink-0"></span>
            <span>Live locally and invest globally. EquityStart has BIG plans and you will soon be able to invest in and manage a global loan investment portfolio</span>
          </li>
          <li className="flex gap-2 items-start">
            <span className="inline-block mt-1 border border-black w-4 h-4 flex-shrink-0"></span>
            <span>Buy positions in existing loans, invest anywhere from anywhere</span>
          </li>
          <li className="flex gap-2 items-start">
            <span className="inline-block mt-1 border border-black w-4 h-4 flex-shrink-0"></span>
            <span>Sell your investments to other EquityStart investors for constant liquidity. You set the price and agree to the bids</span>
          </li>
          <li className="flex gap-2 items-start">
            <span className="inline-block mt-1 border border-black w-4 h-4 flex-shrink-0"></span>
            <span>Real time management of your portfolio through our unique GUI dashboard</span>
          </li>
          <li className="flex gap-2 items-start">
            <span className="inline-block mt-1 border border-black w-4 h-4 flex-shrink-0"></span>
            <span>All investments and any positions you trade form part of an unique Blockchain ledger with all investor buy/sell transactions conducted using Smart Contracts</span>
          </li>
          <li className="flex gap-2 items-start">
            <span className="inline-block mt-1 border border-black w-4 h-4 flex-shrink-0"></span>
            <span>View and review EquityStart's loan assessment process for each investment opportunity</span>
          </li>
          <li className="flex gap-2 items-start">
            <span className="inline-block mt-1 border border-black w-4 h-4 flex-shrink-0"></span>
            <span>Know that EquityStart has got your back and actively monitors all loan transactions</span>
          </li>
        </ul>
        
        <div className="mt-8 flex justify-center gap-4">
          <Link to="/investor/step6">
            <Button className="bg-blue-900 text-white hover:bg-blue-800">Invest Now</Button>
          </Link>
          <Link to="/investor/step4">
            <Button className="bg-blue-900 text-white hover:bg-blue-800">Learn more</Button>
          </Link>
        </div>
      </div>
    </ApplicationFormWrapper>
  );
};

export default InvestorStep3;
