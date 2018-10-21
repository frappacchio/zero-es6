import Component from '../../src/components/component';
import Broadcast from '../../src/events/broadcats';

describe('Component', () => {
  test('create component without specify a DOM element', () => {
    const component = new Component();
    expect(component.element.tagName).toBe('SPAN');
  });
  test('grab/cast an event', () => {
    const component = new Component();
    const mockCallbackA = jest.fn(() => {});
    const mockCallbackB = jest.fn(() => {});
    component.listen('messaggio', mockCallbackB);
    component.listen('messaggio', mockCallbackA);
    expect(component.Broadcast.EventMap.Map.length).toBe(2);
  });
  test('destroy component', () => {
    const component = new Component();
    const mockCallbackA = jest.fn(() => {});
    const mockCallbackB = jest.fn(() => {});
    component.grab('messaggio', mockCallbackB);
    component.grab('messaggio', mockCallbackA);
    component.destroy();
    expect(component.Broadcast.EventMap.Map.length).toBe(0);
  });
  test('it ungrabs only msg for given component', () => {
    const broadcats = new Broadcast();
    const component = new Component(document.createElement('span'), broadcats);
    const otherComponent = new Component(document.createElement('span'), broadcats);
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
    const component = new Component(document.createElement('span'));

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
    const component = new Component(document.createElement('span'));

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
    const component = new Component(document.createElement('span'));

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
    const component = new Component(document.createElement('span'));

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
});
