class EventBus {
  constructor() {
    this._eventCenter = {};
  }

  // register an event
  register(type) {
    const { _eventCenter, _throwError } = this;

    if (!_eventCenter[type]) {
      _eventCenter[type] = new Set();
    } else {
      // illegal means the name may be same with a extended property
      _throwError(`the event "${type}" has been used or is illegal!`);
    }
  }

  // remove a registered event
  remove(type) {
    // the 'delete' will only worked on own property
    delete this._eventCenter[type];
  }

  // subscribe an event
  subscribe(type, cb) {
    if (this._checkType(type)) {
      this._eventCenter[type].add(cb);
    }
  }

  // cancel subscribing an event, the 'cb' should has been added by 'subscribe'
  cancel(type, cb) {
    if (this._checkType(type)) {
      this._eventCenter[type].delete(cb);
    }
  }

  // publish en event
  publish(type, data = {}) {
    if (this._checkType(type)) {
      try {
        for (const cb of this._eventCenter[type].values()) {
          if (typeof cb === 'function') {
            cb(data);
          }
        }
      } catch (e) {
        console.error(e);
        this._throwError('error in callback!')
      }
    }
  }
  // check the 'type' whether exists
  _checkType(type) {
    if (this._eventCenter.hasOwnProperty(type)) {
      return true;
    } else {
      this._throwError(`the event "${type}" does not exist! ----`);
      return false;
    }
  }

  _throwError(msg) {
    console.error(`---- ${msg} ----`);
    throw msg;
  }
}

export default new EventBus();
