const fs = require('fs');

// Fix style.css
let css = fs.readFileSync('src/styles/style.css', 'utf8');
css = css.replace(/@import url\("(animate|swiper|jquery|linear|fontawesome|tm|jquery-ui).*?"\);/g, '/* $& */');
css = css.replace(/url\(['"]?\.\.\/images\/([^'"\)]+)['"]?\)/g, "url('/images/$1')");
fs.writeFileSync('src/styles/style.css', css);

// Fix JSX components
function fixJSX(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  // Revert the bad `<Image... /> width=... >` to just `<img... />` first
  content = content.replace(/<Image(.*?)src="(.*?)"(.*?) \/> width=\{800\} height=\{800\} style=\{\{ width: "100%", height: "auto" \}\} >/g, '<img$1src="$2"$3 />');
  
  // Now apply the correct Image replacement
  content = content.replace(/<img(.*?)src="(.*?)"(.*?)>/gi, (match, p1, p2, p3) => {
    // Clean up p3 to remove trailing slash or angle bracket
    let cleanP3 = p3.trim();
    if (cleanP3.endsWith('/>')) {
      cleanP3 = cleanP3.slice(0, -2);
    } else if (cleanP3.endsWith('>')) {
      cleanP3 = cleanP3.slice(0, -1);
    }
    
    cleanP3 = cleanP3.replace('loading="lazy"', '').replace('decoding="async"', '');

    if (match.includes('width=') || match.includes('height=')) {
      return `<Image${p1}src="${p2}" ${cleanP3} />`;
    }
    return `<Image${p1}src="${p2}" ${cleanP3} width={800} height={800} style={{ width: "100%", height: "auto" }} />`;
  });
  
  // Make sure `import Image from 'next/image';` is at the top
  if (!content.includes("import Image from 'next/image'")) {
    content = `import Image from 'next/image';\n` + content;
  }

  fs.writeFileSync(filePath, content);
}

fixJSX('src/components/home/HomeBelowFold.tsx');
fixJSX('src/components/ServicePageTemplate.tsx');

console.log('Fixed CSS and JSX!');
