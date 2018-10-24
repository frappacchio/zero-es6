import Logger from '@openmind/litelog';
import UserException from '../core/user-exception';

const Log = new Logger('Components');
/**
 * It stores the list of components and instances and allow to register and create a component
 * @type {Object}
 */
const Components = {
  List: new Map(),
  Intances: new Map(),
  /**
   * Check if already exists a component within the list
   * @param {*} component
   * @returns {undefined|*}
   */
  exists(component) {
    return Components.List.has(component.name);
  },
  /**
   * Register new component and add it to the List
   * @param {string} name the String name of component
   * @param {*} component
   */
  register(name, component) {
    if (!Components.exists(component)) {
      Components.List.set(name, component);
    } else {
      throw new UserException(`The component '${component.name}' already exists`);
    }
  },
  /**
   * Create an instance of the new component and add it to the Intances list
   * @param {Element} element
   * @param {*} component
   * @returns {*} instance
   * @throws {UserException} if the component has not been registered
   */
  create(element) {
    const componentClass = element.dataset.component.split(',');
    Log.log(componentClass);
    componentClass.forEach((dataComponentValue) => {
      if (Components.List.has(dataComponentValue)) {
        const ClassName = Components.List.get(dataComponentValue);
        const instance = new ClassName(element);
        Components.Intances.set(element, instance);
        return instance;
      }
      throw new UserException(`You have to register class '${dataComponentValue}' before create a component`);
    });
  },
};

export default Components;
