const fs = require('fs');
const path = require('path');
const getImageSize = require('image-size');
// const _ = require('lodash');

const rem = 10;
const folderName = 'animations';
const folder = path.resolve(__dirname, folderName);
const resultJsFilename = 'animations.js';

const filterByType = type => filename => filename.indexOf(type) !== -1;
const toFilename = filename => ({ filename });
const appendSize = filename => ({
  filename,
  ...getImageSize(path.resolve(folder, filename)),
});

let js = `// it's generated file, don't touch, just run
// $ npm run animations

`;

const types = ['gif', 'webp', 'webm', 'mp4', 'png'];

const files = types.reduce((acc, fileType) => ({
  ...acc,
  [fileType]: fs
    .readdirSync(folder)
    .filter(filterByType(fileType))
    .map(
      fileType === 'gif'
        ? appendSize
        : toFilename,
    ),
}), {});

const getFilenames = i => ({
  gif: files.gif[i].filename,
  webp: files.webp[i].filename,
  webm: files.webm[i].filename,
  mp4: files.mp4[i].filename,
  png: files.png[i].filename,
});


for (let i = 0; i < files.gif.length; i += 1) {
  const {
    gif,
    webp,
    webm,
    mp4,
    png,
  } = getFilenames(i);
  js += `import gif${gif.replace('.gif', '')} from './${folderName}/${gif}';
`;
  js += `import webp${webp.replace('.webp', '')} from './${folderName}/${webp}';
`;
  js += `import webm${webm.replace('.webm', '')} from './${folderName}/${webm}';
`;
  js += `import mp4${mp4.replace('.mp4', '')} from './${folderName}/${mp4}';
`;
  js += `import png${png.replace('.png', '')} from './${folderName}/${png}';
`;
}

js += `
`;

js += `
const animations = {`;

for (let i = 0; i < files.gif.length; i += 1) {
  const {
    gif,
    webp,
    webm,
    mp4,
    png,
  } = getFilenames(i);
  js += `
  ${gif.replace('.gif', '')}: {
    gif: gif${gif.replace('.gif', '')},
    webp: webp${webp.replace('.webp', '')},
    webm: webm${webm.replace('.webm', '')},
    mp4: mp4${mp4.replace('.mp4', '')},
    png: png${png.replace('.png', '')},
    width: '${files.gif[i].width / rem}rem',
    height: '${files.gif[i].height / rem}rem',
  },`;
}

js += `
};

export default animations;
`;

fs.writeFileSync(path.resolve(__dirname, resultJsFilename), js);
