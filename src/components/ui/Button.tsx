import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  href,
  icon,
  iconPosition = 'right',
  className = '',
  ...props
}) => {
  const baseStyles = "inline-flex items-center justify-center font-medium transition-all duration-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-neon-cyan/50 disabled:opacity-50 disabled:pointer-events-none cursor-pointer group";

  const sizeStyles = {
    sm: "text-xs sm:text-xs px-4 py-2.5 min-h-[44px] gap-1.5",
    md: "text-sm sm:text-sm px-5 py-3 min-h-[44px] gap-2",
    lg: "text-base px-7 py-3.5 min-h-[48px] gap-2.5 font-semibold",
  };

  const variantStyles = {
    primary: "bg-[#B8FF00] text-gray-900 font-bold shadow-lg shadow-[#B8FF00]/20 hover:bg-white hover:text-gray-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B8FF00] focus-visible:ring-offset-2 focus-visible:ring-offset-[#07080B] active:bg-[#A6E600] active:text-gray-900 hover:scale-[1.02] active:scale-[0.98]",
    secondary: "bg-dark-800/90 text-white border border-white/10 hover:border-[#B8FF00]/40 hover:bg-dark-700/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B8FF00] backdrop-blur-md shadow-md hover:scale-[1.02] active:scale-[0.98]",
    outline: "border border-white/15 text-bone-200 hover:border-[#B8FF00] hover:text-[#B8FF00] hover:bg-[#B8FF00]/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B8FF00] active:scale-[0.98]",
    ghost: "text-bone-300 hover:text-white hover:bg-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B8FF00]",
  };

  const combinedClass = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} className={combinedClass}>
        {icon && iconPosition === 'left' && <span className="transition-transform group-hover:-translate-x-0.5">{icon}</span>}
        <span>{children}</span>
        {icon && iconPosition === 'right' && <span className="transition-transform group-hover:translate-x-0.5">{icon}</span>}
      </a>
    );
  }

  return (
    <button className={combinedClass} {...props}>
      {icon && iconPosition === 'left' && <span className="transition-transform group-hover:-translate-x-0.5">{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === 'right' && <span className="transition-transform group-hover:translate-x-0.5">{icon}</span>}
    </button>
  );
};
