import Logger from '@openmind/litelog';
import EventItem from './event-item';

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

  eventIndex(eventItem) {
    return this.Map.indexOf(eventItem);
  }

  /**
   * Add event to the map
   * @param {String} eventName
   * @param {Function} callback
   * @returns {Map} map
   */
  addEvent(eventName, callback) {
    const eventItem = new EventItem(eventName, callback);
    this.Map.push(eventItem);
    return eventItem;
  }

  /**
   * Remove an event from given object.
   * If no callback has passed it removes anonimous functions such arrow functions
   * @param {String} eventName
   * @param {Function} callback
   * @returns {Array}
   */
  deleteEvent(eventName, callback = { name: '' }, strict = false) {
    if (strict) {
      return this.Map.filter(obj => obj.event === eventName && obj.uuid === callback);
    }
    return this.Map.filter(obj => obj.event === eventName && obj.callback.name === callback.name);
  }

  strictDeleteEvent(eventName, uuid) {
    return this.Map.filter(obj => obj.event === eventName && obj.uuid === uuid);
  }

  constructor() {
    /**
     * @type {Object}
     */
    this.Map = [];
  }
}
export default EventMap;
