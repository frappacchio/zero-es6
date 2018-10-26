import Component from '../../src/components/component';
import Broadcast from '../../src/events/broadcats';


describe('Component', () => {
  let component;
  beforeEach(() => {
    component = new Component();
    component.Name = 'component';
    component.Broadcast = new Broadcast(document.createElement('span'));
  });
  afterEach(() => {
    component = null;
  });
  test('create component without specify a DOM element', () => {
    expect(component.element.tagName).toBe('SPAN');
  });
  test('grab/cast an event', () => {
    const mockCallbackA = jest.fn(() => {});
    const mockCallbackB = jest.fn(() => {});
    component.listen('messaggio', mockCallbackB);
    component.listen('messaggio', mockCallbackA);
    expect(component.Broadcast.EventMap.Map.length).toBe(2);
  });
  test('destroy component', () => {
    const mockCallbackA = jest.fn(() => {});
    const mockCallbackB = jest.fn(() => {});
    component.grab('messaggio', mockCallbackB);
    component.grab('messaggio', mockCallbackA);
    component.destroy();
    expect(component.Broadcast.EventMap.Map.length).toBe(0);
  });
  test('it listen for an empty callback. What for?', () => {
    component.grab('messaggio');
    component.listen('messaggio');
  });
  test('if callback has passed to unlisten method it stops to execute only given callback ', () => {
    let counter = 0;
    const otherComponent = new Component(document.createElement('span'));
    otherComponent.Broadcast = component.Broadcast;
    const methodA = () => {};
    const methodB = () => {
      counter += 1;
    };
    otherComponent.grab('messaggio', methodA);
    component.grab('messaggio', methodB);
    component.grab('messaggio', methodA);
    component.cast('messaggio');
    component.cast('messaggio');
    component.cast('messaggio');
    component.ungrab('messaggio', methodA);
    component.cast('messaggio');
    component.cast('messaggio');
    component.cast('messaggio');
    component.cast('messaggio');
    component.cast('messaggio');
    component.cast('messaggio');
    component.cast('messaggio');
    component.cast('messaggio');
    component.cast('messaggio');
    component.cast('messaggio');
    component.cast('messaggio');
    component.cast('messaggio');
    expect(counter).toBe(15);
  });
  test('it ungrabs only msg for given component', () => {
    const otherComponent = new Component(document.createElement('span'));
    otherComponent.Broadcast = component.Broadcast;
    const mockCallbackA = jest.fn(() => {});
    const mockCallbackB = jest.fn(() => {});
    otherComponent.grab('messaggio', mockCallbackA);
    component.grab('messaggio', mockCallbackB);
    component.grab('messaggio', mockCallbackA);
    component.cast('messaggio');
    component.cast('messaggio');
    component.cast('messaggio');
    component.ungrab('messaggio');
    component.cast('messaggio');
    component.cast('messaggio');
    component.cast('messaggio');
    component.cast('messaggio');
    component.cast('messaggio');
    component.cast('messaggio');
    component.cast('messaggio');
    component.cast('messaggio');
    component.cast('messaggio');
    component.cast('messaggio');
    component.cast('messaggio');
    component.cast('messaggio');
    expect(mockCallbackB.mock.calls.length).toBe(3);
  });
  test('If no callback has passed as argument it stops to listen for all given messages', () => {
    const mockCallbackA = jest.fn(() => {});
    const mockCallbackB = jest.fn(() => {});
    component.grab('messaggio', mockCallbackA);
    component.cast('messaggio');
    component.cast('messaggio');
    component.cast('messaggio');
    component.ungrab('messaggio');
    component.cast('messaggio');
    component.cast('messaggio');
    component.cast('messaggio');
    component.cast('messaggio');
    component.cast('messaggio');
    component.cast('messaggio');
    component.cast('messaggio');
    component.cast('messaggio');
    component.cast('messaggio');
    component.cast('messaggio');
    component.cast('messaggio');
    component.cast('messaggio');
    expect(mockCallbackA.mock.calls.length).toBe(3);
  });
  test('It add event to component and then stop to listen', () => {
    const mockCallbackA = jest.fn(() => {});
    component.on('messaggio', mockCallbackA);
    component.trigger('messaggio');
    component.trigger('messaggio');
    component.trigger('messaggio');
    component.off('messaggio');
    component.trigger('messaggio');
    component.trigger('messaggio');
    component.trigger('messaggio');
    expect(mockCallbackA.mock.calls.length).toBe(3);
  });
  test('If a callback is provided on .off()/.removeEventLitener() the component stops to listen only for specific callback', () => {
    const mockCallbackC = jest.fn(() => {});
    const mockCallbackD = jest.fn(() => {});
    component.on('messaggio', mockCallbackC);
    component.on('messaggio', mockCallbackD);
    component.trigger('messaggio');
    component.trigger('messaggio');
    component.trigger('messaggio');
    component.off('messaggio', mockCallbackD);
    component.trigger('messaggio');
    component.trigger('messaggio');
    component.trigger('messaggio');
    expect(mockCallbackD.mock.calls.length).toBe(3);
  });
  test('If a callback is provided on .off()/.removeEventLitener() the component stops to listen only for specific callback', () => {
    let debugIncrement = 0;
    const mockCallbackC = jest.fn(() => { debugIncrement += 1; });
    const mockCallbackD = jest.fn(() => { });

    component.on('messaggio', mockCallbackC);
    component.on('messaggio', mockCallbackD);
    component.trigger('messaggio');
    component.trigger('messaggio');
    component.trigger('messaggio');
    component.off('messaggio', mockCallbackC);
    component.trigger('messaggio');
    component.trigger('messaggio');
    component.trigger('messaggio');
    expect(debugIncrement).toBe(3);
  });
  test('if a Messages object has passed you should listen for messages', () => {
    let counter = 0;
    const methodB = () => {
      counter += 1;
    };
    component.Messages = {
      messaggio: methodB,
    };
    component.addListeners();
    expect(component.Broadcast.EventMap.Map.length).toBe(1);
  });
  test('on `innerHtml` method call it emit a `domChanged` event to Broadcast', () => {
    let counter = 0;
    const methodB = () => {
      counter += 1;
    };
    component.Messages = {
      domChanged: methodB,
    };
    component.addListeners();
    component.innerHTML = '<p>test</p>';
    expect(counter).toBe(1);
  });
  test('if no Messages object has passed you couldn\'t listen for messages', () => {
    component.Messages = {};
    component.addListeners();
    expect(component.Broadcast.EventMap.Map.length).toBe(0);
  });
  test('the className is the camelize version of data-attribute component', () => {
    expect(component.ClassName).toBe('Component');
  });
});
