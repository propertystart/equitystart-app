
import React from 'react';
import { Link } from 'react-router-dom';

interface LogoProps {
  withLink?: boolean;
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ withLink = true, className = '' }) => {
  const logoElement = (
    <h1 className={`equity-logo ${className}`}>
      <span className="equity">Equity</span>
      <span className="start">Start</span>
    </h1>
  );

  return withLink ? <Link to="/">{logoElement}</Link> : logoElement;
};

export default Logo;
