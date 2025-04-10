
import React from 'react';
import { Link } from 'react-router-dom';

interface FeatureCardProps {
  title: string;
  description: string;
  linkText: string;
  linkUrl: string;
  icon?: React.ReactNode;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  description,
  linkText,
  linkUrl,
  icon
}) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
      <div className="mb-4">
        {icon && <div className="text-equityblue mb-4">{icon}</div>}
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
      </div>
      <Link to={linkUrl} className="btn-primary inline-block">
        {linkText}
      </Link>
    </div>
  );
};

export default FeatureCard;
