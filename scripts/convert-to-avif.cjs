const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const QUALITY = 80;
const PUBLIC_DIR = path.resolve(__dirname, '..', 'public', 'images');
const EXTENSIONS = /\.(jpe?g)$/i;

function getAllImageFiles(dir) {
  let results = [];
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      results = results.concat(getAllImageFiles(fullPath));
    } else if (EXTENSIONS.test(entry.name)) {
      results.push(fullPath);
    }
  }
  return results;
}

async function convertFile(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  const outPath = filePath.replace(EXTENSIONS, '.avif');

  if (filePath === outPath) return null;

  try {
    const inputStats = fs.statSync(filePath);

    let pipeline = sharp(filePath);

    if (ext === '.png') {
      pipeline = pipeline.avif({ quality: 90 });
    } else {
      pipeline = pipeline.avif({ quality: QUALITY });
    }

    await pipeline.toFile(outPath);
    fs.unlinkSync(filePath);

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
  console.log(`Source: ${PUBLIC_DIR}\n`);

  if (!fs.existsSync(PUBLIC_DIR)) {
    console.error('Public images directory not found!');
    process.exit(1);
  }

  const files = getAllImageFiles(PUBLIC_DIR);
  console.log(`Found ${files.length} image files to convert\n`);

  let totalBefore = 0;
  let totalAfter = 0;
  let converted = 0;
  let failed = 0;

  let currentDir = '';
  let dirCount = 0;

  for (const filePath of files) {
    const dir = path.dirname(filePath);
    const relativeDir = path.relative(PUBLIC_DIR, dir);

    if (dir !== currentDir) {
      if (currentDir !== '') console.log(`  (${dirCount} files)\n`);
      currentDir = dir;
      dirCount = 0;
      console.log(`Processing: ${relativeDir || '.'}`);
    }

    dirCount++;
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

  if (currentDir !== '') console.log(`  (${dirCount} files)\n`);

  console.log('=== Summary ===');
  console.log(`Converted: ${converted} files`);
  console.log(`Failed: ${failed} files`);
  console.log(`Total before: ${(totalBefore / 1024 / 1024).toFixed(2)}MB`);
  console.log(`Total after: ${(totalAfter / 1024 / 1024).toFixed(2)}MB`);
  console.log(`Total reduction: ${((1 - totalAfter / totalBefore) * 100).toFixed(1)}%`);
  console.log(`Saved: ${((totalBefore - totalAfter) / 1024 / 1024).toFixed(2)}MB`);
}

main().catch(console.error);
