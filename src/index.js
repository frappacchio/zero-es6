import Logger from '@openmind/litelog';
import Component from './components/component';
import Components from './components/components';
import DomReader from './core/dom-reader';
import EventWrapper from './events/event-wrapper';
import Broadcast from './events/broadcats';

const Log = new Logger('MAIN');


const component = new Component(document.createElement('span'));

const mockCallbackA = () => { Log.log('A'); };
const mockCallbackB = () => { Log.log('B'); };
const mockCallbackC = () => { Log.log('A'); };

component.on('messaggio', mockCallbackA);
component.on('messaggio', mockCallbackB);
component.trigger('messaggio');
component.trigger('messaggio');
component.trigger('messaggio');
component.off('messaggio', mockCallbackA);
component.trigger('messaggio');
component.trigger('messaggio');
component.trigger('messaggio');
