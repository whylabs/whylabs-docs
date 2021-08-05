# Table of Contents

* [whylogs.core.statistics.thetasketch](#whylogs.core.statistics.thetasketch)
  * [ThetaSketch](#whylogs.core.statistics.thetasketch.ThetaSketch)
    * [update](#whylogs.core.statistics.thetasketch.ThetaSketch.update)
    * [merge](#whylogs.core.statistics.thetasketch.ThetaSketch.merge)
    * [get\_result](#whylogs.core.statistics.thetasketch.ThetaSketch.get_result)
    * [serialize](#whylogs.core.statistics.thetasketch.ThetaSketch.serialize)
    * [deserialize](#whylogs.core.statistics.thetasketch.ThetaSketch.deserialize)
    * [to\_summary](#whylogs.core.statistics.thetasketch.ThetaSketch.to_summary)
  * [numbers\_summary](#whylogs.core.statistics.thetasketch.numbers_summary)

---
sidebar_label: thetasketch
title: whylogs.core.statistics.thetasketch
---

## ThetaSketch Objects

```python
class ThetaSketch()
```

A sketch for approximate cardinality tracking.

A wrapper class for `datasketches.update_theta_sketch` which implements
merging for updatable theta sketches.

Currently, datasketches only implements merging for compact (read-only)
theta sketches.

#### update

```python
 | update(value)
```

Update the statistics tracking

Parameters
----------
value : object
Value to follow

#### merge

```python
 | merge(other)
```

Merge another `ThetaSketch` with this one, returning a new object

Parameters
----------
other : ThetaSketch
Other theta sketch

Returns
-------
new : ThetaSketch
New theta sketch with merged statistics

#### get\_result

```python
 | get_result()
```

Generate a theta sketch

Returns
-------
compact_sketch : datasketches.compact_theta_sketch
Read-only compact theta sketch with full statistics.

#### serialize

```python
 | serialize()
```

Serialize this object.

Note that serialization only preserves the object approximately.

Returns
-------
msg : bytes
Serialized to `bytes`

#### deserialize

```python
 | @staticmethod
 | deserialize(msg: bytes)
```

Deserialize from a serialized message.

`msg`

Parameters
----------
msg : bytes
Serialized object.  can be a serialized version of:
* ThetaSketch
* datasketches.update_theta_sketch,
* datasketches.compact_theta_sketch

Returns
-------
sketch : ThetaSketch
ThetaSketch object

#### to\_summary

```python
 | to_summary(num_std_devs=1)
```

Generate a summary protobuf message

Parameters
----------
num_std_devs : float
For estimating bounds

Returns
-------
summary : UniqueCountSummary
Summary protobuf message

#### numbers\_summary

```python
numbers_summary(sketch: ThetaSketch, num_std_devs=1)
```

Generate a summary protobuf message from a thetasketch based on numeric
values

Parameters
----------
sketch

num_std_devs : float
For estimating bounds

Returns
-------
summary : UniqueCountSummary
Summary protobuf message

