import fs from 'fs';

const indexHtml = fs.readFileSync('dist/index.html', 'utf8');

const routes = [
  'dist/about/index.html',
  'dist/services/index.html',
  'dist/contact/index.html',
  'dist/blog/index.html',
  'dist/portfolio/index.html',
  'dist/case-studies/index.html',
  'dist/shopify-apps/index.html',
  'dist/shopify-apps/profit-saver/index.html',
  'dist/shopify-apps/page-booster/index.html',
  'dist/shopify-apps/marginmate/index.html',
  'dist/shopify-apps/variant-image/index.html',
  'dist/shopify-apps/section-kit/index.html'
];

const scriptMatch = indexHtml.match(/<script type="module" crossorigin="" src="([^"]+)"><\/script>/);
const cssMatch = indexHtml.match(/<link rel="stylesheet" crossorigin="" href="([^"]+)">/);

console.log('Latest main script:', scriptMatch ? scriptMatch[1] : null);
console.log('Latest main css:', cssMatch ? cssMatch[1] : null);

if (scriptMatch && cssMatch) {
  for (const filePath of routes) {
    if (fs.existsSync(filePath)) {
      let content = fs.readFileSync(filePath, 'utf8');
      
      content = content.replace(/\/assets\/index-[A-Za-z0-9_-]+\.js/g, scriptMatch[1]);
      content = content.replace(/\/assets\/index-[A-Za-z0-9_-]+\.css/g, cssMatch[1]);
      content = content.replace(/\/assets\/Blog-[A-Za-z0-9_-]+\.js/g, '/assets/Blog-Cp1hs-dP.js');
      content = content.replace(/\/assets\/BlogPost-[A-Za-z0-9_-]+\.js/g, '/assets/BlogPost-C-yJ2kio.js');
      content = content.replace(/\/assets\/idb-[A-Za-z0-9_-]+\.js/g, '/assets/idb-U4_lNCgR.js');
      content = content.replace(/\/assets\/SEO-[A-Za-z0-9_-]+\.js/g, '/assets/SEO-DOB5X78u.js');

      try {
        fs.writeFileSync(filePath, content, 'utf8');
        console.log('Updated asset references in:', filePath);
      } catch (err) {
        console.error('Failed writing to:', filePath, err.message);
      }
    }
  }
}

