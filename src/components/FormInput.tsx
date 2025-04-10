
import React from 'react';

interface FormInputProps {
  label: string;
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  required?: boolean;
  className?: string;
  name: string; // Add the name property to the interface
  disabled?: boolean; // Add disabled property for disabled inputs
}

const FormInput: React.FC<FormInputProps> = ({
  label,
  type = 'text',
  value,
  onChange,
  placeholder = '',
  required = false,
  className = '',
  name,
  disabled = false,
}) => {
  return (
    <div className={`mb-4 ${className}`}>
      <label className="form-label">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className="form-input"
        name={name}
        disabled={disabled}
      />
    </div>
  );
};

export default FormInput;
