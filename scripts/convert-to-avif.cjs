const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const QUALITY = 80;
const dirs = [
  'public/images/gallery',
  'public/images/manufacturing',
  'public/images/team',
  'public/images/businesses'
];

async function convertFile(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  const outPath = filePath.replace(/\.(jpeg|jpg|png)$/i, '.avif');
  
  try {
    const inputStats = fs.statSync(filePath);
    
    let pipeline = sharp(filePath);
    
    if (ext === '.png') {
      // PNGs (logos) - keep quality high for sharp edges
      pipeline = pipeline.avif({ quality: 90 });
    } else {
      // JPEGs - standard quality
      pipeline = pipeline.avif({ quality: QUALITY });
    }
    
    await pipeline.toFile(outPath);
    
    const outputStats = fs.statSync(outPath);
    const reduction = ((1 - outputStats.size / inputStats.size) * 100).toFixed(1);
    
    return {
      file: path.basename(filePath),
      before: inputStats.size,
      after: outputStats.size,
      reduction: reduction
    };
  } catch (err) {
    console.error(`  ERROR converting ${path.basename(filePath)}: ${err.message}`);
    return null;
  }
}

async function main() {
  console.log('=== AVIF Image Conversion ===\n');
  
  let totalBefore = 0;
  let totalAfter = 0;
  let converted = 0;
  let failed = 0;
  
  for (const dir of dirs) {
    const fullDir = path.resolve(dir);
    if (!fs.existsSync(fullDir)) {
      console.log(`Skipping ${dir} (not found)`);
      continue;
    }
    
    const files = fs.readdirSync(fullDir).filter(f => /\.(jpeg|jpg|png)$/i.test(f));
    console.log(`Processing ${dir} (${files.length} files)...`);
    
    for (const file of files) {
      const filePath = path.join(fullDir, file);
      const result = await convertFile(filePath);
      
      if (result) {
        console.log(`  ${result.file}: ${(result.before / 1024).toFixed(1)}KB -> ${(result.after / 1024).toFixed(1)}KB (-${result.reduction}%)`);
        totalBefore += result.before;
        totalAfter += result.after;
        converted++;
      } else {
        failed++;
      }
    }
    console.log('');
  }
  
  console.log('=== Summary ===');
  console.log(`Converted: ${converted} files`);
  console.log(`Failed: ${failed} files`);
  console.log(`Total before: ${(totalBefore / 1024 / 1024).toFixed(2)}MB`);
  console.log(`Total after: ${(totalAfter / 1024 / 1024).toFixed(2)}MB`);
  console.log(`Total reduction: ${((1 - totalAfter / totalBefore) * 100).toFixed(1)}%`);
  console.log(`Saved: ${((totalBefore - totalAfter) / 1024 / 1024).toFixed(2)}MB`);
}

main().catch(console.error);
