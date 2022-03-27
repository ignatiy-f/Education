// eslint-disable-next-line no-promise-executor-return
const wait = (time) => new Promise((resolve) => setTimeout(resolve, time));

wait(100).then(() => console.log('time is over!'));
