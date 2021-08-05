# Table of Contents

* [whylogs.util.data](#whylogs.util.data)
  * [getter](#whylogs.util.data.getter)
  * [remap](#whylogs.util.data.remap)
  * [get\_valid\_filename](#whylogs.util.data.get_valid_filename)

---
sidebar_label: data
title: whylogs.util.data
---

Utility functions for interacting with data

#### getter

```python
getter(x, k: str, *args)
```

get an attribute (from an object) or key (from a dict-like object)

`getter(x, k)` raise KeyError if `k` not present

`getter(x, k, default)` return default if `k` not present

This is a convenience function that allows you to interact the same with
an object or a dictionary

Parameters
----------
x : object, dict
Item to get attribute from
k : str
Key or attribute name
default : optional
Default value if `k` not present

Returns
-------
val : object
Associated value

#### remap

```python
remap(x, mapping: dict)
```

Flatten a nested dictionary/object according to a specified name mapping.

Parameters
----------
x : object, dict
An object or dict which can be treated as a nested dictionary, where
attributes can be accessed as:
`attr = x.a.b[&#x27;key_name&#x27;][&#x27;other_Name&#x27;].d`
Indexing list values is not implemented, e.g.:
`x.a.b[3].d[&#x27;key_name&#x27;]`
mapping : dict
Nested dictionary specifying the mapping.  ONLY values specified in the
mapping will be returned.
For example:

.. code-block:: python

{&#x27;a&#x27;: {
&#x27;b&#x27;: {
&#x27;c&#x27;: &#x27;new_name&#x27;
}
}

could flatten `x.a.b.c` or `x.a[&#x27;b&#x27;][&#x27;c&#x27;]` to `x[&#x27;new_name&#x27;]`

Returns
-------
flat : OrderedDict
A flattened ordered dictionary of values

#### get\_valid\_filename

```python
get_valid_filename(s)
```

Return the given string converted to a string that can be used for a clean
filename. Remove leading and trailing spaces; convert other spaces to
underscores; and remove anything that is not an alphanumeric, dash,
underscore, or dot.

.. code-block:: python

&gt;&gt;&gt; from whylogs.util.data import get_valid_filename
&gt;&gt;&gt; get_valid_filename(&quot;  Background of tim&#x27;s 8/1/2019 party!.jpg &quot;)

