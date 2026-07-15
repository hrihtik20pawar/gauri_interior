import { ReactNode } from 'react';
import { LucideIcon } from 'lucide-react';

interface InfoCardProps {
  icon?: LucideIcon;
  iconClassName?: string;
  title: string;
  description?: string;
  onClick?: () => void;
  className?: string;
  children?: ReactNode;
}

export default function InfoCard({ 
  icon: Icon, 
  iconClassName = 'w-5 h-5 text-brand-orange',
  title, 
  description, 
  onClick, 
  className = '',
  children 
}: InfoCardProps) {
  return (
    <div 
      onClick={onClick}
      className={`flex items-center gap-4 bg-white p-4 rounded-xl shadow-md border-t-2 border-brand-teal w-full sm:flex-1 ${onClick ? 'cursor-pointer hover:shadow-md hover:border-brand-orange/30 transition-all' : ''} ${className}`}
    >
      {Icon && (
        <div className="w-10 h-10 rounded-full bg-brand-orange/10 flex items-center justify-center shrink-0">
          <Icon className={iconClassName} />
        </div>
      )}
      <div>
        <h5 className="font-semibold text-gray-900 text-sm mb-1">{title}</h5>
        {description && <p className="text-xs text-gray-500">{description}</p>}
        {children}
      </div>
    </div>
  );
}
