# Table of Contents

* [whylogs.app.session](#whylogs.app.session)
  * [Session](#whylogs.app.session.Session)
    * [logger](#whylogs.app.session.Session.logger)
    * [log\_dataframe](#whylogs.app.session.Session.log_dataframe)
    * [profile\_dataframe](#whylogs.app.session.Session.profile_dataframe)
    * [new\_profile](#whylogs.app.session.Session.new_profile)
    * [estimate\_segments](#whylogs.app.session.Session.estimate_segments)
    * [close](#whylogs.app.session.Session.close)
    * [remove\_logger](#whylogs.app.session.Session.remove_logger)
  * [session\_from\_config](#whylogs.app.session.session_from_config)
  * [reset\_default\_session](#whylogs.app.session.reset_default_session)
  * [get\_or\_create\_session](#whylogs.app.session.get_or_create_session)
  * [get\_session](#whylogs.app.session.get_session)
  * [get\_logger](#whylogs.app.session.get_logger)

---
sidebar_label: session
title: whylogs.app.session
---

whylogs logging session

## Session Objects

```python
class Session()
```

Parameters
----------
project : str
The project name. We will default to the project name when logging
a dataset if the dataset name is not specified
pipeline : str
Name of the pipeline associated with this session
writers : list
configuration for the output writers. This is where the log data
will go
verbose : bool
enable verbose logging for not. Default is ``False``

#### logger

```python
 | logger(dataset_name: Optional[str] = None, dataset_timestamp: Optional[datetime.datetime] = None, session_timestamp: Optional[datetime.datetime] = None, tags: Dict[str, str] = None, metadata: Dict[str, str] = None, segments: Optional[Union[List[Dict], List[str], str]] = None, profile_full_dataset: bool = False, with_rotation_time: str = None, cache_size: int = 1, constraints: DatasetConstraints = None) -> Logger
```

Create a new logger or return an existing one for a given dataset name.
If no dataset_name is specified, we default to project name

**Arguments**:

- `dataset_name` - name of the dataset
- `dataset_timestamp` - timestamp of the dataset. Default to now
- `session_timestamp` - timestamp of the session. Inherits from the session
- `tags` - metadata associated with the profile
- `metadata` - same as tags. Will be deprecated
- `segments` - slice of data that the profile belongs to
- `profile_full_dataset` - when segmenting dataset, an option to keep the full unsegmented profile of the dataset
- `with_rotation_time` - rotation time in minutes our hours (&quot;1m&quot;, &quot;1h&quot;)
- `cache_size` - size of the segment cache
- `constraints` - whylogs contrainst to monitor against

#### log\_dataframe

```python
 | log_dataframe(df: pd.DataFrame, dataset_name: Optional[str] = None, dataset_timestamp: Optional[datetime.datetime] = None, session_timestamp: Optional[datetime.datetime] = None, tags: Dict[str, str] = None, metadata: Dict[str, str] = None, segments: Optional[Union[List[Dict], List[str], str]] = None, profile_full_dataset: bool = False, constraints: DatasetConstraints = None) -> Optional[DatasetProfile]
```

Perform statistics caluclations and log a pandas dataframe

**Arguments**:

Can be either:
- Autosegmentation source, one of [&quot;auto&quot;, &quot;local&quot;]
- List of tag key value pairs for tracking data segments
- List of tag keys for which we will track every value
- None, no segments will be used
- `df`: the dataframe to profile
- `dataset_name`: name of the dataset
- `dataset_timestamp`: the timestamp for the dataset
- `session_timestamp`: the timestamp for the session. Override the default one
- `tags`: the tags for the profile. Useful when merging
- `metadata`: information about this current profile. Can be discarded when merging
- `segments`:
- `profile_full_dataset`: when segmenting dataset, an option to keep the full unsegmented profile of the dataset

**Returns**:

a dataset profile if the session is active

#### profile\_dataframe

```python
 | profile_dataframe(df: pd.DataFrame, dataset_name: Optional[str] = None, dataset_timestamp: Optional[datetime.datetime] = None, session_timestamp: Optional[datetime.datetime] = None, tags: Dict[str, str] = None, metadata: Dict[str, str] = None) -> Optional[DatasetProfile]
```

Profile a Pandas dataframe without actually writing data to disk.
This is useful when you just want to quickly capture and explore a dataset profile.

**Arguments**:

- `df`: the dataframe to profile
- `dataset_name`: name of the dataset
- `dataset_timestamp`: the timestamp for the dataset
- `session_timestamp`: the timestamp for the session. Override the default one
- `tags`: the tags for the profile. Useful when merging
- `metadata`: information about this current profile. Can be discarded when merging

**Returns**:

a dataset profile if the session is active

#### new\_profile

```python
 | new_profile(dataset_name: Optional[str] = None, dataset_timestamp: Optional[datetime.datetime] = None, session_timestamp: Optional[datetime.datetime] = None, tags: Dict[str, str] = None, metadata: Dict[str, str] = None) -> Optional[DatasetProfile]
```

Create an empty dataset profile with the metadata from the session.

**Arguments**:

- `dataset_name`: name of the dataset
- `dataset_timestamp`: the timestamp for the dataset
- `session_timestamp`: the timestamp for the session. Override the default one
- `tags`: the tags for the profile. Useful when merging
- `metadata`: information about this current profile. Can be discarded when merging

**Returns**:

a dataset profile if the session is active

#### estimate\_segments

```python
 | estimate_segments(df: pd.DataFrame, name: str, target_field: str = None, max_segments: int = 30, dry_run: bool = False) -> Optional[Union[List[Dict], List[str]]]
```

Estimates the most important features and values on which to segment
data profiling using entropy-based methods.

**Arguments**:

to loggers with same dataset_name
default 30
- `df`: the dataframe of data to profile
- `name`: name for discovery in the logger, automatically applied
- `target_field`: target field (optional)
- `max_segments`: upper threshold for total combinations of segments,
- `dry_run`: run calculation but do not write results to metadata

**Returns**:

a list of segmentation feature names

#### close

```python
 | close()
```

Deactivate this session and flush all associated loggers

#### remove\_logger

```python
 | remove_logger(dataset_name: str)
```

Remove a logger from the dataset. This is called by the logger when it&#x27;s being closed

Parameters
----------
dataset_name the name of the dataset. used to identify the logger

Returns None
-------

#### session\_from\_config

```python
session_from_config(config: SessionConfig) -> Session
```

Construct a whylogs session from a `SessionConfig`

#### reset\_default\_session

```python
reset_default_session()
```

Reset and deactivate the global whylogs logging session.

#### get\_or\_create\_session

```python
get_or_create_session(path_to_config: Optional[str] = None, report_progress: Optional[bool] = False)
```

Retrieve the current active global session.

If no active session exists, attempt to load config and create a new
session.

If an active session exists, return the session without loading new
config.

**Returns**:

`Session`: The global active session

**Arguments**:

- `path_to_config` (`str`):

#### get\_session

```python
get_session()
```

Retrieve the logging session without altering or activating it.

Returns
-------
session : Session
The global session

#### get\_logger

```python
get_logger()
```

Retrieve the global session logger

Returns
-------
ylog : whylogs.app.logger.Logger
The global session logger

