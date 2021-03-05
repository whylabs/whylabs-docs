---
sidebar_label: logger
title: whylogs.app.logger
---

Class and functions for whylogs logging

## Logger Objects

```python
class Logger()
```

Class for logging whylogs statistics.

**Arguments**:

- `session_id`: The session ID value. Should be set by the Session boject
- `dataset_name`: The name of the dataset. Gets included in the DatasetProfile metadata and can be used in generated filenames.
- `dataset_timestamp`: Optional. The timestamp that the logger represents
- `session_timestamp`: Optional. The time the session was created
- `tags`: Optional. Dictionary of key, value for aggregating data upstream
- `metadata`: Optional. Dictionary of key, value. Useful for debugging (associated with every single dataset profile)
- `writers`: List of Writer objects used to write out the data
:param with_rotation_time. Whether to rotate with time, takes values of overall rotation interval,
&quot;s&quot; for seconds
&quot;m&quot; for minutes
&quot;h&quot; for hours
&quot;d&quot; for days
:param interval. Additinal time rotation multipler.
- `verbose`: enable debug logging or not
- `cache_size`: set how many dataprofiles to cache
- `segments`: define either a list of egment keys or a list of segments tags: [  {&quot;key&quot;:&lt;featurename&gt;,&quot;value&quot;: &lt;featurevalue&gt;},... ]
- `profile_full_dataset`: when segmenting dataset, an option to keep the full unsegmented profile of the dataset.
- `constraints`: static assertions to be applied to streams and summaries.

#### profile

```python
 | @property
 | profile() -> DatasetProfile
```

**Returns**:

the last backing dataset profile
:rtype: DatasetProfile

#### segmented\_profiles

```python
 | @property
 | segmented_profiles() -> Dict[str, DatasetProfile]
```

**Returns**:

the last backing dataset profile
:rtype: Dict[str, DatasetProfile]

#### flush

```python
 | flush(rotation_suffix: str = None)
```

Synchronously perform all remaining write tasks

#### full\_profile\_check

```python
 | full_profile_check() -> bool
```

returns a bool to determine if unsegmented dataset should be profiled.

#### close

```python
 | close() -> Optional[DatasetProfile]
```

Flush and close out the logger, outputs the last profile

**Returns**:

the result dataset profile. None if the logger is closed

#### log

```python
 | log(features: Optional[Dict[str, any]] = None, feature_name: str = None, value: any = None)
```

Logs a collection of features or a single feature (must specify one or the other).

**Arguments**:

- `features`: a map of key value feature for model input
- `feature_name`: a dictionary of key-&gt;value for multiple features. Each entry represent a single columnar feature
- `feature_name`: name of a single feature. Cannot be specified if &#x27;features&#x27; is specified
- `value`: value of as single feature. Cannot be specified if &#x27;features&#x27; is specified

#### log\_image

```python
 | log_image(image, feature_transforms: Optional[List[Callable]] = None, metadata_attributes: Optional[List[str]] = METADATA_DEFAULT_ATTRIBUTES, feature_name: str = "")
```

API to track an image, either in PIL format or as an input path

**Arguments**:

- `feature_name`: name of the feature
- `metadata_attributes`: metadata attributes to extract for the images
- `feature_transforms`: a list of callables to transform the input into metrics
:type image: Union[str, PIL.image]

#### log\_local\_dataset

```python
 | log_local_dataset(root_dir, folder_feature_name="folder_feature", image_feature_transforms=None, show_progress=False)
```

Log a local folder dataset
It will log data from the files, along with structure file data like
metadata, and magic numbers. If the folder has single layer for children
folders, this will pick up folder names as a segmented feature

**Arguments**:

- `root_dir` _str_ - directory where dataset is located.
- `folder_feature_name` _str, optional_ - Name for the subfolder features, i.e. class, store etc.
- `v` _None, optional_ - image transform that you would like to use with the image log
  

**Raises**:

- `NotImplementedError` - Description

#### log\_annotation

```python
 | log_annotation(annotation_data)
```

Log structured annotation data ie. JSON like structures


**Arguments**:

- `annotation_data` _Dict or List_ - Description
  

**Returns**:

- `TYPE` - Description

#### log\_csv

```python
 | log_csv(filepath_or_buffer: Union[str, Path, IO[AnyStr]], segments: Optional[Union[List[Segment], List[str]]] = None, profile_full_dataset: bool = False, **kwargs, ,)
```

Log a CSV file. This supports the same parameters as :func`pandas.red_csv&lt;pandas.read_csv&gt;` function.

**Arguments**:

- `filepath_or_buffer`: the path to the CSV or a CSV buffer
:type filepath_or_buffer: FilePathOrBuffer
- `kwargs`: from pandas:read_csv
- `segments`: define either a list of segment keys or a list of segments tags: `[  {&quot;key&quot;:&lt;featurename&gt;,&quot;value&quot;: &lt;featurevalue&gt;},... ]`
- `profile_full_dataset`: when segmenting dataset, an option to keep the full unsegmented profile of the
dataset.

#### log\_dataframe

```python
 | log_dataframe(df, segments: Optional[Union[List[Segment], List[str]]] = None, profile_full_dataset: bool = False)
```

Generate and log a whylogs DatasetProfile from a pandas dataframe

**Arguments**:

- `profile_full_dataset`: when segmenting dataset, an option to keep the full unsegmented profile of the
dataset.
- `segments`: specify the tag key value pairs for segments
- `df`: the Pandas dataframe to log

#### is\_active

```python
 | is_active()
```

Return the boolean state of the logger

