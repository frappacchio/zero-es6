import EventMap from './event-map';
/**
 * A simple wrapper which allows to use method like .on(...), .off(...)
 * @class
 */
class EventWrapper {
  /**
   * Set the event map
   * @param {EventMap} map
   */
  set EventMap(map) {
    /**
     * @type {EventMap}
     */
    this.eventMap = map;
  }

  /**
   * Get the event map
   * @return {EventMap} the map
   */
  get EventMap() {
    /**
     * @type {EventMap}
     */
    return this.eventMap;
  }

  /**
   * Set the Element which represent the current component
   * @param {Element} domElement
   */
  set element(domElement) {
    /**
     * @type {Element}
     */
    this.domElement = domElement;
  }

  /**
   * Get the Element which represent the current component
   * @return {Element} domElement
   */
  get element() {
    /**
     * @type {Element}
     */
    return this.domElement;
  }

  /**
   * @see https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener
   * @alias addEventListener
   * @param  {...any} args
   */
  on(...args) {
    this.element.addEventListener(...args);
    return this;
  }

  /**
   * It listen only for the first occurence of the event
   * and then it removes the listner
   * @see https://developers.google.com/web/updates/2016/10/addeventlistener-once
   * @alias addEventListener
   * @param  {...any} args
   */
  one(...args) {
    const params = Object.assign({}, { once: true }, args[3]);
    this.element.addEventListener(args[0], args[1], params);
    return this;
  }

  /**
   * @see https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/removeEventListener
   * @alias removeEventListener
   * @param  {...any} args
   */
  off(...args) {
    this.element.removeEventListener(...args);
    return this;
  }

  /**
   * @see https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/dispatchEvent
   * @alias dispatchEvent
   * @param  {...any} args
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
   */
  addEventListener(...args) {
    return this.on(...args);
  }

  /**
   * @alias off
   * @param  {...any} args
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
  constructor(element) {
    this.element = element;
    this.EventMap = new EventMap();
  }
}

export default EventWrapper;
