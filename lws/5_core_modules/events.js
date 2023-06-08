const Worker = require('./worker');

const worker = new Worker();

worker.on('event-done', (msg) => {
    console.log(msg);
});

worker.doWork();
