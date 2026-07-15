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

  const dotClass = "absolute left-1/2 -translate-x-1/2 bg-brand-orange rounded-full w-[0.19em] h-[0.19em] -top-[0.12em]";

  const gauriParts = children.split(/(gauri)/gi);
  
  if (gauriParts.length === 1) return <Tag className={className}>{children}</Tag>;

  return (
    <Tag className={className}>
      {gauriParts.map((part, i) => {
        if (part.toLowerCase() === 'gauri') {
          return (
            <span key={i} className={`${colorClasses[color]} font-semibold`}>
              GAUR
              <span className="relative inline-block">
                <span className={dotClass}></span>
                <span>I</span>
              </span>
            </span>
          );
        }
        
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
