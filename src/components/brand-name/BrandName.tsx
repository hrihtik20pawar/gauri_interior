interface BrandNameProps {
  children: string;
  className?: string;
  as?: 'span' | 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'strong' | 'div';
  size?: 'sm' | 'md' | 'lg';
  color?: 'teal' | 'white' | 'green';
}

export default function BrandName({ children, className = '', as: Tag = 'span', size = 'md', color = 'teal' }: BrandNameProps) {
  const colorClasses = {
    teal: 'text-brand-teal',
    white: 'text-white',
    green: 'text-brand-green'
  };
  const dotSizes = {
    sm: 'w-1.5 h-1.5 -top-0.5',
    md: 'w-2 h-2 -top-0.5',
    lg: 'w-2.5 h-2.5 -top-1'
  };

  // Split by "gauri" first, then check each part for "studio"
  const gauriParts = children.split(/(gauri)/gi);
  
  if (gauriParts.length === 1) return <Tag className={className}>{children}</Tag>;

  return (
    <Tag className={className}>
      {gauriParts.map((part, i) => {
        if (part.toLowerCase() === 'gauri') {
          // Check if remaining text after gauri contains "studio"
          return (
            <span key={i} className="inline-flex items-start relative">
              <span className={`${colorClasses[color]} font-semibold`}>GAUR</span>
              <span className="relative inline-block">
                <span className={`absolute left-1/2 -translate-x-1/2 bg-brand-orange rounded-full ${dotSizes[size]}`}></span>
                <span className={`${colorClasses[color]} font-semibold`}>I</span>
              </span>
            </span>
          );
        }
        
        // Check if this part contains "studio" and make it orange
        if (part.toLowerCase().includes('studio')) {
          const studioParts = part.split(/(studio)/gi);
          return (
            <span key={i}>
              {studioParts.map((sp, j) => 
                sp.toLowerCase() === 'studio' 
                  ? <span key={j} className="text-brand-orange font-semibold italic">{sp}</span>
                  : <span key={j}>{sp}</span>
              )}
            </span>
          );
        }
        
        return <span key={i} className={`${colorClasses[color]} font-semibold`}>{part}</span>;
      })}
    </Tag>
  );
}
