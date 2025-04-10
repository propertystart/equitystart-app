
import React from 'react';
import { Link } from 'react-router-dom';
import { Home, DollarSign, User } from 'lucide-react';
import Logo from '@/components/Logo';
import FeatureCard from '@/components/FeatureCard';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="py-6">
        <div className="container mx-auto px-4">
          <div className="flex justify-center">
            <Logo className="text-4xl md:text-5xl" />
          </div>
        </div>
      </header>

      <main className="flex-grow">
        <section className="py-12 text-center">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl mb-6 font-medium">Because wealth creation should be for everyone</h2>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mt-12">
              <FeatureCard
                title="Borrowers"
                description="Buy your home and start creating wealth now"
                linkText="Learn More"
                linkUrl="/borrower/learn"
                icon={<Home size={36} />}
              />
              
              <FeatureCard
                title="Investors"
                description="Become your own bank while empowering others"
                linkText="Find out how"
                linkUrl="/investor/learn"
                icon={<DollarSign size={36} />}
              />
            </div>
          </div>
        </section>

        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl mb-8 font-medium">How EquityStart Works</h2>
            
            <div className="max-w-3xl mx-auto">
              <p className="text-lg mb-6">
                Escape the rent trap and discover a new path to home ownership
              </p>
              
              <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-12 mb-8">
                <div className="flex flex-col items-center">
                  <User size={36} className="text-equityblue mb-2" />
                  <p className="font-medium">Investor</p>
                </div>
                <div className="text-equityred font-bold">&gt;&gt;&gt;</div>
                <div className="flex flex-col items-center">
                  <Home size={36} className="text-equityblue mb-2" />
                  <p className="font-medium">House transforms into dollar sign</p>
                </div>
                <div className="text-equityred font-bold">&gt;&gt;&gt;</div>
                <div className="flex flex-col items-center">
                  <User size={36} className="text-equityblue mb-2" />
                  <p className="font-medium">Borrower</p>
                </div>
              </div>
              
              <p className="text-equityred font-medium text-lg mb-6">
                Buy your home and start creating wealth now
              </p>
              
              <p className="text-lg mb-8">
                Share the upside with your investors as the home increases in value and create wealth together
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/borrower/apply" className="btn-primary">
                  Apply Now
                </Link>
                <Link to="/borrower/learn" className="btn-primary">
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
