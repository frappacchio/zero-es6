import Logger from '@openmind/litelog';
import EventWrapper from '../events/event-wrapper';
import Broadcast from '../events/broadcats';
import Inflector from '../utils/inflector';
import EventMap from '../events/event-map';

const Log = new Logger('Component');
/**
 * It define a basic component
 * @class
 */
class Component extends EventWrapper {
  /**
   * @returns {String} the kebab-case name of given component class
   */
  get Name() {
    return new Inflector(this.constructor.name).dasherize();
  }

  get Messages() {
    return this.messages;
  }

  /**
   * Set all message which will be read from the component
   * by the Broadcast
   * @set
   * @param {Object} messages
   */
  set Messages(messages) {
    this.messages = messages;
  }

  /**
   * Set the broadcast
   * @param {Broadcast} broadcast
   */
  set Broadcast(broadcast) {
    this.broadcast = broadcast;
  }

  get Broadcast() {
    return this.broadcast;
  }

  /**
   * Grabs the broadcast message
   * @param {...any} args message to broadcast
   * @returns {Component} the instance of the class
   */
  GRAB(...args) {
    const emitter = this.Broadcast.grab(args[0], args[1]);
    this.broadcastMap.Map.push(emitter);
    return this;
  }

  /**
   * Grabs the broadcast message
   * @param {...any} args message to broadcast
   * @returns {Component} the instance of the class
   */
  UNGRAB(...args) {
    this.broadcastMap.Map.filter((obj) => {
      const deletedEvent = this.broadcastMap.strictDeleteEvent(obj.event, obj.uuid);
      deletedEvent.forEach((event) => {
        this.Broadcast.ungrab(args[0], event.uuid);
      });
    });
    return this;
  }

  /**
   * Broadcast a message to the broadcast
   * @param {String} message message to broadcast
   * @param  {...any} obj
   * @returns {Component} the instance of the class
   */
  CAST(message, ...obj) {
    this.Broadcast.cast(message, obj);
    return this;
  }


  /**
   * Destroy the component instance
   * @returns {void}
   */
  destroy() {
    /* Object.keys(this.Messages).forEach((key) => {
      this.UNGRAB(key);
    }); */
    this.broadcastMap.Map.forEach((obj) => {
      this.UNGRAB(obj.event.replace(`${this.Broadcast.Defaults.namespace}:`, ''), obj.uuid);
    });
    Log.log('destroyed', this.constructor.name, 'on', this.element);
    // this.trigger(`${this.constructor.name}:destroy`, { component: this });
    // this.Broadcast.cast(`${this.constructor.name}:destroy`);
  }

  /**
   * Create a component instance
   * @param {Element} element
   * @param {Broadcast} [broadcast = new Broadcast()] the broadcast for this component
   */
  constructor(element, broadcast = new Broadcast()) {
    super(element);
    if (!this.element.getAttribute('[data-component]')) {
      this.element.setAttribute('data-component', this.Name);
    }
    this.Broadcast = broadcast;
    this.broadcastMap = new EventMap();
    this.Messages = Object.assign({}, this.Messages);
    Log.log(`initializing ${this.constructor.name} with [data-component="${this.Name}"]`);
    Object.keys(this.Messages).forEach((key) => {
      this.GRAB(key, this.Messages[key]);
    });
  }
}

export default Component;
