---
sidebar_label: writers
title: whylogs.app.writers
---

Classes for writing whylogs output

## Writer Objects

```python
class Writer(ABC)
```

Class for writing to disk

Parameters
----------
output_path : str
    Prefix of where to output files.  A directory for `type = &#x27;local&#x27;`,
    or key prefix for `type = &#x27;s3&#x27;`
formats : list
    All output formats.
    See :data:`whylogs.app.config.ALL_SUPPORTED_FORMATS`
path_template : str, optional
    Templatized path output using standard python string templates.
    Variables are accessed via $identifier or ${identifier}.
    See :func:`Writer.template_params` for a list of available identifers.
    Default = :data:`DEFAULT_PATH_TEMPLATE`
filename_template : str, optional
    Templatized output filename using standardized python string templates.
    Variables are accessed via $identifier or ${identifier}.
    See :func:`Writer.template_params` for a list of available identifers.
    Default = :data:`DEFAULT_FILENAME_TEMPLATE`

#### write

```python
 | @abstractmethod
 | write(profile: DatasetProfile, rotation_suffix: str = None)
```

Abstract method to write a dataset profile to disk.  Must be
implemented

#### path\_suffix

```python
 | path_suffix(profile: DatasetProfile)
```

Generate a path string for an output path from a dataset profile by
applying the path templating defined in `self.path_template`

#### file\_name

```python
 | file_name(profile: DatasetProfile, file_extension: str)
```

For a given DatasetProfile, generate an output filename based on the
templating defined in `self.filename_template`

#### template\_params

```python
 | @staticmethod
 | template_params(profile: DatasetProfile) -> dict
```

Return a dictionary of dataset profile metadata which can be used for
generating templatized variables or paths.

Parameters
----------
profile : DatasetProfile
    The dataset profile

Returns
-------
params : dict
    Variables which can be substituted into a template string.


Notes
-----
Template params:

* ``name``: name of the dataset
* ``session_timestamp``: session time in UTC epoch milliseconds
* ``dataset_timestamp``: timestamp for the data in UTC epoch ms
* ``session_id``: Unique identifier for the session

## LocalWriter Objects

```python
class LocalWriter(Writer)
```

whylogs Writer class that can write to disk.

See :class:`Writer` for a description of arguments

#### write

```python
 | write(profile: DatasetProfile, rotation_suffix: str = None)
```

Write a dataset profile to disk

#### ensure\_path

```python
 | ensure_path(suffix: str, addition_part: typing.Optional[str] = None) -> str
```

Ensure that a path exists, creating it if not

## S3Writer Objects

```python
class S3Writer(Writer)
```

whylogs Writer class that can write to S3.

See :class:`Writer` for a description of arguments

#### write

```python
 | write(profile: DatasetProfile, rotation_suffix: str = None)
```

Write a dataset profile to S3

#### writer\_from\_config

```python
writer_from_config(config: WriterConfig)
```

Construct a whylogs `Writer` from a `WriterConfig`

Returns
-------
writer : Writer
    whylogs writer

