import Logger from '@openmind/litelog';
import DomReader from './core/dom-reader';

const domReader = new DomReader();
const fakeNonEmptyDom = `<div data-component="pippo"></div>
      <div data-component="pippo">
          <div data-component="gastone"></div>
      </div>`;
const fakeEmptyDom = '<div>Fake</div>';
const fakeAlternativeDom = '<div data-alternative="component">Fake</div>';
const emptyElement = document.getElementById('jhon-doe');
document.body.innerHTML = '';
const domNode = document.createElement('main');
domNode.innerHTML = fakeAlternativeDom;
// domNode.innerHTML = fakeNonEmptyDom;
document.body.append(domNode);
domReader.Selector = null;
domReader.Element = emptyElement;

const components = domReader.check();
Logger.log(components);
