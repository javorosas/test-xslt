const path = require('path');
const fs = require('mz/fs');
const { xmlParse, xsltProcess } = require('xslt-processor');

async function getCadenaOriginal (xmlString) {
  const xsltString = await fs.readFile(
    path.join(__dirname, `cadena.xslt`),
    'utf8'
  );
  const xml = xmlParse(xmlString);
  const xslt = xmlParse(xsltString);
  return xsltProcess(xml, xslt);
  return result;
}

module.exports = { getCadenaOriginal };
