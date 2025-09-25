import React from 'react';
interface SectionHeadingProps {
  subtitle?: string;
  title: string;
  align?: 'left' | 'center' | 'right';
  className?: string;
}
const SectionHeading = ({
  subtitle,
  title,
  align = 'center',
  className = ''
}: SectionHeadingProps) => {
  const alignmentClasses = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right'
  };
  return <div className={`mb-12 ${alignmentClasses[align]} ${className}`}>
      {subtitle && <p className="text-secondary font-medium mb-2 uppercase tracking-wider text-sm">
          {subtitle}
        </p>}
      <h2 className="font-serif text-3xl md:text-4xl font-bold">{title}</h2>
      <div className={`h-1 w-16 bg-secondary mt-4 ${align === 'center' ? 'mx-auto' : align === 'right' ? 'ml-auto' : ''}`}></div>
    </div>;
};
export default SectionHeading;