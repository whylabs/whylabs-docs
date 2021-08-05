# Table of Contents

* [whylogs.app.output\_formats](#whylogs.app.output_formats)
  * [OutputFormat](#whylogs.app.output_formats.OutputFormat)
  * [SUPPORTED\_OUTPUT\_FORMATS](#whylogs.app.output_formats.SUPPORTED_OUTPUT_FORMATS)

---
sidebar_label: output_formats
title: whylogs.app.output_formats
---

Define available output formats

.. autodata:: SUPPORTED_OUTPUT_FORMATS

## OutputFormat Objects

```python
class OutputFormat(Enum)
```

List of output formats that we support.

Attributes
----------
json
output as a JSON object. This is a deeply nested structure
csv
output as &quot;flat&quot; files. This will generate multiple output files
protobuf
output as a binary protobuf file. This is the most compact format

#### SUPPORTED\_OUTPUT\_FORMATS

All supported whylogs output formats

