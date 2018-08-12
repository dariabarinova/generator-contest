const fs = require('fs');
const path = require('path');

const resultCssFilename = 'rem.css';

const max = 1900;
const min = 320;

const rems = {
  [max]: 10,
  [min]: 6,
};

const stepCount = 50;

const stepLen = (max - min) / stepCount;
const stepValDelta = (rems[max] - rems[min]) / stepCount;

console.log(stepLen, stepValDelta);

let css = `/*
it's generated file, don't touch, just run
$ npm run icons
*/
`;

for (let i = 0; i < stepCount; i += 1) {
  css += `
@media only screen and (max-width: ${max - (stepLen * i)}px) {
  html {
    font-size: ${rems[max] - (stepValDelta * i)}px;
  }
}
`;
}

fs.writeFileSync(path.resolve(__dirname, resultCssFilename), css);
