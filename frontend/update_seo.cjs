const fs = require('fs');
const path = require('path');

const srcDirs = [
  path.join(__dirname, 'src', 'pages'),
  path.join(__dirname, 'src', 'components')
];

function convertFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');

  // Skip if no Helmet import
  if (!content.includes('react-helmet-async')) return;
  // Skip if it already has SEO component
  if (content.includes("import SEO from")) return;

  // Replace import
  content = content.replace(/import\s+\{\s*Helmet\s*\}\s+from\s+['"]react-helmet-async['"];?/, 'import SEO from \'../components/SEO\';');
  
  // A second try for different import formats
  content = content.replace(/import\s+\{\s*Helmet\s*\}\s+from\s+['"]react-helmet-async['"];?/, 'import SEO from \'../../components/SEO\';');

  // Find <Helmet> ... </Helmet> block
  const helmetRegex = /<Helmet>([\s\S]*?)<\/Helmet>/g;
  
  content = content.replace(helmetRegex, (match, innerContent) => {
    let title = '';
    let description = '';

    const titleMatch = innerContent.match(/<title>(.*?)<\/title>/);
    if (titleMatch) title = titleMatch[1].trim();

    const descMatch = innerContent.match(/<meta\s+name="description"\s+content="([^"]*)"\s*\/?>/);
    if (descMatch) description = descMatch[1].trim();

    // Determine a basic canonical URL based on file name
    const fileName = path.basename(filePath, '.jsx').toLowerCase();
    let canonical = 'https://www.task19.com';
    if (fileName !== 'home' && fileName !== 'index') {
      canonical = `https://www.task19.com/${fileName}`;
    }

    return `<SEO 
        title="${title}"
        description="${description}"
        canonical="${canonical}"
      />`;
  });

  // Fix imports relative path depending on depth
  const depth = filePath.split(path.sep).length - __dirname.split(path.sep).length - 2;
  if (depth > 0) {
    content = content.replace(/import SEO from '\.\.\/components\/SEO';/g, 'import SEO from \'../../components/SEO\';');
  }

  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`Updated ${filePath}`);
}

function walk(dir) {
  fs.readdirSync(dir).forEach(file => {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      walk(fullPath);
    } else if (fullPath.endsWith('.jsx')) {
      convertFile(fullPath);
    }
  });
}

srcDirs.forEach(dir => {
  if (fs.existsSync(dir)) walk(dir);
});

console.log('SEO updates complete.');
