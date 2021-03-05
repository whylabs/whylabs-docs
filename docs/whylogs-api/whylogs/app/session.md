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
 | logger(dataset_name: Optional[str] = None, dataset_timestamp: Optional[datetime.datetime] = None, session_timestamp: Optional[datetime.datetime] = None, tags: Dict[str, str] = None, metadata: Dict[str, str] = None, segments: Optional[Union[List[Dict], List[str]]] = None, profile_full_dataset: bool = False, with_rotation_time: str = None, cache_size: int = 1, constraints: DatasetConstraints = None) -> Logger
```

Create a new logger or return an existing one for a given dataset name.
If no dataset_name is specified, we default to project name

Parameters
----------
metadata
dataset_name : str
    Name of the dataset. Default is the project name
dataset_timestamp: datetime.datetime, optional
    The timestamp associated with the dataset. Could be the timestamp
    for the batch, or the timestamp
    for the window that you are tracking
tags: dict
    Tag the data with groupable information. For example, you might want to tag your data
    with the stage information (development, testing, production etc...)
metadata: dict
    Useful to debug the data source. You can associate non-groupable information in this field
    such as hostname,
session_timestamp: datetime.datetime, optional
    Override the timestamp associated with the session. Normally you
    shouldn&#x27;t need to override this value
segments:
    Can be either:
    - List of tag key value pairs for tracking datasetments
    - List of tag keys for whylogs to split up the data in the backend
Returns
-------
ylog : whylogs.app.logger.Logger
    whylogs logger

#### log\_dataframe

```python
 | log_dataframe(df: pd.DataFrame, dataset_name: Optional[str] = None, dataset_timestamp: Optional[datetime.datetime] = None, session_timestamp: Optional[datetime.datetime] = None, tags: Dict[str, str] = None, metadata: Dict[str, str] = None, segments: Optional[Union[List[Dict], List[str]]] = None, profile_full_dataset: bool = False, constraints: DatasetConstraints = None) -> Optional[DatasetProfile]
```

Perform statistics caluclations and log a pandas dataframe

**Arguments**:

- `df`: the dataframe to profile
- `dataset_name`: name of the dataset
- `dataset_timestamp`: the timestamp for the dataset
- `session_timestamp`: the timestamp for the session. Override the default one
- `tags`: the tags for the profile. Useful when merging
- `metadata`: information about this current profile. Can be discarded when merging
- `segments`: can be either
- a list of tag key value pairs for marking the segment of the data
- a list of tag keys to group the data by
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
get_or_create_session(path_to_config: Optional[str] = None)
```

Retrieve the current active global session.

If no active session exists, attempt to load config and create a new
session.

If an active session exists, return the session without loading new
config.

**Returns**:

The global active session
:rtype: Session
:type path_to_config: str

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

