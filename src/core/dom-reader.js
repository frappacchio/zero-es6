
import Logger from '@openmind/litelog';
/**
 * The Logger
 */
const Log = new Logger('DomReader');
/**
 * @type {Object} Default settings
 */
const Defaults = {
  selector: '[data-component]',
  element: document,
};

/**
 * Read the DOM and check for Zero Components
 * @class
 */
class DomReader {
  /**
     * Set the element for all operations
     * If falsy value is passed it returns the default element `document`
     * @see https://developer.mozilla.org/en-US/docs/Glossary/Falsy
     * @param {Element} element
     */
  set Element(element) {
    this.element = element;
  }

  /**
     * Get the element. If not defined return the document element
     * @returns {Element|document}
     * @see https://developer.mozilla.org/en-US/docs/Web/API/Element
     */
  get Element() {
    return !this.element ? Defaults.element : this.element;
  }

  /**
     * Set the element selector using CSS selector specs
     * @see https://developer.mozilla.org/en-US/docs/Learn/CSS/Introduction_to_CSS/Selectors
     * If falsy value is passed it returns the default selector [data-component]
     * @see https://developer.mozilla.org/en-US/docs/Glossary/Falsy
     * @param {String} selector
     */
  set Selector(selector) {
    this.selector = selector;
  }

  get Selector() {
    return !this.selector ? Defaults.selector : this.selector;
  }

  /**
     * Return the list of components matching given selector
     *@returns {NodeList}
     */
  check() {
    const components = this.Element.querySelectorAll(this.Selector);
    return components;
  }
}
export default DomReader;
