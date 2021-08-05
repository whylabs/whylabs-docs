# Table of Contents

* [whylogs.core.statistics.numbertracker](#whylogs.core.statistics.numbertracker)
  * [NumberTracker](#whylogs.core.statistics.numbertracker.NumberTracker)
    * [track](#whylogs.core.statistics.numbertracker.NumberTracker.track)
    * [to\_protobuf](#whylogs.core.statistics.numbertracker.NumberTracker.to_protobuf)
    * [from\_protobuf](#whylogs.core.statistics.numbertracker.NumberTracker.from_protobuf)
    * [to\_summary](#whylogs.core.statistics.numbertracker.NumberTracker.to_summary)

---
sidebar_label: numbertracker
title: whylogs.core.statistics.numbertracker
---

TODO:
* Implement histograms

## NumberTracker Objects

```python
class NumberTracker()
```

Class to track statistics for numeric data.

Parameters
----------
variance
Tracker to follow the variance
floats
Float tracker for tracking all floats
ints
Integer tracker

Attributes
----------
variance
See above
floats
See above
ints
See above
theta_sketch : `whylabs.logs.core.statistics.thetasketch.ThetaSketch`
Sketch which tracks approximate cardinality

#### track

```python
 | track(number)
```

Add a number to statistics tracking

Parameters
----------
number : int, float
A numeric value

#### to\_protobuf

```python
 | to_protobuf()
```

Return the object serialized as a protobuf message

#### from\_protobuf

```python
 | @staticmethod
 | from_protobuf(message: NumbersMessage)
```

Load from a protobuf message

Returns
-------
number_tracker : NumberTracker

#### to\_summary

```python
 | to_summary()
```

Construct a `NumberSummary` message

Returns
-------
summary : NumberSummary
Summary of the tracker statistics

