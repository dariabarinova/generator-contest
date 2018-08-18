/* eslint-disable no-restricted-syntax, no-await-in-loop */
const puppeteer = require('puppeteer');

const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

const userAgents = {
  mobile: 'Mozilla/5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X) AppleWebKit/604.1.38 (KHTML, like Gecko) Version/11.0 Mobile/15A372 Safari/604.1',
  tablet: 'Mozilla/5.0 (iPad; CPU OS 11_0 like Mac OS X) AppleWebKit/604.1.34 (KHTML, like Gecko) Version/11.0 Mobile/15A5341f Safari/604.1',
  desktop: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/68.0.3440.106 Safari/537.36',
};

const screenshotsPath = './__test__/screenshots/';
const devicesResolutions = {
  desktop: [
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
  ],
  tablet: [
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
  ],
  mobile: [
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
  ],
};

const pages = {
  // index: '/',
  loader: '/loader',
  layout: '/layout',
};

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  for (const pageKey of Object.keys(pages)) {
    const pageUrl = pages[pageKey];

    for (const deviceType of Object.keys(devicesResolutions)) {
      await page.setUserAgent(userAgents[deviceType]);
      await page.goto(`http://localhost:8000${pageUrl}`);

      // wait fonts-images
      await delay(2000);

      const resolutions = devicesResolutions[deviceType];
      for (const device of resolutions) {
        const width = device[0];
        const height = device[1];
        const path = `${screenshotsPath}${deviceType}_${pageKey}_screen${width}x${height}.png`;
        await page.setViewport({ width, height });
        await page.screenshot({ path });
      }
    }
  }

  await browser.close();
})();
