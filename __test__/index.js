/* eslint-disable no-restricted-syntax, no-await-in-loop */
const puppeteer = require('puppeteer');

const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

const screenshotsPath = './__test__/screenshots/';
const devicesResolutions = [
  // 800x600
  [779, 431],
  // 1024x768
  [1003, 599],
  // 1280x800
  [1259, 631],
  // 1280x1024
  [1259, 855],
  // 1400x1050
  [1379, 881],
  // 1440x900
  [1419, 731],
  // 1600x1200
  [1579, 1031],
  // 1680x1050
  [1659, 881],
  // 1920x1080
  [1899, 911],
  // iPad
  [768, 1024],
  [1024, 768],
  // iPad Pro
  [1024, 1366],
  [1366, 1024],
  // Nexus 10
  [800, 1280],
  // Nexus 7
  [600, 960],
  // Nexus 5
  [360, 598],
  [598, 360],
  // Nexus 5x
  [412, 684],
  [684, 412],
  // iPhone X
  [375, 635],
  [375, 812],
  [724, 375],
  // iPhone 6 Plus
  [414, 736],
  [736, 414],
  // iPhone 6
  [375, 667],
  [667, 375],
  // iPhone 5
  [320, 568],
  [568, 320],
  // iPhone 4
  [320, 480],
  [480, 320],
];

const pages = {
  index: '/',
  loader: '/loader',
};

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  for (const pageKey of Object.keys(pages)) {
    const pageUrl = pages[pageKey];
    await page.goto(`http://localhost:8000${pageUrl}`);

    // wait fonts-images
    await delay(2000);

    for (const device of devicesResolutions) {
      const width = device[0];
      const height = device[1];
      const path = `${screenshotsPath}${pageKey}_screen${width}x${height}.png`;
      await page.setViewport({ width, height });
      await page.screenshot({ path });
    }
  }

  await browser.close();
})();
