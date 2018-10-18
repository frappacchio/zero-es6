import { List } from 'immutable';

let componentsList = List();
/**
 * Manage the list of components classes used within the project
 * @class
 */
class Components {
  /**
   * @returns {List} list
   */
  static get list() {
    return componentsList;
  }

  /**
   * Check if already exists a component within the list
   * @param {*} component
   * @returns {undefined|*}
   */
  static exists(component) {
    return componentsList.find(element => element.constructor.name === component.constructor.name);
  }

  /**
   * Returns the index for given component
   * Returns -1 if component does not exists
   * @param {*} component
   * @returns {Number}
   */
  static index(component) {
    return componentsList.indexOf(component);
  }

  /**
   * Add a component to the list if not already has been adedd
   * @param {*} component
   * @returns {List}
   */
  static add(component) {
    if (!Components.exists(component)) {
      componentsList = componentsList.push(component);
    }
    return componentsList;
  }

  /**
   * Remove a component to the list if exists
   * @param {*} component
   * @returns {List}
   */
  static remove(component) {
    if (Components.exists(component)) {
      componentsList = componentsList.remove(Components.index(component));
    }
    return componentsList;
  }
}
export default Components;
