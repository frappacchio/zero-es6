import Logger from '@openmind/litelog';
import EventWrapper from '../events/event-wrapper';
import Broadcast from '../events/broadcats';

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
   * @param {Object}
   */
  set Messages(msg) {
    /**
     * @type {Object} msg the object with all messages
     */
    this.messages = msg;
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
  GRAB(message, callback) {
    this.Broadcast.grab(message, callback);
    return this;
  }

  /**
   * Grabs the broadcast message
   * @param {String} message message to broadcast
   * @param {Function} callback callback to exectute
   * @returns {Component} the instance of the class
   */
  UNGRAB(message, callback) {
    this.Broadcast.ungrab(message, callback);
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
    Object.keys(this.Messages).forEach((key) => {
      this.UNGRAB(key, this.Messages[key]);
    });
    Log.debug('destroyed', this, 'on', this.element);
    this.trigger('destroy', { component: this });
  }

  /**
   * Create a component instance
   * @param {Element} element
   * @param {Broadcast} [broadcast = new Broadcast()] the broadcast for this component
   */
  constructor(element, broadcast = new Broadcast()) {
    super(element);
    this.Broadcast = broadcast;
    Log.log('initializing', this);
    Object.keys(this.Messages).forEach((key) => {
      this.GRAB(key, this.Messages[key]);
    });
    this.trigger('added', { component: this });
    setTimeout(() => {
      this.Broadcast.cast('');
    }, 0);
  }
}

export default Component;
