
import React from 'react';
import { DollarSign, User, TrendingUp } from 'lucide-react';
import Logo from '@/components/Logo';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';

const InvestorLearn = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="py-6">
        <div className="container mx-auto px-4">
          <div className="flex justify-center">
            <Logo />
          </div>
          <div className="text-center mt-2">
            <h2 className="text-equityred font-medium">Investor Information</h2>
          </div>
        </div>
      </header>

      <main className="flex-grow container mx-auto px-4 py-8">
        <section className="max-w-3xl mx-auto">
          <h1 className="text-2xl font-medium mb-8 text-center">Become your own bank while empowering others</h1>
          
          <div className="bg-white p-6 rounded-lg shadow-md mb-8">
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <DollarSign className="text-green-600 mr-2" />
                Investment Opportunity
              </h3>
              <p className="text-gray-700 mb-4">
                As an EquityStart investor, you can participate in real estate growth while helping others achieve homeownership.
              </p>
              <p className="text-gray-700">
                Our platform allows you to invest directly in home loans backed by real property, creating a win-win situation for both you and borrowers.
              </p>
            </div>
            
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <TrendingUp className="text-green-600 mr-2" />
                Benefits of Investing
              </h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Competitive returns backed by real estate</li>
                <li>Diversify your investment portfolio</li>
                <li>Share in the upside of property value increases</li>
                <li>AI-powered matching with qualified borrowers</li>
                <li>Transparent blockchain-based contracts</li>
                <li>Support others in achieving financial independence</li>
              </ul>
            </div>
            
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <User className="text-green-600 mr-2" />
                How to Get Started
              </h3>
              <p className="text-gray-700 mb-4">
                Join our investor community to receive updates on available opportunities and learn more about how you can make a difference while growing your wealth.
              </p>
              <p className="text-gray-700">
                Our team will provide you with all the information and support you need to make informed investment decisions.
              </p>
            </div>
          </div>
          
          <div className="text-center">
            <Link to="/investor/step1" className="bg-blue-900 text-white px-6 py-3 rounded-md hover:bg-blue-800 transition-colors">
              Start Investing Now
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default InvestorLearn;
