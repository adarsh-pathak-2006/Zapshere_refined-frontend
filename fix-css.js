const fs = require('fs');
let css = fs.readFileSync('src/styles/style.css', 'utf8');

// Comment out missing @imports
css = css.replace(/@import url\("(animate|swiper|jquery|linear|fontawesome|tm|jquery-ui).*?"\);/g, '/* $& */');

// Fix image URLs relative paths
css = css.replace(/url\(['"]?\.\.\/images\//g, "url('/images/");

fs.writeFileSync('src/styles/style.css', css);
console.log('Fixed style.css');
