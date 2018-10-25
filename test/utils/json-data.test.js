import DomWrapper from '../../src/dom/dom-wrapper';
import JSONData from '../../src/utils/json-data';
import UserException from '../../src/core/user-exception';

describe('JSONData', () => {
  test('if no valid element is provided it throw an exception', () => {
    expect(() => {
      const element = {};
      const jsonData = new JSONData(element);
    }).toThrow(UserException);
  });
  test('if no data-attribute are provided it returns an empty Object', () => {
    const element = new DomWrapper(document.createElement('span'));
    expect(element.data).toEqual({});
  });
  test('if data-attribute are provided it returns a non-empty Object', () => {
    const span = document.createElement('span');
    span.dataset.demo = 'test';
    const element = new DomWrapper(span);
    console.debug(element.dataset);
    expect(element.data).toEqual({ demo: 'test' });
  });
  test('if data-attribute contains "null" it will evaluate as null value', () => {
    const span = document.createElement('span');
    span.dataset.demo = 'null';
    const element = new DomWrapper(span);
    console.debug(element.dataset);
    expect(element.data).toEqual({ demo: null });
  });
  test('if data-attribute contains "true" it will evaluate as true value', () => {
    const span = document.createElement('span');
    span.dataset.demo = 'true';
    const element = new DomWrapper(span);
    console.debug(element.dataset);
    expect(element.data).toEqual({ demo: true });
  });
  test('if data-attribute contains "false" it will evaluate as false value', () => {
    const span = document.createElement('span');
    span.dataset.demo = 'false';
    const element = new DomWrapper(span);
    console.debug(element.dataset);
    expect(element.data).toEqual({ demo: false });
  });
  test('if data-attribute contains "undefined" it will evaluate as undefined value', () => {
    const span = document.createElement('span');
    span.dataset.demo = 'undefined';
    const element = new DomWrapper(span);
    console.debug(element.dataset);
    expect(element.data).toEqual({ demo: undefined });
  });
  test('if data-attribute contains "6" it will evaluate as 6 as Number', () => {
    const span = document.createElement('span');
    span.dataset.demo = '6';
    const element = new DomWrapper(span);
    console.debug(element.dataset);
    expect(element.data).toEqual({ demo: 6 });
  });
});
