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
      mobile: false,
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

  console.log('Connected to CDP target');
  await client.setViewport(1440, 900);

  const sections = [
    { name: '01_hero', selector: 'header', scrollOffset: 0 },
    { name: '02_philosophy', selector: '#philosophy', scrollOffset: 450 },
    { name: '03_roadmap', selector: '#process-overview', scrollOffset: 450 },
    { name: '04_journey', selector: '#journey', scrollOffset: 500 },
    { name: '05_whatwedo', selector: '#what-we-do', scrollOffset: 0 },
    { name: '06_fields', selector: '#fields', scrollOffset: 0 },
    { name: '07_future', selector: '#future', scrollOffset: 550 },
    { name: '08_finalcta', selector: '#apply', scrollOffset: 0 },
  ];

  async function setTheme(targetTheme) {
    const current = await client.evaluate(`document.documentElement.getAttribute('data-theme')`);
    if (current !== targetTheme) {
      await client.evaluate(`document.getElementById('theme-toggle-btn').click()`);
      await sleep(500);
    }
  }

  async function captureAllSections(theme) {
    console.log(`=== CAPTURING ${theme.toUpperCase()} MODE SECTIONS ===`);
    await client.send('Page.navigate', { url: 'http://localhost:5173/' });
    await sleep(1500);
    await setTheme(theme);
    await sleep(400);

    for (const sec of sections) {
      await client.evaluate(`(() => {
        if ('${sec.name}' === '01_hero') {
          window.scrollTo(0, 0);
        } else {
          const el = document.querySelector('${sec.selector}');
          if (el) {
            const top = el.getBoundingClientRect().top + window.pageYOffset + ${sec.scrollOffset};
            window.scrollTo(0, top);
          }
        }
      })()`);
      await sleep(800);
      await client.captureScreenshot(`phase_b_${sec.name}_${theme}.png`);
    }
  }

  // 1. Dark Mode
  await captureAllSections('dark');

  // 2. Light Mode
  await captureAllSections('light');

  // 3. /apply Page in both themes
  console.log('=== CAPTURING /apply PAGE ===');
  await client.send('Page.navigate', { url: 'http://localhost:5173/apply' });
  await sleep(1200);

  // Apply light mode screenshot
  await setTheme('light');
  await sleep(500);
  await client.captureScreenshot('phase_b_09_apply_light.png');

  // Toggle on /apply to dark mode
  await setTheme('dark');
  await sleep(500);
  await client.captureScreenshot('phase_b_09_apply_dark.png');

  // Test reload persistence on /apply
  await client.send('Page.reload');
  await sleep(1200);
  const themeAfterReload = await client.evaluate(`document.documentElement.getAttribute('data-theme')`);
  console.log('Theme after reload on /apply:', themeAfterReload);

  await client.close();
  console.log('Phase B verification suite completed successfully!');
}

run().catch(err => {
  console.error('Error in Phase B CDP verification:', err);
  process.exit(1);
});
