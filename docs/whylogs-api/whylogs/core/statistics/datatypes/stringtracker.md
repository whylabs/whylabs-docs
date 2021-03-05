---
sidebar_label: stringtracker
title: whylogs.core.statistics.datatypes.stringtracker
---

## StringTracker Objects

```python
class StringTracker()
```

Track statistics for strings

Parameters
----------
count : int
    Total number of processed values
items : frequent_strings_sketch
    Sketch for tracking string counts
theta_sketch : ThetaSketch
    Sketch for approximate cardinality tracking

#### update

```python
 | update(value: str)
```

Add a string to the tracking statistics.

If `value` is `None`, nothing will be done

#### merge

```python
 | merge(other)
```

Merge the values of this string tracker with another

Parameters
----------
other : StringTracker
    The other StringTracker

Returns
-------
new : StringTracker
    Merged values

#### to\_protobuf

```python
 | to_protobuf()
```

Return the object serialized as a protobuf message

Returns
-------
message : StringsMessage

#### from\_protobuf

```python
 | @staticmethod
 | from_protobuf(message: StringsMessage)
```

Load from a protobuf message

Returns
-------
string_tracker : StringTracker

#### to\_summary

```python
 | to_summary()
```

Generate a summary of the statistics

Returns
-------
summary : StringsSummary
    Protobuf summary message.

