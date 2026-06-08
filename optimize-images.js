const fs = require('fs');

function optimizeImages(filePath) {
  let data = fs.readFileSync(filePath, 'utf8');

  // Fix Hero LCP
  data = data.replace(
    /<img src="\/images\/hero-img2\.png" alt="" \/>/g,
    '<img src="/images/hero-img2.png" alt="Hero Image" fetchpriority="high" decoding="sync" />'
  );

  // Hide blurs on mobile
  data = data.replace(
    /<div className="bg-blur"><\/div>/g,
    '<div className="bg-blur d-none d-lg-block"></div>'
  );
  data = data.replace(
    /<div className="bg-blur2"><\/div>/g,
    '<div className="bg-blur2 d-none d-lg-block"></div>'
  );

  // Global lazy loading
  // Match `<img ` but avoid those already having lazy or fetchpriority
  data = data.replace(/<img (?!(.*fetchpriority="high"|.*loading="lazy"))/g, '<img loading="lazy" decoding="async" ');

  fs.writeFileSync(filePath, data);
  console.log('Optimized', filePath);
}

optimizeImages('src/app/page.tsx');
optimizeImages('src/components/ServicePageTemplate.tsx');
