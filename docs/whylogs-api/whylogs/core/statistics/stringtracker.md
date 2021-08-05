# Table of Contents

* [whylogs.core.statistics.stringtracker](#whylogs.core.statistics.stringtracker)
  * [CharPosTracker](#whylogs.core.statistics.stringtracker.CharPosTracker)
    * [update](#whylogs.core.statistics.stringtracker.CharPosTracker.update)
    * [merge](#whylogs.core.statistics.stringtracker.CharPosTracker.merge)
    * [to\_protobuf](#whylogs.core.statistics.stringtracker.CharPosTracker.to_protobuf)
    * [from\_protobuf](#whylogs.core.statistics.stringtracker.CharPosTracker.from_protobuf)
  * [StringTracker](#whylogs.core.statistics.stringtracker.StringTracker)
    * [update](#whylogs.core.statistics.stringtracker.StringTracker.update)
    * [merge](#whylogs.core.statistics.stringtracker.StringTracker.merge)
    * [to\_protobuf](#whylogs.core.statistics.stringtracker.StringTracker.to_protobuf)
    * [from\_protobuf](#whylogs.core.statistics.stringtracker.StringTracker.from_protobuf)
    * [to\_summary](#whylogs.core.statistics.stringtracker.StringTracker.to_summary)

---
sidebar_label: stringtracker
title: whylogs.core.statistics.stringtracker
---

## CharPosTracker Objects

```python
class CharPosTracker()
```

Track statistics for character positions within a string

Parameters
----------
character_list : str
string containing all characters to be tracked
this list can include specific unicode characters to track.

#### update

```python
 | update(value: str, character_list: str = None) -> None
```

update

Parameters
----------
value : str
utf-16 string
character_list : str, optional
use a specific character_list for
the tracked string. Note that modifing
it from a previous saved choice, will
reset the character position map, since
NITL no longer has the same context.

#### merge

```python
 | merge(other: "CharPosTracker") -> "CharPosTracker"
```

Merges two Char Pos Frequency Maps

**Arguments**:


- `other` _CharPosTracker_ - to be merged

#### to\_protobuf

```python
 | to_protobuf()
```

Return the object serialized as a protobuf message

#### from\_protobuf

```python
 | @staticmethod
 | from_protobuf(message: CharPosMessage)
```

Load from a CharPosMessage protobuf message

Returns
-------
CharPosTracker

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
length : NumberTracker
tracks the distribution of length of strings
token_length :  NumberTracker
counts token per sentence
token_method : funtion
method used to turn string into tokens
char_pos_tracker: CharPosTracker

#### update

```python
 | update(value: str, character_list=None, token_method=None)
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

