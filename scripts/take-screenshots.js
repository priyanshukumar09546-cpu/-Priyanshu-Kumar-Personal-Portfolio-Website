const puppeteer = require('puppeteer-core');
const path = require('path');

const ARTIFACT_DIR = 'C:\\Users\\ASUS\\.gemini\\antigravity-ide\\brain\\b47387d8-1ea2-46b9-9a30-c3ec7830d592';
const EDGE_PATH = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';

const VIEWPORTS = [
  { name: 'shot_1920', width: 1920, height: 1080 },
  { name: 'shot_1440', width: 1440, height: 900 },
  { name: 'shot_1024', width: 1024, height: 800 },
  { name: 'shot_768', width: 768, height: 1024 },
  { name: 'shot_390', width: 390, height: 844 }
];

async function run() {
  console.log('Launching Edge browser...');
  const browser = await puppeteer.launch({
    executablePath: EDGE_PATH,
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();

  for (const vp of VIEWPORTS) {
    console.log(`Setting viewport: ${vp.width}x${vp.height} (${vp.name})...`);
    await page.setViewport({ width: vp.width, height: vp.height, deviceScaleFactor: 1 });
    await page.goto('http://localhost:3001', { waitUntil: 'networkidle0', timeout: 30000 });
    // Wait for animations and fonts to settle
    await new Promise(r => setTimeout(r, 1200));

    const outPath = path.join(ARTIFACT_DIR, `${vp.name}.png`);
    await page.screenshot({ path: outPath });
    console.log(`Saved screenshot: ${outPath}`);
  }

  // Also capture scrolled sections on 1920px Full HD to verify full-page atmosphere
  console.log('Capturing scrolled sections at 1920x1080...');
  await page.setViewport({ width: 1920, height: 1080, deviceScaleFactor: 1 });
  await page.evaluate(() => window.scrollTo(0, 1050));
  await new Promise(r => setTimeout(r, 800));
  await page.screenshot({ path: path.join(ARTIFACT_DIR, 'shot_1920_about.png') });

  await page.evaluate(() => window.scrollTo(0, 2050));
  await new Promise(r => setTimeout(r, 800));
  await page.screenshot({ path: path.join(ARTIFACT_DIR, 'shot_1920_projects.png') });

  await browser.close();
  console.log('Finished capturing all responsive screenshots!');
}

run().catch(err => {
  console.error('Error during screenshot capture:', err);
  process.exit(1);
});
