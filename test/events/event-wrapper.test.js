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
  test('does not execute callback for any listener if no callback has passed ', () => {
    const button = document.createElement('button');
    let callback = 0;
    const mockCallback = jest.fn(() => {});
    const mockCallbackB = () => {
      callback += 1;
    };
    const element = new EventWrapper(button);
    element.on('click', mockCallback);
    element.on('click', mockCallbackB);
    element.trigger('click');
    element.dispatchEvent('click');
    element.trigger('click');
    element.removeEventListener('click', mockCallback);
    element.trigger('click');
    element.trigger('click');
    element.removeEventListener('click');
    element.trigger('click');
    element.trigger('click');
    element.trigger('click');
    element.trigger('click');
    expect(callback).toBe(5);
  });
  test('if no callback has passed it will create an empty callback', () => {
    const button = document.createElement('button');
    const element = new EventWrapper(button);
    element.on('click');
    element.one('click');
    element.addEventListener('click');
  });
});
