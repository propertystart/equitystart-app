
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FileText, Monitor, Cloud, Users, FileCheck, PenTool, DollarSign } from 'lucide-react';
import Logo from '@/components/Logo';
import StepCard from '@/components/StepCard';
import Footer from '@/components/Footer';

const BorrowerApply = () => {
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
            <h2 className="text-equityred font-medium">Borrower "Apply Now"</h2>
          </div>
        </div>
      </header>

      <main className="flex-grow container mx-auto px-4 py-8">
        <section className="max-w-3xl mx-auto">
          <h1 className="text-2xl font-medium mb-8">Borrow in 7 easy steps and live where you want when you want</h1>
          
          <div className="bg-white p-6 rounded-lg shadow-md mb-8">
            <StepCard
              number={1}
              title="Complete the online application"
              description="Fill out our easy-to-use online form with your details"
              icon={<FileText size={24} />}
            />
            
            <StepCard
              number={2}
              title="Your application is assessed by EquityStart's AI"
              description="Our advanced AI analyzes your application immediately"
              icon={<Monitor size={24} />}
            />
            
            <StepCard
              number={3}
              title="Your loan application is listed on the EquityStart Platform"
              description="Your application is securely embedded in its own Blockchain"
              icon={<Cloud size={24} />}
            />
            
            <StepCard
              number={4}
              title="Investors assess your application, bid and agree loan terms"
              description="Our verified investors review and select applications to fund"
              icon={<Users size={24} />}
            />
            
            <StepCard
              number={5}
              title="Smart Contract executed and embedded in Blockchain"
              description="Hard copy documents are sent to your lawyers"
              icon={<FileCheck size={24} />}
            />
            
            <StepCard
              number={6}
              title="Documents are signed and certified"
              description="Complete the necessary paperwork with guidance from our team"
              icon={<PenTool size={24} />}
            />
            
            <StepCard
              number={7}
              title="Settlement money paid into your lawyers account"
              description="The funds are transferred securely to complete your purchase"
              icon={<DollarSign size={24} />}
            />
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

export default BorrowerApply;
