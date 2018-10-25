import Logger from '@openmind/litelog';
import EventMap from './event-map';
import DomWrapper from '../dom/dom-wrapper';

const Log = new Logger('EvenTwrapper');

/**
 * A simple wrapper which allows to use method like .on(...), .off(...)
 * @param {element} [element = document.createElement('span')] the element to wrap
 * @class EventWrapper
 */
class EventWrapper extends DomWrapper {
  /**
   * Returns the EventMap
   * @returns {EventMap}
   * @readonly
   * @memberof EventWrapper
   */
  get EventMap() {
    return this.eventMap;
  }

  /**
   * Set the event map
   * @param {EventMap} map
   */
  set EventMap(map) {
    this.eventMap = map;
  }

  /**
   * An alias for {@link #eventwrapperaddeventlistener addEventListener}
   * @see https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener
   * @param  {string} event the event name
   * @param {function} [callback = ()=>{}] the callback to exectue
   * @param {object} [options={}] the options
   * @return {EventItem}
   */
  on(event, callback = () => {}, options = {}) {
    return this.addEventListener(event, callback, options);
  }

  /**
   * It listen only for the first occurence of the event
   * and then it removes the listner
   * @see https://developers.google.com/web/updates/2016/10/addeventlistener-once
   * @param  {string} event the event name
   * @param {function} [callback = ()=>{}] the callback to exectue
   * @param {object} [options={}] the options
   * @return {EventItem}
   */
  one(event, callback = () => {}, options = {}) {
    const params = Object.assign({}, options, { once: true });
    return this.addEventListener(event, callback, params);
  }

  /**
   * An alias for {@link #eventwrapperremoveeventlistener removeEventListener}
   * @see https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/removeEventListener
   * @param {string} event the event name
   * @param {function} [callback = ()=>{}] the callback to exectue
   * @return {Array}
   */
  off(event, callback = '') {
    return this.removeEventListener(event, callback);
  }

  /**
   * An alias for {@link #eventwrapperdispatchevent dispatchEvent}
   * @param  {string} event the event to dispatch
   * @param  {details} details params to dispatch with the event
   * @see @see https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent/CustomEvent#Polyfill
   * @see https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/dispatchEvent
   */
  trigger(event, details = {}) {
    return this.dispatchEvent(event, details);
  }

  /**
   * Add event listener to the element
   * @param  {string} event the event name
   * @param {function} [callback = ()=>{}] the callback to exectue
   * @param {object} [options={}] the options
   * @return {EventItem}
   */
  addEventListener(event, callback = () => {}, options = {}) {
    const eventItem = this.EventMap.addEvent(event, callback);
    this.element.addEventListener(eventItem.event, eventItem.callback, options);
    return eventItem;
  }

  /**
   * Stop to Listen to given event
   * @param {string} event the event to stop listen to
   * @param {string|function} [callback = ''] callback to stop exectue
   * @returns {Array}
   */
  removeEventListener(event, callback = '') {
    let deletedEvent;
    if (Object.prototype.hasOwnProperty.call(event, 'event') && Object.prototype.hasOwnProperty.call(event, 'callback')) {
      deletedEvent = this.EventMap.strictDeleteEvent(event);
    } else {
      deletedEvent = this.EventMap.deleteEvent(event, callback);
    }

    deletedEvent.forEach((obj) => {
      this.element.removeEventListener(obj.event, obj.callback);
      const index = this.EventMap.Map.indexOf(obj);
      this.EventMap.Map.splice(index, 1);
    });
    return deletedEvent;
  }

  /**
   * Dispatch the event
   * @param  {string} event the event to dispatch
   * @param  {details} details params to dispatch with the event
   */
  dispatchEvent(event, details = {}) {
    const detail = Object.assign({}, {
      detail: {},
    }, {
      detail: details,
    });
    const customEvent = new CustomEvent(event, detail);
    return this.element.dispatchEvent(customEvent);
  }

  constructor(element) {
    super(element);
    this.EventMap = new EventMap();
  }
}

export default EventWrapper;
