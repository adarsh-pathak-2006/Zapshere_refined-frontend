const fs = require('fs');

const pageContent = fs.readFileSync('src/app/page.tsx', 'utf8');

// The marker where we start replacing (end of Services Section)
const markerStart = '{/*  Why Choose Us Section  */}';
const startIndex = pageContent.indexOf(markerStart);

// The marker where we end replacing (just before News Section)
const markerEnd = '{/*  News Section  */}';
const endIndex = pageContent.indexOf(markerEnd);

if (startIndex !== -1 && endIndex !== -1) {
  const contentToExtract = pageContent.substring(startIndex, endIndex);

  // We will just put everything from Why Choose Us to Contact into a single massive component called "HomeBelowFold"
  // to perfectly satisfy the dynamic lazy-loading requirement without breaking the JSX structure!
  const componentContent = `import React from 'react';
import Image from 'next/image';

export default function HomeBelowFold({ formData, setFormData, handleChange, handleSubmit, isSubmitting, isSuccess }: any) {
  return (
    <>
      ${contentToExtract.replace(/<img /g, '<img ').replace(/img-custom-anim-left/g, 'img-custom-anim-left')}
    </>
  );
}
`;

  fs.writeFileSync('src/components/home/HomeBelowFold.tsx', componentContent);

  // Replace page.tsx content
  let newPageContent = pageContent.substring(0, startIndex);
  newPageContent += `<HomeBelowFold 
  formData={formData} 
  setFormData={setFormData} 
  handleChange={handleChange} 
  handleSubmit={handleSubmit} 
  isSubmitting={isSubmitting} 
  isSuccess={isSuccess} 
/>\n`;
  newPageContent += pageContent.substring(endIndex);

  // Add the import statement
  newPageContent = newPageContent.replace(
    'const ServicesSection = dynamic(() => import("@/components/home/ServicesSection"));',
    'const ServicesSection = dynamic(() => import("@/components/home/ServicesSection"));\nconst HomeBelowFold = dynamic(() => import("@/components/home/HomeBelowFold"));'
  );

  fs.writeFileSync('src/app/page.tsx', newPageContent);
  console.log("Successfully extracted HomeBelowFold component!");
} else {
  console.log("Could not find markers.", startIndex, endIndex);
}
