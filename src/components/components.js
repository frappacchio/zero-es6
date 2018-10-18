import { List } from 'immutable';
import Logger from '@openmind/litelog';

const Log = new Logger('Components');
let componentsList = List();
class Components {
  static get list() {
    return componentsList;
  }

  static exists(component) {
    return Components.index(component) !== -1;
  }

  static index(component) {
    return componentsList.indexOf(component);
  }

  static add(component) {
    if (!Components.exists(component)) {
      componentsList = componentsList.push(component);
    }
    return componentsList;
  }

  static remove(component) {
    if (Components.exists(component)) {
      componentsList = componentsList.remove(Components.indexOf(component));
    }
    return componentsList;
  }
}
export default Components;
