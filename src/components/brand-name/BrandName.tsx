interface BrandNameProps {
  children: string;
  className?: string;
  as?: 'span' | 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'strong' | 'div';
  size?: 'sm' | 'md' | 'lg';
}

export default function BrandName({ children, className = '', as: Tag = 'span', size = 'md' }: BrandNameProps) {
  const dotSizes = {
    sm: '-top-0.5 w-1.5 h-1.5',
    md: '-top-1 w-2 h-2',
    lg: '-top-1 w-2.5 h-2.5'
  };

  const parts = children.split(/(gauri)/gi);
  
  if (parts.length === 1) return <Tag className={className}>{children}</Tag>;

  return (
    <Tag className={className}>
      {parts.map((part, i) => {
        if (part.toLowerCase() === 'gauri') {
          return (
            <span key={i} className="inline-flex items-start relative">
              <span className="text-brand-teal font-semibold">GAUR</span>
              <span className="relative inline-flex flex-col items-center">
                <span className={`absolute left-1/2 -translate-x-1/2 bg-brand-orange rounded-full ${dotSizes[size]}`}></span>
                <span className="text-brand-teal font-semibold">I</span>
              </span>
            </span>
          );
        }
        return <span key={i}>{part}</span>;
      })}
    </Tag>
  );
}
