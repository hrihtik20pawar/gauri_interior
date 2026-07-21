export default function Logo({ className = "", isDark = false, size = "sm", showSubtitle = true }: { className?: string, isDark?: boolean, size?: "sm" | "lg", showSubtitle?: boolean }) {
  const isLarge = size === "lg";

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <img 
        src="/images/about/main_logo.jpeg" 
        alt="Gauri Group Logo" 
        className={`shrink-0 object-contain ${isLarge ? 'w-20 h-20' : 'w-14 h-14'}`}
      />
      {showSubtitle && (
        <div className="flex flex-col w-fit">
          <p className={`${isLarge ? 'text-xs' : 'text-[11px]'} tracking-widest font-normal transition-colors ${isDark ? 'text-gray-200' : 'text-brand-orange'} text-center w-full`}>
            Interior • Kitchen • Design
          </p>
          <div className={`w-full h-[1px] mt-1.5 ${isDark ? 'bg-gray-300' : 'bg-brand-teal'}`}></div>
        </div>
      )}
    </div>
  );
}
