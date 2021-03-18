/* eslint-disable jest/no-done-callback */
// @ts-check
import _ from 'lodash';
import makeTimer from '../src/timer.js';

test('timer 1', (done) => {
  const timer = makeTimer(50, ({ state }) => {
    expect(state).toBe('finished');
    done();
  });
  timer.start();
});

test('timer 2', (done) => {
  const time = 1000;
  const laps = [];
  const timer = makeTimer(time, (data) => {
    laps.push(data);
  });

  setTimeout(() => {
    const firstLap = laps[0];
    expect(firstLap.elapsedTime).toBeGreaterThanOrEqual(100);
    expect(firstLap.elapsedTime).toBeLessThan(150);
    expect(firstLap.state).toBe('working');

    const lastLap = _.last(laps);
    expect(lastLap.state).toBe('finished');
    done();
  }, 1200);

  timer.start();
});
