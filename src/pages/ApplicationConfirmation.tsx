
import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '@/components/Logo';
import { useAppContext } from '@/contexts/AppContext';
import Footer from '@/components/Footer';

const ApplicationConfirmation = () => {
  const { applicationData } = useAppContext();
  const { borrowerId, applicationId } = applicationData;
  
  return (
    <div className="min-h-screen flex flex-col">
      <header className="py-4 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex justify-center md:justify-start">
            <Logo />
          </div>
          <div className="text-center md:text-left mt-2">
            <h2 className="text-equityred font-medium text-sm md:text-base">Borrower Application 9</h2>
          </div>
        </div>
      </header>

      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-md">
          <h1 className="text-2xl font-semibold text-center mb-8">Congratulations!!</h1>
          
          <p className="text-lg text-center mb-8">
            You just took an important first step on the road to wealth creation
          </p>
          
          <div className="flex justify-center mb-8">
            <button className="btn-primary">Upload my application</button>
          </div>
          
          <div className="bg-gray-50 p-4 rounded mb-8">
            <p className="mb-4">
              If you haven't done so already, please make a note of your unique Borrower id [{borrowerId || 'fjbfshtheap847dd9'}] and your loan application id [{applicationId || 'jshihifb3802n'}]
            </p>
            
            <p className="mb-4">
              Both of these unique identifiers will be required when logging back into the EquityStart platform
            </p>
            
            <p className="mb-4">
              Your loan application will now be matched to our qualified EquityStart investors using our proprietary machine learning and AI.
            </p>
            
            <p>
              A Smart Contract has also been created to include your basic loan terms and your details and loan parameters have been embedded in their own Blockchain
            </p>
          </div>
          
          <div className="flex justify-center mb-8">
            <button className="btn-primary">View Smart Contract Terms</button>
          </div>
          
          <p className="text-center">
            Investor loan bids will be sent to you in real time and you can monitor the progress of your application 24 x 7 at{' '}
            <a href="https://www.equitystart.com.au/borrowerapplication" className="text-blue-600 hover:underline">www.equitystart.com.au/borrowerapplication</a>
          </p>
        </div>
        
        <div className="max-w-2xl mx-auto mt-6 flex justify-center">
          <Link to="/" className="bg-gray-200 text-gray-800 py-2 px-6 rounded hover:bg-gray-300 transition-colors">
            Return to Home
          </Link>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ApplicationConfirmation;
