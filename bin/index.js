import fs from 'fs/promises';

const reverse = (filepath) => fs.readFile(filepath, 'utf-8')
  .then((text) => text.split('\n').reverse().join('\n'))
  .then((reverseText) => fs.writeFile(filepath, reverseText));

reverse('./__fixtures__/file_9.txt');

// Реализуйте и экспортируйте асинхронную функцию reverse(),
// которая изменяет порядок расположения строк в файле на обратный.
// Функция должна перезаписать файл.
