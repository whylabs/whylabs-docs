# Table of Contents

* [whylogs.core.datasetprofile](#whylogs.core.datasetprofile)
  * [DatasetProfile](#whylogs.core.datasetprofile.DatasetProfile)
    * [session\_timestamp\_ms](#whylogs.core.datasetprofile.DatasetProfile.session_timestamp_ms)
    * [track\_metrics](#whylogs.core.datasetprofile.DatasetProfile.track_metrics)
    * [track](#whylogs.core.datasetprofile.DatasetProfile.track)
    * [track\_array](#whylogs.core.datasetprofile.DatasetProfile.track_array)
    * [track\_dataframe](#whylogs.core.datasetprofile.DatasetProfile.track_dataframe)
    * [to\_properties](#whylogs.core.datasetprofile.DatasetProfile.to_properties)
    * [to\_summary](#whylogs.core.datasetprofile.DatasetProfile.to_summary)
    * [generate\_constraints](#whylogs.core.datasetprofile.DatasetProfile.generate_constraints)
    * [flat\_summary](#whylogs.core.datasetprofile.DatasetProfile.flat_summary)
    * [chunk\_iterator](#whylogs.core.datasetprofile.DatasetProfile.chunk_iterator)
    * [validate](#whylogs.core.datasetprofile.DatasetProfile.validate)
    * [merge](#whylogs.core.datasetprofile.DatasetProfile.merge)
    * [merge\_strict](#whylogs.core.datasetprofile.DatasetProfile.merge_strict)
    * [serialize\_delimited](#whylogs.core.datasetprofile.DatasetProfile.serialize_delimited)
    * [to\_protobuf](#whylogs.core.datasetprofile.DatasetProfile.to_protobuf)
    * [write\_protobuf](#whylogs.core.datasetprofile.DatasetProfile.write_protobuf)
    * [read\_protobuf](#whylogs.core.datasetprofile.DatasetProfile.read_protobuf)
    * [from\_protobuf](#whylogs.core.datasetprofile.DatasetProfile.from_protobuf)
    * [from\_protobuf\_string](#whylogs.core.datasetprofile.DatasetProfile.from_protobuf_string)
    * [parse\_delimited\_single](#whylogs.core.datasetprofile.DatasetProfile.parse_delimited_single)
    * [parse\_delimited](#whylogs.core.datasetprofile.DatasetProfile.parse_delimited)
  * [columns\_chunk\_iterator](#whylogs.core.datasetprofile.columns_chunk_iterator)
  * [dataframe\_profile](#whylogs.core.datasetprofile.dataframe_profile)
  * [array\_profile](#whylogs.core.datasetprofile.array_profile)

---
sidebar_label: datasetprofile
title: whylogs.core.datasetprofile
---

Defines the primary interface class for tracking dataset statistics.

## DatasetProfile Objects

```python
class DatasetProfile()
```

Statistics tracking for a dataset.

A dataset refers to a collection of columns.

Parameters
----------
name: str
A human readable name for the dataset profile. Could be model name.
This is stored under &quot;name&quot; tag
dataset_timestamp: datetime.datetime
The timestamp associated with the data (i.e. batch run). Optional.
session_timestamp : datetime.datetime
Timestamp of the dataset
columns : dict
Dictionary lookup of `ColumnProfile`s
tags : dict
A dictionary of key-&gt;value. Can be used upstream for aggregating data. Tags must match when merging
with another dataset profile object.
metadata: dict
Metadata that can store arbitrary string mapping. Metadata is not used when aggregating data
and can be dropped when merging with another dataset profile object.
session_id : str
The unique session ID run. Should be a UUID.
constraints: DatasetConstraints
Static assertions to be applied to tracked numeric data and profile summaries.

#### session\_timestamp\_ms

```python
 | @property
 | session_timestamp_ms()
```

Return the session timestamp value in epoch milliseconds.

#### track\_metrics

```python
 | track_metrics(targets: List[Union[str, bool, float, int]], predictions: List[Union[str, bool, float, int]], scores: List[float] = None, model_type: ModelType = None, target_field: str = None, prediction_field: str = None, score_field: str = None)
```

Function to track metrics based on validation data.

user may also pass the associated attribute names associated with
target, prediction, and/or score.

Parameters
----------
targets : List[Union[str, bool, float, int]]
actual validated values
predictions : List[Union[str, bool, float, int]]
inferred/predicted values
scores : List[float], optional
assocaited scores for each inferred, all values set to 1 if not
passed
target_field : str, optional
Description
prediction_field : str, optional
Description
score_field : str, optional
Description
model_type : ModelType, optional
Defaul is Classification type.
target_field : str, optional
prediction_field : str, optional
score_field : str, optional
score_field : str, optional

#### track

```python
 | track(columns, data=None, character_list=None, token_method=None)
```

Add value(s) to tracking statistics for column(s).

Parameters
----------
columns : str, dict
Either the name of a column, or a dictionary specifying column
names and the data (value) for each column
If a string, `data` must be supplied.  Otherwise, `data` is
ignored.
data : object, None
Value to track.  Specify if `columns` is a string.

#### track\_array

```python
 | track_array(x: np.ndarray, columns=None)
```

Track statistics for a numpy array

Parameters
----------
x : np.ndarray
2D array to track.
columns : list
Optional column labels

#### track\_dataframe

```python
 | track_dataframe(df: pd.DataFrame, character_list=None, token_method=None)
```

Track statistics for a dataframe

Parameters
----------
df : pandas.DataFrame
DataFrame to track

#### to\_properties

```python
 | to_properties()
```

Return dataset profile related metadata

Returns
-------
properties : DatasetProperties
The metadata as a protobuf object.

#### to\_summary

```python
 | to_summary()
```

Generate a summary of the statistics

Returns
-------
summary : DatasetSummary
Protobuf summary message.

#### generate\_constraints

```python
 | generate_constraints() -> DatasetConstraints
```

Assemble a sparse dict of constraints for all features.

Returns
-------
summary : DatasetConstraints
Protobuf constraints message.

#### flat\_summary

```python
 | flat_summary()
```

Generate and flatten a summary of the statistics.

See :func:`flatten_summary` for a description

#### chunk\_iterator

```python
 | chunk_iterator()
```

Generate an iterator to iterate over chunks of data

#### validate

```python
 | validate()
```

Sanity check for this object.  Raises an AssertionError if invalid

#### merge

```python
 | merge(other)
```

Merge this profile with another dataset profile object.

We will use metadata and timestamps from the current DatasetProfile in the result.

This operation will drop the metadata from the &#x27;other&#x27; profile object.

Parameters
----------
other : DatasetProfile

Returns
-------
merged : DatasetProfile
New, merged DatasetProfile

#### merge\_strict

```python
 | merge_strict(other)
```

Merge this profile with another dataset profile object. This throws exception
if session_id, timestamps and tags don&#x27;t match.

This operation will drop the metadata from the &#x27;other&#x27; profile object.

Parameters
----------
other : DatasetProfile

Returns
-------
merged : DatasetProfile
New, merged DatasetProfile

#### serialize\_delimited

```python
 | serialize_delimited() -> bytes
```

Write out in delimited format (data is prefixed with the length of the
datastream).

This is useful when you are streaming multiple dataset profile objects

Returns
-------
data : bytes
A sequence of bytes

#### to\_protobuf

```python
 | to_protobuf() -> DatasetProfileMessage
```

Return the object serialized as a protobuf message

Returns
-------
message : DatasetProfileMessage

#### write\_protobuf

```python
 | write_protobuf(protobuf_path: str, delimited_file: bool = True)
```

Write the dataset profile to disk in binary format

Parameters
----------
protobuf_path : str
local path or any path supported supported by smart_open:
https://github.com/RaRe-Technologies/smart_open#how.
The parent directory must already exist
delimited_file : bool, optional
whether to prefix the data with the length of output or not.
Default is True

#### read\_protobuf

```python
 | @staticmethod
 | read_protobuf(protobuf_path: str, delimited_file: bool = True) -> "DatasetProfile"
```

Parse a protobuf file and return a DatasetProfile object


Parameters
----------
protobuf_path : str
the path of the protobuf data, can be local or any other path supported by smart_open: https://github.com/RaRe-Technologies/smart_open#how
delimited_file : bool, optional
whether the data is delimited or not. Default is `True`

Returns
-------
DatasetProfile
whylogs.DatasetProfile object from the protobuf

#### from\_protobuf

```python
 | @staticmethod
 | from_protobuf(message: DatasetProfileMessage) -> "DatasetProfile"
```

Load from a protobuf message

Parameters
----------
message : DatasetProfileMessage
The protobuf message.  Should match the output of
`DatasetProfile.to_protobuf()`

Returns
-------
dataset_profile : DatasetProfile

#### from\_protobuf\_string

```python
 | @staticmethod
 | from_protobuf_string(data: bytes) -> "DatasetProfile"
```

Deserialize a serialized `DatasetProfileMessage`

Parameters
----------
data : bytes
The serialized message

Returns
-------
profile : DatasetProfile
The deserialized dataset profile

#### parse\_delimited\_single

```python
 | @staticmethod
 | parse_delimited_single(data: bytes, pos=0)
```

Parse a single delimited entry from a byte stream
Parameters
----------
data : bytes
The bytestream
pos : int
The starting position. Default is zero

Returns
-------
pos : int
Current position in the stream after parsing
profile : DatasetProfile
A dataset profile

#### parse\_delimited

```python
 | @staticmethod
 | parse_delimited(data: bytes)
```

Parse delimited data (i.e. data prefixed with the message length).

Java protobuf writes delimited messages, which is convenient for
storing multiple dataset profiles. This means that the main data is
prefixed with the length of the message.

Parameters
----------
data : bytes
The input byte stream

Returns
-------
profiles : list
List of all Dataset profile objects

#### columns\_chunk\_iterator

```python
columns_chunk_iterator(iterator, marker: str)
```

Create an iterator to return column messages in batches

Parameters
----------
iterator
An iterator which returns protobuf column messages
marker
Value used to mark a group of column messages

#### dataframe\_profile

```python
dataframe_profile(df: pd.DataFrame, name: str = None, timestamp: datetime.datetime = None)
```

Generate a dataset profile for a dataframe

Parameters
----------
df : pandas.DataFrame
Dataframe to track, treated as a complete dataset.
name : str
Name of the dataset
timestamp : datetime.datetime, float
Timestamp of the dataset.  Defaults to current UTC time.  Can be a
datetime or UTC epoch seconds.

Returns
-------
prof : DatasetProfile

#### array\_profile

```python
array_profile(x: np.ndarray, name: str = None, timestamp: datetime.datetime = None, columns: list = None)
```

Generate a dataset profile for an array

Parameters
----------
x : np.ndarray
Array-like object to track.  Will be treated as an full dataset
name : str
Name of the dataset
timestamp : datetime.datetime
Timestamp of the dataset.  Defaults to current UTC time
columns : list
Optional column labels

Returns
-------
prof : DatasetProfile

