export default function Logo({ className = "", isDark = false }: { className?: string, isDark?: boolean }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <div className="grid grid-cols-3 gap-[3px] w-12 h-12 shrink-0">
        {[...Array(9)].map((_, i) => {
          const isDiagonal = i === 0 || i === 4 || i === 8;
          return (
            <div 
              key={i} 
              className={`${isDiagonal ? 'bg-brand-teal' : (isDark ? 'bg-white/20' : 'bg-brand-green/80')} w-full h-full rounded-[2px] transition-colors`}
            ></div>
          )
        })}
      </div>
      <div className="flex flex-col justify-center">
        <h1 className={`text-3xl font-semibold tracking-wider transition-colors ${isDark ? 'text-white' : 'text-brand-teal'} leading-none flex items-center`}>
          GAUR<span className="relative inline-flex flex-col items-center">
            <span className="absolute -top-1.5 w-2 h-2 bg-brand-orange rounded-full"></span>
            <span>I</span>
          </span>
          <span className="ml-2">GROUP</span>
        </h1>
        <div className={`w-full h-[1px] my-1 ${isDark ? 'bg-white/50' : 'bg-brand-teal/40'}`}></div>
        <p className={`text-[11px] tracking-widest font-medium uppercase mt-0 transition-colors ${isDark ? 'text-gray-300' : 'text-brand-orange'} text-center w-full`}>
          Interior • Kitchen • Design
        </p>
      </div>
    </div>
  );
}
