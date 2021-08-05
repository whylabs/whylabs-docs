# Table of Contents

* [whylogs.app.config](#whylogs.app.config)
  * [ALL\_SUPPORTED\_FORMATS](#whylogs.app.config.ALL_SUPPORTED_FORMATS)
  * [WriterConfig](#whylogs.app.config.WriterConfig)
    * [to\_yaml](#whylogs.app.config.WriterConfig.to_yaml)
    * [from\_yaml](#whylogs.app.config.WriterConfig.from_yaml)
  * [MetadataConfig](#whylogs.app.config.MetadataConfig)
    * [to\_yaml](#whylogs.app.config.MetadataConfig.to_yaml)
    * [from\_yaml](#whylogs.app.config.MetadataConfig.from_yaml)
  * [SessionConfig](#whylogs.app.config.SessionConfig)
    * [to\_yaml](#whylogs.app.config.SessionConfig.to_yaml)
    * [from\_yaml](#whylogs.app.config.SessionConfig.from_yaml)
  * [WriterConfigSchema](#whylogs.app.config.WriterConfigSchema)
  * [MetadataConfigSchema](#whylogs.app.config.MetadataConfigSchema)
  * [SessionConfigSchema](#whylogs.app.config.SessionConfigSchema)
  * [load\_config](#whylogs.app.config.load_config)

---
sidebar_label: config
title: whylogs.app.config
---

Classes/functions for configuring the whylogs app

.. autodata:: ALL_SUPPORTED_FORMATS

#### ALL\_SUPPORTED\_FORMATS

Supported output formats for whylogs writer configuration

## WriterConfig Objects

```python
class WriterConfig()
```

Config for whylogs writers

See also:

* :class:`WriterConfigSchema`
* :class:`whylogs.app.writers.Writer`
* :func:`whylogs.app.writers.writer_from_config`

Parameters
----------
type : str
Destination for the writer output, e.g. &#x27;local&#x27; or &#x27;s3&#x27;
formats : list
All output formats.  See :data:`ALL_SUPPORTED_FORMATS`
output_path : str
Prefix of where to output files.  A directory for `type = &#x27;local&#x27;`,
or key prefix for `type = &#x27;s3&#x27;`
path_template : str, optional
Templatized path output using standard python string templates.
Variables are accessed via $identifier or ${identifier}.
See :func:`whylogs.app.writers.Writer.template_params` for a list of
available identifers.
Default = :data:`whylogs.app.writers.DEFAULT_PATH_TEMPLATE`
filename_template : str, optional
Templatized output filename using standardized python string templates.
Variables are accessed via $identifier or ${identifier}.
See :func:`whylogs.app.writers.Writer.template_params` for a list of
available identifers.
Default = :data:`whylogs.app.writers.DEFAULT_FILENAME_TEMPLATE`

#### to\_yaml

```python
 | to_yaml(stream=None)
```

Serialize this config to YAML

Parameters
----------
stream
If None (default) return a string, else dump the yaml into this
stream.

#### from\_yaml

```python
 | @staticmethod
 | from_yaml(stream, **kwargs)
```

Load config from yaml

Parameters
----------
stream : str, file-obj
String or file-like object to load yaml from

kwargs
ignored

Returns
-------
config : `WriterConfig`
Generated config

## MetadataConfig Objects

```python
class MetadataConfig()
```

Config for whylogs metadata

See also:

* :class:`MetadataConfigSchema`
* :class:`whylogs.app.writers.Writer`
* :func:`whylogs.app.writers.writer_from_config`

Parameters
----------
type : str
Destination for the writer output, e.g. &#x27;local&#x27; or &#x27;s3&#x27;
output_path : str
Prefix of where to output files.  A directory for `type = &#x27;local&#x27;`,
or key prefix for `type = &#x27;s3&#x27;`
input_path : str
Path to search for pre-calculated segment files. Paths separated by &#x27;:&#x27;.
path_template : str, optional
Templatized path output using standard python string templates.
Variables are accessed via $identifier or ${identifier}.
See :func:`whylogs.app.writers.Writer.template_params` for a list of
available identifers.
Default = :data:`whylogs.app.metadata_writer.DEFAULT_PATH_TEMPLATE`

#### to\_yaml

```python
 | to_yaml(stream=None)
```

Serialize this config to YAML

Parameters
----------
stream
If None (default) return a string, else dump the yaml into this
stream.

#### from\_yaml

```python
 | @staticmethod
 | from_yaml(stream, **kwargs)
```

Load config from yaml

Parameters
----------
stream : str, file-obj
String or file-like object to load yaml from

kwargs
ignored

Returns
-------
config : `WriterConfig`
Generated config

## SessionConfig Objects

```python
class SessionConfig()
```

Config for a whylogs session.

See also :class:`SessionConfigSchema`

Parameters
----------
project : str
Project associated with this whylogs session
pipeline : str
Name of the associated data pipeline
writers : list
A list of `WriterConfig` objects defining writer outputs
metadata : MetadataConfig
A MetadataConfiguration object. If none, will replace with default.
verbose : bool, default=False
Output verbosity
with_rotation_time: str, default = None, to rotate profiles with time, takes values of overall rotation interval,
&quot;s&quot; for seconds
&quot;m&quot; for minutes
&quot;h&quot; for hours
&quot;d&quot; for days

cache_size: int default =1, sets how many dataprofiles to cache in logger during rotation

#### to\_yaml

```python
 | to_yaml(stream=None)
```

Serialize this config to YAML

Parameters
----------
stream
If None (default) return a string, else dump the yaml into this
stream.

#### from\_yaml

```python
 | @staticmethod
 | from_yaml(stream)
```

Load config from yaml

Parameters
----------
stream : str, file-obj
String or file-like object to load yaml from

Returns
-------
config : SessionConfig
Generated config

## WriterConfigSchema Objects

```python
class WriterConfigSchema(Schema)
```

Marshmallow schema for :class:`WriterConfig` class.

## MetadataConfigSchema Objects

```python
class MetadataConfigSchema(Schema)
```

Marshmallow schema for :class:`MetadataConfig` class.

## SessionConfigSchema Objects

```python
class SessionConfigSchema(Schema)
```

Marshmallow schema for :class:`SessionConfig` class.

#### load\_config

```python
load_config(path_to_config: str = None)
```

Load logging configuration, from disk and from the environment.

Config is loaded by attempting to load files in the following order.  The
first valid file will be used

1. Path set in ``WHYLOGS_CONFIG`` environment variable
2. Current directory&#x27;s ``.whylogs.yaml`` file
3. ``~/.whylogs.yaml`` (home directory)
4. ``/opt/whylogs/.whylogs.yaml`` path

Returns
-------
config : SessionConfig, None
Config for the logger, if a valid config file is found, else returns
`None`.

