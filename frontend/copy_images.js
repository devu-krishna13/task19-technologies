const fs = require('fs');
const path = require('path');

const srcDir = 'C:\\Users\\GOPIKRISHNAN\\.gemini\\antigravity\\brain\\6c9f05c3-e11a-4ab3-9422-091b1c8761c2';
const destDir = 'c:\\xampp\\htdocs\\task19 technologies\\frontend\\public\\images';

if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir, { recursive: true });
}

const filesToCopy = [
  { src: 'profit_saver_app_1785745430744.png', dest: 'profit-saver.png' },
  { src: 'page_booster_app_1785745440728.png', dest: 'page-booster.png' },
  { src: 'marginmate_app_1785745451429.png', dest: 'marginmate.png' },
  { src: 'variant_image_app_1785745463136.png', dest: 'variant-image.png' }
];

filesToCopy.forEach(file => {
  fs.copyFileSync(path.join(srcDir, file.src), path.join(destDir, file.dest));
});
console.log('Images copied successfully.');
