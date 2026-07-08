const svg = `<svg width="400" height="100" viewBox="0 0 400 100" xmlns="http://www.w3.org/2000/svg">
  <g transform="translate(10, 25)">
    <rect x="0" y="0" width="14" height="14" fill="#0f766e" />
    <rect x="17" y="0" width="14" height="14" fill="#111827" />
    <rect x="34" y="0" width="14" height="14" fill="#111827" />
    <rect x="0" y="17" width="14" height="14" fill="#111827" />
    <rect x="17" y="17" width="14" height="14" fill="#0f766e" />
    <rect x="34" y="17" width="14" height="14" fill="#111827" />
    <rect x="0" y="34" width="14" height="14" fill="#111827" />
    <rect x="17" y="34" width="14" height="14" fill="#111827" />
    <rect x="34" y="34" width="14" height="14" fill="#0f766e" />
  </g>
  <text x="75" y="58" font-family="system-ui, sans-serif" font-weight="600" font-size="28" fill="#0f766e">Gauri Interior Pvt. Ltd.</text>
</svg>`;
const svgKitchen = svg.replace("Gauri Interior Pvt. Ltd.", "Gauri's Kitchen");
const svgStudio = svg.replace("Gauri Interior Pvt. Ltd.", "Gauri's Designing Studio");

console.log('interior: data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svg));
console.log('kitchen: data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svgKitchen));
console.log('studio: data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svgStudio));
