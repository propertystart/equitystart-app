
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Logo from '@/components/Logo';
import { useAppContext } from '@/contexts/AppContext';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { toast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';

const ApplicationConfirmation = () => {
  const navigate = useNavigate();
  const { applicationData } = useAppContext();
  const { borrowerId, applicationId } = applicationData;
  const [isUploading, setIsUploading] = useState(false);

  const handleUploadApplication = async () => {
    setIsUploading(true);
    try {
      // Skip authentication and directly insert the data
      // Using the borrower_id as a unique identifier instead of user_id
      const { error } = await supabase
        .from('tblborrowers')
        .insert([{
          borrower_id: borrowerId || 'fjbfshtheap847dd9',
          application_id: applicationId || 'jshihifb3802n',
          name: applicationData.name,
          email: applicationData.email,
          mobile: applicationData.mobile,
          applying_with: applicationData.applyingWith,
          partner_name: applicationData.partnerName,
          relationship: applicationData.relationship,
          current_living: applicationData.currentLiving,
          current_address: applicationData.currentAddress,
          application_type: applicationData.applicationType,
          property_value: applicationData.propertyValue,
          property_address: applicationData.propertyAddress,
          preferred_suburb: applicationData.preferredSuburb,
          sale_type: applicationData.saleType,
          bank_loan_amount: applicationData.bankLoanAmount,
          bank_name: applicationData.bankName,
          required_equity_start_loan: applicationData.requiredEquityStartLoan,
          contribution: applicationData.contribution,
          employment_status: applicationData.employmentStatus,
          partner_employment_status: applicationData.partnerEmploymentStatus,
          employment_duration: applicationData.employmentDuration,
          annual_salary: applicationData.annualSalary,
          partner_annual_salary: applicationData.partnerAnnualSalary,
          monthly_income: applicationData.monthlyIncome,
          partner_monthly_income: applicationData.partnerMonthlyIncome,
          occupation: applicationData.occupation,
          partner_occupation: applicationData.partnerOccupation,
          education: applicationData.education,
          partner_education: applicationData.partnerEducation,
          total_expenses: applicationData.totalExpenses,
          loan_term: applicationData.preferredLoanTerm,
          identification_documents: applicationData.identificationDocuments,
          secondary_documents: applicationData.secondaryDocuments
        }]);

      if (error) throw error;

      toast({
        title: "Success!",
        description: "Your application has been uploaded successfully.",
      });
    } catch (error) {
      console.error('Error uploading application:', error);
      toast({
        title: "Error",
        description: "Failed to upload your application. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsUploading(false);
    }
  };

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
            <Button 
              onClick={handleUploadApplication}
              className="bg-blue-900 text-white hover:bg-blue-800"
              disabled={isUploading}
            >
              {isUploading ? 'Uploading...' : 'Upload my application'}
            </Button>
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
            <Button className="bg-blue-900 text-white hover:bg-blue-800">
              View Smart Contract Terms
            </Button>
          </div>
          
          <p className="text-center">
            Investor loan bids will be sent to you in real time and you can monitor the progress of your application 24 x 7 at{' '}
            <a href="https://www.equitystart.com.au/borrowerapplication" className="text-blue-600 hover:underline">
              www.equitystart.com.au/borrowerapplication
            </a>
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
