# Table of Contents

* [whylogs.core.statistics.schematracker](#whylogs.core.statistics.schematracker)
  * [SchemaTracker](#whylogs.core.statistics.schematracker.SchemaTracker)
    * [track](#whylogs.core.statistics.schematracker.SchemaTracker.track)
    * [get\_count](#whylogs.core.statistics.schematracker.SchemaTracker.get_count)
    * [infer\_type](#whylogs.core.statistics.schematracker.SchemaTracker.infer_type)
    * [merge](#whylogs.core.statistics.schematracker.SchemaTracker.merge)
    * [copy](#whylogs.core.statistics.schematracker.SchemaTracker.copy)
    * [to\_protobuf](#whylogs.core.statistics.schematracker.SchemaTracker.to_protobuf)
    * [from\_protobuf](#whylogs.core.statistics.schematracker.SchemaTracker.from_protobuf)
    * [to\_summary](#whylogs.core.statistics.schematracker.SchemaTracker.to_summary)

---
sidebar_label: schematracker
title: whylogs.core.statistics.schematracker
---

## SchemaTracker Objects

```python
class SchemaTracker()
```

Track information about a column&#x27;s schema and present datatypes

Paramters
---------
type_counts : dict
If specified, a dictionary containing information about the counts of
all data types.

#### track

```python
 | track(item_type)
```

Track an item type

#### get\_count

```python
 | get_count(item_type)
```

Return the count of a given item type

#### infer\_type

```python
 | infer_type()
```

Generate a guess at what type the tracked values are.

Returns
-------
type_guess : object
The guess tome.  See `InferredType.Type` for candidates

#### merge

```python
 | merge(other)
```

Merge another schema tracker with this and return a new one.
Does not alter this object.

Parameters
----------
other : SchemaTracker

Returns
-------
merged : SchemaTracker
Merged tracker

#### copy

```python
 | copy()
```

Return a copy of this tracker

#### to\_protobuf

```python
 | to_protobuf()
```

Return the object serialized as a protobuf message

Returns
-------
message : SchemaMessage

#### from\_protobuf

```python
 | @staticmethod
 | from_protobuf(message, legacy_null_count=0)
```

Load from a protobuf message

Returns
-------
schema_tracker : SchemaTracker

#### to\_summary

```python
 | to_summary()
```

Generate a summary of the statistics

Returns
-------
summary : SchemaSummary
Protobuf summary message.

