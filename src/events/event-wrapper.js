/**
 * A simple wrapper which allows to use method like .on(...), .off(...)
 * @class
 */
class EventWrapper {
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

  addEventListener(...args) {
    return this.on(...args);
  }

  removeEventListener(...args) {
    this.off(...args);
    return this;
  }

  dispatchEvent(...args) {
    return this.trigger(...args);
  }

  /**
   * Set the Element which represent the current component
   * @param {Element} domElement
   */
  set element(domElement) {
    this.domElement = domElement;
  }

  /**
   * Get the Element which represent the current component
   * @return {Element} domElement
   */
  get element() {
    return this.domElement;
  }

  constructor(element) {
    this.element = element;
    return this;
  }
}

export default EventWrapper;
