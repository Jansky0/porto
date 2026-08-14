const puppeteer = require('puppeteer');
const path = require('path');

(async () => {
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  const page = await browser.newPage();
  
  // Set viewport to a good desktop size
  await page.setViewport({ width: 1440, height: 900 });

  const files = [
    { name: 'jalansafe_public.png', url: 'file:///home/jansky/Dokumen/porto/tubes/JalanSafePublik.html' },
    { name: 'jalansafe_report.png', url: 'file:///home/jansky/Dokumen/porto/tubes/JalanSafeLapor.html' },
    { name: 'jalansafe_admin.png', url: 'file:///home/jansky/Dokumen/porto/tubes/JalanSafeAdmin.html' }
  ];

  for (const file of files) {
    await page.goto(file.url, { waitUntil: 'networkidle0' });
    
    // Additional wait for map tiles to load if needed, or JS to execute
    await new Promise(resolve => setTimeout(resolve, 3000));
    
    const outPath = path.join('/home/jansky/Dokumen/porto/src/assets/images', file.name);
    await page.screenshot({ path: outPath, fullPage: false });
    console.log(`Saved ${file.name}`);
  }

  await browser.close();
})();
