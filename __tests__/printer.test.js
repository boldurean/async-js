import fs from 'fs';
import { jest } from '@jest/globals';
import print from '../src/printer.js';

test('readFile', (done) => {
  const results = [];
  const { log } = console;
  console.log = jest.fn((...args) => {
    results.push(...args);
    log(...args);
  });
  print('__tests__/printer.test.js');

  setTimeout(() => {
    const expected = [fs.readFileSync('__tests__/printer.test.js', 'utf-8')];
    expect(results).toEqual(expected);
    done();
  }, 2000);
});
