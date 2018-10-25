import Logger from '@openmind/litelog';
import UserException from '../core/user-exception';

const Log = new Logger('JSONData');
/**
 * Get data-attributes from given element
 * and evaluates its values
 * and return an object {data:value}
 * NOTE: data name ar converted as per ES6 conventions
 * @example <span data-long-attribute="6" /> return {longAttribute:6}
 * @class JSONData
 */
class JSONData {
  get data() {
    const rawDatas = JSON.parse(JSON.stringify(this.element.dataset));
    Object.keys(rawDatas).map((raw) => {
      if (rawDatas[raw] === 'true') {
        rawDatas[raw] = true;
      } else if (rawDatas[raw] === 'false') {
        rawDatas[raw] = false;
      } else if (rawDatas[raw] === 'null') {
        rawDatas[raw] = null;
      } else if (rawDatas[raw] === 'undefined') {
        rawDatas[raw] = undefined;
      } else if (!isNaN(rawDatas[raw])) {
        rawDatas[raw] = Number(rawDatas[raw]);
      }
    });
    return Object.assign({}, rawDatas);
  }

  constructor(element) {
    if (element instanceof Element || element instanceof HTMLDocument) {
      this.element = element;
    } else {
      throw new UserException('The element must be a valid Element');
    }
  }
}
export default JSONData;
