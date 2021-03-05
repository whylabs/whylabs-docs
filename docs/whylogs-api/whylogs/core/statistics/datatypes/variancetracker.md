---
sidebar_label: variancetracker
title: whylogs.core.statistics.datatypes.variancetracker
---

## VarianceTracker Objects

```python
class VarianceTracker()
```

Class that implements variance estimates for streaming data and for
batched data.

Parameters
----------
count
    Number tracked elements
sum
    Sum of all numbers
mean
    Current estimate of the mean

#### update

```python
 | update(new_value)
```

Add a number to tracking estimates

Based on
https://en.wikipedia.org/wiki/Algorithms_for_calculating_variance#Welford&#x27;s_online_algorithm

Parameters
----------
new_value : int, float

#### stddev

```python
 | stddev()
```

Return an estimate of the sample standard deviation

#### variance

```python
 | variance()
```

Return an estimate of the sample variance

#### merge

```python
 | merge(other: "VarianceTracker")
```

Merge statistics from another VarianceTracker into this one

See:
https://en.wikipedia.org/wiki/Algorithms_for_calculating_variance#Parallel_algorithm

Parameters
----------
other : VarianceTracker
    Other variance tracker

Returns
-------
merged : VarianceTracker
    A new variance tracker from the merged statistics

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
message : VarianceMessage

#### from\_protobuf

```python
 | @staticmethod
 | from_protobuf(message)
```

Load from a protobuf message

Returns
-------
variance_tracker : VarianceTracker

