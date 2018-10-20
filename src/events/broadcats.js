import Logger from '@openmind/litelog';
import EventWrapper from './event-wrapper';

/**
 * The Logger
 */
const Log = new Logger('Broadcast');
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
     * @return {Object}
     */
    return this.defaults;
  }

  /**
   * Set the configuration
   * @param {Object}
   */
  set Defaults(options) {
    this.defaults = options;
  }

  /**
   * @param {String} msg the message
   */
  getNamespace(msg) {
    return `${this.Defaults.namespace}:${msg}`;
  }

  /**
   * Cast a message throug the dom
   * @param {String} msg message to cast
   * @param {Object} obj callback to execute on message receiving
   */
  cast(msg, obj = {}) {
    Log.log(`cast => ${this.getNamespace(msg)}`);
    this.trigger(this.getNamespace(msg), obj);
  }

  /**
   * Add the listener for given event and dispatch the event
   * @param {String} msg message to cast
   * @param {Function} callback callback to execute on message receiving
   * @param {Object} options
   */
  grab(msg, callback, options = {}) {
    Log.log(`grab => ${this.getNamespace(msg)}`);
    return this.on(this.getNamespace(msg), callback, options);
  }

  /**
   * Remove the listener for given message
   * @param {String} msg message to cast
   * @param {Function} callback callback to execute on message receiving
   */
  ungrab(msg, callback) {
    this.off(this.getNamespace(msg), callback);
  }

  constructor(element, options = { namespace: 'msg' }) {
    super(element);
    this.Defaults = Object.assign({}, options);
  }
}

export default Broadcast;
