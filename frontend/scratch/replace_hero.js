import fs from 'fs';
let c = fs.readFileSync('src/pages/Home.jsx', 'utf8');
c = c.replace('>Custom Solutions</span>', '>Custom eCommerce Solutions</span>');
c = c.replace("label: 'Custom Solutions'", "label: 'Custom eCommerce Solutions'");
fs.writeFileSync('src/pages/Home.jsx', c, 'utf8');
console.log('Successfully updated Home.jsx');
