import fs from 'fs';
try {
  const fd = fs.openSync('src/pages/Home.jsx', 'r+');
  fs.closeSync(fd);
  console.log('FILE_OPEN_SUCCESS');
} catch (err) {
  console.log('FILE_OPEN_ERROR:', err.code, err.message);
}

