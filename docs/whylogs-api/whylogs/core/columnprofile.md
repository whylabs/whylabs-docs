---
sidebar_label: columnprofile
title: whylogs.core.columnprofile
---

Defines the ColumnProfile class for tracking per-column statistics

## ColumnProfile Objects

```python
class ColumnProfile()
```

Statistics tracking for a column (i.e. a feature)

The primary method for

Parameters
----------
name : str (required)
    Name of the column profile
number_tracker : NumberTracker
    Implements numeric data statistics tracking
string_tracker : StringTracker
    Implements string data-type statistics tracking
schema_tracker : SchemaTracker
    Implements tracking of schema-related information
counters : CountersTracker
    Keep count of various things
frequent_items : FrequentItemsSketch
    Keep track of all frequent items, even for mixed datatype features
cardinality_tracker : HllSketch
    Track feature cardinality (even for mixed data types)
constraints : ValueConstraints
    Static assertions to be applied to numeric data tracked in this column

TODO:
    * Proper TypedDataConverter type checking
    * Multi-threading/parallelism

#### track

```python
 | track(value)
```

Add `value` to tracking statistics.

#### to\_summary

```python
 | to_summary()
```

Generate a summary of the statistics

Returns
-------
summary : ColumnSummary
    Protobuf summary message.

#### merge

```python
 | merge(other)
```

Merge this columnprofile with another.

Parameters
----------
other : ColumnProfile

Returns
-------
merged : ColumnProfile
    A new, merged column profile.

#### to\_protobuf

```python
 | to_protobuf()
```

Return the object serialized as a protobuf message

Returns
-------
message : ColumnMessage

#### from\_protobuf

```python
 | @staticmethod
 | from_protobuf(message)
```

Load from a protobuf message

Returns
-------
column_profile : ColumnProfile

