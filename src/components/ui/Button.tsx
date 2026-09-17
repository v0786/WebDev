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
    sm: "text-xs px-3.5 py-2 gap-1.5",
    md: "text-sm px-5 py-2.5 gap-2",
    lg: "text-base px-7 py-3.5 gap-2.5 font-semibold",
  };

  const variantStyles = {
    primary: "bg-gradient-to-r from-neon-cyan via-neon-electric to-neon-violet text-dark-950 font-bold shadow-lg shadow-neon-cyan/20 hover:shadow-neon-cyan/35 hover:scale-[1.02] active:scale-[0.98]",
    secondary: "bg-dark-800/90 text-white border border-white/10 hover:border-neon-cyan/40 hover:bg-dark-700/90 backdrop-blur-md shadow-md hover:scale-[1.02] active:scale-[0.98]",
    outline: "border border-slate-700 text-slate-200 hover:border-neon-cyan hover:text-neon-cyan hover:bg-neon-cyan/5 active:scale-[0.98]",
    ghost: "text-slate-300 hover:text-white hover:bg-white/5",
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
