import Logger from '@openmind/litelog';
import Component from './components/component';
import Components from './components/components';
import DomReader from './core/dom-reader';

const Log = new Logger('MAIN');

const domReader = new DomReader();
const element = domReader.check();
element.forEach((value) => {
  const component = new Component(value);
  Components.add({ pippo: 'pippo' });
  Components.add(component);
  Components.add(component);
  Components.add([1]);
  Log.log(Components.list);
});
