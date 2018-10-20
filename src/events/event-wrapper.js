import Logger from '@openmind/litelog';
import EventMap from './event-map';
import EventItem from './event-item';

const Log = new Logger('EventWrapper');
/**
 * A simple wrapper which allows to use method like .on(...), .off(...)
 * @class
 */
class EventWrapper {
  /**
   * Get the event map
   * @type {EventMap} the map
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
   * Get the Element which represent the current component
   * @type {Element}
   */
  get element() {
    return this.domElement;
  }

  /**
   * Set the Element which represent the current component
   * @param {Element} domElement
   */
  set element(domElement) {
    this.domElement = domElement;
  }

  /**
   * @see https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener
   * @alias addEventListener
   * @param  {...any} args
   * @return {EventItem}
   */
  on(...args) {
    const eventItem = this.EventMap.addEvent(args[0], args[1]);
    this.element.addEventListener(args[0], args[1]);
    return eventItem;
  }

  /**
   * It listen only for the first occurence of the event
   * and then it removes the listner
   * @see https://developers.google.com/web/updates/2016/10/addeventlistener-once
   * @alias addEventListener
   * @param  {...any} args
   * @return {EventItem}
   */
  one(...args) {
    const params = Object.assign({}, { once: true }, args[3]);
    const eventItem = this.EventMap.addEvent(args[0], args[1]);
    this.element.addEventListener(args[0], args[1], params);
    return eventItem;
  }

  /**
   * @see https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/removeEventListener
   * @alias removeEventListener
   * @param  {...any} args
   * @return {Array}
   */
  off(...args) {
    const deletedEvent = this.EventMap.deleteEvent(args[0], args[1], args[2]);
    deletedEvent.forEach((event) => {
      this.element.removeEventListener(event.event, event.callback);
      const index = this.EventMap.eventIndex(event);
      this.EventMap.Map.splice(index, 1);
    });
    return deletedEvent;
  }

  /**
   *
   * @alias dispatchEvent
   * @param  {...any} args
   * @see @see https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent/CustomEvent#Polyfill
   * @see https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/dispatchEvent
   */
  trigger(...args) {
    const detail = Object.assign({}, {
      detail: {},
    }, {
      detail: args[1],
    });
    const event = new CustomEvent(args[0], detail);
    this.element.dispatchEvent(event);
    return this;
  }

  /**
   * @alias on
   * @param  {...any} args
   * @return {EventItem}
   */
  addEventListener(...args) {
    return this.on(...args);
  }

  /**
   * @alias off
   * @param  {...any} args
   * @returns {Array}
   */
  removeEventListener(...args) {
    this.off(...args);
    return this;
  }

  /**
   * @alias trigger
   * @param  {...any} args
   */
  dispatchEvent(...args) {
    return this.trigger(...args);
  }

  /**
   * Create the wrapper
   * @param {Element} element
   */
  constructor(element = document.createElement('span')) {
    // Controllo sulla configurazione dell'app
    this.element = element;
    this.EventMap = new EventMap();
  }
}

export default EventWrapper;
