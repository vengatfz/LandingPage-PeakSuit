import React from 'react';
import { ArrowRight } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  fullWidth?: boolean;
  withArrow?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  fullWidth = false, 
  withArrow = false,
  className = '',
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center px-8 py-4 text-base font-semibold transition-all duration-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2";
  
  const variants = {
    primary: "bg-brand-900 text-white hover:bg-brand-800 shadow-lg shadow-brand-900/20 focus:ring-brand-900",
    secondary: "bg-white text-brand-900 hover:bg-gray-50 border border-gray-200 shadow-sm focus:ring-brand-500",
    outline: "border-2 border-brand-900 text-brand-900 hover:bg-brand-50 focus:ring-brand-900"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${fullWidth ? 'w-full' : ''} ${className}`}
      {...props}
    >
      {children}
      {withArrow && <ArrowRight className="ml-2 h-5 w-5" />}
    </button>
  );
};