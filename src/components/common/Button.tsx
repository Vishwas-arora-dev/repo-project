import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  icon?: React.ReactNode;
  children?: React.ReactNode;
  fullWidth?: boolean;
}

export function Button({ 
  variant = 'outline', 
  icon,
  children, 
  fullWidth = false,
  className = '',
  ...props 
}: ButtonProps) {
  const baseStyles = 'flex items-center justify-center gap-2 px-4 py-2 rounded-lg transition-colors';
  const widthStyles = fullWidth ? 'w-full' : '';
  
  const variants = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700',
    secondary: 'bg-gray-100 text-gray-900 hover:bg-gray-200',
    outline: 'border border-gray-200 hover:bg-gray-50'
  };

  return (
    <button 
      type="button"
      className={`${baseStyles} ${variants[variant]} ${widthStyles} ${className}`}
      {...props}
    >
      {icon}
      {children}
    </button>
  );
} 