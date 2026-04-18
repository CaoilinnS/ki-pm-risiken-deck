import { chromium } from 'playwright-chromium';

const browser = await chromium.launch();
const ctx = await browser.newContext({ viewport: { width: 1280, height: 720 } });
const page = await ctx.newPage();
await page.goto('https://claudiabothe.de/ki-pm-risiken-deck/', { waitUntil: 'networkidle', timeout: 30000 });
await page.waitForTimeout(2500);

await page.screenshot({ path: 'debug_slide1.png', fullPage: false });

// Find all top-level overlay-looking elements
const overlays = await page.evaluate(() => {
  const all = [...document.querySelectorAll('body *')];
  const suspects = [];
  for (const el of all) {
    const cs = getComputedStyle(el);
    const z = parseInt(cs.zIndex || '0');
    const pos = cs.position;
    const vis = cs.visibility;
    const op = parseFloat(cs.opacity);
    if ((pos === 'fixed' || pos === 'absolute') && op > 0.5 && vis !== 'hidden' && el.offsetWidth > 200 && el.offsetHeight > 100) {
      const rect = el.getBoundingClientRect();
      const textPreview = (el.innerText || '').slice(0, 200).replace(/\s+/g, ' ');
      suspects.push({
        tag: el.tagName.toLowerCase(),
        cls: el.className?.toString?.() || '',
        id: el.id,
        z,
        pos,
        bg: cs.backgroundColor,
        rect: { x: Math.round(rect.x), y: Math.round(rect.y), w: Math.round(rect.width), h: Math.round(rect.height) },
        textPreview,
      });
    }
  }
  // sort by z-index desc
  return suspects.sort((a, b) => b.z - a.z).slice(0, 15);
});

console.log(JSON.stringify(overlays, null, 2));
await browser.close();
