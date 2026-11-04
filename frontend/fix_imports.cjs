const fs = require('fs');
const path = require('path');

const componentsDir = path.join(__dirname, 'src', 'components');
const pagesDir = path.join(__dirname, 'src', 'pages');

function fixImports(dir) {
  fs.readdirSync(dir).forEach(file => {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      fixImports(fullPath);
    } else if (fullPath.endsWith('.jsx')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      
      // Calculate correct relative path to src/components/SEO
      let relativePath = path.relative(path.dirname(fullPath), componentsDir).replace(/\\/g, '/');
      if (!relativePath.startsWith('.')) {
        relativePath = './' + relativePath;
      }
      const correctImportPath = relativePath + '/SEO';
      
      // Replace any existing SEO imports with the correct one
      if (content.includes('import SEO from')) {
        content = content.replace(/import\s+SEO\s+from\s+['"][^'"]+['"];?/g, `import SEO from '${correctImportPath}';`);
        fs.writeFileSync(fullPath, content, 'utf8');
        console.log(`Fixed import in ${fullPath} to ${correctImportPath}`);
      }
    }
  });
}

fixImports(pagesDir);
fixImports(componentsDir);
console.log('Import paths fixed.');
