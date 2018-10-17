import Logger from '@openmind/litelog';

const Log = new Logger('Component');
export default class Component {
  constructor(element) {
    Log.log(element);
  }
}
