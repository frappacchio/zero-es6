import DomReader from '../../src/core/dom-reader';

const fakeNonEmptyDom = `<div data-component="pippo"></div>
      <div data-component="pippo">
          <div data-component="gastone"></div>
      </div>`;
const fakeEmptyDom = '<div>Fake</div>';
const fakeAlternativeDom = '<div data-alternative="component">Fake</div>';
const domReader = new DomReader();

function resetDom() {
  document.body.innerHTML = '';
  return document.createElement('main');
}


describe('DomReader', () => {
  test('If at least an element has declared in DOM it returns a NodeList object', () => {
    const domNode = resetDom();
    domNode.innerHTML = fakeNonEmptyDom;
    document.body.append(domNode);
    const components = domReader.check();
    expect(typeof components === 'object').toBe(true);
  });
  test('If at least an element has declared in DOM it returns an iterable NodeList', () => {
    const domNode = resetDom();
    domNode.innerHTML = fakeNonEmptyDom;
    document.body.append(domNode);
    const components = domReader.check();
    expect(components.length).toBe(3);
  });
  test('If no suitable element has declared in DOM it returns an empty NodeList', () => {
    const domNode = resetDom();
    domNode.innerHTML = fakeEmptyDom;
    document.body.append(domNode);
    const components = domReader.check();
    expect(components.length).toBe(0);
  });
  test('If an alternative selector has been declared it ignores the default selector matched elements', () => {
    const domNode = resetDom();
    domNode.innerHTML = `${fakeNonEmptyDom}${fakeAlternativeDom}`;
    document.body.append(domNode);
    domReader.Selector = '[data-alternative]';
    const components = domReader.check();
    expect(components.length).toBe(1);
  });
  test('If an alternative element has been declared it ignores all other elements not contained in given element', () => {
    const domNode = resetDom();
    const fakeParent = `<div id="father">${fakeNonEmptyDom}</div><div id="jhon-doe">${fakeNonEmptyDom}</div>`;
    domNode.innerHTML = fakeParent;
    document.body.append(domNode);
    domReader.Selector = null;
    const selectedElement = document.getElementById('father');
    domReader.Element = selectedElement;
    const components = domReader.check();
    expect(components.length).toBe(3);
  });
  test('If no suitable element has declared as Element it returns an empty NodeList', () => {
    const domNode = resetDom();
    domNode.innerHTML = fakeEmptyDom;
    document.body.append(domNode);
    const emptyElement = document.getElementById('jhon-doe');
    domReader.Element = emptyElement;
    const components = domReader.check();
    expect(components.length).toBe(0);
  });
  test('If selector is a falsy value it returns [data-component]', () => {
    domReader.Selector = null;
    expect(domReader.Selector).toBe('[data-component]');
  });
  test('If element is a falsy value it returns `document`', () => {
    domReader.Element = null;
    expect(domReader.Element).toBe(document);
  });
});
