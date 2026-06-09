const fs = require('fs');

['src/components/home/HomeBelowFold.tsx', 'src/components/ServicePageTemplate.tsx'].forEach(f => {
  let d = fs.readFileSync(f, 'utf8');
  d = d.replace(/style=\{\{(.*?)\}\} width=\{800\} height=\{800\} style=\{\{ width: "100%", height: "auto" \}\}/g, 'width={800} height={800} style={{$1, width: "100%", height: "auto"}}');
  fs.writeFileSync(f, d);
});
console.log('Merged duplicate styles');
