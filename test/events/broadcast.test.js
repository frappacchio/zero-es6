import Broadcast from '../../src/events/broadcats';


describe('Broadcast', () => {
  test('the deafult namespace is `msg`', () => {
    const broadcats = new Broadcast(document.createElement('span'));
    expect(broadcats.Defaults.namespace).toBe('msg');
  });
  test('an event name will be composed by the passed name and the namespace', () => {
    const broadcats = new Broadcast(document.createElement('span'));
    expect(broadcats.getNamespace('test')).toBe('msg:test');
  });
  test('if an event is casted the broadcast listen to it', () => {
    const mokedCallback = jest.fn(() => {});
    const broadcats = new Broadcast(document.createElement('span'));
    broadcats.grab('testEvent', mokedCallback);
    broadcats.cast('testEvent');
    expect(mokedCallback.mock.calls.length).toBe(1);
  });
  test('if i ungrab en event it will not be listened anymore', () => {
    const mokedCallback = jest.fn(() => {});
    const broadcats = new Broadcast(document.createElement('span'));
    broadcats.grab('testEvent', mokedCallback);
    broadcats.cast('testEvent');
    broadcats.cast('testEvent');
    broadcats.ungrab('testEvent', mokedCallback);
    broadcats.cast('testEvent');
    broadcats.cast('testEvent');
    broadcats.cast('testEvent');
    expect(mokedCallback.mock.calls.length).toBe(2);
  });
  test('it\'s possible to use arrow functions or anonimous functions', () => {
    const broadcats = new Broadcast(document.createElement('span'));
    let variable = 0;
    broadcats.grab('testEvent', () => {
      variable += 1;
    });
    broadcats.cast('testEvent');
    broadcats.cast('testEvent');
    broadcats.ungrab('testEvent');
    broadcats.cast('testEvent');
    broadcats.cast('testEvent');
    expect(variable).toBe(2);
  });
});
