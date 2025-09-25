import React from 'react';
import { Link } from 'react-router-dom';
interface ButtonProps {
  children: React.ReactNode;
  to?: string;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
}
const Button = ({
  children,
  to,
  variant = 'primary',
  size = 'md',
  className = '',
  onClick
}: ButtonProps) => {
  const baseStyles = 'inline-block font-medium transition-all duration-300 rounded';
  const variantStyles = {
    primary: 'bg-secondary hover:bg-secondary-light text-primary',
    secondary: 'bg-primary hover:bg-primary-light text-white',
    outline: 'border-2 border-secondary text-secondary hover:bg-secondary hover:text-primary'
  };
  const sizeStyles = {
    sm: 'text-xs px-4 py-2',
    md: 'text-sm px-5 py-2.5',
    lg: 'text-base px-7 py-3'
  };
  const buttonStyles = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;
  if (to) {
    return <Link to={to} className={buttonStyles}>
        {children}
      </Link>;
  }
  return <button className={buttonStyles} onClick={onClick}>
      {children}
    </button>;
};
export default Button;