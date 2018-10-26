import Components from '../../src/components/components';
import Component from '../../src/components/component';
import UserException from '../../src/core/user-exception';
import Broadcast from '../../src/events/broadcats';


describe('Components', () => {
  test('if no Broadcast element is passed it create a new one in runtime', () => {
    expect(Components.Broadcast).not.toBeUndefined();
  });
  test('it accept a Broadcast object in order to pass it through components', () => {
    Components.Broadcast = new Broadcast(document.createElement('span'));
    expect(Components.Broadcast).not.toBeUndefined();
  });

  test('Add a component to the list', () => {
    Components.register('component', Component);
    expect(Components.List.size).toBe(1);
  });
  test('Cannot add the same component twice to the list', () => {
    expect(() => {
      Components.register('component', Component);
    }).toThrow(UserException);
  });
  test('Cannot create an instance of component which has not been registered', () => {
    expect(() => {
      const element = document.createElement('span');
      element.dataset.component = 'function';
      Components.create(element);
    }).toThrow(UserException);
  });
  test('Create a component instance after correctly register', () => {
    const element = document.createElement('span');
    element.dataset.component = 'component';
    Components.create(element);
    expect(Components.Instances.size).toBe(1);
  });
  test('Cannot create an instance of component which has not been registered', () => {
    expect(() => {
      const element = document.createElement('span');
      Components.create(element);
    }).toThrow(UserException);
  });
});
