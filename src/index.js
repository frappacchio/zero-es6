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

const component = new Component();
component.on('messaggio', () => {
  Log.log('pippo');
});
component.on('messaggio', () => {
  Log.log('pluto');
});
component.on('messaggio', () => {
  Log.log('pluto');
});
Log.log(test);
component.trigger('messaggio');
component.trigger('messaggio');
component.trigger('messaggio');
component.off('messaggio');
component.trigger('messaggio');
component.trigger('messaggio');
component.trigger('messaggio');
