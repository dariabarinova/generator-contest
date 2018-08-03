const fs = require('fs');
const path = require('path');
const getImageSize = require('image-size');

const rem = 10;
const folderName = 'images';
const folderX2Name = 'images@2x';
const folder = path.resolve(__dirname, folderName);
const resultCssFilename = 'icons.css';
const resultJsFilename = 'iconTypes.js';

let css = `/*
it's generated file, don't touch, just run
$ npm run icons
*/
`;

let js = `// it's generated file, don't touch, just run
// $ npm run icons

const types = [
`;

const files = fs
  .readdirSync(folder)
  .filter(filename => filename.indexOf('png') !== -1)
  .map(filename => ({
    filename,
    ...getImageSize(path.resolve(folder, filename)),
  }));

files.forEach(({ filename, width, height }) => {
  css += `.icon.icon--${filename.replace('.png', '')} {
  background: url(./${folderName}/${filename}) no-repeat;
  background-size: ${width / rem}rem ${height / rem}rem;
  width: ${width / rem}rem;
  height: ${height / rem}rem;
}

@media
  (-webkit-min-device-pixel-ratio: 1.25),
  (min-resolution: 120dpi) {
  .icon.icon--${filename.replace('.png', '')} {
    background: url(./${folderX2Name}/${filename}) no-repeat;
    background-size: ${width / rem}rem ${height / rem}rem;
  }
}

`;
  js += `  '${filename.replace('.png', '')}',
`;
});


js += `];

export default types;
`;

fs.writeFileSync(path.resolve(__dirname, resultCssFilename), css);
fs.writeFileSync(path.resolve(__dirname, resultJsFilename), js);
