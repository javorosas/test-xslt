const { getCadenaOriginal } = require('./cadena');
const xmlString = require('./xmlString');

describe('getCadenaOriginal', () => {
  it('should return processed original string', async () => {
    const cadena = await getCadenaOriginal(xmlString);
    const expectedCadena =
      '||3.3|1234|2018-06-03T16:16:36|02|1234567890|25862.07|MXN|1|30000.00|I|PUE|83240|ASS010101A12|Aligator Service, SAPI|601|DCS030303W09|Defenseless Canary, S.A. de C.V.|G03|43211508|DELL123|3|EA|Laptop DELL XPS 13|8620.689655|25862.07|25862.07|002|Tasa|0.160000|4137.93|0.00|002|Tasa|0.160000|4137.93|4137.93||';
    expect(cadena).toEqual(expectedCadena);
  });
});
