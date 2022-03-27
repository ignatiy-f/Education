import fsp from 'fs/promises';
import _ from 'lodash';
import path from 'path';

const getDirectorySize = (dirpath) => {
  const promise = fsp.readdir(dirpath).then((filenames) => {
    const filepaths = filenames.map((name) => path.join(dirpath, name));
    const promises = filepaths.map(fsp.stat);
    return Promise.all(promises);
  });

  return promise.then((stats) => _.sumBy(stats.filter((stat) => stat.isFile()), 'size'));
};

getDirectorySize('./__fixtures__').then(console.log);

// Реализуйте и экспортируйте асинхронную функцию getDirectorySize(), 
// которая считает размер переданной директории (не включая поддиректории).