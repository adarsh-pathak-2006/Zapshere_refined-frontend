const fs = require('fs');
const { execSync } = require('child_process');

// 1. Recover HomeBelowFold.tsx from git HEAD of page.tsx
const originalPageContent = execSync('git show HEAD:src/app/page.tsx').toString();
const markerStart = '{/*  Why Choose Us Section  */}';
const markerEnd = '{/*  News Section  */}';
const startIndex = originalPageContent.indexOf(markerStart);
const endIndex = originalPageContent.indexOf(markerEnd);

let belowFoldHtml = originalPageContent.substring(startIndex, endIndex);

// 2. Wrap it
let homeBelowFoldContent = `import React from 'react';
import Image from 'next/image';

export default function HomeBelowFold({ formData, setFormData, handleChange, handleSubmit, isSubmitting, isSuccess }: any) {
  return (
    <>
      ${belowFoldHtml.replace(/<img /g, '<img ').replace(/img-custom-anim-left/g, 'img-custom-anim-left')}
    </>
  );
}
`;
fs.writeFileSync('src/components/home/HomeBelowFold.tsx', homeBelowFoldContent);

// 3. Restore ServicePageTemplate.tsx
execSync('git restore src/components/ServicePageTemplate.tsx');

// 4. Clean convert function
function safeConvert(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');

  content = content.replace(/<img(.*?)src="(.*?)"(.*?)>/gi, (match, p1, p2, p3) => {
    let cleanP3 = p3.trim();
    if (cleanP3.endsWith('/>')) {
      cleanP3 = cleanP3.slice(0, -2);
    } else if (cleanP3.endsWith('>')) {
      cleanP3 = cleanP3.slice(0, -1);
    }
    cleanP3 = cleanP3.replace('loading="lazy"', '').replace('decoding="async"', '').trim();

    if (match.includes('width=') || match.includes('height=')) {
      return `<Image${p1}src="${p2}" ${cleanP3} />`;
    }
    return `<Image${p1}src="${p2}" ${cleanP3} width={800} height={800} style={{ width: "100%", height: "auto" }} />`;
  });

  if (!content.includes("import Image from 'next/image'")) {
    content = `import Image from 'next/image';\n` + content;
  }

  fs.writeFileSync(filePath, content);
}

// 5. Apply convert
safeConvert('src/components/home/HomeBelowFold.tsx');
safeConvert('src/components/ServicePageTemplate.tsx');

console.log("Recovery and Safe Conversion Complete!");
