import Logger from '@openmind/litelog';

const Log = new Logger('DomWrapper');
/**
 * A simple DOM wrapper
 * @class DomWrapper
 * @extends {Wrapper}
 */
class DomWrapper {
  /**
   * Get the Element which represent the current component
   * @returns {Element}
   * @readonly
   * @memberof EventWrapper
   */
  get element() {
    return this.domElement;
  }

  /**
   * Set the Element which represent the current component
   * @param {Element} domElement
   * @readonly
   * @memberof EventMap
   */
  set element(domElement) {
    this.domElement = domElement;
  }

  /**
   * Find all the elements matching the query passed and return them
   * as list of {@link #eventwrapper EventWrapper}
   * @param {string} [selector='*']
   * @returns {Array} all the dom elements returned by the query
   */
  find(selector = '*') {
    return this.element.querySelectorAll(selector);
  }

  set innerHTML(string) {
    const newElement = this.element.innerHTML = string;
    Log.log(`append: ${string}`);
    return newElement;
  }

  /**
   * @todo fare in modo di sostituire un reale elmento del dom con uno fake
   */
  constructor(element = document.createElement('span')) {
    this.element = element;
  }
}
export default DomWrapper;
