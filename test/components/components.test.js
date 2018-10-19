import Components from '../../src/components/components';
import Component from '../../src/components/component';
import UserException from '../../src/core/user-exception';


describe('Components', () => {
  test('Add a component to the list', () => {
    Components.register(Component);
    expect(Components.List.size).toBe(1);
  });
  test('Cannot add the same component twice to the list', () => {
    expect(() => {
      Components.register(Component);
    }).toThrow(UserException);
  });
  test('Cannot create an instance of component which has not been registered', () => {
    expect(() => {
      Components.create(document.createElement('span'), Function);
    }).toThrow(UserException);
  });
  test('Create a component instance after correctly register', () => {
    const el = document.createElement('span');
    Components.create(el, Component);
    expect(Components.Intances.size).toBe(1);
  });
});
