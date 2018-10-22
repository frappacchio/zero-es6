## Component ⇐ <code>EventWrapper</code>
**Kind**: global class
**Extends**: <code>EventWrapper</code>

* [Component](#Component) ⇐ <code>EventWrapper</code>
    * [new Component(element, [broadcast])](#new_Component_new)
    * [.Name](#Component+Name) ⇒ <code>string</code>
    * [.Messages](#Component+Messages) ⇒ <code>object</code>
    * [.Messages](#Component+Messages)
    * [.Broadcast](#Component+Broadcast) ⇒ <code>Broadcast</code>
    * [.Broadcast](#Component+Broadcast)
    * ~~[.grab(msg, callback)](#Component+grab) ⇒ <code>void</code>~~
    * [.listen(msg, [callback])](#Component+listen) ⇒ <code>void</code>
    * ~~[.ungrab(msg)](#Component+ungrab) ⇒ <code>void</code>~~
    * [.unlisten(msg, [callback])](#Component+unlisten) ⇒ <code>void</code>
    * ~~[.cast(message, [object])](#Component+cast)~~
    * [.emit(message, [object])](#Component+emit)
    * [.destroy()](#Component+destroy)

<a name="new_Component_new"></a>

### new Component(element, [broadcast])
A basic component class


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| element | <code>element</code> |  | the DOM element which represents the component |
| [broadcast] | <code>Broadcast</code> | <code>new Broadcast()</code> | the Broadcast for this component |

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

### component.Broadcast ⇒ <code>Broadcast</code>
Returns the Broadcast for the component instance

**Kind**: instance property of [<code>Component</code>](#Component)
**Read only**: true
<a name="Component+Broadcast"></a>

### component.Broadcast
Set the broadcast

**Kind**: instance property of [<code>Component</code>](#Component)

| Param | Type |
| --- | --- |
| broadcast | <code>Broadcast</code> |

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
