import Logger from '@openmind/litelog';

const Log = new Logger('EventMap');
/**
 * Manage all the component events for given namespace
 *@class
 */
class EventMap {
  get Map() {
    return this.map;
  }

  /**
   * Add event to the map
   * @param {String} message
   * @param {Function} callback
   */
  addEvent(message, callback) {
    this.map.push({ message, callback });
  }

  /**
   * Remove an event from given object.
   * If no callback has passed it removes anonimous functions such arrow functions
   * @param {String} message
   * @param {Function} callback
   */
  deleteEvent(message, callback = {}) {
    const mappedEvent = this.Map.filter(obj => obj.message === message);
    const currentEvent = mappedEvent.find(obj => obj.callback === callback);
    if (currentEvent) {
      return currentEvent;
    }
    const anonimousEvent = mappedEvent.find(obj => obj.callback.name === '');
    return anonimousEvent;
  }

  constructor() {
    /**
     * @type {Object}
     */
    this.map = [];
  }
}
export default EventMap;
