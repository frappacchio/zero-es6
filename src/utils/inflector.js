import trim from 'lodash/trim';
import snakeCase from 'lodash/snakeCase';
import camelcase from 'lodash/camelCase';
import upperFirst from 'lodash/upperFirst';
import kebabCase from 'lodash/kebabCase';
import startCase from 'lodash/startCase';
/**
 * String manipulation utility uses Lodash
 * @class
 * {@link module:lodash/trim}
 * {@link module:lodash/snakeCase}
 * {@link module:lodash/camelCase}
 * {@link module:lodash/upperFirst}
 * {@link module:lodash/kebabCase}
 * {@link module:lodash/startCase}
 */
class Inflector {
  /**
   * @returns {String}
   */
  get String() {
    return trim(this.string);
  }

  /**
   * @param {string} string
   */
  set String(string) {
    this.string = trim(string);
  }

  /**
   *create an instance
   * @param {String} string
   * @returns {Inflector}
   */
  constructor(string) {
    this.String = string;
    return this;
  }

  /**
   * convert the string to snake case {'Foo Bar' => 'foo_bar'}
   * @see https://lodash.com/docs/4.17.10#snakeCase
   * @returns {String}
   */
  underscore() {
    return snakeCase(this.String);
  }

  /**
   * convert the string to snake case {'Foo Bar' => 'fooBar'}
   * @see https://lodash.com/docs/4.17.10#camelCase
   * @returns {String}
   */
  camelize(firstUpperCase = false) {
    return firstUpperCase ? upperFirst(camelcase(this.String)) : camelcase(this.String);
  }

  /**
   * convert the string to kebab case {'Foo Bar' => 'foo-bar'}
   * @see https://lodash.com/docs/4.17.10#kebabCase
   * @returns {String}
   */
  kebab() {
    return kebabCase(this.String);
  }

  /**
   * @alias kebab
   */
  dasherize() {
    return this.kebab();
  }

  /**
   * convert the string to human readable string {'--foo-bar--' >= 'Foo Bar'}
   * @see https://lodash.com/docs/4.17.10#startCase
   * @returns {String}
   */
  humanize() {
    return startCase(this.String);
  }
}
export default Inflector;
