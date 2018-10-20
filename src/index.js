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
/* Components.register(Component);
const el = document.createElement('span');
Components.create(el, Component);
 */

// Zero.use( FakeDom );
// Zero.use( DomReader );

// const fakeDom = new FakeDoma("soan");
// const zeroDom = new ZDom('soan');

// https://github.com/jsdom/jsdom

/* const fakeDom = { addEventListener: () => {} };
const fakeDomBroadcast = { addEventListener: () => {}, dispatchEvent: () => {} };

const broadcats = new Broadcast(fakeDomBroadcast);

const component = new Component(fakeDom, broadcats);


component.GRAB('message', () => {
  Log.log('pippo');
});

broadcats.cast('message');
 */
/* const broadcats = new Broadcast();
const component = new Component(document.createElement('span'), broadcats);
const otherComponent = new Component(document.createElement('span'), broadcats);
otherComponent.GRAB('messaggio', () => {
  Log.log('othercomponent');
});
component.GRAB('messaggio', () => {
  Log.log('pippo');
});
component.GRAB('messaggio', () => {
  Log.log('pluto');
});
component.CAST('messaggio');
component.CAST('messaggio');
component.CAST('messaggio');
component.UNGRAB('messaggio');
component.CAST('messaggio');
component.CAST('messaggio');
component.CAST('messaggio');
component.CAST('messaggio');
component.CAST('messaggio');
component.CAST('messaggio');
component.CAST('messaggio');
component.CAST('messaggio');
component.CAST('messaggio');
component.CAST('messaggio');
component.CAST('messaggio');
component.CAST('messaggio');
Log.log(component.EventMap.Map); */

const component = new Component();
const mockCallbackA = () => {};
const mockCallbackB = () => {};
component.GRAB('messaggio', mockCallbackB);
component.GRAB('messaggio', mockCallbackA);
component.destroy();
Log.log(component.Broadcast.EventMap.Map);
