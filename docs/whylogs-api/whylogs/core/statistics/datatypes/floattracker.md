# Table of Contents

* [whylogs.core.statistics.datatypes.floattracker](#whylogs.core.statistics.datatypes.floattracker)
  * [FloatTracker](#whylogs.core.statistics.datatypes.floattracker.FloatTracker)
    * [update](#whylogs.core.statistics.datatypes.floattracker.FloatTracker.update)
    * [add\_integers](#whylogs.core.statistics.datatypes.floattracker.FloatTracker.add_integers)
    * [mean](#whylogs.core.statistics.datatypes.floattracker.FloatTracker.mean)
    * [merge](#whylogs.core.statistics.datatypes.floattracker.FloatTracker.merge)
    * [to\_protobuf](#whylogs.core.statistics.datatypes.floattracker.FloatTracker.to_protobuf)
    * [from\_protobuf](#whylogs.core.statistics.datatypes.floattracker.FloatTracker.from_protobuf)

---
sidebar_label: floattracker
title: whylogs.core.statistics.datatypes.floattracker
---

## FloatTracker Objects

```python
class FloatTracker()
```

Track statistics for floating point numbers

Parameters
---------
min : float
Current min value
max : float
Current max value
sum : float
Sum of the numbers
count : int
Total count of numbers

#### update

```python
 | update(value: float)
```

Add a number to the tracking statistics

#### add\_integers

```python
 | add_integers(tracker)
```

Copy data from a IntTracker into this object, overwriting the current
values.

Parameters
----------
tracker : IntTracker

#### mean

```python
 | mean()
```

Calculate the current mean

#### merge

```python
 | merge(other)
```

Merge this tracker with another.

Parameters
----------
other : FloatTracker
The other float tracker

Returns
-------
merged : FloatTracker
A new float tracker

#### to\_protobuf

```python
 | to_protobuf()
```

Return the object serialized as a protobuf message

Returns
-------
message : DoublesMessage

#### from\_protobuf

```python
 | @staticmethod
 | from_protobuf(message)
```

Load from a protobuf message

Returns
-------
number_tracker : FloatTracker

