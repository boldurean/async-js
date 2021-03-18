export default (totalTime, cb) => ({
  start() {
    const interval = (totalTime < 100) ? totalTime : 100;
    let state;
    let elapsedTime = 0;
    const timerID = setInterval(() => {
      elapsedTime += interval;
      state = (elapsedTime === totalTime) ? 'finished' : 'working';
      cb({ state, elapsedTime });
    }, interval);
    setTimeout(() => clearInterval(timerID), totalTime + 50);
  },
});
