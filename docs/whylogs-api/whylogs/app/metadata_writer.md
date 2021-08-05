# Table of Contents

* [whylogs.app.metadata\_writer](#whylogs.app.metadata_writer)
  * [MetadataWriter](#whylogs.app.metadata_writer.MetadataWriter)
    * [path\_suffix](#whylogs.app.metadata_writer.MetadataWriter.path_suffix)
  * [metadata\_from\_config](#whylogs.app.metadata_writer.metadata_from_config)

---
sidebar_label: metadata_writer
title: whylogs.app.metadata_writer
---

## MetadataWriter Objects

```python
class MetadataWriter()
```

Class for writing metadata to disk

Parameters
----------
output_path : str
Prefix of where to output files.  A directory for `type = &#x27;local&#x27;`,
or key prefix for `type = &#x27;s3&#x27;`
path_template : str, optional
Templatized path output using standard python string templates.
Variables are accessed via $identifier or ${identifier}.
See :func:`MetadataWriter.template_params` for a list of available
identifers.
Default = :data:`DEFAULT_PATH_TEMPLATE`

#### path\_suffix

```python
 | path_suffix(name) -> str
```

Generate a path string for an output path from the given arguments by
applying the path templating defined in `self.path_template`

#### metadata\_from\_config

```python
metadata_from_config(config: MetadataConfig)
```

Construct a whylogs `MetadataWriter` from a `MetadataConfig`

Returns
-------
metadata_writer: MetadataWriter
whylogs metadata writer

