const fs = require('fs');

['src/components/home/HomeBelowFold.tsx', 'src/components/ServicePageTemplate.tsx'].forEach(f => {
  let d = fs.readFileSync(f, 'utf8');
  d = d.replace(/, width: "100%", height: "auto"/g, '');
  fs.writeFileSync(f, d);
});
console.log('Removed duplicate inline style properties');
