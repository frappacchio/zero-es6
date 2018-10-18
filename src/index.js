import Logger from '@openmind/litelog';
import Component from './components/component';
import Components from './components/components';
import DomReader from './core/dom-reader';

const Log = new Logger('MAIN');

const domReader = new DomReader();
const element = domReader.check();
element.forEach((value) => {
  const component = new Component(value);
  const another = new Component(value);
  Components.add(component);
  Components.add(another);
  Log.log(typeof Components.list);
});
