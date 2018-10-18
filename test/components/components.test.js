import { List } from 'immutable';
import Components from '../../src/components/components';
import Component from '../../src/components/component';

const componentInstance = new Component();

describe('Components', () => {
  test('it adds a new component instance to the ComponentsList and return the new List', () => {
    expect(Components.add(componentInstance).size).toBe(1);
  });
  test('it adds a new component instance to the ComponentsList and return the new List', () => {

  });
  test('it will not add a new equal component to the list if already exists', () => {
    const anotherInstance = new Component();
    Components.add(anotherInstance);
    expect(Components.list.size).toBe(1);
  });
  test('it removes a component instance from the ComponentsList and return the new List', () => {
    expect(Components.remove(componentInstance).size).toBe(0);
  });
  test('check if the component exists and returns it', () => {
    Components.add(componentInstance);
    expect(Components.exists(componentInstance)).not.toBeUndefined();
  });
  test('if does not exists a component instance it returns undefined', () => {
    Components.remove(componentInstance);
    expect(Components.exists()).toBeUndefined();
  });
  test('check the index for existing component instance', () => {
    Components.add(componentInstance);
    expect(Components.index(componentInstance)).toBe(0);
  });
  test('returns -1 for non existing component', () => {
    Components.remove(componentInstance);
    expect(Components.index(componentInstance)).toBe(-1);
  });
  test('returns -1 for non existing component', () => {
    expect(Components.remove(componentInstance).size).toBe(0);
  });
});
