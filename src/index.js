import Logger from '@openmind/litelog';
import Inflector from './utils/inflector';

const pippo = new Inflector('');

Logger.log(pippo.underscore());
Logger.log(pippo.camelize(true));
Logger.log(pippo.camelize());
Logger.log(pippo.kebab());
Logger.log(pippo.humanize());
