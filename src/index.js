class EventBus {
  constructor() {
    this.eventCenter = {};
  }

  // register an event
  register(type) {
    const { eventCenter, throwError } = this;

    if (!eventCenter[type]) {
      eventCenter[type] = new Set();
    } else {
      // illegal means the name may be same with a extended property
      throwError(`the event "${type}" has been used or is illegal!`);
    }
  }

  // remove a registered event
  remove(type) {
    // the 'delete' will only worked on own property
    delete this.eventCenter[type];
  }

  // subscribe an event
  subscribe(type, cb) {
    if (this.checkType(type)) {
      this.eventCenter[type].add(cb);
    }
  }

  // cancel subscribing an event, the 'cb' should has been added by 'subscribe'
  cancel(type, cb) {
    if (this.checkType(type)) {
      this.eventCenter[type].delete(cb);
    }
  }

  // publish en event
  publish(type, data = {}) {
    if (this.checkType(type)) {
      try {
        for (const cb of this.eventCenter[type].values()) {
          if (typeof cb === 'function') {
            cb(data);
          }
        }
      } catch (e) {
        console.error(e);
        this.throwError('error in callback!')
      }
    }
  }
  // check the 'type' whether exists
  checkType(type) {
    if (this.eventCenter.hasOwnProperty(type)) {
      return true;
    } else {
      this.throwError(`the event "${type}" does not exist! ----`);
      return false;
    }
  }

  throwError(msg) {
    console.error(`---- ${msg} ----`);
    throw msg;
  }
}

export default new EventBus();
