import puppeteer from 'puppeteer';
import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const delay = ms => new Promise(r => setTimeout(r, ms));

async function convertToImage() {
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 800, height: 1100, deviceScaleFactor: 2 });

  const htmlPath = path.join(__dirname, '..', 'public', 'prescription.html');
  await page.goto(`file://${htmlPath}`, { waitUntil: 'networkidle0' });

  await delay(2000);

  const outputPath = path.join(__dirname, '..', 'public', 'prescription.png');

  const prescriptionPage = await page.$('.prescription-page');
  if (prescriptionPage) {
    await prescriptionPage.screenshot({ path: outputPath, type: 'png' });
  } else {
    await page.screenshot({ path: outputPath, fullPage: true, type: 'png' });
  }

  console.log(`Prescription image saved to: ${outputPath}`);
  await browser.close();
}

convertToImage().catch(console.error);
