interface BrandNameProps {
  children: string;
  className?: string;
  as?: 'span' | 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'strong' | 'div';
  size?: 'sm' | 'md' | 'lg';
}

export default function BrandName({ children, className = '', as: Tag = 'span', size = 'md' }: BrandNameProps) {
  const dotSizes = {
    sm: '-top-[0.3em] w-[0.35em] h-[0.35em]',
    md: '-top-[0.35em] w-[0.4em] h-[0.4em]',
    lg: '-top-[0.4em] w-[0.45em] h-[0.45em]'
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
