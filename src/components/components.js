import Logger from '@openmind/litelog';
import UserException from '../core/user-exception';
import Broadcast from '../events/broadcats';

const Log = new Logger('Components');
/**
 * It stores the list of components and instances and allow to register and create a component
 * @type {Object}
 */
const Components = {
  List: new Map(),
  Instances: new Map(),
  get Broadcast() {
    return typeof this.broadcast === 'undefined' ? new Broadcast(document.createElement('span')) : this.broadcast;
  },
  set Broadcast(broadcast) {
    this.broadcast = broadcast;
  },
  /**
   * Check if already exists a component within the list
   * @param {*} component
   * @returns {undefined|*}
   */
  exists(name) {
    return Components.List.has(name);
  },
  /**
   * Register new component and add it to the List
   * @param {string} name the String name of component
   * @param {*} component
   */
  register(name, component) {
    if (!Components.exists(name)) {
      Components.List.set(name, component);
    } else {
      throw new UserException(`The component '${component.name}' already exists`);
    }
  },
  /**
   * Create an instance of the new component and add it to the Instances list
   * @param {Element} element
   * @param {*} component
   * @returns {*} instance
   * @throws {UserException} if the component has not been registered
   */
  create(element) {
    if ('component' in element.dataset) {
      const componentClass = element.dataset.component.split(',');
      componentClass.forEach((dataComponentValue) => {
        if (Components.List.has(dataComponentValue)) {
          const className = Components.List.get(dataComponentValue);
          const instance = new className(element);
          instance.Broadcast = this.Broadcast;
          instance.Name = dataComponentValue;
          instance.addListeners();
          Components.Instances.set(element, instance);
          instance.emit(`${instance.Name}:created`);
        } else {
          throw new UserException(`You have to register class '${dataComponentValue}' before create a component`);
        }
      });
    } else {
      throw new UserException('The element is not a valid component');
    }
  },
};

export default Components;
