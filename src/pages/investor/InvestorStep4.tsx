import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import ApplicationFormWrapper from '@/components/ApplicationFormWrapper';

const InvestorStep4 = () => {
  return (
    <ApplicationFormWrapper
      title="Learn More"
      currentStep={4}
      totalSteps={11}
      showPrevious={true}
      previousPath="/investor/step3"
    >
      <div className="py-6">
        <h1 className="text-xl font-semibold mb-4">Invest on your own terms, day or night</h1>
        
        <h2 className="text-lg font-semibold mt-6 mb-2 underline">Why property loans?</h2>
        <p className="mb-4">In the last ten years residential homes in and around the major cities have consistently increased in value.</p>
        
        <div className="mb-6 overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-300">
            <thead>
              <tr className="bg-gray-100">
                <th className="py-2 px-3 border">City</th>
                <th className="py-2 px-3 border">Median Price [all houses]</th>
                <th className="py-2 px-3 border">3 yr change per annum</th>
                <th className="py-2 px-3 border">10 year change per annum</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-2 px-3 border">Sydney</td>
                <td className="py-2 px-3 border">$1,924,710</td>
                <td className="py-2 px-3 border">7.7%</td>
                <td className="py-2 px-3 border">7.1%</td>
              </tr>
              <tr>
                <td className="py-2 px-3 border">Melbourne</td>
                <td className="py-2 px-3 border">$1,261,070</td>
                <td className="py-2 px-3 border">5.9%</td>
                <td className="py-2 px-3 border">7.1%</td>
              </tr>
              <tr>
                <td className="py-2 px-3 border">Perth</td>
                <td className="py-2 px-3 border">$994,562</td>
                <td className="py-2 px-3 border">13.5%</td>
                <td className="py-2 px-3 border">2.8%</td>
              </tr>
              <tr>
                <td className="py-2 px-3 border">Brisbane</td>
                <td className="py-2 px-3 border">$1,104,641</td>
                <td className="py-2 px-3 border">17.5%</td>
                <td className="py-2 px-3 border">7.3%</td>
              </tr>
              <tr>
                <td className="py-2 px-3 border">Adelaide</td>
                <td className="py-2 px-3 border">$909,476</td>
                <td className="py-2 px-3 border">17.9%</td>
                <td className="py-2 px-3 border">6.3%</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <p className="mb-4">
          Whilst property continues to perform well as an asset class, some areas will always outperform others in terms of capital growth. This is where EquityStart's machine learning algorithms and AI are valuable tools in managing your loan investment portfolio.
        </p>
        
        <p className="mb-4">
          The above growth has now made housing unaffordable even for those on good incomes. The average price of a home in most desirable suburbs is now in excess of $1,000,000 and the average deposit can take up to 10 years to save.
        </p>
        
        <p className="mb-6">
          This has created a housing affordability issue that can't be solved by putting more and more Australians into the rent trap. It needs our help and everyone should benefit from the EquityStart solution so that we can create wealth together.
        </p>
        
        <p className="mb-8">
          Sophisticated investors have the capacity and desire to make a difference whilst continuing to grow their own wealth and share in any future capital growth.
        </p>
        
        <div className="mb-6">
          <p className="font-semibold">Our investor Toolkit</p>
          <p className="font-semibold">Live Market</p>
          <p>Every loan application is backed by the most recent independent and locational sales data</p>
          <p className="font-semibold">EquityStart AI does the heavy lifting</p>
          <p>Let our machine learning algorithms and AI do the grunt work</p>
          <p className="font-semibold">Advanced charts at your fingertips</p>
          <p>Advanced charts using 24x7 data inputs help you track your investments and modify your investment strategy on the go</p>
          <p className="font-semibold">Data delivered to you</p>
          <p>We fetch the data for you so you can concentrate on making the right investments</p>
          <p className="font-semibold">Take us for a test run</p>
          <p>By becoming an EquityStart investor you can discover investment opportunities without investing straight away. See and manage hypothetical returns to take us for a spin...</p>
        </div>
        
        <div className="mt-8 flex justify-center gap-4">
          <Link to="/investor/step6">
            <Button className="bg-blue-900 text-white hover:bg-blue-800">Invest Now</Button>
          </Link>
          <Link to="/investor/step5">
            <Button className="bg-blue-900 text-white hover:bg-blue-800">Our commitments to you</Button>
          </Link>
        </div>
      </div>
    </ApplicationFormWrapper>
  );
};

export default InvestorStep4;
