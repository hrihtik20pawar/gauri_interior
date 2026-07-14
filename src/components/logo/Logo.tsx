function TypewriterText({ text, className }: { text: string, className?: string }) {
  return (
    <span className={className}>
      {text.split("").map((char, i) => (
        <span key={i} className="tw-char" style={{ opacity: 0, display: "inline-block" }}>{char === " " ? "\u00A0" : char}</span>
      ))}
    </span>
  );
}

export default function Logo({ className = "", isDark = false, size = "sm", typewriter = false, blueprint = false }: { className?: string, isDark?: boolean, size?: "sm" | "lg", typewriter?: boolean, blueprint?: boolean }) {
  const isLarge = size === "lg";
  const headingClass = `${isLarge ? 'text-5xl' : 'text-3xl'} font-semibold tracking-wider transition-colors leading-none flex items-center ${isDark ? 'text-white' : 'text-brand-teal'}`;

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <div className={`grid grid-cols-3 gap-1 shrink-0 ${isLarge ? 'w-20 h-20' : 'w-14 h-14'}`}>
        {[...Array(9)].map((_, i) => {
          const isDiagonal = i === 0 || i === 4 || i === 8;
          const tileClass = blueprint ? 'bp-tile' : '';
          const tileStyle = blueprint ? { opacity: 0 } : {};
          return (
            <div 
              key={i} 
              className={`${isDiagonal ? 'bg-brand-teal' : (isDark ? 'bg-white/20' : 'bg-black/80')} w-full h-full rounded-[2px] transition-colors ${tileClass}`}
              style={tileStyle}
            ></div>
          )
        })}
      </div>
      <div className="flex flex-col justify-center">
        <h1 className={headingClass}>
          {typewriter ? (
            <>
              <TypewriterText text="GAUR" />
              <span className="relative inline-flex items-center">
                <span className={`absolute bg-brand-orange rounded-full ${isLarge ? '-top-2 w-3 h-3' : '-top-1.5 w-2 h-2'}`}></span>
                <span className="tw-char" style={{ opacity: 0, display: "inline-block" }}>I</span>
              </span>
            </>
          ) : (
            <>GAUR<span className="relative inline-flex flex-col items-center">
              <span className={`absolute bg-brand-orange rounded-full ${isLarge ? '-top-2 w-3 h-3' : '-top-1.5 w-2 h-2'}`}></span>
              <span>I</span>
            </span></>
          )}
          {typewriter ? (
            <TypewriterText text=" GROUP" className="ml-0" />
          ) : (
            <span className="ml-2">GROUP</span>
          )}
        </h1>
        <p className={`${isLarge ? 'text-xs' : 'text-[11px]'} tracking-widest font-medium mt-1 transition-colors ${isDark ? 'text-gray-300' : 'text-brand-orange'} text-center w-full`}>
          {typewriter ? <TypewriterText text="Interior • Kitchen • Design" /> : "Interior • Kitchen • Design"}
        </p>
        <div className={`w-full h-[1px] mt-1 ${isDark ? 'bg-white/50' : 'bg-brand-teal/40'}`}></div>
      </div>
    </div>
  );
}
