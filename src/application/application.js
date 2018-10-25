import Litelog from '@openmind/litelog';
import DomWrapper from '../dom/dom-wrapper';
import Broadcast from '../events/broadcats';
import Components from '../components/components';

const Log = new Litelog('Application');
/**
 * Create an Application
 * @param {string} filterAttribute [optional] the filter attribute for dom elements
 * @param {Broadcast} broadcast [optional] the Broadcaster
 * @param {Components} components [optional] the components
 * @param {DomWrapper} dom [optional] the main DOM element
 *
 * @class Application
 */
class Application {
  get Defaults() {
    this.defaults = {
      filterAttribute: '[data-component]',
      broadcast: new Broadcast(document.createElement('span')),
      components: Components,
      dom: new DomWrapper(document),
    };
    return this.defaults;
  }

  /**
   * The app configuration
   * @returns {object}
   * @memberof Application
   */
  get Config() {
    return this.config;
  }

  /**
   * Set the app configuration
   * @param {object} config the Configuration
   * @memberof Application
   */
  set Config(config) {
    this.config = config;
  }

  /**
   * Get the application Broadcast
   * @return {Broadcast}
   * @readonly
   * @memberof Application
   */
  get Broadcast() {
    return this.broadcast;
  }

  /**
   * Set the main broadcast for application
   * @param {Broadcast} broadcast
   * @memberof Application
   */
  set Broadcast(broadcast) {
    this.broadcast = broadcast;
  }

  /**
   * Get the application component list
   * @return {Components}
   * @readonly
   * @memberof Application
   */
  get Components() {
    return this.components;
  }

  /**
   * Set the component list for application
   * @param {Components} components
   * @memberof Application
   */
  set Components(components) {
    this.components = components;
  }


  /**
   * Get the application DOM
   * @return {DomWrapper}
   * @readonly
   * @memberof Application
   */
  get DOM() {
    return this.dom;
  }

  /**
   * Set the main DOM for application
   * @param {DomWrapper} dom
   * @memberof Application
   */
  set DOM(dom) {
    this.dom = dom;
  }

  /**
   * Get the filter attribute
   * @return {string}
   * @readonly
   * @memberof Application
   */
  get FilterAttribute() {
    return this.filterAttribute;
  }

  /**
   * Set filter attribute
   * @param {string} dom
   * @memberof Application
   */
  set FilterAttribute(filterAttribute) {
    this.filterAttribute = filterAttribute;
  }

  /**
   * Initialize the application
   * @returns {Application}
   */
  start() {
    Log.log('app initialized');
    const components = this.DOM.find('[data-component]');
    components.forEach((element) => {
      this.Components.create(element);
    });
    return this;
  }

  constructor({
    filterAttribute, broadcast, components, dom,
  }) {
    const tmpConfig = {};
    if (typeof filterAttribute !== 'undefined') {
      Object.defineProperty(tmpConfig, 'filterAttribute', filterAttribute);
    }
    if (typeof broadcast !== 'undefined') {
      Object.defineProperty(tmpConfig, 'broadcast', broadcast);
    }
    if (typeof components !== 'undefined') {
      Object.defineProperty(tmpConfig, 'components', components);
    }
    if (typeof dom !== 'undefined') {
      Object.defineProperty(tmpConfig, 'dom', dom);
    }
    const config = Object.assign(this.Defaults, tmpConfig);
    this.Config = config;
    this.Broadcast = this.Config.broadcast;
    this.Components = this.Config.components;
    this.FilterAttribute = this.Config.filterAttribute;
    this.DOM = this.Config.dom;
    this.Components.Broadcast = this.Broadcast;
  }
}
export default Application;
