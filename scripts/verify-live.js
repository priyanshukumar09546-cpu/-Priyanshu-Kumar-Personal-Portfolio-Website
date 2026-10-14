const puppeteer = require('puppeteer-core');

const EDGE_PATH = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';
const LIVE_URL = 'https://myportfolio-two-omega-16.vercel.app';

async function verifyLive() {
  console.log('=== STARTING LIVE DEPLOYMENT VERIFICATION ===');
  console.log('Target URL:', LIVE_URL);

  const browser = await puppeteer.launch({
    executablePath: EDGE_PATH,
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();
  
  const consoleErrors = [];
  page.on('console', msg => {
    if (msg.type() === 'error') {
      consoleErrors.push(`[CONSOLE_ERROR] ${msg.text()}`);
    }
  });
  page.on('pageerror', err => {
    consoleErrors.push(`[PAGE_ERROR] ${err.message}`);
  });

  console.log('\n[1] Checking Desktop Viewport (1440x900)...');
  await page.setViewport({ width: 1440, height: 900 });
  const response = await page.goto(LIVE_URL, { waitUntil: 'networkidle0', timeout: 30000 });
  
  console.log('HTTP Status Code:', response.status());
  if (response.status() !== 200) {
    throw new Error(`Expected HTTP 200, got ${response.status()}`);
  }

  const pageTitle = await page.title();
  console.log('Page Title:', pageTitle);

  // Check section elements
  const sections = ['home', 'about', 'projects', 'skills', 'experience', 'education', 'certifications', 'contact'];
  for (const s of sections) {
    const el = await page.$(`#${s}`);
    console.log(`✓ Section #${s}:`, !!el);
  }

  // Check overflow
  const desktopOverflow = await page.evaluate(() => document.documentElement.scrollWidth > window.innerWidth);
  console.log('Desktop Horizontal Overflow:', desktopOverflow);

  // Check images
  const imageStats = await page.evaluate(() => {
    const imgs = Array.from(document.querySelectorAll('img'));
    let loaded = 0;
    let broken = 0;
    imgs.forEach(img => {
      if (img.complete && img.naturalWidth > 0) {
        loaded++;
      } else {
        broken++;
      }
    });
    return { total: imgs.length, loaded, broken };
  });
  console.log(`Images: Total=${imageStats.total}, Loaded=${imageStats.loaded}, Broken=${imageStats.broken}`);

  console.log('\n[2] Checking Mobile Viewport (390x844)...');
  await page.setViewport({ width: 390, height: 844 });
  await page.evaluate(() => window.scrollTo(0, 0));
  await new Promise(r => setTimeout(r, 1000));

  const mobileOverflow = await page.evaluate(() => document.documentElement.scrollWidth > window.innerWidth);
  console.log('Mobile Horizontal Overflow:', mobileOverflow);

  console.log('\n[3] Checking /resume Route...');
  const resumeResponse = await page.goto(`${LIVE_URL}/resume`, { waitUntil: 'networkidle0', timeout: 30000 });
  console.log('/resume HTTP Status:', resumeResponse.status());

  await browser.close();

  console.log('\n=== LIVE CONSOLE ERRORS SUMMARY ===');
  if (consoleErrors.length === 0) {
    console.log('Zero console or page errors detected on live deployment!');
  } else {
    console.log('Detected errors:');
    consoleErrors.forEach(e => console.error(e));
  }

  console.log('\n=== LIVE VERIFICATION COMPLETED SUCCESSFULLY ===');
}

verifyLive().catch(err => {
  console.error('Live verification failed:', err);
  process.exit(1);
});
