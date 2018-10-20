import Component from '../../src/components/component';

describe('Component', () => {
  test('create component without specify a DOM element', () => {
    const component = new Component();
    expect(component.element.tagName).toBe('SPAN');
  });
  test('grab/cast an event', () => {
    const component = new Component();
    const mockCallback = jest.fn(() => {});
    component.Messages = {
      customMessage: mockCallback,
    };
  });
  test('destroy component', () => {

  });
});
