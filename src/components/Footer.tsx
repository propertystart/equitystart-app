
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-footergray py-6 mt-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between gap-4">
          <div>
            <p className="text-sm text-gray-600">© {new Date().getFullYear()} EquityStart. All rights reserved.</p>
          </div>
          <div className="flex flex-col md:flex-row gap-4 md:gap-8">
            <Link to="/disclaimer" className="text-sm text-gray-600 hover:underline">Disclaimer</Link>
            <Link to="/compliance" className="text-sm text-gray-600 hover:underline">Compliance [Fund AFSL etc]</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
