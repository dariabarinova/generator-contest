const fs = require('fs');
const path = require('path');
const getImageSize = require('image-size');
const _ = require('lodash');

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

const webmFiles = fs
  .readdirSync(folder)
  .filter(filename => (
    filename.indexOf('webm') !== -1
  ))
  .map(filename => ({
    filename,
  }));

const mp4Files = fs
  .readdirSync(folder)
  .filter(filename => (
    filename.indexOf('mp4') !== -1
  ))
  .map(filename => ({
    filename,
  }));

gifFiles.forEach(({ filename }, index) => {
  const webpFilename = webpFiles[index].filename;
  const webmFiname = webmFiles[index].filename;
  const mp4Finame = mp4Files[index].filename;
  js += `import gif${filename.replace('.gif', '')} from './${folderName}/${filename}';
`;
  js += `import webp${webpFilename.replace('.webp', '')} from './${folderName}/${webpFilename}';
`;
  js += `import webm${webmFiname.replace('.webm', '')} from './${folderName}/${webmFiname}';
`;
  js += `import mp4${mp4Finame.replace('.mp4', '')} from './${folderName}/${mp4Finame}';
`;
});

js += `
`;

js += `
const animations = {`;


gifFiles.forEach(({ filename, width, height }, index) => {
  const webpFilename = webpFiles[index].filename;
  const webmFilename = webmFiles[index].filename;
  const mp4Filename = mp4Files[index].filename;
  js += `
  ${filename.replace('.gif', '')}: {
    gif: gif${filename.replace('.gif', '')},
    webp: webp${webpFilename.replace('.webp', '')},
    webm: webm${webmFilename.replace('.webm', '')},
    mp4: mp4${mp4Filename.replace('.mp4', '')},
    width: '${width / rem}rem',
    height: '${height / rem}rem',
  },`;
});

js += `
};

export default animations;
`;

fs.writeFileSync(path.resolve(__dirname, resultJsFilename), js);
