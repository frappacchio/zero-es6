import Logger from '@openmind/litelog';
import EventWrapper from './event-wrapper';

/**
 * The Logger
 */
const Log = new Logger('Broadcast');
// Log.mute = true;
/**
 * Grab and dispatch messages throug the dom
 * @class
 */
class Broadcast extends EventWrapper {
  /**
   * Get the default settings
   */
  get Defaults() {
    /**
     * @type {Object}
     */
    return this.defaults;
  }

  /**
   * Set the configuration
   */
  set Defaults(options) {
    /**
     * @type {Object}
     */
    this.defaults = options;
  }

  /**
   * Cast a message throug the dom
   * @param {String} msg message to cast
   * @param {Object} obj callback to execute on message receiving
   */
  cast(msg, obj = {}) {
    Log.log(`cast => ${msg}`);
    this.trigger(msg, obj);
  }

  /**
   * Add the listener for given event and dispatch the event
   * @param {String} msg message to cast
   * @param {Function} callback callback to execute on message receiving
   * @param {Object} options
   */
  grab(msg, callback, options = {}) {
    Log.log(`grab => ${msg}`);
    return this.on(msg, callback, options);
  }

  /**
   * Remove the listener for given message
   * @param {String} msg message to cast
   * @param {Function} callback callback to execute on message receiving
   */
  ungrab(msg, callback) {
    Log.log(`ungrab => ${msg}`);
    const strictMode = typeof callback === 'string' && callback.length > 1;
    this.off(msg, callback, strictMode);
  }

  /**
   * Create a broadcast and overrides the
   * default configuration if some options are given by `options`
   * @param {Element|Object} element
   * @param {Object} options
   */
  constructor(element, options = { namespace: 'msg' }) {
    super(element);
    this.Defaults = Object.assign({}, options);
  }
}

export default Broadcast;
