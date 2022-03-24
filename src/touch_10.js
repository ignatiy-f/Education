import fsp from 'fs/promises';

const touch = (filepath) => fsp.access(filepath)
  .catch(() => fsp.writeFile(filepath, ''));

touch('./__fixtures__/file_10.txt').then(() => console.log('created!'));

// eslint-disable-next-line max-len
// Реализуйте и экспортируйте асинхронную функцию touch(), которая создаёт файл, если его не существует.
