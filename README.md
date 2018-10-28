[![Build Status](https://travis-ci.com/frappacchio/zero-es6.svg?branch=master)](https://travis-ci.com/frappacchio/zero-es6)
## Classes

<dl>
<dt><a href="#Component">Component</a> ⇐ <code><a href="#EventWrapper">EventWrapper</a></code></dt>
<dd></dd>
<dt><a href="#UserException">UserException</a></dt>
<dd></dd>
<dt><a href="#DomWrapper">DomWrapper</a> ⇐ <code>Wrapper</code></dt>
<dd></dd>
<dt><a href="#DomWrapper">DomWrapper</a></dt>
<dd></dd>
<dt><a href="#Broadcast">Broadcast</a></dt>
<dd><p>Creates a broadcast and emit/listen events
throug the DOM</p>
</dd>
<dt><a href="#EventItem">EventItem</a></dt>
<dd></dd>
<dt><a href="#EventMap">EventMap</a></dt>
<dd></dd>
<dt><a href="#EventWrapper">EventWrapper</a></dt>
<dd></dd>
<dt><a href="#Inflector">Inflector</a></dt>
<dd><p><a href="module:lodash/trim">module:lodash/trim</a>
<a href="module:lodash/snakeCase">module:lodash/snakeCase</a>
<a href="module:lodash/camelCase">module:lodash/camelCase</a>
<a href="module:lodash/upperFirst">module:lodash/upperFirst</a>
<a href="module:lodash/kebabCase">module:lodash/kebabCase</a>
<a href="module:lodash/startCase">module:lodash/startCase</a></p>
</dd>
</dl>

## Constants

<dl>
<dt><a href="#Components">Components</a> : <code>Object</code></dt>
<dd><p>It stores the list of components and instances and allow to register and create a component</p>
</dd>
</dl>

## Functions

<dl>
<dt><a href="#kebab">kebab()</a></dt>
<dd></dd>
</dl>

<a name="Component"></a>

## Component ⇐ [<code>EventWrapper</code>](#EventWrapper)
**Kind**: global class
**Extends**: [<code>EventWrapper</code>](#EventWrapper)

* [Component](#Component) ⇐ [<code>EventWrapper</code>](#EventWrapper)
    * [new Component(element, [broadcast])](#new_Component_new)
    * [.Name](#Component+Name) ⇒ <code>string</code>
    * [.Messages](#Component+Messages) ⇒ <code>object</code>
    * [.Messages](#Component+Messages)
    * [.Broadcast](#Component+Broadcast) ⇒ [<code>Broadcast</code>](#Broadcast)
    * [.Broadcast](#Component+Broadcast)
    * [.EventMap](#EventWrapper+EventMap) ⇒ [<code>EventMap</code>](#EventMap)
    * ~~[.grab(msg, callback)](#Component+grab) ⇒ <code>void</code>~~
    * [.listen(msg, [callback])](#Component+listen) ⇒ <code>void</code>
    * ~~[.ungrab(msg)](#Component+ungrab) ⇒ <code>void</code>~~
    * [.unlisten(msg, [callback])](#Component+unlisten) ⇒ <code>void</code>
    * ~~[.cast(message, [object])](#Component+cast)~~
    * [.emit(message, [object])](#Component+emit)
    * [.destroy()](#Component+destroy)
    * [.on(event, [callback], [options])](#EventWrapper+on) ⇒ [<code>EventItem</code>](#EventItem)
    * [.one(event, [callback], [options])](#EventWrapper+one) ⇒ [<code>EventItem</code>](#EventItem)
    * [.off(event, [callback])](#EventWrapper+off) ⇒ <code>Array</code>
    * [.trigger(event, details)](#EventWrapper+trigger)
    * [.addEventListener(event, [callback], [options])](#EventWrapper+addEventListener) ⇒ [<code>EventItem</code>](#EventItem)
    * [.removeEventListener(event, [callback])](#EventWrapper+removeEventListener) ⇒ <code>Array</code>
    * [.dispatchEvent(event, details)](#EventWrapper+dispatchEvent)

<a name="new_Component_new"></a>

### new Component(element, [broadcast])
A basic component class


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| element | <code>element</code> |  | the DOM element which represents the component |
| [broadcast] | [<code>Broadcast</code>](#Broadcast) | <code>new Broadcast()</code> | the Broadcast for this component |

<a name="Component+Name"></a>

### component.Name ⇒ <code>string</code>
Gets the kebab-case name of component

**Kind**: instance property of [<code>Component</code>](#Component)
**Read only**: true
**Example**
```js
`SuperClass` will returns `super-class`
```
<a name="Component+Messages"></a>

### component.Messages ⇒ <code>object</code>
Gets the component messages

**Kind**: instance property of [<code>Component</code>](#Component)
**Read only**: true
<a name="Component+Messages"></a>

### component.Messages
Set all message which will be read from the component
by the Broadcast

**Kind**: instance property of [<code>Component</code>](#Component)

| Param | Type |
| --- | --- |
| messages | <code>object</code> |

<a name="Component+Broadcast"></a>

### component.Broadcast ⇒ [<code>Broadcast</code>](#Broadcast)
Returns the Broadcast for the component instance

**Kind**: instance property of [<code>Component</code>](#Component)
**Read only**: true
<a name="Component+Broadcast"></a>

### component.Broadcast
Set the broadcast

**Kind**: instance property of [<code>Component</code>](#Component)

| Param | Type |
| --- | --- |
| broadcast | [<code>Broadcast</code>](#Broadcast) |

<a name="EventWrapper+EventMap"></a>

### component.EventMap ⇒ [<code>EventMap</code>](#EventMap)
Returns the EventMap

**Kind**: instance property of [<code>Component</code>](#Component)
**Overrides**: [<code>EventMap</code>](#EventWrapper+EventMap)
**Read only**: true
<a name="Component+grab"></a>

### ~~component.grab(msg, callback) ⇒ <code>void</code>~~
***Deprecated***

An alias for [listen](#componentlisten) method

**Kind**: instance method of [<code>Component</code>](#Component)

| Param | Type | Description |
| --- | --- | --- |
| msg | <code>string</code> | message to broadcast |
| callback | <code>function</code> | message to broadcast |

<a name="Component+listen"></a>

### component.listen(msg, [callback]) ⇒ <code>void</code>
Listen to the broadcast message

**Kind**: instance method of [<code>Component</code>](#Component)

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| msg | <code>string</code> |  | message to broadcast |
| [callback] | <code>function</code> | <code>()&#x3D;&gt;{}</code> | message to broadcast |

<a name="Component+ungrab"></a>

### ~~component.ungrab(msg) ⇒ <code>void</code>~~
***Deprecated***

An alias for [unlisten](#unlisten) method

**Kind**: instance method of [<code>Component</code>](#Component)

| Param | Type | Description |
| --- | --- | --- |
| msg | <code>string</code> | message to broadcast |

<a name="Component+unlisten"></a>

### component.unlisten(msg, [callback]) ⇒ <code>void</code>
Stop listen to the given message

**Kind**: instance method of [<code>Component</code>](#Component)

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| msg | <code>string</code> |  | message to stop to listen to |
| [callback] | <code>string</code> \| <code>function</code> | <code>&quot;&#x27;&#x27;&quot;</code> | callback to stop exectue |

<a name="Component+cast"></a>

### ~~component.cast(message, [object])~~
***Deprecated***

An alias for [cast](#componentcast) method

**Kind**: instance method of [<code>Component</code>](#Component)

| Param | Type | Default |
| --- | --- | --- |
| message | <code>string</code> |  |
| [object] | <code>object</code> | <code>{}</code> |

<a name="Component+emit"></a>

### component.emit(message, [object])
Emit the message to the component Broadcast

**Kind**: instance method of [<code>Component</code>](#Component)

| Param | Type | Default |
| --- | --- | --- |
| message | <code>string</code> |  |
| [object] | <code>object</code> | <code>{}</code> |

<a name="Component+destroy"></a>

### component.destroy()
Destroy and stop to listen for Broadcast messages

**Kind**: instance method of [<code>Component</code>](#Component)
<a name="EventWrapper+on"></a>

### component.on(event, [callback], [options]) ⇒ [<code>EventItem</code>](#EventItem)
An alias for [addEventListener](#eventwrapperaddeventlistener)

**Kind**: instance method of [<code>Component</code>](#Component)
**See**: https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| event | <code>string</code> |  | the event name |
| [callback] | <code>function</code> | <code>()&#x3D;&gt;{}</code> | the callback to exectue |
| [options] | <code>object</code> | <code>{}</code> | the options |

<a name="EventWrapper+one"></a>

### component.one(event, [callback], [options]) ⇒ [<code>EventItem</code>](#EventItem)
It listen only for the first occurence of the event
and then it removes the listner

**Kind**: instance method of [<code>Component</code>](#Component)
**See**: https://developers.google.com/web/updates/2016/10/addeventlistener-once

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| event | <code>string</code> |  | the event name |
| [callback] | <code>function</code> | <code>()&#x3D;&gt;{}</code> | the callback to exectue |
| [options] | <code>object</code> | <code>{}</code> | the options |

<a name="EventWrapper+off"></a>

### component.off(event, [callback]) ⇒ <code>Array</code>
An alias for [removeEventListener](#eventwrapperremoveeventlistener)

**Kind**: instance method of [<code>Component</code>](#Component)
**See**: https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/removeEventListener

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| event | <code>string</code> |  | the event name |
| [callback] | <code>function</code> | <code>()&#x3D;&gt;{}</code> | the callback to exectue |

<a name="EventWrapper+trigger"></a>

### component.trigger(event, details)
An alias for [dispatchEvent](#eventwrapperdispatchevent)

**Kind**: instance method of [<code>Component</code>](#Component)
**See**

- @see https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent/CustomEvent#Polyfill
- https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/dispatchEvent


| Param | Type | Description |
| --- | --- | --- |
| event | <code>string</code> | the event to dispatch |
| details | <code>details</code> | params to dispatch with the event |

<a name="EventWrapper+addEventListener"></a>

### component.addEventListener(event, [callback], [options]) ⇒ [<code>EventItem</code>](#EventItem)
Add event listener to the element

**Kind**: instance method of [<code>Component</code>](#Component)

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| event | <code>string</code> |  | the event name |
| [callback] | <code>function</code> | <code>()&#x3D;&gt;{}</code> | the callback to exectue |
| [options] | <code>object</code> | <code>{}</code> | the options |

<a name="EventWrapper+removeEventListener"></a>

### component.removeEventListener(event, [callback]) ⇒ <code>Array</code>
Stop to Listen to given event

**Kind**: instance method of [<code>Component</code>](#Component)

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| event | <code>string</code> |  | the event to stop listen to |
| [callback] | <code>string</code> \| <code>function</code> | <code>&quot;&#x27;&#x27;&quot;</code> | callback to stop exectue |

<a name="EventWrapper+dispatchEvent"></a>

### component.dispatchEvent(event, details)
Dispatch the event

**Kind**: instance method of [<code>Component</code>](#Component)

| Param | Type | Description |
| --- | --- | --- |
| event | <code>string</code> | the event to dispatch |
| details | <code>details</code> | params to dispatch with the event |

<a name="UserException"></a>

## UserException
**Kind**: global class
<a name="new_UserException_new"></a>

### new UserException(message, [type])
UserException


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| message | <code>string</code> |  | the message to Throw |
| [type] | <code>string</code> | <code>&quot;&#x27;UserException&#x27;&quot;</code> | the type of exception |

<a name="DomWrapper"></a>

## DomWrapper ⇐ <code>Wrapper</code>
**Kind**: global class
**Extends**: <code>Wrapper</code>

* [DomWrapper](#DomWrapper) ⇐ <code>Wrapper</code>
    * [new DomWrapper()](#new_DomWrapper_new)
    * [.find([selector])](#DomWrapper+find) ⇒ <code>Array</code>

<a name="new_DomWrapper_new"></a>

### new DomWrapper()
A simple DOM wrapper

<a name="DomWrapper+find"></a>

### domWrapper.find([selector]) ⇒ <code>Array</code>
Find all the elements matching the query passed and return them
as list of [EventWrapper](#eventwrapper)

**Kind**: instance method of [<code>DomWrapper</code>](#DomWrapper)
**Returns**: <code>Array</code> - all the dom elements returned by the query

| Param | Type | Default |
| --- | --- | --- |
| [selector] | <code>string</code> | <code>&quot;&#x27;*&#x27;&quot;</code> |

<a name="DomWrapper"></a>

## DomWrapper
**Kind**: global class
**Todo**

- [ ] fare in modo di sostituire un reale elmento del dom con uno fake


* [DomWrapper](#DomWrapper)
    * [new DomWrapper()](#new_DomWrapper_new)
    * [.find([selector])](#DomWrapper+find) ⇒ <code>Array</code>

<a name="new_DomWrapper_new"></a>

### new DomWrapper()
A simple DOM wrapper

<a name="DomWrapper+find"></a>

### domWrapper.find([selector]) ⇒ <code>Array</code>
Find all the elements matching the query passed and return them
as list of [EventWrapper](#eventwrapper)

**Kind**: instance method of [<code>DomWrapper</code>](#DomWrapper)
**Returns**: <code>Array</code> - all the dom elements returned by the query

| Param | Type | Default |
| --- | --- | --- |
| [selector] | <code>string</code> | <code>&quot;&#x27;*&#x27;&quot;</code> |

<a name="Broadcast"></a>

## Broadcast
Creates a broadcast and emit/listen events
throug the DOM

**Kind**: global class

* [Broadcast](#Broadcast)
    * [new Broadcast(element, options)](#new_Broadcast_new)
    * ~~[.cast(msg, [obj])](#Broadcast+cast)~~
    * ~~[.ungrab(msg, [callback])](#Broadcast+ungrab)~~
    * ~~[.grab(msg, [callback], options)](#Broadcast+grab) ⇒ <code>void</code>~~
    * [.emit(msg, obj)](#Broadcast+emit)
    * [.listen(msg, [callback], options)](#Broadcast+listen)
    * [.unlisten(msg, [callback])](#Broadcast+unlisten)

<a name="new_Broadcast_new"></a>

### new Broadcast(element, options)

| Param | Type |
| --- | --- |
| element | <code>element</code> \| <code>object</code> |
| options | <code>object</code> |

<a name="Broadcast+cast"></a>

### ~~broadcast.cast(msg, [obj])~~
***Deprecated***

An alias for [emit](#broadcastemit) method

**Kind**: instance method of [<code>Broadcast</code>](#Broadcast)

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| msg | <code>string</code> |  | message to cast |
| [obj] | <code>object</code> | <code>{}</code> | callback to execute on message receiving |

<a name="Broadcast+ungrab"></a>

### ~~broadcast.ungrab(msg, [callback])~~
***Deprecated***

An alias for [unlisten](#broadcastunlisten) method

**Kind**: instance method of [<code>Broadcast</code>](#Broadcast)

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| msg | <code>string</code> |  | message to remove the listen to |
| [callback] | <code>function</code> | <code>()&#x3D;&gt;{}</code> | callback to execute on message receiving |

<a name="Broadcast+grab"></a>

### ~~broadcast.grab(msg, [callback], options) ⇒ <code>void</code>~~
***Deprecated***

An alias for [listen](#broadcastlisten) method

**Kind**: instance method of [<code>Broadcast</code>](#Broadcast)

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| msg | <code>string</code> |  | message to cast |
| [callback] | <code>function</code> | <code>()&#x3D;&gt;{}</code> | callback to execute on message receiving |
| options | <code>object</code> |  |  |

<a name="Broadcast+emit"></a>

### broadcast.emit(msg, obj)
Emit a message throug the Broadcast

**Kind**: instance method of [<code>Broadcast</code>](#Broadcast)

| Param | Type | Description |
| --- | --- | --- |
| msg | <code>string</code> | message to cast |
| obj | <code>object</code> | callback to execute on message receiving |

<a name="Broadcast+listen"></a>

### broadcast.listen(msg, [callback], options)
Add the listener for given event and dispatch the event

**Kind**: instance method of [<code>Broadcast</code>](#Broadcast)

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| msg | <code>string</code> |  | message to cast |
| [callback] | <code>function</code> | <code>()&#x3D;&gt;{}</code> | callback to execute on message receiving |
| options | <code>object</code> |  |  |

<a name="Broadcast+unlisten"></a>

### broadcast.unlisten(msg, [callback])
Remove the listener for given message

**Kind**: instance method of [<code>Broadcast</code>](#Broadcast)

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| msg | <code>string</code> |  | message to cast |
| [callback] | <code>string</code> \| <code>function</code> | <code>&quot;&#x27;&#x27;&quot;</code> | callback to stop exectue |

<a name="EventItem"></a>

## EventItem
**Kind**: global class
**See**: https://github.com/kelektiv/node-uuid
<a name="new_EventItem_new"></a>

### new EventItem(event, [callback])
An object which represent an Event
A `uuid` will be set in order to make the event unique


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| event | <code>string</code> |  | the name of the event |
| [callback] | <code>function</code> | <code>()&#x3D;&gt;{}</code> | the callback to exectue |

<a name="EventMap"></a>

## EventMap
**Kind**: global class

* [EventMap](#EventMap)
    * [new EventMap()](#new_EventMap_new)
    * _instance_
        * [.Map](#EventMap+Map) ⇒ <code>Array</code>
        * [.addEvent(eventName, callback)](#EventMap+addEvent) ⇒ [<code>EventItem</code>](#EventItem)
        * [.deleteEvent(eventName, callback)](#EventMap+deleteEvent) ⇒ <code>Array</code>
    * _static_
        * [.DomWrapper#element](#EventMap.DomWrapper+element)

<a name="new_EventMap_new"></a>

### new EventMap()
Stores all the events to an `Array`

<a name="EventMap+Map"></a>

### eventMap.Map ⇒ <code>Array</code>
Returns the Map

**Kind**: instance property of [<code>EventMap</code>](#EventMap)
**Read only**: true
<a name="EventMap+addEvent"></a>

### eventMap.addEvent(eventName, callback) ⇒ [<code>EventItem</code>](#EventItem)
Add event to the map

**Kind**: instance method of [<code>EventMap</code>](#EventMap)

| Param | Type |
| --- | --- |
| eventName | <code>String</code> |
| callback | <code>function</code> |

<a name="EventMap+deleteEvent"></a>

### eventMap.deleteEvent(eventName, callback) ⇒ <code>Array</code>
Remove an event from given object.
If no callback has passed it removes anonimous functions
such anonimous arrow functions

**Kind**: instance method of [<code>EventMap</code>](#EventMap)

| Param | Type |
| --- | --- |
| eventName | <code>String</code> |
| callback | <code>function</code> \| <code>Object</code> |

<a name="EventMap.DomWrapper+element"></a>

### EventMap.DomWrapper#element
Set the Element which represent the current component

**Kind**: static property of [<code>EventMap</code>](#EventMap)
**Read only**: true

| Param | Type |
| --- | --- |
| domElement | <code>Element</code> |

<a name="EventWrapper"></a>

## EventWrapper
**Kind**: global class

* [EventWrapper](#EventWrapper)
    * [new EventWrapper([element])](#new_EventWrapper_new)
    * _instance_
        * [.EventMap](#EventWrapper+EventMap) ⇒ [<code>EventMap</code>](#EventMap)
        * [.EventMap](#EventWrapper+EventMap)
        * [.on(event, [callback], [options])](#EventWrapper+on) ⇒ [<code>EventItem</code>](#EventItem)
        * [.one(event, [callback], [options])](#EventWrapper+one) ⇒ [<code>EventItem</code>](#EventItem)
        * [.off(event, [callback])](#EventWrapper+off) ⇒ <code>Array</code>
        * [.trigger(event, details)](#EventWrapper+trigger)
        * [.addEventListener(event, [callback], [options])](#EventWrapper+addEventListener) ⇒ [<code>EventItem</code>](#EventItem)
        * [.removeEventListener(event, [callback])](#EventWrapper+removeEventListener) ⇒ <code>Array</code>
        * [.dispatchEvent(event, details)](#EventWrapper+dispatchEvent)
    * _static_
        * [.DomWrapper#element](#EventWrapper.DomWrapper+element) ⇒ <code>Element</code>

<a name="new_EventWrapper_new"></a>

### new EventWrapper([element])
A simple wrapper which allows to use method like .on(...), .off(...)


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [element] | <code>element</code> | <code>document.createElement(&#x27;span&#x27;)</code> | the element to wrap |

<a name="EventWrapper+EventMap"></a>

### eventWrapper.EventMap ⇒ [<code>EventMap</code>](#EventMap)
Returns the EventMap

**Kind**: instance property of [<code>EventWrapper</code>](#EventWrapper)
**Read only**: true
<a name="EventWrapper+EventMap"></a>

### eventWrapper.EventMap
Set the event map

**Kind**: instance property of [<code>EventWrapper</code>](#EventWrapper)

| Param | Type |
| --- | --- |
| map | [<code>EventMap</code>](#EventMap) |

<a name="EventWrapper+on"></a>

### eventWrapper.on(event, [callback], [options]) ⇒ [<code>EventItem</code>](#EventItem)
An alias for [addEventListener](#eventwrapperaddeventlistener)

**Kind**: instance method of [<code>EventWrapper</code>](#EventWrapper)
**See**: https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| event | <code>string</code> |  | the event name |
| [callback] | <code>function</code> | <code>()&#x3D;&gt;{}</code> | the callback to exectue |
| [options] | <code>object</code> | <code>{}</code> | the options |

<a name="EventWrapper+one"></a>

### eventWrapper.one(event, [callback], [options]) ⇒ [<code>EventItem</code>](#EventItem)
It listen only for the first occurence of the event
and then it removes the listner

**Kind**: instance method of [<code>EventWrapper</code>](#EventWrapper)
**See**: https://developers.google.com/web/updates/2016/10/addeventlistener-once

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| event | <code>string</code> |  | the event name |
| [callback] | <code>function</code> | <code>()&#x3D;&gt;{}</code> | the callback to exectue |
| [options] | <code>object</code> | <code>{}</code> | the options |

<a name="EventWrapper+off"></a>

### eventWrapper.off(event, [callback]) ⇒ <code>Array</code>
An alias for [removeEventListener](#eventwrapperremoveeventlistener)

**Kind**: instance method of [<code>EventWrapper</code>](#EventWrapper)
**See**: https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/removeEventListener

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| event | <code>string</code> |  | the event name |
| [callback] | <code>function</code> | <code>()&#x3D;&gt;{}</code> | the callback to exectue |

<a name="EventWrapper+trigger"></a>

### eventWrapper.trigger(event, details)
An alias for [dispatchEvent](#eventwrapperdispatchevent)

**Kind**: instance method of [<code>EventWrapper</code>](#EventWrapper)
**See**

- @see https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent/CustomEvent#Polyfill
- https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/dispatchEvent


| Param | Type | Description |
| --- | --- | --- |
| event | <code>string</code> | the event to dispatch |
| details | <code>details</code> | params to dispatch with the event |

<a name="EventWrapper+addEventListener"></a>

### eventWrapper.addEventListener(event, [callback], [options]) ⇒ [<code>EventItem</code>](#EventItem)
Add event listener to the element

**Kind**: instance method of [<code>EventWrapper</code>](#EventWrapper)

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| event | <code>string</code> |  | the event name |
| [callback] | <code>function</code> | <code>()&#x3D;&gt;{}</code> | the callback to exectue |
| [options] | <code>object</code> | <code>{}</code> | the options |

<a name="EventWrapper+removeEventListener"></a>

### eventWrapper.removeEventListener(event, [callback]) ⇒ <code>Array</code>
Stop to Listen to given event

**Kind**: instance method of [<code>EventWrapper</code>](#EventWrapper)

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| event | <code>string</code> |  | the event to stop listen to |
| [callback] | <code>string</code> \| <code>function</code> | <code>&quot;&#x27;&#x27;&quot;</code> | callback to stop exectue |

<a name="EventWrapper+dispatchEvent"></a>

### eventWrapper.dispatchEvent(event, details)
Dispatch the event

**Kind**: instance method of [<code>EventWrapper</code>](#EventWrapper)

| Param | Type | Description |
| --- | --- | --- |
| event | <code>string</code> | the event to dispatch |
| details | <code>details</code> | params to dispatch with the event |

<a name="EventWrapper.DomWrapper+element"></a>

### EventWrapper.DomWrapper#element ⇒ <code>Element</code>
Get the Element which represent the current component

**Kind**: static property of [<code>EventWrapper</code>](#EventWrapper)
**Read only**: true
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
    * [.String](#Inflector+String) : <code>String</code>
    * [.String](#Inflector+String) : <code>string</code>
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

### inflector.String : <code>String</code>
**Kind**: instance property of [<code>Inflector</code>](#Inflector)
<a name="Inflector+String"></a>

### inflector.String : <code>string</code>
**Kind**: instance property of [<code>Inflector</code>](#Inflector)

| Param | Type |
| --- | --- |
| string | <code>String</code> |

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
<a name="Components"></a>

## Components : <code>Object</code>
It stores the list of components and instances and allow to register and create a component

**Kind**: global constant

* [Components](#Components) : <code>Object</code>
    * [.exists(component)](#Components.exists) ⇒ <code>undefined</code> \| <code>\*</code>
    * [.register(component)](#Components.register)
    * [.create(element, component)](#Components.create) ⇒ <code>\*</code>

<a name="Components.exists"></a>

### Components.exists(component) ⇒ <code>undefined</code> \| <code>\*</code>
Check if already exists a component within the list

**Kind**: static method of [<code>Components</code>](#Components)

| Param | Type |
| --- | --- |
| component | <code>\*</code> |

<a name="Components.register"></a>

### Components.register(component)
Register new component and add it to the List

**Kind**: static method of [<code>Components</code>](#Components)

| Param | Type |
| --- | --- |
| component | <code>\*</code> |

<a name="Components.create"></a>

### Components.create(element, component) ⇒ <code>\*</code>
Create an instance of the new component and add it to the Intances list

**Kind**: static method of [<code>Components</code>](#Components)
**Returns**: <code>\*</code> - instance
**Throws**:

- [<code>UserException</code>](#UserException) if the component has not been registered


| Param | Type |
| --- | --- |
| element | <code>Element</code> |
| component | <code>\*</code> |

<a name="kebab"></a>

## kebab()
**Kind**: global function
