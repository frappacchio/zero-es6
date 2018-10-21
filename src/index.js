import Logger from '@openmind/litelog';
import { parseScript, tokenize } from 'esprima';
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


component.listen('messaggio', mockCallbackB);
// component.listen('messaggino', mockCallbackA);

component.emit('messaggio');

component.destroy();

Log.log(component.Broadcast.EventMap.Map);

component.emit('messaggio');
