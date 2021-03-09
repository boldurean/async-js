import fs from 'fs';

export default (filepath) => fs.readFile(
  filepath,
  'utf-8',
  (_err, data) => console.log(data),
);
