const fs = require('fs');
const path = require('path');
const http = require('http');

const ARTIFACT_DIR = 'C:\\Users\\Suriy\\.gemini\\antigravity-ide\\brain\\ce62386a-89ba-49f9-b5a0-3f76008242cf';

async function getWsUrl() {
  return new Promise((resolve, reject) => {
    http.get('http://localhost:9222/json/list', res => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        const list = JSON.parse(data);
        const page = list.find(p => p.type === 'page');
        if (!page) reject(new Error('No page target found'));
        else resolve(page.webSocketDebuggerUrl);
      });
    }).on('error', reject);
  });
}

class CdpClient {
  constructor(wsUrl) {
    this.ws = new WebSocket(wsUrl);
    this.id = 1;
    this.callbacks = new Map();
    this.ready = new Promise((resolve, reject) => {
      this.ws.onopen = resolve;
      this.ws.onerror = reject;
    });
    this.ws.onmessage = (event) => {
      const msg = JSON.parse(event.data);
      if (msg.id && this.callbacks.has(msg.id)) {
        const { resolve, reject } = this.callbacks.get(msg.id);
        this.callbacks.delete(msg.id);
        if (msg.error) reject(msg.error);
        else resolve(msg.result);
      }
    };
  }

  async send(method, params = {}) {
    await this.ready;
    const msgId = this.id++;
    return new Promise((resolve, reject) => {
      this.callbacks.set(msgId, { resolve, reject });
      this.ws.send(JSON.stringify({ id: msgId, method, params }));
    });
  }

  async evaluate(expression) {
    const res = await this.send('Runtime.evaluate', {
      expression,
      returnByValue: true,
      awaitPromise: true,
    });
    return res?.result?.value;
  }

  async setViewport(width, height) {
    await this.send('Emulation.setDeviceMetricsOverride', {
      width,
      height,
      deviceScaleFactor: 1,
      mobile: width < 600,
    });
  }

  async captureScreenshot(filename) {
    const res = await this.send('Page.captureScreenshot', { format: 'png' });
    const buffer = Buffer.from(res.data, 'base64');
    const outPath = path.join(ARTIFACT_DIR, filename);
    fs.writeFileSync(outPath, buffer);
    console.log(`Saved screenshot: ${filename}`);
    return outPath;
  }

  async close() {
    this.ws.close();
  }
}

async function sleep(ms) {
  return new Promise(r => setTimeout(r, ms));
}

async function run() {
  const wsUrl = await getWsUrl();
  const client = new CdpClient(wsUrl);

  console.log('CDP connected');

  // Step 1: 1440x900 desktop viewport, navigate to home
  await client.setViewport(1440, 900);
  await client.send('Page.navigate', { url: 'http://localhost:5173/' });
  await sleep(1500);

  // Ensure starting in dark mode
  let currentTheme = await client.evaluate(`document.documentElement.getAttribute('data-theme')`);
  if (currentTheme === 'light') {
    await client.evaluate(`document.getElementById('theme-toggle-btn').click()`);
    await sleep(500);
  }
  currentTheme = await client.evaluate(`document.documentElement.getAttribute('data-theme')`);
  console.log('1. Dark theme confirmed:', currentTheme);

  // Dark desktop top screenshot
  await client.captureScreenshot('phase_a_dark_desktop.png');

  // Scroll to footer in dark mode
  await client.evaluate(`document.querySelector('footer').scrollIntoView({ behavior: 'instant' })`);
  await sleep(600);
  await client.captureScreenshot('phase_a_dark_footer.png');

  // Scroll back to top
  await client.evaluate(`window.scrollTo(0, 0)`);
  await sleep(400);

  // Step 2: Toggle to Light Mode via button click
  await client.evaluate(`document.getElementById('theme-toggle-btn').click()`);
  await sleep(600); // allow 350ms crossfade

  const lightTheme = await client.evaluate(`document.documentElement.getAttribute('data-theme')`);
  const lightStorage = await client.evaluate(`localStorage.getItem('yesa-theme')`);
  console.log('2. Light theme confirmed:', lightTheme, '| localStorage:', lightStorage);

  // Light desktop top screenshot
  await client.captureScreenshot('phase_a_light_desktop.png');

  // Scroll to footer in light mode
  await client.evaluate(`document.querySelector('footer').scrollIntoView({ behavior: 'instant' })`);
  await sleep(600);
  await client.captureScreenshot('phase_a_light_footer.png');

  // Scroll back to top
  await client.evaluate(`window.scrollTo(0, 0)`);
  await sleep(400);

  // Step 3: Test Navigation to /apply
  await client.evaluate(`document.getElementById('nav-apply-btn').click()`);
  await sleep(1000);

  const applyPath = await client.evaluate(`window.location.pathname`);
  const applyTheme = await client.evaluate(`document.documentElement.getAttribute('data-theme')`);
  console.log('3. Route after clicking Apply:', applyPath, '| Theme on /apply:', applyTheme);
  await client.captureScreenshot('phase_a_light_apply.png');

  // Step 4: Reload page on /apply and test persistence
  await client.send('Page.reload');
  await sleep(1200);
  const reloadedTheme = await client.evaluate(`document.documentElement.getAttribute('data-theme')`);
  console.log('4. Theme after reload on /apply:', reloadedTheme);

  // Step 5: Mobile Viewport (375x812)
  await client.send('Page.navigate', { url: 'http://localhost:5173/' });
  await client.setViewport(375, 812);
  await sleep(1200);
  await client.captureScreenshot('phase_a_mobile_light_375.png');

  // Open mobile drawer
  await client.evaluate(`document.querySelector('header button[aria-label="Toggle navigation menu"]').click()`);
  await sleep(500);
  await client.captureScreenshot('phase_a_mobile_drawer_light.png');

  // Click theme toggle to test dark mode on mobile
  await client.evaluate(`document.getElementById('theme-toggle-btn').click()`);
  await sleep(600);
  await client.captureScreenshot('phase_a_mobile_drawer_dark.png');

  await client.close();
  console.log('Verification completed successfully!');
}

run().catch(err => {
  console.error('Error:', err);
  process.exit(1);
});
