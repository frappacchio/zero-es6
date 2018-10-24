/*
import Logger from '@openmind/litelog';
import Component from './components/component';
import HarryPotter from '../examples/components/harry-potter';
import Application from './application/application';

const Log = new Logger('Main');

/!*
const pageReader = new DomWrapper(document);
const elements = pageReader.find('[data-component="fake-component"]');

Log.log(elements);

elements.forEach((element) => {
  const component = new Component(element);
  component.innerHTML = '<div data-component="faker"><p>Test</p></div>';
  Log.log(component.find('[data-component]'));
});
*!/

const app = new Application();
app.Components.register('component', Component);
app.Components.register('harry-potter', HarryPotter);
Log.log(app.Components);
app.start();
*/

/*
import { Application } from './dist/index';

const app = new Application();
app.start();
*/
"use strict";

var _index = require("../dist/index");

var app = new _index.Application();
app.start();
