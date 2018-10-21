import Logger from '@openmind/litelog';
import Component from './components/component';
import Components from './components/components';
import DomReader from './core/dom-reader';
import EventWrapper from './events/event-wrapper';
import Broadcast from './events/broadcats';

const Log = new Logger('MAIN');


const broadcats = new Broadcast();
const component = new Component(document.createElement('span'), broadcats);
const otherComponent = new Component(document.createElement('span'), broadcats);
const mockCallbackA = () => { Log.log('A'); };
const mockCallbackB = () => { Log.log('B'); };
otherComponent.listen('messaggio', () => { Log.log('anonimo'); });
component.listen('messaggio', mockCallbackA);
component.emit('messaggio');
component.unlisten('messaggio');
component.emit('messaggio');
component.emit('messaggio');
component.emit('messaggio');
component.emit('messaggio');
component.emit('messaggio');
component.emit('messaggio');
component.emit('messaggio');
component.emit('messaggio');
component.emit('messaggio');
component.emit('messaggio');
component.emit('messaggio');
component.emit('messaggio');
