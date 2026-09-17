import React from 'react';
import { cn } from '../../lib/utils';
import { ArrowRight } from 'lucide-react';

export const Button = React.forwardRef(({ 
  className, 
  variant = 'primary', 
  size = 'md', 
  withArrow = false,
  children, 
  ...props 
}, ref) => {
  
  const baseStyles = "inline-flex items-center justify-center font-semibold transition-all duration-300 rounded-full focus:outline-none focus:ring-2 focus:ring-strydo-purple focus:ring-offset-2 focus:ring-offset-strydo-dark disabled:opacity-50 disabled:pointer-events-none group";
  
  const variants = {
    primary: "bg-strydo-purple hover:bg-strydo-magenta text-white shadow-[0_0_15px_rgba(94,41,111,0.5)] hover:shadow-[0_0_25px_rgba(116,42,95,0.7)]",
    secondary: "bg-white text-strydo-dark hover:bg-gray-100 shadow-md",
    outline: "border border-white/20 text-white hover:bg-white/10 backdrop-blur-sm",
    ghost: "text-white hover:bg-white/10"
  };
  
  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg"
  };

  return (
    <button
      ref={ref}
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
      {withArrow && (
        <ArrowRight className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
      )}
    </button>
  );
});

Button.displayName = 'Button';
