
import { JSDOM } from 'jsdom';
import Application from '../../src/application/application';
import Component from '../../src/components/component';

document.body.innerHTML = '<div>'
    + '<div data-component="component"></div>'
    + '<button data-component="harry-potter">Click me</button>'
    + '</div>';

class HarryPotter extends Component {
  static magic() {

  }

  constructor(element) {
    super(element);

    this.Messages = {
      magic: HarryPotter.magic,
    };
    this.on('click', () => {
      this.emit('magic');
    });
  }
}

const app = new Application({});
app.Components.register('component', Component);
app.Components.register('harry-potter', HarryPotter);
app.start();


describe('Application', () => {
  describe('Defaults', () => {
    test('default filterAttribute must be [data-component]', () => {
      expect(app.FilterAttribute).toBe('[data-component]');
    });
    test('App DOM must be present', () => {
      expect(app.DOM).not.toBeUndefined();
    });
    test('App Broadcast must be present', () => {
      expect(app.Broadcast).not.toBeUndefined();
    });
    test('App Components list must be present', () => {
      expect(app.Components).not.toBeUndefined();
    });
  });
  describe('Components', () => {
    test('each component\'s Broadcast has the same Broadcast of application', () => {
      expect(app.Broadcast).toEqual(app.Components.Instances.entries().next().value[1].Broadcast);
    });
  });
});
