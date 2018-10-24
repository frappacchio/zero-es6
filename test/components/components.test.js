import { spawn } from 'child_process';
import Components from '../../src/components/components';
import Component from '../../src/components/component';
import UserException from '../../src/core/user-exception';


describe('Components', () => {
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
    expect(Components.Intances.size).toBe(1);
  });
});
