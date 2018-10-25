import Logger from '@openmind/litelog';
import { Application, Component, JSONData } from '../dist/index';
import HarryPotter from './components/harry-potter';

const Log = new Logger('App');
const app = new Application();
app.Components.register('harry-potter', HarryPotter);
app.Components.register('component', Component);
app.start();

const components = Array.from(app.Components.Instances);

components.forEach((element) => {
  Log.log(element[1].data);
});
Log.log('ssssssss');
/* for (const element of components) {
  Log.log(element);
} */

/* const jsonData = new JSONData();
Log.log(jsonData.data);

 */
