const EventEmitter = require('events');

class Worker extends EventEmitter {
    doWork() {
        console.log('work started');
        setTimeout(() => {
            this.emit('event-done', 'work done');
        }, 2000);
    }
}

module.exports = Worker;
