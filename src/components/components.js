import UserException from '../core/user-exception';

/**
 * It store the list of components and instances and allow to register and create a component
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
   * @param {*} component
   */
  register(component) {
    if (!Components.exists(component)) {
      Components.List.set(component.name, component);
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
  create(element, component) {
    if (Components.List.has(component.name)) {
      const ClassName = Components.List.get(component.name);
      const instance = new ClassName(element);
      Components.Intances.set(element, instance);
      return instance;
    }
    throw new UserException(`You have to register class '${component.name}' before create a component`);
  },
};

export default Components;
