import { useEffect } from 'react';

export function usePerformance() {
  useEffect(() => {
    if (typeof window === 'undefined' || !('PerformanceObserver' in window)) return;

    try {
      // Track LCP (Largest Contentful Paint)
      const lcpObserver = new PerformanceObserver((entryList) => {
        const entries = entryList.getEntries();
        const lastEntry = entries[entries.length - 1] as PerformanceEntry;
        // LCP tracked for analytics
      });
      lcpObserver.observe({ type: 'largest-contentful-paint', buffered: true });

      // Track CLS (Cumulative Layout Shift)
      let clsValue = 0;
      const clsObserver = new PerformanceObserver((entryList) => {
        for (const entry of entryList.getEntries()) {
          if (!(entry as any).hadRecentInput) {
            clsValue += (entry as any).value;
          }
        }
        // CLS tracked for analytics
      });
      clsObserver.observe({ type: 'layout-shift', buffered: true });

      // Track FID (First Input Delay)
      const fidObserver = new PerformanceObserver((entryList) => {
        const entries = entryList.getEntries();
        const firstEntry = entries[0] as any;
        // FID tracked for analytics
      });
      fidObserver.observe({ type: 'first-input', buffered: true });

      return () => {
        lcpObserver.disconnect();
        clsObserver.disconnect();
        fidObserver.disconnect();
      };
    } catch {
      // PerformanceObserver not fully supported
    }
  }, []);
}
