# EventBus
A simple EventBus tool for JavaScript

## install 

```JavaScript
yarn add tiny-event-bus-js
```

And import in your project:

```JavaScript
import EventBus from 'tiny-event-bus-js';
```

## API

#### register(type: string)
Register a new event.
```JavaScript
EventBus.register('demaxiya');
```

#### remove(type: string)
Remove a registered event.
```JavaScript
EventBus.remove('demaxiya');
```

#### subscribe(type: string, cb: function)
Subscribe an event.
```JavaScript
EventBus.subscribe('demaxiya', func);
```

#### cancel(type: string, cb: function)
Cancel subscribing an event, the 'cb' should has been added by 'subscribe'.
```JavaScript
EventBus.cancel('demaxiya', func);
```

#### publish(type: string, data: any)
Publish en event, you can give a param 'data' to pass some data to the registered 'cb'.
```JavaScript
EventBus.publish('demaxiya', { text: 'lalala' });
```
