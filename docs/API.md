## Modules

<dl>
<dt><a href="#module_optionist">optionist</a></dt>
<dd></dd>
<dt><a href="#module_optionist/assign">optionist/assign</a></dt>
<dd></dd>
<dt><a href="#module_optionist/assign/method">optionist/assign/method</a></dt>
<dd></dd>
<dt><a href="#module_optionist/assign/property">optionist/assign/property</a></dt>
<dd></dd>
<dt><a href="#module_optionist/assign/underscore">optionist/assign/underscore</a></dt>
<dd></dd>
<dt><a href="#module_optionist/process/get">optionist/process/get</a></dt>
<dd></dd>
<dt><a href="#module_optionist/process">optionist/process</a></dt>
<dd></dd>
</dl>

<a name="module_optionist"></a>

## optionist
<a name="exp_module_optionist--module.exports"></a>

### module.exports([options], [defaultOptions]) ⇒ <code>Object</code> ⏏
Copies and merges options and default options into a new object.
If no options and defaultOptions were passed, or they are both null, or falsy,
an empty Object will be returned (e.g.: {}).

**Kind**: Exported function  
**Returns**: <code>Object</code> - The new object with the merged options.  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>[options]</td><td><code>Object</code></td><td><p>The options to use to merge into a new object.</p>
</td>
    </tr><tr>
    <td>[defaultOptions]</td><td><code>Object</code></td><td><p>The default options to use to merge into a new object.</p>
</td>
    </tr>  </tbody>
</table>

**Example** *(simple options object handling for functions with default options)*  
```js
const optionist = require('optionist')

function myFunction (options = null) {
  options = optionist(options, { value: 42, flag: false })

  // assing to "private" properties...
  this._value = options.value
  this._flag = options.flag

  // ...or handle the specific options
  if (options.value > 0) {
    // handle value
  }

  if (options.flag) {
    // handle flag
  }
}

// calling without passing the options will result the default options, in this case options will be:
// { value: 42, flag: false }
myFunction()

// calling with some of the options will result a merged options object
// extended by the defaults options, when needed, in this case the options will be:
// { value: 0, flag: false }
myFunction({ value: 0 })
```
**Example** *(simple options object handling for classes with default options)*  
```js
const optionist = require('optionist')

class MyClass {
  constructor (options = null) {
    options = optionist(options, { data: null, settings: null })

    // assing to "private" properties...
    this._data = options.data
    this._settings = options.settings

    // ...or handle the specific options
    if (!options.data) {
      // handle data
    }

    if (!options.settings) {
      // handle settings
    }
  }
}

// no options parameter - the default options will be used, in this case the options will be:
// { data: null, settings: null }
const c1 = new MyClass()

// custom options were passed - when some/all options are passed, only missing options
// will be used from the default options, in this case the options will be:
// { data: [1, 2, 3], settings: null }
const c2 = new MyClass({ data: [1, 2, 3] })
```
**Example** *(simple options object handling **best practices** - use a **const** for defaults)*  
```js
// store your default values here
const DEFAULTS = {
  value: 0,
  flag: false,
  data: null
  // etc...
}

// with functions:
function myFunction (options = null) {
  options = optionist(options, DEFAULTS)
  // ...
}

// with classes:
class MyClass {
  constructor (options = null) {
    options = optionist(options, DEFAULTS)
    // ...
  }
}
```
**Example** *(simple options object handling **best practices** - use **only for simpler** options)*  
```js
// simple, non-deep, trivial options:
function myFunction (options = null) {
  options = optionist(options, DEFAULTS)

  // no deeply nested Objects, etc.
  this._value = options.value
  this._flag = options.flag

  if (options.value > 0) {
    // handle value
  }

  if (options.flag) {
    // handle flag
  }
}
```
**Example** *(simple options object handling **best practices** - use **optionist/process** for complex options)*  
```js
// for more complex, deeply nested options, use 'optionist/process' with 'optionist/process/get',
// as they provide a convenient way via recursive Proxy to get specific options,
// without constantly checking whether a key exists in the current object
const process = require('optionist/process')
const get = require('optionist/process/get')

function myFunction (options = null) {
  options = process(options, DEFAULTS)

  // handle complex, deeply nested Objects without 'Uncaught ReferenceError'
  // and constant "key within object" checking, e.g.:
  // note: key existence checking isn't needed (e.g.: if (options.settings && 'data' in options.settings && ...))
  this._value = get(options.settings.deeply.nested.data.value)
  // note: per-option default option is also possible, when the specific option doesn't exist
  this._flag = get(options.settings.burried.deeply.flag, true)

  // also possible in conditions...
  if (get(options.deeply.nested.settings.value) > 0) {
    // handle value
  }

  // ...with per-option default option, when the specific option doesn't exist
  if (get(options.some.other.deeply.nested.flag, false)) {
    // handle flag
  }
}
```
<a name="module_optionist/assign"></a>

## optionist/assign
<a name="module_optionist/assign/method"></a>

## optionist/assign/method
<a name="exp_module_optionist/assign/method--module.exports"></a>

### module.exports(class_, [options], [defaultOptions]) ⏏
Processes the given options and assigns them by calling the setter methods
(e.g.: "this.setText('data')") of the given class.

**Kind**: Exported function  
**Throws**:

- <code>TypeError</code> In case the class_ parameter is not present or null or falsy.

<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>class_</td><td><code>Object</code></td><td><p>The class to assing the options to via setter methods.</p>
</td>
    </tr><tr>
    <td>[options]</td><td><code>Object</code></td><td><p>The options to process and assing.</p>
</td>
    </tr><tr>
    <td>[defaultOptions]</td><td><code>Object</code></td><td><p>The default options to process and assing.</p>
</td>
    </tr>  </tbody>
</table>

<a name="module_optionist/assign/property"></a>

## optionist/assign/property
<a name="exp_module_optionist/assign/property--module.exports"></a>

### module.exports(class_, [options], [defaultOptions]) ⏏
Processes the given options and assigns them by calling the setter properties
(e.g.: "this.text = 'data'") of the given class.

**Kind**: Exported function  
**Throws**:

- <code>TypeError</code> In case the class_ parameter is not present or null or falsy.

<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>class_</td><td><code>Object</code></td><td><p>The class to assing the options to via setter properties.</p>
</td>
    </tr><tr>
    <td>[options]</td><td><code>Object</code></td><td><p>The options to process and assing.</p>
</td>
    </tr><tr>
    <td>[defaultOptions]</td><td><code>Object</code></td><td><p>The default options to process and assing.</p>
</td>
    </tr>  </tbody>
</table>

<a name="module_optionist/assign/underscore"></a>

## optionist/assign/underscore
<a name="exp_module_optionist/assign/underscore--module.exports"></a>

### module.exports(class_, [options], [defaultOptions]) ⏏
Processes the given options and assigns them by setting the underscored properties
(e.g.: "this._text = 'data'") of the given class.

**Kind**: Exported function  
**Throws**:

- <code>TypeError</code> In case the class_ parameter is not present or null or falsy.

<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>class_</td><td><code>Object</code></td><td><p>The class to assing the options to via underscored properties.</p>
</td>
    </tr><tr>
    <td>[options]</td><td><code>Object</code></td><td><p>The options to process and assing.</p>
</td>
    </tr><tr>
    <td>[defaultOptions]</td><td><code>Object</code></td><td><p>The default options to process and assing.</p>
</td>
    </tr>  </tbody>
</table>

<a name="module_optionist/process/get"></a>

## optionist/process/get
<a name="exp_module_optionist/process/get--module.exports"></a>

### module.exports([option], [defaultOption]) ⇒ <code>\*</code> ⏏
Returns the specific option of the processed options from a recursive Proxy.

**Kind**: Exported function  
**Returns**: <code>\*</code> - The specific option.  
**Throws**:

- <code>TypeError</code> In case the option was not previously processed with ".process()".

<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>[option]</td><td><code>Object</code></td><td><p>The specific option to return.</p>
</td>
    </tr><tr>
    <td>[defaultOption]</td><td><code>Object</code></td><td><p>The default option to return in case the specific option is not present.</p>
</td>
    </tr>  </tbody>
</table>

<a name="module_optionist/process"></a>

## optionist/process
<a name="exp_module_optionist/process--module.exports"></a>

### module.exports([options], [defaultOptions]) ⇒ <code>Object</code> ⏏
Processes the options and default options into a new recursive Proxy.

**Kind**: Exported function  
**Returns**: <code>Object</code> - The new recursive Proxy with the processed options.  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>[options]</td><td><code>Object</code></td><td><p>The options to use to merge into a new recursive Proxy.</p>
</td>
    </tr><tr>
    <td>[defaultOptions]</td><td><code>Object</code></td><td><p>The default options to use to merge into a new recursive Proxy.</p>
</td>
    </tr>  </tbody>
</table>

