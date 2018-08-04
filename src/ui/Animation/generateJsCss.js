const fs = require('fs');
const path = require('path');
const getImageSize = require('image-size');

const rem = 10;
const folderName = 'animations';
const folder = path.resolve(__dirname, folderName);
const resultJsFilename = 'animations.js';

let js = `// it's generated file, don't touch, just run
// $ npm run animations

`;

const gifFiles = fs
  .readdirSync(folder)
  .filter(filename => (
    filename.indexOf('gif') !== -1
  ))
  .map(filename => ({
    filename,
    ...getImageSize(path.resolve(folder, filename)),
  }));

const webpFiles = fs
  .readdirSync(folder)
  .filter(filename => (
    filename.indexOf('webp') !== -1
  ))
  .map(filename => ({
    filename,
    ...getImageSize(path.resolve(folder, filename)),
  }));

gifFiles.forEach(({ filename }, index) => {
  const webpFilename = webpFiles[index].filename;
  js += `import gif${filename.replace('.gif', '')} from './${folderName}/${filename}';
`;
  js += `import webp${webpFilename.replace('.webp', '')} from './${folderName}/${webpFilename}';
`;
});

js += `
`;

js += `
const animations = {`;


gifFiles.forEach(({ filename, width, height }, index) => {
  js += `
  ${filename.replace('.gif', '')}: {
    gif: gif${filename.replace('.gif', '')},
    webp: webp${webpFiles[index].filename.replace('.webp', '')},
    width: '${width / rem}rem',
    height: '${height / rem}rem',
  },`;
});

js += `
};

export default animations;
`;

fs.writeFileSync(path.resolve(__dirname, resultJsFilename), js);
