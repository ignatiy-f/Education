import fs from 'fs';
//  import path from 'path';
//  import map from 'async/map';

const filepath = '__fixtures__/file.txt';
const { promises: fsp } = fs;
//  const reverse = (filepath) => {

const data = fs.readFileSync(filepath);

const promise = fsp.readFile(filepath, 'utf-8') // результат цепочки ВСЕГДА промис
  .then((text) => console.log(text));
  //.then(content.map((name) => console.log(name)))

//}
