const fs = require('fs');
const path = require('path');

/**
 * Does the conversion of json into valid css variables.
 * e.g: colorTextQuaternary will be converted to --antd-colortextquaternary
 * blue.1 will be converted to --antd-blue-1
 */
function jsonToCSSVars(json) {
  let cssVars = ':root {\n';

  for (const key in json) {
    const value = json[key];
    const varName = '--antd-' + key.replace(/\./g, '-').toLowerCase();

    if (typeof value === 'number') {
      cssVars += `\t${varName}: ${value}px;\n`;
    } else {
      cssVars += `\t${varName}: ${value};\n`;
    }
  }

  cssVars += '}';

  return cssVars;
}

const inputDirectory = './figma';
const outputDirectory = "./styles/ant-design/variables"

// Dynamically read the files from the input directory and write them to the output directory
fs.readdir(inputDirectory, (err, files) => {
  if (err) throw err;

  files.forEach((file) => {
    if (path.extname(file) === '.json' && file !== 'tokens.json') {
      fs.readFile(`${inputDirectory}/${file}`, 'utf8', (err, data) => {
        if (err) throw err;

        const json = JSON.parse(data);

        const cssVars = jsonToCSSVars(json);

        const outputFile = file.replace('.json', '.css');

        if (!fs.existsSync(outputDirectory)) {
          fs.mkdirSync(outputDirectory, { recursive: true });
        }

        fs.writeFile(`${outputDirectory}/${outputFile}`, cssVars, (err) => {
          if (err) throw err;
          console.log(`CSS variables for ${file} written to file successfully!`);
        });
      });
    }
  });
});
