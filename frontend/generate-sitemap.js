import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const API_KEY = 'pk_ucyZsOgpafCiGYM4oUblYWMRaQKw3LSW';
const API_URL = 'https://blogs.task19.com/api/v1/projects/blogs';
const BASE_URL = 'https://www.task19.com';

const staticPages = [
  '/',
  '/about',
  '/services',
  '/portfolio',
  '/contact',
  '/blog'
];

async function generateSitemap() {
  console.log('Generating sitemap...');
  try {
    const response = await fetch(API_URL, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'X-API-KEY': API_KEY
      }
    });

    const data = await response.json();
    let blogs = [];
    if (data && data.blogs) {
      blogs = data.blogs;
    }

    let sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n`;
    sitemap += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"\n`;
    sitemap += `  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\n`;
    sitemap += `  xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">\n`;

    const formatDate = (date) => {
      const d = new Date(date);
      return d.toISOString().split('.')[0] + '+00:00';
    };

    // Static Pages
    for (const page of staticPages) {
      sitemap += `  <url>\n`;
      sitemap += `    <loc>${BASE_URL}${page === '/' ? '' : page}</loc>\n`;
      sitemap += `    <lastmod>${formatDate(new Date())}</lastmod>\n`;
      sitemap += `    <changefreq>weekly</changefreq>\n`;
      sitemap += `    <priority>${page === '/' ? '1.0' : '0.8'}</priority>\n`;
      sitemap += `  </url>\n`;
    }

    // Dynamic Blogs
    for (const blog of blogs) {
      const slug = blog.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');
      const lastMod = blog.updated_at ? formatDate(blog.updated_at) : formatDate(new Date());
      sitemap += `  <url>\n`;
      sitemap += `    <loc>${BASE_URL}/blog/${slug}</loc>\n`;
      sitemap += `    <lastmod>${lastMod}</lastmod>\n`;
      sitemap += `    <changefreq>monthly</changefreq>\n`;
      sitemap += `    <priority>0.7</priority>\n`;
      sitemap += `  </url>\n`;
    }

    sitemap += `</urlset>`;

    // Write to both public directory (for dev) and dist directory (for prod if it exists)
    const publicPath = path.resolve(__dirname, 'public', 'sitemap.xml');
    fs.writeFileSync(publicPath, sitemap);
    console.log(`Sitemap written to ${publicPath}`);

    const distPath = path.resolve(__dirname, 'dist', 'sitemap.xml');
    if (fs.existsSync(path.resolve(__dirname, 'dist'))) {
      fs.writeFileSync(distPath, sitemap);
      console.log(`Sitemap written to ${distPath}`);
    }
    
    console.log('Sitemap generation complete!');
  } catch (error) {
    console.error('Failed to generate sitemap:', error);
  }
}

generateSitemap();
