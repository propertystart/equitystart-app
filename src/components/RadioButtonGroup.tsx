
import React from 'react';

export interface RadioOption {
  value: string;
  label: string;
}

interface RadioButtonGroupProps {
  name: string;
  options: RadioOption[];
  value: string;
  onChange: (value: string) => void;
  layout?: 'horizontal' | 'vertical';
  className?: string;
}

const RadioButtonGroup: React.FC<RadioButtonGroupProps> = ({
  name,
  options,
  value,
  onChange,
  layout = 'horizontal',
  className = '',
}) => {
  return (
    <div className={`flex ${layout === 'horizontal' ? 'flex-row gap-4' : 'flex-col gap-2'} ${className}`}>
      {options.map((option) => (
        <label key={option.value} className="flex items-center cursor-pointer">
          <input
            type="radio"
            name={name}
            value={option.value}
            checked={value === option.value}
            onChange={() => onChange(option.value)}
            className="mr-2 cursor-pointer"
          />
          <span>{option.label}</span>
        </label>
      ))}
    </div>
  );
};

export default RadioButtonGroup;
