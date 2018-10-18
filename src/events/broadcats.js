import Logger from '@openmind/litelog';

const Log = new Logger('Broadcast');
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
   */
  cast(msg, obj = {}) {
    Log.log(`cast:${msg}`);
    const details = Object.assign({}, obj, {
      detail: {},
    });
    const event = new CustomEvent(`msg:${msg}`, details);
    this.Broadcaster.dispatchEvent(event);
    return this;
  }

  /**
   * Add the listener for given event and dispatch the event
   * @param {String} msg message to cast
   * @param {Function} callback callback to execute on message receiving
   */
  grab(msg, callback) {
    Log.log(`grab:${msg}`);
    this.Broadcaster.addEventListener(`msg:${msg}`, callback);
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
    this.broadcaster = broadcaster;
    return this;
  }
}

export default Broadcast;
