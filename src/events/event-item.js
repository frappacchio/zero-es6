import { v4 as uuid } from 'uuid';
/**
 * An object which represent an Event
 * A `uuid` will be set in order to make the event unique
 * @see https://github.com/kelektiv/node-uuid
 * @param {string} event the name of the event
 * @param {function} [callback = ()=>{}] the callback to exectue
 * @class EventItem
 */
class EventItem {
  constructor(event, callback = () => {}) {
    this.event = event;
    this.callback = callback;
    this.uuid = uuid();
  }
}
export default EventItem;
