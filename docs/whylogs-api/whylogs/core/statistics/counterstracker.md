---
sidebar_label: counterstracker
title: whylogs.core.statistics.counterstracker
---

## CountersTracker Objects

```python
class CountersTracker()
```

Class to keep track of the counts of various data types

Parameters
----------
count : int, optional
    Current number of objects
true_count : int, optional
    Number of boolean values
null_count : int, optional
    Number of nulls encountered

#### increment\_count

```python
 | increment_count()
```

Add one to the count of total objects

#### increment\_bool

```python
 | increment_bool()
```

Add one to the boolean count

#### increment\_null

```python
 | increment_null()
```

Add one to the null count

#### merge

```python
 | merge(other)
```

Merge another counter tracker with this one

Returns
-------
new_tracker : CountersTracker
    The merged tracker

#### to\_protobuf

```python
 | to_protobuf()
```

Return the object serialized as a protobuf message

#### from\_protobuf

```python
 | @staticmethod
 | from_protobuf(message: Counters)
```

Load from a protobuf message

Returns
-------
counters : CountersTracker

