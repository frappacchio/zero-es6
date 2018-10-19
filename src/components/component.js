import Logger from '@openmind/litelog';
import EventWrapper from '../events/event-wrapper';
import Broadcast from '../events/broadcats';
import Inflector from '../utils/inflector';

/**
 * The Logger
 */
const Log = new Logger('Component');
/**
 * It define a basic component
 * @class
 */
class Component extends EventWrapper {
  /**
   * @returns {String} the kebab-case name of given component class
   */
  get Name() {
    return new Inflector(this.constructor.name).dasherize();
  }

  /**
   * @return {Object}
   */
  get Messages() {
    /**
     * @type {Object} msg the object with all messages
     */
    return this.messages;
  }

  /**
   * @return {Object}
   */
  set Messages(messages) {
    this.messages = messages;
  }

  /**
   * @param {Broadcast}
   */
  set Broadcast(broadcast) {
    /**
     * @type {Broadcast}
     */
    this.broadcast = broadcast;
  }

  /**
   * @return {Broadcast}
   */
  get Broadcast() {
    /**
     * @type {Broadcast}
     */
    return this.broadcast;
  }

  /**
   * Grabs the broadcast message
   * @param {String} message message to broadcast
   * @param {Function} callback callback to exectute
   * @returns {Component} the instance of the class
   */
  GRAB(...args) {
    this.Broadcast.on(this.Broadcast.getNamespace(args[0]), args[1]);
    return this;
  }

  /**
   * Grabs the broadcast message
   * @param {String} message message to broadcast
   * @param {Function} callback callback to exectute
   * @returns {Component} the instance of the class
   */
  UNGRAB(...args) {
    this.Broadcast.off(args[0], args[1]);
    return this;
  }

  /**
   * Broadcast a message to the broadcast
   * @param {String} message message to broadcast
   * @param  {...any} obj
   * @returns {Component} the instance of the class
   */
  CAST(message, ...obj) {
    this.Broadcast.cast(message, obj);
    return this;
  }


  /**
   * Destroy the component instance
   * @returns {void}
   */
  destroy() {
    if (Object.keys(this.Messages).length !== 0) {
      Object.keys(this.Messages).forEach((key) => {
        this.UNGRAB(key, this.Messages[key]);
      });
    }
    Log.log('destroyed', this.constructor.name, 'on', this.element);
    // this.trigger(`${this.constructor.name}:destroy`, { component: this });
    // this.Broadcast.cast(`${this.constructor.name}:destroy`);
  }

  /**
   * Create a component instance
   * @param {Element} element
   * @param {Broadcast} [broadcast = new Broadcast()] the broadcast for this component
   */
  constructor(element, broadcast = new Broadcast()) {
    super(element);
    if (!this.element.getAttribute('[data-component]')) {
      this.element.setAttribute('data-component', this.Name);
    }
    this.Broadcast = broadcast;
    this.Messages = Object.assign({}, this.Messages);
    Log.log(`initializing ${this.constructor.name} with [data-component="${this.Name}"]`);
    if (Object.keys(this.Messages).length !== 0) {
      Object.keys(this.Messages).forEach((key) => {
        this.GRAB(key, this.Messages[key]);
      });
    }
  }
}

export default Component;
