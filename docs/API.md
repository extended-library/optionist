## Modules

<dl>
<dt><a href="#module_optionry">optionry</a></dt>
<dd></dd>
<dt><a href="#module_optionry/assign">optionry/assign</a></dt>
<dd></dd>
<dt><a href="#module_optionry/assign/method">optionry/assign/method</a></dt>
<dd></dd>
<dt><a href="#module_optionry/assign/property">optionry/assign/property</a></dt>
<dd></dd>
<dt><a href="#module_optionry/assign/underscore">optionry/assign/underscore</a></dt>
<dd></dd>
<dt><a href="#module_optionry/process/get">optionry/process/get</a></dt>
<dd></dd>
<dt><a href="#module_optionry/process">optionry/process</a></dt>
<dd></dd>
</dl>

<a name="module_optionry"></a>

## optionry
<a name="exp_module_optionry--module.exports"></a>

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

<a name="module_optionry/assign"></a>

## optionry/assign
<a name="module_optionry/assign/method"></a>

## optionry/assign/method
<a name="exp_module_optionry/assign/method--module.exports"></a>

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

<a name="module_optionry/assign/property"></a>

## optionry/assign/property
<a name="exp_module_optionry/assign/property--module.exports"></a>

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

<a name="module_optionry/assign/underscore"></a>

## optionry/assign/underscore
<a name="exp_module_optionry/assign/underscore--module.exports"></a>

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

<a name="module_optionry/process/get"></a>

## optionry/process/get
<a name="exp_module_optionry/process/get--module.exports"></a>

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

<a name="module_optionry/process"></a>

## optionry/process
<a name="exp_module_optionry/process--module.exports"></a>

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

