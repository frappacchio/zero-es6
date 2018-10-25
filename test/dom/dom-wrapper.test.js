import DomWrapper from '../../src/dom/dom-wrapper';

describe('DomWrapper', () => {
  test('if no query has passed it will return all children', () => {
    const domString = '<div><div></div></div>';
    const element = new DomWrapper();
    element.innerHTML = domString;
    const children = element.find();
    expect(children.length).toBe(2);
  });
});
