import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import puppeteer from 'puppeteer';
import express from 'express';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// The routes you want to pre-render for SEO
const routes = [
  '/',
  '/about',
  '/services',
  '/contact',
  '/blog',
  '/portfolio'
];

const PORT = 5174;
const DIST_DIR = path.resolve(__dirname, 'dist');

async function prerender() {
  console.log('Starting prerender process...');
  
  // 1. Serve the built dist folder locally
  const app = express();
  app.use(express.static(DIST_DIR));
  // Fallback to index.html for client-side routing
  app.use((req, res) => {
    res.sendFile(path.resolve(DIST_DIR, 'index.html'));
  });

  const server = app.listen(PORT, () => {
    console.log(`Prerender server running on port ${PORT}`);
  });

  // 2. Launch Puppeteer
  const browser = await puppeteer.launch({ headless: 'new' });
  const page = await browser.newPage();
  
  // 3. Visit each route and save HTML
  for (const route of routes) {
    console.log(`Prerendering ${route}...`);
    await page.goto(`http://localhost:${PORT}${route}`, { waitUntil: 'networkidle0' });
    
    // Wait an extra second to ensure any API calls (like fetching blogs) finish
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Extract the inner HTML of the HTML tag to avoid duplicating the <html> tag
    const html = await page.evaluate(() => document.documentElement.innerHTML);
    
    // Create the directory structure for the route
    const routeDir = path.join(DIST_DIR, route === '/' ? '' : route);
    if (!fs.existsSync(routeDir)) {
      fs.mkdirSync(routeDir, { recursive: true });
    }
    
    // Save the HTML file
    fs.writeFileSync(path.join(routeDir, 'index.html'), `<!DOCTYPE html>\n<html lang="en">\n${html}\n</html>`);
    console.log(`Saved ${routeDir}/index.html`);
  }

  // 4. Cleanup
  await browser.close();
  server.close();
  console.log('Prerendering complete!');
}

prerender().catch(err => {
  console.error('Prerender failed:', err);
  process.exit(1);
});
