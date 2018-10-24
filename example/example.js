import { Application, Component } from '../dist/index';
import HarryPotter from './components/harry-potter';

const app = new Application();
app.Components.register('harry-potter', HarryPotter);
app.Components.register('component', Component);
app.start();
