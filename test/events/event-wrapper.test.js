import EventWrapper from '../../src/events/event-wrapper';


describe('EventWrapper', () => {
  test('execute a callback when event `click` is triggered', () => {
    const button = document.createElement('button');
    const mockCallback = jest.fn(() => {});
    const element = new EventWrapper(button);
    element.addEventListener('click', mockCallback);
    element.trigger('click');
    element.trigger('click');
    element.trigger('click');
    expect(mockCallback.mock.calls.length).toBe(3);
  });
  test('execute just one time the callback when event `click` is triggered and listened using `.one`', () => {
    const button = document.createElement('button');
    const mockCallback = jest.fn(() => {});
    const element = new EventWrapper(button);
    element.one('click', mockCallback);
    element.trigger('click');
    element.trigger('click');
    element.trigger('click');
    expect(mockCallback.mock.calls.length).toBe(1);
  });
  test('does not execute callback after eventlistener has been removed', () => {
    const button = document.createElement('button');
    const mockCallback = jest.fn(() => {});
    const element = new EventWrapper(button);
    element.on('click', mockCallback);
    element.trigger('click');
    element.dispatchEvent('click');
    element.trigger('click');
    element.removeEventListener('click', mockCallback);
    element.trigger('click');
    element.trigger('click');
    element.trigger('click'); element.trigger('click');
    element.trigger('click');
    element.trigger('click');
    expect(mockCallback.mock.calls.length).toBe(3);
  });
});
