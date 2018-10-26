import Logger from '@openmind/litelog';
import { v4 as uuid } from 'uuid';
import Inflector from '../utils/inflector';
import EventWrapper from '../events/event-wrapper';
import Broadcast from '../events/broadcats';
import EventMap from '../events/event-map';

const Log = new Logger('Component');
/**
 * A basic component class
 * @param {element} element the DOM element which represents the component
 * @param {Broadcast} [broadcast = new Broadcast()] the Broadcast for this component
 * @class Component
 * @extends {EventWrapper}
 */
class Component extends EventWrapper {
  get ClassName() {
    return this.className;
  }

  set ClassName(name) {
    this.className = name;
  }

  get Name() {
    return this.name;
  }

  set Name(name) {
    this.name = name;
    this.ClassName = new Inflector(this.Name).camelize(true);
  }


  /**
   * Gets the component UUID
   * @returns {string}
   * @readonly
   * @memberof Component
   */
  get UUID() {
    return this.uuid;
  }

  /**
   * Set UUID of component
   * by the Broadcast
   * @param {string} uuidString
   * @memberof Component
   */
  set UUID(uuidString) {
    this.uuid = uuidString;
  }

  /**
   * Gets the component messages
   * @returns {object}
   * @readonly
   * @memberof Component
   */
  get Messages() {
    return this.messages;
  }

  /**
   * Set all message which will be read from the component
   * by the Broadcast
   * @param {object} messages
   * @memberof Component
   */
  set Messages(messages) {
    this.messages = messages;
  }

  /**
   * Returns the Broadcast for the component instance
   * @returns {Broadcast}
   * @readonly
   * @memberof Component
   */
  get Broadcast() {
    return this.broadcast;
  }

  /**
   * Set the broadcast
   * @param {Broadcast} broadcast
   * @memberof Component
   */
  set Broadcast(broadcast) {
    this.broadcast = broadcast;
    Log.log('Broadcast added');
  }

  set innerHTML(string) {
    super.innerHTML = string;
    this.Broadcast.emit('domChanged');
  }


  /**
   * An alias for {@link #componentlisten listen} method
   * @param {string} msg message to broadcast
   * @param {function} callback message to broadcast
   * @returns {void}
   * @deprecated use `listen`
   */
  grab(msg, callback = () => {}) {
    this.listen(msg, callback);
  }

  /**
   * Listen to the broadcast message
   * @param {string} msg message to broadcast
   * @param {function} [callback = ()=>{}] message to broadcast
   * @returns {void}
   */
  listen(msg, callback = () => {}) {
    const emitter = this.Broadcast.listen(msg, callback);
    this.broadcastMap.Map.push(emitter);
  }

  /**
   * An alias for {@link #unlisten unlisten} method
   * @param {string} msg message to broadcast
   * @param {string|function} [callback = ''] callback to stop exectue
   * @returns {void}
   * @deprecated use `unlisten`
   */
  ungrab(msg, callback = '') {
    return this.unlisten(msg, callback);
  }

  /**
   * Stop listen to the given message
   * @param {string} msg message to stop to listen to
   * @param {string|function} [callback = ''] callback to stop exectue
   * @returns {void}
   */
  unlisten(msg, callback = '') {
    Log.log('name: ', callback.name);
    let deletedEvents;
    if (callback === '' || callback.name === 'undefined') {
      deletedEvents = this.broadcastMap.Map.filter(obj => obj.event === msg);
    } else {
      deletedEvents = this.broadcastMap.Map.filter(obj => obj.event === msg && obj.callback.name === callback.name);
    }

    deletedEvents.forEach((obj) => {
      this.Broadcast.unlisten(obj);
    });
  }

  /**
   * An alias for {@link #componentcast cast} method
   * @param {string} message
   * @param {object} [object={}]
   * @deprecated user `emit`
   */
  cast(message, object = {}) {
    return this.emit(message, object);
  }

  /**
   * Emit the message to the component Broadcast
   * @param {string} message
   * @param {object} [object={}]
   */
  emit(message, object = {}) {
    this.Broadcast.emit(message, object);
  }

  /**
   * Destroy and stop to listen for Broadcast messages
   */
  destroy() {
    this.broadcastMap.Map.forEach((obj) => {
      this.unlisten(obj.event);
    });
    Log.log('destroyed', this.constructor.name, 'on', this.element);
    this.Broadcast.emit(`${this.constructor.name}:destroy`);
  }

  addListeners() {
    Object.keys(this.Messages).forEach((key) => {
      this.listen(key, this.Messages[key]);
    });
  }

  constructor(element) {
    super(element);
    this.broadcastMap = new EventMap();
    this.Messages = Object.assign({}, this.Messages);
    this.UUID = uuid();
    if (element instanceof Element || element instanceof HTMLDocument) {
      this.element.dataset.uuid = this.UUID;
    }
  }
}

export default Component;
