import Logger from '@openmind/litelog';
import EventWrapper from './event-wrapper';

const Log = new Logger('Broadcast');
// Log.mute = true;
/**
   * Creates a broadcast and emit/listen events
   * throug the DOM
   * @param {element|object} element
   * @param {object} options
   */
class Broadcast extends EventWrapper {
  /**
   * Get the default settings
   * @return {object}
   * @memberof Broadcast
   */
  get Defaults() {
    return this.defaults;
  }

  /**
   * Set the configuration
   * @param {object} options
   * @memberof Broadcast
   */
  set Defaults(options) {
    this.defaults = options;
  }


  /**
   * An alias for {@link #broadcastemit emit} method
   * @param {string} msg message to cast
   * @param {object} [obj={}] callback to execute on message receiving
   * @deprecated use `emit`
   */
  cast(msg, obj = {}) {
    this.emit(msg, obj);
  }

  /**
   * Emit a message throug the Broadcast
   * @param {string} msg message to cast
   * @param {object} obj callback to execute on message receiving
   */
  emit(msg, obj = {}) {
    Log.log(`emit => ${msg}`);
    this.trigger(msg, obj);
  }

  /**
   * An alias for {@link #broadcastlisten listen} method
   * @param {string} msg message to cast
   * @param {function} [callback=()=>{}]  callback to execute on message receiving
   * @param {object} options
   * @returns {void}
   * @deprecated use `listen`
   */
  grab(msg, callback = () => {}, options = {}) {
    this.listen(msg, callback, options);
  }

  /**
   * Add the listener for given event and dispatch the event
   * @param {string} msg message to cast
   * @param {function} [callback=()=>{}] callback to execute on message receiving
   * @param {object} options
   */
  listen(msg, callback = () => {}, options = {}) {
    Log.log(`listen => ${msg}`);
    return this.on(msg, callback, options);
  }

  /**
   * An alias for {@link #broadcastunlisten unlisten} method
   * @param {string} msg message to remove the listen to
   * @param {function} [callback=()=>{}] callback to execute on message receiving
   * @deprecated use `unlisten`
   */
  ungrab(msg, callback = () => {}) {
    this.unlisten(msg, callback);
  }

  /**
   * Remove the listener for given message
   * @param {string} msg message to cast
   * @param {function} [callback=()=>{}] callback to execute on message receiving
   */
  unlisten(msg, callback = () => {}) {
    Log.log(`ungrab => ${msg}`);
    const strictMode = typeof callback === 'string' && callback.length > 1;
    this.off(msg, callback, strictMode);
  }

  constructor(element, options = { namespace: 'msg' }) {
    super(element);
    this.Defaults = Object.assign({}, options);
  }
}

export default Broadcast;
