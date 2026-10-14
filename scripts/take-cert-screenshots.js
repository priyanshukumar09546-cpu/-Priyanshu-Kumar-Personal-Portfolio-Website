const puppeteer = require('puppeteer-core');
const path = require('path');

const ARTIFACT_DIR = 'C:\\Users\\ASUS\\.gemini\\antigravity-ide\\brain\\b47387d8-1ea2-46b9-9a30-c3ec7830d592';
const EDGE_PATH = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';

async function run() {
  console.log('Launching browser...');
  const browser = await puppeteer.launch({
    executablePath: EDGE_PATH,
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();

  // Test 1: Desktop Certifications section
  console.log('Capturing Desktop 1920x1080 Certifications section...');
  await page.setViewport({ width: 1920, height: 1080, deviceScaleFactor: 1 });
  await page.goto('http://localhost:3001#certifications', { waitUntil: 'networkidle0', timeout: 30000 });
  await new Promise(r => setTimeout(r, 1000));
  await page.evaluate(() => {
    const el = document.getElementById('certifications');
    if (el) el.scrollIntoView({ behavior: 'instant', block: 'start' });
  });
  await new Promise(r => setTimeout(r, 800));
  await page.screenshot({ path: path.join(ARTIFACT_DIR, 'cert_desktop_1920.png') });

  // Test 2: Click "View Certificate (P.5)" for EY Technology Risk
  console.log('Testing Modal for EY Technology Risk (Page 5)...');
  await page.evaluate(() => {
    const buttons = Array.from(document.querySelectorAll('button'));
    const eyBtn = buttons.find(b => b.textContent && b.textContent.includes('(P.5)'));
    if (eyBtn) eyBtn.click();
  });
  await new Promise(r => setTimeout(r, 1500));
  await page.screenshot({ path: path.join(ARTIFACT_DIR, 'cert_modal_ey_page5.png') });

  // Close modal via Escape key
  await page.keyboard.press('Escape');
  await new Promise(r => setTimeout(r, 500));

  // Test 3: Click "View Certificate (P.8)" for AWS Solutions Architecture
  console.log('Testing Modal for AWS Solutions Architecture (Page 8)...');
  await page.evaluate(() => {
    const buttons = Array.from(document.querySelectorAll('button'));
    const awsBtn = buttons.find(b => b.textContent && b.textContent.includes('(P.8)'));
    if (awsBtn) awsBtn.click();
  });
  await new Promise(r => setTimeout(r, 1500));
  await page.screenshot({ path: path.join(ARTIFACT_DIR, 'cert_modal_aws_page8.png') });

  // Close modal
  await page.keyboard.press('Escape');
  await new Promise(r => setTimeout(r, 500));

  // Test 4: Category Filtering - Click "Events & Participation (4)"
  console.log('Testing Category Filter: Events & Participation...');
  await page.evaluate(() => {
    const buttons = Array.from(document.querySelectorAll('button'));
    const filterBtn = buttons.find(b => b.textContent && b.textContent.includes('Events & Participation'));
    if (filterBtn) filterBtn.click();
  });
  await new Promise(r => setTimeout(r, 600));
  await page.screenshot({ path: path.join(ARTIFACT_DIR, 'cert_filter_events.png') });

  await browser.close();
  console.log('Finished capturing all verification scenarios!');
}

run().catch(err => {
  console.error('Error during verification:', err);
  process.exit(1);
});
