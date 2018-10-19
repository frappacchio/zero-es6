import Logger from '@openmind/litelog';

const Log = new Logger('EventMap');
/**
 * Manage all the component events for given namespace
 *@class
 */
class EventMap {
  /**
   * @returns {Array}
   */
  set Map(map) {
    /**
     * @type {Array}
     */
    this.map = map;
  }

  /**
   * @returns {Array}
   */
  get Map() {
    /**
     * @type {Array}
     */
    return this.map;
  }

  /**
   * Add event to the map
   * @param {String} message
   * @param {Function} callback
   * @returns {Map} map
   */
  addEvent(message, callback) {
    this.Map.push({ message, callback });
    return this.Map;
  }

  /**
   * Remove an event from given object.
   * If no callback has passed it removes anonimous functions such arrow functions
   * @param {String} message
   * @param {Function} callback
   * @returns {Array}
   */
  deleteEvent(message, callback = { name: '' }) {
    return this.Map.filter(obj => obj.message === message && obj.callback.name === callback.name);
  }

  constructor() {
    /**
     * @type {Object}
     */
    this.Map = [];
  }
}
export default EventMap;
