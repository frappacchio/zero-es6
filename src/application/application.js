import Litelog from '@openmind/litelog';
import DomWrapper from '../dom/dom-wrapper';
import Broadcast from '../events/broadcats';
import Components from '../components/components';

const Log = new Litelog('Application');

class Application {
  /**
   * Get the application Broadcast
   * @return {Broadcast}
   * @readonly
   * @memberOf Application
   */
  get Broadcast() {
    return typeof this.broadcast !== 'undefined' ? this.dom : new Broadcast(document.createElement('span'));
  }

  /**
   * Set the main broadcast for application
   * @param {Broadcast} broadcast
   * @memberOf Application
   */
  set Broadcast(broadcast) {
    this.broadcast = broadcast;
  }

  /**
   * Get the application component list
   * @return {Components}
   * @readonly
   * @memberOf Application
   */
  get Components() {
    return typeof this.components !== 'undefined' ? this.components : Components;
  }

  /**
   * Set the component list for application
   * @param {Components} components
   * @memberOf Application
   */
  set Components(components) {
    this.components = components;
  }


  /**
   * Get the application DOM
   * @return {DomWrapper}
   * @readonly
   * @memberOf Application
   */
  get DOM() {
    return typeof this.dom !== 'undefined' ? this.dom : new DomWrapper(document);
  }

  /**
   * Set the main DOM for application
   * @param {DomWrapper} dom
   * @memberOf Application
   */
  set DOM(dom) {
    this.dom = dom;
  }

  start() {
    Log.log('app initialized');
    const components = this.DOM.find('[data-component]');
    components.forEach((element) => {
      this.Components.create(element);
    });
    Log.log(components);
  }
}
export default Application;
