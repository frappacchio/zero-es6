import Logger from '@openmind/litelog';
import DomWrapper from './dom/dom-wrapper';
import Component from './components/component';

const Log = new Logger('Main');

const pageReader = new DomWrapper(document);
const elements = pageReader.find('[data-component="fake-component"]');

elements.forEach((element) => {
  const component = new Component(element);
  component.innerHTML = '<p>Test</p>';
  Log.log(component.find('[data-component]'));
});
