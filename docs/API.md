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

