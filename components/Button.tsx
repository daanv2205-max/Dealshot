
import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  variant?: 'primary' | 'outline' | 'ghost';
  fullWidth?: boolean;
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  onClick, 
  className = '', 
  variant = 'primary',
  fullWidth = false
}) => {
  const baseStyles = "px-6 py-3 rounded-lg font-semibold transition-all duration-200 active:scale-95 flex items-center justify-center gap-2";
  
  const variants = {
    primary: "bg-[#EE4D2D] text-white hover:bg-[#d43d1d] shadow-md hover:shadow-lg",
    outline: "border-2 border-[#EE4D2D] text-[#EE4D2D] hover:bg-orange-50",
    ghost: "text-gray-600 hover:bg-gray-100"
  };

  return (
    <button 
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${fullWidth ? 'w-full' : ''} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
