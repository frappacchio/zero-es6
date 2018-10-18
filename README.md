## Classes

<dl>
<dt><a href="#Component">Component</a></dt>
<dd><p>It define a basic component</p>
</dd>
<dt><a href="#Components">Components</a></dt>
<dd><p>Manage the list of components classes used within the project</p>
</dd>
<dt><a href="#DomReader">DomReader</a></dt>
<dd><p>Read the DOM and check for Zero Components</p>
</dd>
<dt><a href="#Broadcast">Broadcast</a></dt>
<dd><p>Grab and dispatch messages throug the dom</p>
</dd>
<dt><a href="#EventWrapper">EventWrapper</a></dt>
<dd><p>A simple wrapper which allows to use method like .on(...), .off(...)</p>
</dd>
<dt><a href="#Inflector">Inflector</a></dt>
<dd><p><a href="module:lodash/trim">module:lodash/trim</a>
<a href="module:lodash/snakeCase">module:lodash/snakeCase</a>
<a href="module:lodash/camelCase">module:lodash/camelCase</a>
<a href="module:lodash/upperFirst">module:lodash/upperFirst</a>
<a href="module:lodash/kebabCase">module:lodash/kebabCase</a>
<a href="module:lodash/startCase">module:lodash/startCase</a></p>
</dd>
</dl>

## Members

<dl>
<dt><a href="#componentsList">componentsList</a> : <code>List</code></dt>
<dd><p>componentsList the list</p>
</dd>
</dl>

## Constants

<dl>
<dt><a href="#Log">Log</a></dt>
<dd><p>The Logger</p>
</dd>
<dt><a href="#Log">Log</a></dt>
<dd><p>The Logger</p>
</dd>
<dt><a href="#Defaults">Defaults</a> : <code>Object</code></dt>
<dd><p>Default settings</p>
</dd>
<dt><a href="#Log">Log</a></dt>
<dd><p>The Logger</p>
</dd>
<dt><a href="#Defaults">Defaults</a> : <code>Object</code></dt>
<dd><p>Deafult settings</p>
</dd>
</dl>

## Functions

<dl>
<dt><a href="#addEventListener">addEventListener(...args)</a></dt>
<dd></dd>
<dt><a href="#addEventListener">addEventListener(...args)</a></dt>
<dd><p>It listen only for the first occurence of the event
and then it removes the listner</p>
</dd>
<dt><a href="#removeEventListener">removeEventListener(...args)</a></dt>
<dd></dd>
<dt><a href="#dispatchEvent">dispatchEvent(...args)</a></dt>
<dd></dd>
<dt><a href="#on">on(...args)</a></dt>
<dd></dd>
<dt><a href="#off">off(...args)</a></dt>
<dd></dd>
<dt><a href="#trigger">trigger(...args)</a></dt>
<dd></dd>
<dt><a href="#kebab">kebab()</a></dt>
<dd></dd>
</dl>

<a name="Component"></a>

## Component
It define a basic component

**Kind**: global class

* [Component](#Component)
    * [new Component(element, [broadcast])](#new_Component_new)
    * [.Messages](#Component+Messages)
    * [.messages](#Component+messages) : <code>Object</code>
    * [.Messages](#Component+Messages) ⇒ <code>Object</code>
    * [.Broadcast](#Component+Broadcast)
    * [.broadcast](#Component+broadcast) : [<code>Broadcast</code>](#Broadcast)
    * [.Broadcast](#Component+Broadcast) ⇒ [<code>Broadcast</code>](#Broadcast)
    * [.GRAB(message, callback)](#Component+GRAB) ⇒ [<code>Component</code>](#Component)
    * [.UNGRAB(message, callback)](#Component+UNGRAB) ⇒ [<code>Component</code>](#Component)
    * [.CAST(message, ...obj)](#Component+CAST) ⇒ [<code>Component</code>](#Component)
    * [.destroy()](#Component+destroy) ⇒ <code>void</code>

<a name="new_Component_new"></a>

### new Component(element, [broadcast])
Create a component instance


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| element | <code>Element</code> |  |  |
| [broadcast] | [<code>Broadcast</code>](#Broadcast) | <code>new Broadcast()</code> | the broadcast for this component |

<a name="Component+Messages"></a>

### component.Messages
**Kind**: instance property of [<code>Component</code>](#Component)

| Param | Type |
| --- | --- |
| msg | <code>Object</code> |

<a name="Component+messages"></a>

### component.messages : <code>Object</code>
msg the object with all messages

**Kind**: instance property of [<code>Component</code>](#Component)
<a name="Component+Messages"></a>

### component.Messages ⇒ <code>Object</code>
**Kind**: instance property of [<code>Component</code>](#Component)
<a name="Component+Broadcast"></a>

### component.Broadcast
**Kind**: instance property of [<code>Component</code>](#Component)

| Param | Type |
| --- | --- |
| broadcast | [<code>Broadcast</code>](#Broadcast) |

<a name="Component+broadcast"></a>

### component.broadcast : [<code>Broadcast</code>](#Broadcast)
**Kind**: instance property of [<code>Component</code>](#Component)
<a name="Component+Broadcast"></a>

### component.Broadcast ⇒ [<code>Broadcast</code>](#Broadcast)
**Kind**: instance property of [<code>Component</code>](#Component)
<a name="Component+GRAB"></a>

### component.GRAB(message, callback) ⇒ [<code>Component</code>](#Component)
Grabs the broadcast message

**Kind**: instance method of [<code>Component</code>](#Component)
**Returns**: [<code>Component</code>](#Component) - the instance of the class

| Param | Type | Description |
| --- | --- | --- |
| message | <code>String</code> | message to broadcast |
| callback | <code>function</code> | callback to exectute |

<a name="Component+UNGRAB"></a>

### component.UNGRAB(message, callback) ⇒ [<code>Component</code>](#Component)
Grabs the broadcast message

**Kind**: instance method of [<code>Component</code>](#Component)
**Returns**: [<code>Component</code>](#Component) - the instance of the class

| Param | Type | Description |
| --- | --- | --- |
| message | <code>String</code> | message to broadcast |
| callback | <code>function</code> | callback to exectute |

<a name="Component+CAST"></a>

### component.CAST(message, ...obj) ⇒ [<code>Component</code>](#Component)
Broadcast a message to the broadcast

**Kind**: instance method of [<code>Component</code>](#Component)
**Returns**: [<code>Component</code>](#Component) - the instance of the class

| Param | Type | Description |
| --- | --- | --- |
| message | <code>String</code> | message to broadcast |
| ...obj | <code>any</code> |  |

<a name="Component+destroy"></a>

### component.destroy() ⇒ <code>void</code>
Destroy the component instance

**Kind**: instance method of [<code>Component</code>](#Component)
<a name="Components"></a>

## Components
Manage the list of components classes used within the project

**Kind**: global class

* [Components](#Components)
    * [.list](#Components.list) ⇒ <code>List</code>
    * [.exists(component)](#Components.exists) ⇒ <code>undefined</code> \| <code>\*</code>
    * [.index(component)](#Components.index) ⇒ <code>Number</code>
    * [.add(component)](#Components.add) ⇒ <code>List</code>
    * [.remove(component)](#Components.remove) ⇒ <code>List</code>

<a name="Components.list"></a>

### Components.list ⇒ <code>List</code>
**Kind**: static property of [<code>Components</code>](#Components)
**Returns**: <code>List</code> - list
<a name="Components.exists"></a>

### Components.exists(component) ⇒ <code>undefined</code> \| <code>\*</code>
Check if already exists a component within the list

**Kind**: static method of [<code>Components</code>](#Components)

| Param | Type |
| --- | --- |
| component | <code>\*</code> |

<a name="Components.index"></a>

### Components.index(component) ⇒ <code>Number</code>
Returns the index for given component
Returns -1 if component does not exists

**Kind**: static method of [<code>Components</code>](#Components)

| Param | Type |
| --- | --- |
| component | <code>\*</code> |

<a name="Components.add"></a>

### Components.add(component) ⇒ <code>List</code>
Add a component to the list if not already has been adedd

**Kind**: static method of [<code>Components</code>](#Components)

| Param | Type |
| --- | --- |
| component | <code>\*</code> |

<a name="Components.remove"></a>

### Components.remove(component) ⇒ <code>List</code>
Remove a component to the list if exists

**Kind**: static method of [<code>Components</code>](#Components)

| Param | Type |
| --- | --- |
| component | <code>\*</code> |

<a name="DomReader"></a>

## DomReader
Read the DOM and check for Zero Components

**Kind**: global class

* [DomReader](#DomReader)
    * [.Element](#DomReader+Element)
    * [.Element](#DomReader+Element) ⇒ <code>Element</code> \| <code>document</code>
    * [.Selector](#DomReader+Selector)
    * [.check()](#DomReader+check) ⇒ <code>NodeList</code>

<a name="DomReader+Element"></a>

### domReader.Element
Set the element for all operations
If falsy value is passed it returns the default element `document`

**Kind**: instance property of [<code>DomReader</code>](#DomReader)
**See**: https://developer.mozilla.org/en-US/docs/Glossary/Falsy

| Param | Type |
| --- | --- |
| element | <code>Element</code> |

<a name="DomReader+Element"></a>

### domReader.Element ⇒ <code>Element</code> \| <code>document</code>
Get the element. If not defined return the document element

**Kind**: instance property of [<code>DomReader</code>](#DomReader)
**See**: https://developer.mozilla.org/en-US/docs/Web/API/Element
<a name="DomReader+Selector"></a>

### domReader.Selector
Set the element selector using CSS selector specs

**Kind**: instance property of [<code>DomReader</code>](#DomReader)
**See**

- https://developer.mozilla.org/en-US/docs/Learn/CSS/Introduction_to_CSS/Selectors
If falsy value is passed it returns the default selector [data-component]
- https://developer.mozilla.org/en-US/docs/Glossary/Falsy


| Param | Type |
| --- | --- |
| selector | <code>String</code> |

<a name="DomReader+check"></a>

### domReader.check() ⇒ <code>NodeList</code>
Return the list of components matching given selector

**Kind**: instance method of [<code>DomReader</code>](#DomReader)
<a name="Broadcast"></a>

## Broadcast
Grab and dispatch messages throug the dom

**Kind**: global class

* [Broadcast](#Broadcast)
    * [new Broadcast()](#new_Broadcast_new)
    * [.Broadcaster](#Broadcast+Broadcaster) ⇒ <code>Element</code>
    * [.broadcaster](#Broadcast+broadcaster) : <code>Element</code>
    * [.cast(msg, obj)](#Broadcast+cast)
    * [.grab(msg, callback)](#Broadcast+grab)
    * [.ungrab(msg, callback)](#Broadcast+ungrab)

<a name="new_Broadcast_new"></a>

### new Broadcast()
Initialize the Broadcast

<a name="Broadcast+Broadcaster"></a>

### broadcast.Broadcaster ⇒ <code>Element</code>
Get the Broadcaster element

**Kind**: instance property of [<code>Broadcast</code>](#Broadcast)
**Returns**: <code>Element</code> - the element used as Broadcaster
<a name="Broadcast+broadcaster"></a>

### broadcast.broadcaster : <code>Element</code>
**Kind**: instance property of [<code>Broadcast</code>](#Broadcast)
<a name="Broadcast+cast"></a>

### broadcast.cast(msg, obj)
Cast a message throug the dom

**Kind**: instance method of [<code>Broadcast</code>](#Broadcast)
**See**: https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent/CustomEvent#Polyfill

| Param | Type | Description |
| --- | --- | --- |
| msg | <code>String</code> | message to cast |
| obj | <code>Object</code> | callback to execute on message receiving |

<a name="Broadcast+grab"></a>

### broadcast.grab(msg, callback)
Add the listener for given event and dispatch the event

**Kind**: instance method of [<code>Broadcast</code>](#Broadcast)

| Param | Type | Description |
| --- | --- | --- |
| msg | <code>String</code> | message to cast |
| callback | <code>function</code> | callback to execute on message receiving |

<a name="Broadcast+ungrab"></a>

### broadcast.ungrab(msg, callback)
Remove the listener for given message

**Kind**: instance method of [<code>Broadcast</code>](#Broadcast)

| Param | Type | Description |
| --- | --- | --- |
| msg | <code>String</code> | message to cast |
| callback | <code>function</code> | callback to execute on message receiving |

<a name="EventWrapper"></a>

## EventWrapper
A simple wrapper which allows to use method like .on(...), .off(...)

**Kind**: global class

* [EventWrapper](#EventWrapper)
    * [new EventWrapper(element)](#new_EventWrapper_new)
    * [.element](#EventWrapper+element)
    * [.domElement](#EventWrapper+domElement) : <code>Element</code>
    * [.element](#EventWrapper+element) ⇒ <code>Element</code>

<a name="new_EventWrapper_new"></a>

### new EventWrapper(element)
Create the wrapper


| Param | Type |
| --- | --- |
| element | <code>Element</code> |

<a name="EventWrapper+element"></a>

### eventWrapper.element
Set the Element which represent the current component

**Kind**: instance property of [<code>EventWrapper</code>](#EventWrapper)

| Param | Type |
| --- | --- |
| domElement | <code>Element</code> |

<a name="EventWrapper+domElement"></a>

### eventWrapper.domElement : <code>Element</code>
**Kind**: instance property of [<code>EventWrapper</code>](#EventWrapper)
<a name="EventWrapper+element"></a>

### eventWrapper.element ⇒ <code>Element</code>
Get the Element which represent the current component

**Kind**: instance property of [<code>EventWrapper</code>](#EventWrapper)
**Returns**: <code>Element</code> - domElement
<a name="Inflector"></a>

## Inflector
[module:lodash/trim](module:lodash/trim)
[module:lodash/snakeCase](module:lodash/snakeCase)
[module:lodash/camelCase](module:lodash/camelCase)
[module:lodash/upperFirst](module:lodash/upperFirst)
[module:lodash/kebabCase](module:lodash/kebabCase)
[module:lodash/startCase](module:lodash/startCase)

**Kind**: global class

* [Inflector](#Inflector)
    * [new Inflector(string)](#new_Inflector_new)
    * [.String](#Inflector+String) ⇒ <code>String</code>
    * [.String](#Inflector+String)
    * [.string](#Inflector+string) : <code>String</code>
    * [.String](#Inflector+String) : <code>String</code>
    * [.underscore()](#Inflector+underscore) ⇒ <code>String</code>
    * [.camelize()](#Inflector+camelize) ⇒ <code>String</code>
    * [.kebab()](#Inflector+kebab) ⇒ <code>String</code>
    * [.humanize()](#Inflector+humanize) ⇒ <code>String</code>

<a name="new_Inflector_new"></a>

### new Inflector(string)
create an instance


| Param | Type |
| --- | --- |
| string | <code>String</code> |

<a name="Inflector+String"></a>

### inflector.String ⇒ <code>String</code>
**Kind**: instance property of [<code>Inflector</code>](#Inflector)
<a name="Inflector+String"></a>

### inflector.String
**Kind**: instance property of [<code>Inflector</code>](#Inflector)

| Param | Type |
| --- | --- |
| string | <code>string</code> |

<a name="Inflector+string"></a>

### inflector.string : <code>String</code>
**Kind**: instance property of [<code>Inflector</code>](#Inflector)
<a name="Inflector+String"></a>

### inflector.String : <code>String</code>
**Kind**: instance property of [<code>Inflector</code>](#Inflector)
<a name="Inflector+underscore"></a>

### inflector.underscore() ⇒ <code>String</code>
convert the string to snake case {'Foo Bar' => 'foo_bar'}

**Kind**: instance method of [<code>Inflector</code>](#Inflector)
**See**: https://lodash.com/docs/4.17.10#snakeCase
<a name="Inflector+camelize"></a>

### inflector.camelize() ⇒ <code>String</code>
convert the string to snake case {'Foo Bar' => 'fooBar'}

**Kind**: instance method of [<code>Inflector</code>](#Inflector)
**See**: https://lodash.com/docs/4.17.10#camelCase
<a name="Inflector+kebab"></a>

### inflector.kebab() ⇒ <code>String</code>
convert the string to kebab case {'Foo Bar' => 'foo-bar'}

**Kind**: instance method of [<code>Inflector</code>](#Inflector)
**See**: https://lodash.com/docs/4.17.10#kebabCase
<a name="Inflector+humanize"></a>

### inflector.humanize() ⇒ <code>String</code>
convert the string to human readable string {'--foo-bar--' >= 'Foo Bar'}

**Kind**: instance method of [<code>Inflector</code>](#Inflector)
**See**: https://lodash.com/docs/4.17.10#startCase
<a name="componentsList"></a>

## componentsList : <code>List</code>
componentsList the list

**Kind**: global variable
<a name="Log"></a>

## Log
The Logger

**Kind**: global constant
<a name="Log"></a>

## Log
The Logger

**Kind**: global constant
<a name="Defaults"></a>

## Defaults : <code>Object</code>
Default settings

**Kind**: global constant
<a name="Log"></a>

## Log
The Logger

**Kind**: global constant
<a name="Defaults"></a>

## Defaults : <code>Object</code>
Deafult settings

**Kind**: global constant
<a name="addEventListener"></a>

## addEventListener(...args)
**Kind**: global function
**See**: https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener

| Param | Type |
| --- | --- |
| ...args | <code>any</code> |

<a name="addEventListener"></a>

## addEventListener(...args)
It listen only for the first occurence of the event
and then it removes the listner

**Kind**: global function
**See**: https://developers.google.com/web/updates/2016/10/addeventlistener-once

| Param | Type |
| --- | --- |
| ...args | <code>any</code> |

<a name="removeEventListener"></a>

## removeEventListener(...args)
**Kind**: global function
**See**: https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/removeEventListener

| Param | Type |
| --- | --- |
| ...args | <code>any</code> |

<a name="dispatchEvent"></a>

## dispatchEvent(...args)
**Kind**: global function
**See**: https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/dispatchEvent

| Param | Type |
| --- | --- |
| ...args | <code>any</code> |

<a name="on"></a>

## on(...args)
**Kind**: global function

| Param | Type |
| --- | --- |
| ...args | <code>any</code> |

<a name="off"></a>

## off(...args)
**Kind**: global function

| Param | Type |
| --- | --- |
| ...args | <code>any</code> |

<a name="trigger"></a>

## trigger(...args)
**Kind**: global function

| Param | Type |
| --- | --- |
| ...args | <code>any</code> |

<a name="kebab"></a>

## kebab()
**Kind**: global function