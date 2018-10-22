import Logger from '@openmind/litelog';
import kebabCase from 'lodash/kebabCase';
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
  /**
   * Gets the kebab-case name of component
   * @example `SuperClass` will returns `super-class`
   * @readonly
   * @memberof Component
   * @returns {string}
   */
  get Name() {
    return kebabCase(this.constructor.name);
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
    // this.Broadcast.listen(msg, callback);
  }

  /**
   * An alias for {@link #componentunlisten unlisten} method
   * @param {string} msg message to broadcast
   * @returns {void}
   * @deprecated use `unlisten`
   */
  ungrab(msg) {
    return this.unlisten(msg);
  }

  /**
   * Stop listen to the given message
   * @param {string} msg message to stop to listen to
   * @param {string|function} [callback = ''] callback to stop exectue
   * @returns {void}
   * @deprecated use `unlisten`
   */
  unlisten(msg, callback = '') {
    let deletedEvents;
    if (callback === '') {
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

  constructor(element, broadcast = new Broadcast()) {
    super(element);
    /* if (!this.element.getAttribute('[data-component]')) {
      this.element.setAttribute('data-component', this.Name);
    } */
    this.Broadcast = broadcast;
    this.broadcastMap = new EventMap();
    this.Messages = Object.assign({}, this.Messages);
    Object.keys(this.Messages).forEach((key) => {
      this.listen(key, this.Messages[key]);
    });
    Log.log(`initializing ${this.constructor.name} with [data-component="${this.Name}"]`);
    this.Broadcast.emit(`${this.constructor.name}:create`);
  }
}

export default Component;
