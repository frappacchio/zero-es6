import Logger from '@openmind/litelog';
import Component from './components/component';
import Components from './components/components';
import DomReader from './core/dom-reader';
import EventWrapper from './events/event-wrapper';
import Broadcast from './events/broadcats';

const Log = new Logger('MAIN');

/* const component = new Component();
component.element.innerHTML = 'click';
document.body.append(component.element);
component.GRAB(`${component.Name}:create`, () => {
  Log.log('GRAB create');
});
component.on('click', () => {
  Log.log('clicked');
});
Log.log(component);
 */
Components.register(Component);
const el = document.createElement('span');
Components.create(el, Component);
