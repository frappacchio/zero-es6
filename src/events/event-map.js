import Logger from '@openmind/litelog';
import EventItem from './event-item';

const Log = new Logger('EventMap');
/**
 * Stores all the events to an `Array`
 *
 * @class EventMap
 */
class EventMap {
  /**
   * Returns the Map
   * @returns {Array}
   * @readonly
   * @memberof EventMap
   */
  get Map() {
    return this.map;
  }

  /**
   * Add event to the map
   * @param {String} eventName
   * @param {Function} callback
   * @returns {EventItem}
   */
  addEvent(eventName, callback) {
    const eventItem = new EventItem(eventName, callback);
    this.Map.push(eventItem);
    return eventItem;
  }

  /**
   * Remove an event from given object.
   * If no callback has passed it removes anonimous functions
   * such anonimous arrow functions
   * @param {String} eventName
   * @param {Function|Object} callback
   * @returns {Array}
   */
  deleteEvent(eventName, callback = '') {
    if (callback === '') {
      return this.Map.filter(obj => obj.event === eventName);
    }
    return this.Map.filter(obj => obj.event === eventName && obj.callback.name === callback.name);
  }

  strictDeleteEvent(eventObj) {
    return this.Map.filter(obj => obj.uuid === eventObj.uuid);
  }

  /**
   * Remove an event from given object using the `uuid` of given event
   * @param {String} eventName
   * @param {String} uuid
   * @returns {Array}
   */
  /* strictDeleteEvent(eventName, uuid) {
    return this.Map.filter(obj => obj.event === eventName && obj.uuid === uuid);
  } */

  constructor() {
    this.map = [];
  }
}
export default EventMap;
