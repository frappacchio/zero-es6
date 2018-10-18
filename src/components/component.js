import Logger from '@openmind/litelog';
import EventWrapper from '../events/event-wrapper';
import Broadcast from '../events/broadcats';

const Log = new Logger('Component');
/**
 * It define a basic component
 * @class
 */
export default class Component extends EventWrapper {
  set Messages(msg) {
    this.messages = msg;
  }

  get Messages() {
    return this.messages;
  }

  /**
   * @param {Broadcast}
   */
  set Broadcast(broadcast) {
    this.broadcast = broadcast;
  }

  /**
   * @returns {Broadcast}
   */
  get Broadcast() {
    return this.broadcast;
  }

  /**
   * Grabs the broadcast message
   * @param {String} message message to broadcast
   * @param {Function} callback callback to exectute
   */
  GRAB(message, callback) {
    this.Broadcast.grab(message, callback);
    return this;
  }

  /**
   * Grabs the broadcast message
   * @param {String} message message to broadcast
   * @param {Function} callback callback to exectute
   */
  UNGRAB(message, callback) {
    this.Broadcast.ungrab(message, callback);
    return this;
  }

  /**
   * Broadcast a message to the broadcast
   * @param {String} message message to broadcast
   * @param  {...any} obj
   */
  CAST(message, ...obj) {
    this.Broadcast.cast(message, obj);
    return this;
  }


  /**
   * Destroy the component instance
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
