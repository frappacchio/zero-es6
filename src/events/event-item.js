import { v4 as uuid } from 'uuid';

class EventItem {
  constructor(event, callback) {
    this.event = event;
    this.callback = callback;

    this.uuid = uuid();
  }
}
export default EventItem;
