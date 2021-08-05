# Table of Contents

* [whylogs.app.logger](#whylogs.app.logger)
  * [Logger](#whylogs.app.logger.Logger)
    * [profile](#whylogs.app.logger.Logger.profile)
    * [segmented\_profiles](#whylogs.app.logger.Logger.segmented_profiles)
    * [flush](#whylogs.app.logger.Logger.flush)
    * [full\_profile\_check](#whylogs.app.logger.Logger.full_profile_check)
    * [close](#whylogs.app.logger.Logger.close)
    * [log](#whylogs.app.logger.Logger.log)
    * [log\_image](#whylogs.app.logger.Logger.log_image)
    * [log\_local\_dataset](#whylogs.app.logger.Logger.log_local_dataset)
    * [log\_annotation](#whylogs.app.logger.Logger.log_annotation)
    * [log\_csv](#whylogs.app.logger.Logger.log_csv)
    * [log\_dataframe](#whylogs.app.logger.Logger.log_dataframe)
    * [is\_active](#whylogs.app.logger.Logger.is_active)

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

consisting of digits with unit specification, e.g. 30s, 2h, d.\
units are seconds (&quot;s&quot;), minutes (&quot;m&quot;), hours, (&quot;h&quot;), or days (&quot;d&quot;) \
Output filenames will have a suffix reflecting the rotation interval.
Can be either:
- Autosegmentation source, one of [&quot;auto&quot;, &quot;local&quot;]
- List of tag key value pairs for tracking data segments
- List of tag keys for which we will track every value
- None, no segments will be used
- `session_id`: The session ID value. Should be set by the Session boject
- `dataset_name`: The name of the dataset. Gets included in the DatasetProfile metadata and can be used in generated filenames.
- `dataset_timestamp`: Optional. The timestamp that the logger represents
- `session_timestamp`: Optional. The time the session was created
- `tags`: Optional. Dictionary of key, value for aggregating data upstream
- `metadata`: Optional. Dictionary of key, value. Useful for debugging (associated with every single dataset profile)
- `writers`: Optional. List of Writer objects used to write out the data
- `metadata_writer`: Optional. MetadataWriter object used to write non-profile information
- `with_rotation_time`: Optional. Log rotation interval, \
- `interval`: Deprecated: Interval multiplier for `with_rotation_time`, defaults to 1.
- `verbose`: enable debug logging
- `cache_size`: dataprofiles to cache
- `segments`:
- `profile_full_dataset`: when segmenting dataset, an option to keep the full unsegmented profile of the dataset.
- `constraints`: static assertions to be applied to streams and summaries.

#### profile

```python
 | @property
 | profile() -> DatasetProfile
```

**Returns**:

`DatasetProfile`: the last backing dataset profile

#### segmented\_profiles

```python
 | @property
 | segmented_profiles() -> Dict[str, DatasetProfile]
```

**Returns**:

`Dict[str, DatasetProfile]`: the last backing dataset profile

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
 | log(features: Optional[Dict[str, any]] = None, feature_name: str = None, value: any = None, character_list: str = None, token_method: Optional[Callable] = None)
```

Logs a collection of features or a single feature (must specify one or the other).

**Arguments**:

- `features`: a map of key value feature for model input
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
- `image` (`Union[str, PIL.image]`):

#### log\_local\_dataset

```python
 | log_local_dataset(root_dir, folder_feature_name="folder_feature", image_feature_transforms=None, show_progress=False)
```

Log a local folder dataset
It will log data from the files, along with structure file data like
metadata, and magic numbers. If the folder has single layer for children
folders, this will pick up folder names as a segmented feature

**Arguments**:

- `show_progress` - showing the progress bar
- `image_feature_transforms` - image transform that you would like to use with the image log
- `root_dir` _str_ - directory where dataset is located.
- `folder_feature_name` _str, optional_ - Name for the subfolder features, i.e. class, store etc.

#### log\_annotation

```python
 | log_annotation(annotation_data)
```

Log structured annotation data ie. JSON like structures


**Arguments**:

- `annotation_data` _Dict or List_ - Description

#### log\_csv

```python
 | log_csv(filepath_or_buffer: Union[str, Path, IO[AnyStr]], segments: Optional[Union[List[Segment], List[str]]] = None, profile_full_dataset: bool = False, **kwargs, ,)
```

Log a CSV file. This supports the same parameters as :func`pandas.red_csv&lt;pandas.read_csv&gt;` function.

**Arguments**:

- `filepath_or_buffer` - the path to the CSV or a CSV buffer
- `segments` - define either a list of segment keys or a list of segments tags: `[  {&quot;key&quot;:&lt;featurename&gt;,&quot;value&quot;: &lt;featurevalue&gt;},... ]`
- `profile_full_dataset` - when segmenting dataset, an option to keep the full unsegmented profile of the dataset
- `**kwargs` - from pandas:read_csv

#### log\_dataframe

```python
 | log_dataframe(df, segments: Optional[Union[List[Segment], List[str]]] = None, profile_full_dataset: bool = False)
```

Generate and log a whylogs DatasetProfile from a pandas dataframe

**Arguments**:

dataset.
- `profile_full_dataset`: when segmenting dataset, an option to keep the full unsegmented profile of the
- `segments`: specify the tag key value pairs for segments
- `df`: the Pandas dataframe to log

#### is\_active

```python
 | is_active()
```

Return the boolean state of the logger

