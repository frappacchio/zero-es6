### Table of Contents

-   [Component][1]
    -   [Parameters][2]
    -   [Name][3]
    -   [Messages][4]
        -   [Parameters][5]
    -   [Broadcast][6]
        -   [Parameters][7]
    -   [GRAB][8]
        -   [Parameters][9]
    -   [UNGRAB][10]
        -   [Parameters][11]
    -   [CAST][12]
        -   [Parameters][13]
    -   [destroy][14]
-   [EventWrapper][15]
    -   [Parameters][16]
    -   [EventMap][17]
        -   [Parameters][18]
    -   [EventMap][19]
    -   [eventMap][20]
    -   [element][21]
        -   [Parameters][22]
    -   [element][23]
    -   [domElement][24]
    -   [addEventListener][25]
        -   [Parameters][26]
    -   [addEventListener][27]
        -   [Parameters][28]
    -   [removeEventListener][29]
        -   [Parameters][30]
    -   [dispatchEvent][31]
        -   [Parameters][32]
    -   [on][33]
        -   [Parameters][34]
    -   [off][35]
        -   [Parameters][36]
    -   [trigger][37]
        -   [Parameters][38]
-   [eventMap][39]
-   [domElement][40]
-   [Broadcast][41]
    -   [Parameters][42]
    -   [Defaults][43]
    -   [Defaults][44]
        -   [Parameters][45]
    -   [cast][46]
        -   [Parameters][47]
    -   [grab][48]
        -   [Parameters][49]
    -   [ungrab][50]
        -   [Parameters][51]
-   [Inflector][52]
    -   [Parameters][53]
    -   [String][54]
    -   [String][55]
        -   [Parameters][56]
    -   [String][57]
    -   [string][58]
    -   [underscore][59]
    -   [camelize][60]
        -   [Parameters][61]
    -   [kebab][62]
    -   [kebab][63]
    -   [humanize][64]
-   [string][65]
-   [EventMap][66]
    -   [Map][67]
        -   [Parameters][68]
    -   [Map][69]
    -   [Map][70]
    -   [map][71]
    -   [eventIndex][72]
        -   [Parameters][73]
    -   [addEvent][74]
        -   [Parameters][75]
    -   [deleteEvent][76]
        -   [Parameters][77]
    -   [strictDeleteEvent][78]
        -   [Parameters][79]
-   [map][80]

## Component

**Extends EventWrapper**

It define a basic component

### Parameters

-   `element` **[Element][81]**
-   `broadcast` **[Broadcast][82]** the broadcast for this component (optional, default `newBroadcast()`)

### Name

Returns **[String][83]** the kebab-case name of given component class

### Messages

Set all message which will be read from the component
by the Broadcast

#### Parameters

-   `messages` **[Object][84]**

### Broadcast

Set the broadcast

#### Parameters

-   `broadcast` **[Broadcast][82]**

### GRAB

Grabs the broadcast message

#### Parameters

-   `args` **...any** message to broadcast

Returns **[Component][85]** the instance of the class

### UNGRAB

Grabs the broadcast message

#### Parameters

-   `args` **...any** message to broadcast

Returns **[Component][85]** the instance of the class

### CAST

Broadcast a message to the broadcast

#### Parameters

-   `message` **[String][83]** message to broadcast
-   `obj` **...any**

Returns **[Component][85]** the instance of the class

### destroy

Destroy the component instance

Returns **void**

## EventWrapper

A simple wrapper which allows to use method like .on(...), .off(...)

### Parameters

-   `element` **[Element][81]**  (optional, default `document.createElement('span')`)

### EventMap

Set the event map

#### Parameters

-   `map` **[EventMap][86]**

### EventMap

Get the event map

Returns **[EventMap][86]** the map

### eventMap

Type: [EventMap][86]

### element

Set the Element which represent the current component

#### Parameters

-   `domElement` **[Element][81]**

### element

Get the Element which represent the current component

Returns **[Element][81]** domElement

### domElement

Type: [Element][81]

### addEventListener

-   **See: [https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener][87]**

#### Parameters

-   `args` **...any**

Returns **EventItem**

### addEventListener

-   **See: [https://developers.google.com/web/updates/2016/10/addeventlistener-once][88]**

It listen only for the first occurence of the event
and then it removes the listner

#### Parameters

-   `args` **...any**

Returns **EventItem**

### removeEventListener

-   **See: [https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/removeEventListener][89]**

#### Parameters

-   `args` **...any**

Returns **[Array][90]**

### dispatchEvent

-   **See: @see [https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent/CustomEvent#Polyfill][91]**
-   **See: [https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/dispatchEvent][92]**

#### Parameters

-   `args` **...any**

### on

#### Parameters

-   `args` **...any**

Returns **EventItem**

### off

#### Parameters

-   `args` **...any**

Returns **[Array][90]**

### trigger

#### Parameters

-   `args` **...any**

## eventMap

Type: [EventMap][86]

## domElement

Type: [Element][81]

## Broadcast

**Extends EventWrapper**

Grab and dispatch messages throug the dom

### Parameters

-   `element` **([Element][81] \| [Object][84])**
-   `options` **[Object][84]**  (optional, default `{namespace:'msg'}`)

### Defaults

Get the default settings

Returns **[Object][84]**

### Defaults

Set the configuration

#### Parameters

-   `options` **[Object][84]**

### cast

Cast a message throug the dom

#### Parameters

-   `msg` **[String][83]** message to cast
-   `obj` **[Object][84]** callback to execute on message receiving (optional, default `{}`)

### grab

Add the listener for given event and dispatch the event

#### Parameters

-   `msg` **[String][83]** message to cast
-   `callback` **[Function][93]** callback to execute on message receiving
-   `options` **[Object][84]**  (optional, default `{}`)

### ungrab

Remove the listener for given message

#### Parameters

-   `msg` **[String][83]** message to cast
-   `callback` **[Function][93]** callback to execute on message receiving

## Inflector

String manipulation utility uses Lodash

### Parameters

-   `string` **[String][83]**

### String

Returns **[String][83]**

### String

#### Parameters

-   `string` **[string][94]**

### String

Type: [String][83]

### string

Type: [String][83]

### underscore

-   **See: [https://lodash.com/docs/4.17.10#snakeCase][95]**

convert the string to snake case {'Foo Bar' => 'foo_bar'}

Returns **[String][83]**

### camelize

-   **See: [https://lodash.com/docs/4.17.10#camelCase][96]**

convert the string to snake case {'Foo Bar' => 'fooBar'}

#### Parameters

-   `firstUpperCase`   (optional, default `false`)

Returns **[String][83]**

### kebab

-   **See: [https://lodash.com/docs/4.17.10#kebabCase][97]**

convert the string to kebab case {'Foo Bar' => 'foo-bar'}

Returns **[String][83]**

### kebab

### humanize

-   **See: [https://lodash.com/docs/4.17.10#startCase][98]**

convert the string to human readable string {'--foo-bar--' >= 'Foo Bar'}

Returns **[String][83]**

## string

Type: [String][83]

## EventMap

Manage all the component events for given namespace

### Map

#### Parameters

-   `map`

Returns **[Array][90]**

### Map

Returns **[Array][90]**

### Map

Type: [Object][84]

### map

Type: [Array][90]

### eventIndex

Returns the index of given `eventItem` within the map

#### Parameters

-   `eventItem` **EventItem**

Returns **[Number][99]**

### addEvent

Add event to the map

#### Parameters

-   `eventName` **[String][83]**
-   `callback` **[Function][93]**

Returns **[Map][100]** map

### deleteEvent

Remove an event from given object.
If no callback has passed it removes anonimous functions
such anonimous arrow functions

#### Parameters

-   `eventName` **[String][83]**
-   `callback` **([Function][93] \| [Object][84])**  (optional, default `{name:''}`)
-   `strict` **[Boolean][101]** strict (optional, default `false`)

Returns **[Array][90]**

### strictDeleteEvent

Remove an event from given object using the `uuid` of given event

#### Parameters

-   `eventName` **[String][83]**
-   `uuid` **[String][83]**

Returns **[Array][90]**

## map

Type: [Array][90]

[1]: #component

[2]: #parameters

[3]: #name

[4]: #messages

[5]: #parameters-1

[6]: #broadcast

[7]: #parameters-2

[8]: #grab

[9]: #parameters-3

[10]: #ungrab

[11]: #parameters-4

[12]: #cast

[13]: #parameters-5

[14]: #destroy

[15]: #eventwrapper

[16]: #parameters-6

[17]: #eventmap

[18]: #parameters-7

[19]: #eventmap-1

[20]: #eventmap-2

[21]: #element

[22]: #parameters-8

[23]: #element-1

[24]: #domelement

[25]: #addeventlistener

[26]: #parameters-9

[27]: #addeventlistener-1

[28]: #parameters-10

[29]: #removeeventlistener

[30]: #parameters-11

[31]: #dispatchevent

[32]: #parameters-12

[33]: #on

[34]: #parameters-13

[35]: #off

[36]: #parameters-14

[37]: #trigger

[38]: #parameters-15

[39]: #eventmap-3

[40]: #domelement-1

[41]: #broadcast-1

[42]: #parameters-16

[43]: #defaults

[44]: #defaults-1

[45]: #parameters-17

[46]: #cast-1

[47]: #parameters-18

[48]: #grab-1

[49]: #parameters-19

[50]: #ungrab-1

[51]: #parameters-20

[52]: #inflector

[53]: #parameters-21

[54]: #string

[55]: #string-1

[56]: #parameters-22

[57]: #string-2

[58]: #string-3

[59]: #underscore

[60]: #camelize

[61]: #parameters-23

[62]: #kebab

[63]: #kebab-1

[64]: #humanize

[65]: #string-4

[66]: #eventmap-4

[67]: #map

[68]: #parameters-24

[69]: #map-1

[70]: #map-2

[71]: #map-3

[72]: #eventindex

[73]: #parameters-25

[74]: #addevent

[75]: #parameters-26

[76]: #deleteevent

[77]: #parameters-27

[78]: #strictdeleteevent

[79]: #parameters-28

[80]: #map-4

[81]: https://developer.mozilla.org/docs/Web/API/Element

[82]: #broadcast

[83]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String

[84]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object

[85]: #component

[86]: #eventmap

[87]: https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener

[88]: https://developers.google.com/web/updates/2016/10/addeventlistener-once

[89]: https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/removeEventListener

[90]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array

[91]: https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent/CustomEvent#Polyfill

[92]: https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/dispatchEvent

[93]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Statements/function

[94]: #string

[95]: https://lodash.com/docs/4.17.10#snakeCase

[96]: https://lodash.com/docs/4.17.10#camelCase

[97]: https://lodash.com/docs/4.17.10#kebabCase

[98]: https://lodash.com/docs/4.17.10#startCase

[99]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number

[100]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Map

[101]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean