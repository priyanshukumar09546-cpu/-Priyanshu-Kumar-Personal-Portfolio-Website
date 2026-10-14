const puppeteer = require('puppeteer-core');
const path = require('path');
const fs = require('fs');

const EDGE_PATH = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';
const SCREENSHOTS_DIR = path.join(__dirname, '..', 'screenshots');

if (!fs.existsSync(SCREENSHOTS_DIR)) {
  fs.mkdirSync(SCREENSHOTS_DIR, { recursive: true });
}

async function capture() {
  console.log('=== STARTING AUDIT AND SCREENSHOT CAPTURE ===');
  const browser = await puppeteer.launch({
    executablePath: EDGE_PATH,
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--window-size=1440,900']
  });

  const page = await browser.newPage();
  
  const consoleMessages = [];
  page.on('console', msg => {
    consoleMessages.push(`[${msg.type()}] ${msg.text()}`);
  });
  page.on('pageerror', err => {
    consoleMessages.push(`[PAGE_ERROR] ${err.message}`);
  });

  // 1. Desktop Audit (1440x900)
  console.log('Setting Desktop viewport: 1440x900');
  await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 1 });
  await page.goto('http://localhost:3000', { waitUntil: 'networkidle0', timeout: 30000 });
  await new Promise(r => setTimeout(r, 1500));

  // Check overflow
  const desktopOverflow = await page.evaluate(() => {
    return document.documentElement.scrollWidth > window.innerWidth;
  });
  console.log('Desktop horizontal overflow detected:', desktopOverflow);

  // Check sections presence
  const sections = ['home', 'about', 'projects', 'skills', 'experience', 'education', 'certifications', 'contact'];
  for (const s of sections) {
    const exists = await page.$(`#${s}`);
    console.log(`Section #${s} found:`, !!exists);
  }

  // 1. Capture home-desktop.png
  console.log('Capturing home-desktop.png...');
  await page.evaluate(() => window.scrollTo(0, 0));
  await new Promise(r => setTimeout(r, 600));
  await page.screenshot({ path: path.join(SCREENSHOTS_DIR, 'home-desktop.png') });

  // Helper to scroll section into view with offset for fixed header
  async function scrollToSection(id) {
    await page.evaluate((secId) => {
      const el = document.getElementById(secId);
      if (el) {
        const top = el.getBoundingClientRect().top + window.scrollY - 80;
        window.scrollTo({ top: Math.max(0, top), behavior: 'instant' });
      }
    }, id);
    await new Promise(r => setTimeout(r, 800));
  }

  // 2. Capture about-desktop.png
  console.log('Capturing about-desktop.png...');
  await scrollToSection('about');
  await page.screenshot({ path: path.join(SCREENSHOTS_DIR, 'about-desktop.png') });

  // 3. Capture projects-desktop.png
  console.log('Capturing projects-desktop.png...');
  await scrollToSection('projects');
  await page.screenshot({ path: path.join(SCREENSHOTS_DIR, 'projects-desktop.png') });

  // 4. Capture education-desktop.png
  console.log('Capturing education-desktop.png...');
  await scrollToSection('education');
  await page.screenshot({ path: path.join(SCREENSHOTS_DIR, 'education-desktop.png') });

  // 5. Capture certifications-desktop.png
  console.log('Capturing certifications-desktop.png...');
  await scrollToSection('certifications');
  await page.screenshot({ path: path.join(SCREENSHOTS_DIR, 'certifications-desktop.png') });

  // Mobile Audit (390x844 - iPhone 12/13/14 size)
  console.log('Setting Mobile viewport: 390x844');
  await page.setViewport({ width: 390, height: 844, deviceScaleFactor: 2 });
  await page.evaluate(() => window.scrollTo(0, 0));
  await new Promise(r => setTimeout(r, 1000));

  const mobileOverflow = await page.evaluate(() => {
    return document.documentElement.scrollWidth > window.innerWidth;
  });
  console.log('Mobile horizontal overflow detected:', mobileOverflow);

  // 6. Capture home-mobile.png
  console.log('Capturing home-mobile.png...');
  await page.evaluate(() => window.scrollTo(0, 0));
  await new Promise(r => setTimeout(r, 600));
  await page.screenshot({ path: path.join(SCREENSHOTS_DIR, 'home-mobile.png') });

  // 7. Capture about-mobile.png
  console.log('Capturing about-mobile.png...');
  await scrollToSection('about');
  await page.screenshot({ path: path.join(SCREENSHOTS_DIR, 'about-mobile.png') });

  await browser.close();

  console.log('\n=== CONSOLE LOGS & ERRORS ===');
  if (consoleMessages.length === 0) {
    console.log('No console errors or warnings recorded.');
  } else {
    consoleMessages.forEach(m => console.log(m));
  }

  console.log('\n=== VERIFYING CREATED SCREENSHOTS ===');
  const requiredFiles = [
    'home-desktop.png',
    'about-desktop.png',
    'projects-desktop.png',
    'education-desktop.png',
    'certifications-desktop.png',
    'home-mobile.png',
    'about-mobile.png'
  ];

  let allValid = true;
  for (const f of requiredFiles) {
    const fullPath = path.join(SCREENSHOTS_DIR, f);
    if (fs.existsSync(fullPath)) {
      const stats = fs.statSync(fullPath);
      console.log(`✓ ${f} (${(stats.size / 1024).toFixed(1)} KB)`);
    } else {
      console.error(`✗ MISSING: ${f}`);
      allValid = false;
    }
  }

  if (allValid) {
    console.log('\nAll 7 screenshots captured and verified successfully!');
  } else {
    throw new Error('Some screenshots were not captured properly.');
  }
}

capture().catch(err => {
  console.error('Capture failed:', err);
  process.exit(1);
});
