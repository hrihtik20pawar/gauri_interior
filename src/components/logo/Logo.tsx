function TypewriterText({ text, className }: { text: string, className?: string }) {
  return (
    <span className={className}>
      {text.split("").map((char, i) => (
        <span key={i} className="tw-char" style={{ opacity: 0, display: "inline-block" }}>{char === " " ? "\u00A0" : char}</span>
      ))}
    </span>
  );
}

const tileConfig = [
  { color: 'bg-brand-teal', depth: 'shadow-[2px_4px_6px_rgba(0,0,0,0.4),inset_0_1px_0_rgba(255,255,255,0.1)]' },
  { color: 'bg-[#1a1a1a]', depth: 'shadow-[2px_4px_6px_rgba(0,0,0,0.4),inset_0_1px_0_rgba(255,255,255,0.1)]' },
  { color: 'bg-[#1a1a1a]', depth: 'shadow-[2px_4px_6px_rgba(0,0,0,0.4),inset_0_1px_0_rgba(255,255,255,0.1)]' },
  { color: 'bg-[#1a1a1a]', depth: 'shadow-[2px_4px_6px_rgba(0,0,0,0.4),inset_0_1px_0_rgba(255,255,255,0.1)]' },
  { color: 'bg-brand-teal', depth: 'shadow-[2px_4px_6px_rgba(0,0,0,0.4),inset_0_1px_0_rgba(255,255,255,0.1)]' },
  { color: 'bg-[#1a1a1a]', depth: 'shadow-[2px_4px_6px_rgba(0,0,0,0.4),inset_0_1px_0_rgba(255,255,255,0.1)]' },
  { color: 'bg-[#1a1a1a]', depth: 'shadow-[2px_4px_6px_rgba(0,0,0,0.4),inset_0_1px_0_rgba(255,255,255,0.1)]' },
  { color: 'bg-[#1a1a1a]', depth: 'shadow-[2px_4px_6px_rgba(0,0,0,0.4),inset_0_1px_0_rgba(255,255,255,0.1)]' },
  { color: 'bg-brand-teal', depth: 'shadow-[2px_4px_6px_rgba(0,0,0,0.4),inset_0_1px_0_rgba(255,255,255,0.1)]' },
];

export default function Logo({ className = "", isDark = false, size = "sm", typewriter = false, blueprint = false, showSubtitle = true }: { className?: string, isDark?: boolean, size?: "sm" | "lg", typewriter?: boolean, blueprint?: boolean, showSubtitle?: boolean }) {
  const isLarge = size === "lg";
  const headingClass = `${isLarge ? 'text-5xl' : 'text-3xl'} font-semibold tracking-wide transition-colors leading-none whitespace-nowrap ${isDark ? 'text-white' : 'text-brand-teal'}`;

  const dotClass = "absolute left-1/2 -translate-x-1/2 bg-brand-orange rounded-full w-[0.19em] h-[0.19em] -top-[0.12em]";

  const tileGap = isLarge ? 'gap-[5px]' : 'gap-[3px]';
  const tileSize = isLarge ? 'w-[22px] h-[22px]' : 'w-[15px] h-[15px]';

  return (
    <div className={`flex items-start gap-3 ${className}`}>
      <div className={`grid grid-cols-3 ${tileGap} shrink-0 ${isLarge ? 'w-[76px] h-[76px]' : 'w-[53px] h-[53px]'}`}>
        {tileConfig.map((tile, i) => {
          const tileClass = blueprint ? 'bp-tile' : '';
          const tileStyle = blueprint ? { opacity: 0 } : {};
          return (
            <div 
              key={i} 
              className={`${tileSize} ${tile.color} ${tile.depth} rounded-[2px] transition-all ${tileClass}`}
              style={{ ...tileStyle, transform: 'translateZ(0)' }}
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
            <p className={`${isLarge ? 'text-xs' : 'text-[11px]'} tracking-widest font-normal mt-1 transition-colors ${isDark ? 'text-gray-200' : 'text-brand-orange'} text-center w-full`}>
              {typewriter ? <TypewriterText text="Interior • Kitchen • Design" /> : "Interior • Kitchen • Design"}
            </p>
            <div className={`w-full h-[1px] mt-1.5 ${isDark ? 'bg-gray-300' : 'bg-brand-teal'}`}></div>
          </>
        )}
      </div>
    </div>
  );
}
