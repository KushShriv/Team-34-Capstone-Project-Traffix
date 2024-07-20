const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  await page.goto('file://' + __dirname + '/maps.html');
  await page.waitForSelector('#map');
  await page.screenshot({ path: 'map_screenshot.png' });
  await browser.close();
})();