---
sidebar_label: dsketch
title: whylogs.util.dsketch
---

Define functions and classes for interfacing with `datasketches`

#### deserialize\_kll\_floats\_sketch

```python
deserialize_kll_floats_sketch(x: bytes, kind: str = "float")
```

Deserialize a KLL floats sketch.  Compatible with whylogs-java

whylogs histograms are serialized as kll floats sketches

Parameters
----------
x : bytes
    Serialized sketch
kind : str, optional
    Specify type of sketch: &#x27;float&#x27; or &#x27;int&#x27;

Returns
-------
sketch : `kll_floats_sketch`, `kll_ints_sketch`, or None
    If `x` is an empty sketch, return None, else return the deserialized
    sketch.

#### deserialize\_frequent\_strings\_sketch

```python
deserialize_frequent_strings_sketch(x: bytes)
```

Deserialize a frequent strings sketch.  Compatible with whylogs-java

Wrapper for `datasketches.frequent_strings_sketch.deserialize`

Parameters
----------
x : bytes
    Serialized sketch

Returns
-------
sketch : `datasketches.frequent_strings_sketch`, None
    If `x` is an empty string sketch, returns None, else returns the
    deserialized string sketch

## FrequentItemsSketch Objects

```python
class FrequentItemsSketch()
```

A class to implement frequent item counting for mixed data types.

Wraps `datasketches.frequent_strings_sketch` by encoding numbers as
strings since the `datasketches` python implementation does not implement
frequent number tracking.

Parameters
----------
lg_max_k : int, optional
    Parameter controlling the size and accuracy of the sketch.  A larger
    number increases accuracy and the memory requirements for the sketch
sketch : datasketches.frequent_strings_sketch, optional
    Initialize with an existing frequent strings sketch

#### get\_apriori\_error

```python
 | get_apriori_error(lg_max_map_size: int, estimated_total_weight: int)
```

Return an apriori estimate of the uncertainty for various parameters

Parameters
----------
lg_max_map_size : int
    The `lg_max_k` value
estimated_total_weight
    Total weight (see :func:`FrequentItems.get_total_weight`)
Returns
-------
error : float
    Approximate uncertainty

#### get\_frequent\_items

```python
 | get_frequent_items(err_type: datasketches.frequent_items_error_type = None, threshold: int = 0, decode: bool = True)
```

Retrieve the frequent items.


Parameters
----------
err_type : datasketches.frequent_items_error_type
    Override default error type
threshold : int
    Minimum count for returned items
decode : bool (default=True)
    Decode the returned values.  Internally, all items are encoded
    as strings.

Returns
-------
items : list
    A list of tuples of items: ``[(item, count)]``

#### merge

```python
 | merge(other)
```

Merge the item counts of this sketch with another.

This object will not be modified.  This operation is commutative.

Parameters
----------
other: FrequentItemsSketch
    The other sketch

#### copy

```python
 | copy()
```

Returns
-------
sketch : FrequentItemsSketch
    A copy of this sketch

#### serialize

```python
 | serialize()
```

Serialize this sketch as a bytes string.

See also :func:`FrequentItemsSketch.deserialize`

Returns
-------
data : bytes
    Serialized object.

#### update

```python
 | update(x, weight=1)
```

Track an item.

Parameters
----------
x : object
    Item to track
weight : int
    Number of times the item appears

#### to\_summary

```python
 | to_summary(max_items=30, min_count=1)
```

Generate a protobuf summary.  Returns None if there are no frequent
items.

Parameters
----------
max_items : int
    Maximum number of items to return.  The most frequent items will
    be returned
min_count : int
    Minimum number counts for all returned items

Returns
-------
summary : FrequentItemsSummary
    Protobuf summary message

#### to\_protobuf

```python
 | to_protobuf()
```

Generate a protobuf representation of this object

#### from\_protobuf

```python
 | @staticmethod
 | from_protobuf(message: FrequentItemsSketchMessage)
```

Initialize a FrequentItemsSketch from a protobuf
FrequentItemsSketchMessage

#### deserialize

```python
 | @staticmethod
 | deserialize(x: bytes)
```

Deserialize a frequent numbers sketch.

If x is an empty sketch, None is returned

## FrequentNumbersSketch Objects

```python
class FrequentNumbersSketch(FrequentItemsSketch)
```

A class to implement frequent number counting

#### copy

```python
 | copy()
```

Returns
-------
self_copy : FrequentNumbersSketch
    A copy of this object

#### to\_summary

```python
 | to_summary(max_items=30, min_count=1)
```

Generate a protobuf summary.  Returns None if there are no frequent
items.

Parameters
----------
max_items : int
    Maximum number of items to return.  The most frequent items will
    be returned
min_count : int
    Minimum number counts for all returned items

Returns
-------
summary : FrequentNumbersSummary
    Protobuf summary message

#### to\_protobuf

```python
 | to_protobuf()
```

Generate a protobuf representation of this object

#### deserialize

```python
 | @staticmethod
 | deserialize(x: bytes)
```

Deserialize a frequent numbers sketch.

If x is an empty sketch, None is returned

#### flatten\_summary

```python
 | @staticmethod
 | flatten_summary(summary: FrequentItemsSummary)
```

Flatten a FrequentNumbersSummary

