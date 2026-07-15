function TypewriterText({ text, className }: { text: string, className?: string }) {
  return (
    <span className={className}>
      {text.split("").map((char, i) => (
        <span key={i} className="tw-char" style={{ opacity: 0, display: "inline-block" }}>{char === " " ? "\u00A0" : char}</span>
      ))}
    </span>
  );
}

export default function Logo({ className = "", isDark = false, size = "sm", typewriter = false, blueprint = false, showSubtitle = true }: { className?: string, isDark?: boolean, size?: "sm" | "lg", typewriter?: boolean, blueprint?: boolean, showSubtitle?: boolean }) {
  const isLarge = size === "lg";
  const headingClass = `${isLarge ? 'text-5xl' : 'text-3xl'} font-semibold tracking-wide transition-colors leading-none ${isDark ? 'text-white' : 'text-brand-teal'}`;

  const dotClass = "absolute left-1/2 -translate-x-1/2 bg-brand-orange rounded-full w-[0.19em] h-[0.19em] -top-[0.12em]";

  return (
    <div className={`flex items-start gap-3 ${className}`}>
      <div className={`grid grid-cols-3 gap-[2px] shrink-0 ${isLarge ? 'w-20 h-20' : 'w-14 h-14'}`}>
        {[...Array(9)].map((_, i) => {
          const isDiagonal = i === 0 || i === 4 || i === 8;
          const tileClass = blueprint ? 'bp-tile' : '';
          const tileStyle = blueprint ? { opacity: 0 } : {};
          return (
            <div 
              key={i} 
              className={`${isDiagonal ? 'bg-brand-teal' : (isDark ? 'bg-white/20' : 'bg-black/80')} w-full h-full transition-colors ${tileClass}`}
              style={tileStyle}
            ></div>
          )
        })}
      </div>
      <div className="flex flex-col w-fit">
        <h1 className={headingClass}>
          {typewriter ? (
            <>
              <TypewriterText text="GAUR" />
              <span className="relative inline-block">
                <span className={dotClass}></span>
                <span className="tw-char" style={{ opacity: 0, display: "inline-block" }}>I</span>
              </span>
            </>
          ) : (
            <>GAUR<span className="relative inline-block">
              <span className={dotClass}></span>
              <span>I</span>
            </span></>
          )}
          {typewriter ? (
            <TypewriterText text=" GROUP" className="ml-0" />
          ) : (
            <span> GROUP</span>
          )}
        </h1>
        {showSubtitle && (
          <>
            <p className={`${isLarge ? 'text-xs' : 'text-[11px]'} tracking-widest font-normal mt-1 transition-colors ${isDark ? 'text-gray-300' : 'text-brand-orange'} text-center w-full`}>
              {typewriter ? <TypewriterText text="Interior • Kitchen • Design" /> : "Interior • Kitchen • Design"}
            </p>
            <div className={`w-full h-[1px] mt-1.5 ${isDark ? 'bg-white/60' : 'bg-brand-teal'}`}></div>
          </>
        )}
      </div>
    </div>
  );
}
