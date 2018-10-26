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
   * An alias for {@link #broadcastemit emit} method
   * @param {string} msg message to cast
   * @param {object} [obj={}] callback to execute on message receiving
   * @deprecated use `emit`
   */
  cast(msg, obj = {}) {
    return this.emit(msg, obj);
  }

  /**
   * An alias for {@link #broadcastunlisten unlisten} method
   * @param {string} msg message to remove the listen to
   * @param {function} [callback=()=>{}] callback to execute on message receiving
   * @deprecated use `unlisten`
   */
  ungrab(msg, callback = () => {}) {
    return this.unlisten(msg, callback);
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
    return this.listen(msg, callback, options);
  }

  /**
   * Emit a message throug the Broadcast
   * @param {string} msg message to cast
   * @param {object} obj callback to execute on message receiving
   */
  emit(msg, obj = {}) {
    Log.log(`emit => ${msg}`);
    return this.trigger(msg, obj);
  }

  /**
   * Add the listener for given event and dispatch the event
   * @param {string} msg message to cast
   * @param {function} [callback=()=>{}] callback to execute on message receiving
   * @param {object} options
   */
  listen(msg, callback = () => {}, options = {}) {
    Log.log(`listen => ${msg}`);
    return this.addEventListener(msg, callback, options);
  }


  /**
   * Remove the listener for given message
   * @param {string} msg message to cast
   * @param {string|function} [callback = ''] callback to stop exectue
   */
  unlisten(msg, callback = '') {
    Log.log(`unlisten => ${msg}`);
    this.removeEventListener(msg, callback);
  }

  constructor(element) {
    super(element);
    Log.log('creo broadcast');
  }
}

export default Broadcast;
