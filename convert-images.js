const fs = require('fs');

function convertToNextImage(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');

  // Replace <img ... />
  // We need to match <img ... /> and make sure it has width/height or we inject it.
  content = content.replace(/<img(.*?)src="(.*?)"(.*?)>/gi, (match, p1, p2, p3) => {
    // If it already has width/height, we just change tag name
    if (match.includes('width=') || match.includes('height=')) {
      return `<Image${p1}src="${p2}"${p3}>`.replace(' loading="lazy" decoding="async"', '');
    }
    // Inject width, height, style
    return `<Image${p1}src="${p2}"${p3} width={800} height={800} style={{ width: "100%", height: "auto" }} >`.replace(' loading="lazy" decoding="async"', '');
  });

  // Make sure `import Image from 'next/image';` is at the top
  if (!content.includes("import Image from 'next/image'")) {
    content = `import Image from 'next/image';\n` + content;
  }

  fs.writeFileSync(filePath, content);
  console.log('Converted', filePath);
}

convertToNextImage('src/components/home/HomeBelowFold.tsx');
convertToNextImage('src/components/ServicePageTemplate.tsx');
