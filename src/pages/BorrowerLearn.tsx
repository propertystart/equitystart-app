
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Sailboat, Key, Home, TrendingUp, Coins, Handshake, Users, Laptop } from 'lucide-react';
import Logo from '@/components/Logo';
import Footer from '@/components/Footer';

const BorrowerLearn = () => {
  const navigate = useNavigate();
  
  const startApplication = () => {
    navigate('/application/1');
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <header className="py-6">
        <div className="container mx-auto px-4">
          <div className="flex justify-center">
            <Logo />
          </div>
          <div className="text-center mt-2">
            <h2 className="text-equityred font-medium">Borrower "Learn More"</h2>
          </div>
        </div>
      </header>

      <main className="flex-grow container mx-auto px-4 py-8">
        <section className="max-w-3xl mx-auto">
          <div className="bg-white p-6 rounded-lg shadow-md mb-8">
            <div className="mb-8">
              <div className="flex items-start gap-4 mb-4">
                <Sailboat className="text-green-600 flex-shrink-0 mt-1" size={24} />
                <div>
                  <h3 className="font-medium text-lg">Don't let the ship sail without you</h3>
                  <p className="text-gray-700">Join the homeownership journey with EquityStart today</p>
                </div>
              </div>
            </div>
            
            <div className="mb-8">
              <div className="flex items-start gap-4 mb-4">
                <Key className="text-green-600 flex-shrink-0 mt-1" size={24} />
                <div>
                  <h3 className="font-medium text-lg">The key to owning your own home sooner</h3>
                  <p className="text-gray-700">Saving for a deposit can take up to a decade</p>
                </div>
              </div>
            </div>
            
            <div className="mb-8">
              <div className="flex items-start gap-4 mb-4">
                <Home className="text-green-600 flex-shrink-0 mt-1 rotate-180" size={24} />
                <div>
                  <h3 className="font-medium text-lg">That's ten years of wealth creation lost</h3>
                  <p className="text-gray-700">Don't miss out on years of potential property value growth</p>
                </div>
              </div>
            </div>
            
            <div className="mb-8">
              <div className="flex items-start gap-4 mb-4">
                <TrendingUp className="text-green-600 flex-shrink-0 mt-1" size={24} />
                <div>
                  <h3 className="font-medium text-lg">Home ownership is directly linked to wealth creation</h3>
                  <p className="text-gray-700">Build equity as you pay down your loan and as property values increase</p>
                </div>
              </div>
            </div>
            
            <div className="mb-8">
              <div className="flex items-start gap-4 mb-4">
                <Coins className="text-green-600 flex-shrink-0 mt-1" size={24} />
                <div>
                  <h3 className="font-medium text-lg">Start with little equity</h3>
                  <p className="text-gray-700">You don't need a large deposit to begin your homeownership journey</p>
                </div>
              </div>
            </div>
            
            <div className="mb-8">
              <div className="flex items-start gap-4 mb-4">
                <Handshake className="text-green-600 flex-shrink-0 mt-1" size={24} />
                <div>
                  <h3 className="font-medium text-lg">Borrowers and Investors share in the upside</h3>
                  <p className="text-gray-700">Any growth in home value during the loan term benefits both parties</p>
                </div>
              </div>
            </div>
            
            <div className="mb-8">
              <div className="flex items-start gap-4 mb-4">
                <Users className="text-green-600 flex-shrink-0 mt-1" size={24} />
                <div>
                  <h3 className="font-medium text-lg">Quick turnaround in a transparent market</h3>
                  <p className="text-gray-700">Our platform connects borrowers with investors efficiently</p>
                </div>
              </div>
            </div>
            
            <div className="mb-8">
              <div className="flex items-start gap-4 mb-4">
                <Laptop className="text-green-600 flex-shrink-0 mt-1" size={24} />
                <div>
                  <h3 className="font-medium text-lg">EquityStart's AI and machine learning</h3>
                  <p className="text-gray-700">Used to better match Borrowers with Investors and to provide deep insight into the value of your home 24 x 7</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <button onClick={startApplication} className="btn-primary">
              Apply Now
            </button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default BorrowerLearn;
