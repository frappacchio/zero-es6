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
  test('it ungrabs only msg for given component', () => {
    const broadcats = new Broadcast();
    const component = new Component(document.createElement('span'), broadcats);
    const otherComponent = new Component(document.createElement('span'), broadcats);
    const mockCallbackA = jest.fn(() => {});
    const mockCallbackB = jest.fn(() => {});
    otherComponent.grab('messaggio', mockCallbackA);
    component.grab('messaggio', mockCallbackB);
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
    expect(mockCallbackA.mock.calls.length).toBe(15);
  });
});
