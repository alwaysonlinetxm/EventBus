// import EventBus from '../../dist/index.es';
import EventBus from 'tiny-event-bus-js';

const publish = document.querySelector('#publish');
const h1 = document.querySelector('#h1');
const h2 = document.querySelector('#h2');
const h3 = document.querySelector('#h3');

window.EventBus = EventBus;

EventBus.register('demaxiya');

EventBus.subscribe('demaxiya', msg => h1.innerHTML = msg);
EventBus.subscribe('demaxiya', msg => h2.innerHTML = msg);
EventBus.subscribe('demaxiya', update);

EventBus.cancel('demaxiya', update);

function update(msg) {
  h3.innerHTML = msg;
}

publish.onclick = () => {
  EventBus.publish('demaxiya', 'lalala');
}
