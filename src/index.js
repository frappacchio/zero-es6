import Logger from '@openmind/litelog';
import Component from './components/component';
import Components from './components/components';
import DomReader from './core/dom-reader';
import EventWrapper from './events/event-wrapper';

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
const button = document.createElement('button');
const wrapper = new EventWrapper(button);
wrapper.on('click', () => {
  Log.log('click');
});
wrapper.trigger('click');
