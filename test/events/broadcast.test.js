import Broadcast from '../../src/events/broadcats';

const broadCast = new Broadcast();

describe('Broadcast', () => {
  test('Broadcaster is a `span` tag', () => {
    expect(broadCast.Broadcaster.tagName).toBe('SPAN');
  });
  test('Cast and grab a message', () => {
    const mockCallback = jest.fn(() => {});
    broadCast.grab('customMessage', mockCallback);
    broadCast.cast('customMessage');
    expect(mockCallback.mock.calls.length).toBe(1);
  });
  test('ungrab a message', () => {
    const mockCallback = jest.fn(() => {});
    broadCast.grab('newcustomMessage', mockCallback);
    broadCast.cast('newcustomMessage');
    broadCast.cast('newcustomMessage');
    broadCast.ungrab('newcustomMessage', mockCallback);
    broadCast.cast('newcustomMessage');
    broadCast.cast('newcustomMessage');
    broadCast.cast('newcustomMessage');
    expect(mockCallback.mock.calls.length).toBe(2);
  });
});
