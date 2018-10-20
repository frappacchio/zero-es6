import EventItem from './event-item';

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
   * Returns the index of given `eventItem` within the map
   * If no event match the name will returns -1
   * @param {EventItem} eventItem
   * @returns {number}
   */
  eventIndex(eventItem) {
    return this.Map.indexOf(eventItem);
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
   * @param {Boolean} [strict=false] strict
   * @returns {Array}
   */
  deleteEvent(eventName, callback = { name: '' }, strict = false) {
    if (strict) {
      return this.Map.filter(obj => obj.event === eventName && obj.uuid === callback);
    }
    return this.Map.filter(obj => obj.event === eventName && obj.callback.name === callback.name);
  }

  /**
   * Remove an event from given object using the `uuid` of given event
   * @param {String} eventName
   * @param {String} uuid
   * @returns {Array}
   */
  strictDeleteEvent(eventName, uuid) {
    return this.Map.filter(obj => obj.event === eventName && obj.uuid === uuid);
  }

  constructor() {
    this.map = [];
  }
}
export default EventMap;
