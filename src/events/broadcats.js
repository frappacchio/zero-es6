import Logger from '@openmind/litelog';
import EventMap from './event-map';

/**
 * The Logger
 */
const Log = new Logger('Broadcast');
/**
 * @type {Object} Deafult settings
 */
const Defaults = {
  ID: 'zero-broadcaster',
  element: 'span',
};
/**
 * Grab and dispatch messages throug the dom
 * @class
 */
class Broadcast {
  /**
   * get the event map
   * @return {EventMap}
   */
  get EventDictionary() {
    /**
     * @type {EventMap}
     */
    return this.eventDictionary;
  }

  /**
   * Get the Broadcaster element
   * @returns {Element} the element used as Broadcaster
   */
  get Broadcaster() {
    return this.broadcaster;
  }

  /**
   * @param {String} msg the message
   */
  static namespace(msg) {
    return `msg:${msg}`;
  }

  /**
   * Cast a message throug the dom
   * @param {String} msg message to cast
   * @param {Object} obj callback to execute on message receiving
   * @see https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent/CustomEvent#Polyfill
   */
  cast(msg, obj = {}) {
    Log.log(`cast => ${msg}`);
    const detail = Object.assign({}, {
      detail: {},
    }, {
      detail: obj,
    });
    const event = new CustomEvent(Broadcast.namespace(msg), detail);
    // const event = new Event(Broadcast.namespace(msg), obj);
    this.Broadcaster.dispatchEvent(event, obj);
  }

  /**
   * Add the listener for given event and dispatch the event
   * @param {String} msg message to cast
   * @param {Function} callback callback to execute on message receiving
   * @param {Object} options
   */
  grab(msg, callback, options = {}) {
    Log.log(`grab => ${msg}`);
    this.EventDictionary.addEvent(Broadcast.namespace(msg), callback);
    this.Broadcaster.addEventListener(Broadcast.namespace(msg), callback, options);
  }

  /**
   * Remove the listener for given message
   * @param {String} msg message to cast
   * @param {Function} callback callback to execute on message receiving
   */
  ungrab(msg, callback) {
    const deleteCallback = this.EventDictionary.deleteEvent(Broadcast.namespace(msg), callback);
    if (deleteCallback) {
      this.Broadcaster.removeEventListener(Broadcast.namespace(msg), deleteCallback.callback);
    }
  }

  /**
   * Initialize the Broadcast
   */
  constructor() {
    const broadcaster = document.createElement(Defaults.element);
    broadcaster.setAttribute('id', Defaults.ID);
    /**
     * @type {Element}
     */
    this.broadcaster = broadcaster;
    /**
     * @type {EventMap}
     */
    this.eventDictionary = new EventMap();
  }
}

export default Broadcast;
