import Logger from '@openmind/litelog';

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
   * Get the Broadcaster element
   * @returns {Element} the element used as Broadcaster
   */
  get Broadcaster() {
    return this.broadcaster;
  }

  /**
   * Cast a message throug the dom
   * @param {String} msg message to cast
   * @param {Object} obj callback to execute on message receiving
   * @see https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent/CustomEvent#Polyfill
   */
  cast(msg, obj = {}) {
    Log.log(`cast:${msg}`);
    const detail = Object.assign({}, {
      detail: {},
    }, {
      detail: obj,
    });
    const event = new CustomEvent(`msg:${msg}`, detail);
    this.Broadcaster.dispatchEvent(event, obj);
    return this;
  }

  /**
   * Add the listener for given event and dispatch the event
   * @param {String} msg message to cast
   * @param {Function} callback callback to execute on message receiving
   */
  grab(msg, callback) {
    Log.log(`grab:${msg}`);
    this.Broadcaster.addEventListener(`msg:${msg}`, callback, { capture: true, passive: true });
    return this;
  }

  /**
   * Remove the listener for given message
   * @param {String} msg message to cast
   * @param {Function} callback callback to execute on message receiving
   */
  ungrab(msg, callback) {
    this.Broadcaster.removeEventListener(`msg:${msg}`, callback);
    return this;
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
  }
}

export default Broadcast;
