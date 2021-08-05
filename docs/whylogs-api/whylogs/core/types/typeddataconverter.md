# Table of Contents

* [whylogs.core.types.typeddataconverter](#whylogs.core.types.typeddataconverter)
  * [TypedDataConverter](#whylogs.core.types.typeddataconverter.TypedDataConverter)
    * [convert](#whylogs.core.types.typeddataconverter.TypedDataConverter.convert)
    * [get\_type](#whylogs.core.types.typeddataconverter.TypedDataConverter.get_type)

---
sidebar_label: typeddataconverter
title: whylogs.core.types.typeddataconverter
---

TODO: implement this using something other than yaml

## TypedDataConverter Objects

```python
class TypedDataConverter()
```

A class to coerce types on data.

To see available types:

.. code-block:: python

&gt;&gt;&gt; from whylogs.core.types.typeddataconverter import TYPES
&gt;&gt;&gt; print(&quot;\\n&quot;.join(sorted(TYPES.keys())))

#### convert

```python
 | @staticmethod
 | convert(data)
```

Convert `data` to a typed value

If a `data` is a string, parse `data` with yaml.  Else, return `data`
unchanged

Note: this method is very slow, since it relies on the complex and
python-based implementation of yaml.

#### get\_type

```python
 | @staticmethod
 | get_type(typed_data)
```

Extract the data type of a value.  See `typeddataconvert.TYPES` for
available types.

Parameters
----------
typed_data
Data processed by TypedDataConverter.convert

Returns
-------
dtype : TYPES

