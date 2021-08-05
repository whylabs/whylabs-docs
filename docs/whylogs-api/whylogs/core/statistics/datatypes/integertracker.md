# Table of Contents

* [whylogs.core.statistics.datatypes.integertracker](#whylogs.core.statistics.datatypes.integertracker)
  * [IntTracker](#whylogs.core.statistics.datatypes.integertracker.IntTracker)
    * [set\_defaults](#whylogs.core.statistics.datatypes.integertracker.IntTracker.set_defaults)
    * [mean](#whylogs.core.statistics.datatypes.integertracker.IntTracker.mean)
    * [update](#whylogs.core.statistics.datatypes.integertracker.IntTracker.update)
    * [merge](#whylogs.core.statistics.datatypes.integertracker.IntTracker.merge)
    * [to\_protobuf](#whylogs.core.statistics.datatypes.integertracker.IntTracker.to_protobuf)
    * [from\_protobuf](#whylogs.core.statistics.datatypes.integertracker.IntTracker.from_protobuf)

---
sidebar_label: integertracker
title: whylogs.core.statistics.datatypes.integertracker
---

## IntTracker Objects

```python
class IntTracker()
```

Track statistics for integers

Parameters
---------
min
Current min value
max
Current max value
sum
Sum of the numbers
count
Total count of numbers

#### set\_defaults

```python
 | set_defaults()
```

Set attribute values to defaults

#### mean

```python
 | mean()
```

Calculate the current mean.  Returns `None` if `self.count = 0`

#### update

```python
 | update(value)
```

Add a number to the tracking statistics

#### merge

```python
 | merge(other)
```

Merge values of another IntTracker with this one.

Parameters
----------
other : IntTracker
Other tracker

Returns
-------
new : IntTracker
New, merged tracker

#### to\_protobuf

```python
 | to_protobuf()
```

Return the object serialized as a protobuf message

Returns
-------
message : LongsMessage

#### from\_protobuf

```python
 | @staticmethod
 | from_protobuf(message)
```

Load from a protobuf message

Returns
-------
number_tracker : IntTracker

