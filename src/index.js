import Logger from '@openmind/litelog';
import Component from './components/component';
import Components from './components/components';
import DomReader from './core/dom-reader';
import EventWrapper from './events/event-wrapper';
import Broadcast from './events/broadcats';

const Log = new Logger('MAIN');
/*

const domReader = new DomReader();
const element = domReader.check();
element.forEach((value) => {
  const component = new Component(value);
  const another = new Component(value);
  Components.add(component);
  Components.add(another);
  Log.log(typeof Components.list);
});
 */
/* const button = document.createElement('button');
const wrapper = new EventWrapper(button);
wrapper.on('click', () => {
  Log.log('click');
});
wrapper.trigger('click'); */
/* Broadcast.grab('pippo', () => {
  Log.log('grabbato');
});
Broadcast.cast('pippo');
Broadcast.start();
Log.log(Broadcast.Broadcaster); */
/* const broadCast = new Broadcast();

Log.log(broadCast.Broadcaster);
broadCast.grab('mesg', (obj) => {
  Log.log(obj);
});
broadCast.cast('mesg', { id: 1 }); */

const broadCast = new Broadcast();

function pippo(event) {
  Log.log('pippoMessage');
}
broadCast.grab('pippoMessage', () => {
  Log.log('anonimous');
});
broadCast.grab('pippoMessage', pippo);
broadCast.cast('pippoMessage');
broadCast.ungrab('pippoMessage', pippo);
broadCast.ungrab('pippoMessage');
broadCast.cast('pippoMessage');
broadCast.cast('pippoMessage');
broadCast.cast('pippoMessage');
