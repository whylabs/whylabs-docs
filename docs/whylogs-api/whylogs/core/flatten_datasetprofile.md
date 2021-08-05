# Table of Contents

* [whylogs.core.flatten\_datasetprofile](#whylogs.core.flatten_datasetprofile)
  * [SCALAR\_NAME\_MAPPING](#whylogs.core.flatten_datasetprofile.SCALAR_NAME_MAPPING)
  * [flatten\_summary](#whylogs.core.flatten_datasetprofile.flatten_summary)
  * [flatten\_dataset\_quantiles](#whylogs.core.flatten_datasetprofile.flatten_dataset_quantiles)
  * [flatten\_dataset\_string\_quantiles](#whylogs.core.flatten_datasetprofile.flatten_dataset_string_quantiles)
  * [flatten\_dataset\_histograms](#whylogs.core.flatten_datasetprofile.flatten_dataset_histograms)
  * [flatten\_dataset\_frequent\_numbers](#whylogs.core.flatten_datasetprofile.flatten_dataset_frequent_numbers)
  * [flatten\_dataset\_frequent\_strings](#whylogs.core.flatten_datasetprofile.flatten_dataset_frequent_strings)
  * [get\_dataset\_frame](#whylogs.core.flatten_datasetprofile.get_dataset_frame)

---
sidebar_label: flatten_datasetprofile
title: whylogs.core.flatten_datasetprofile
---

#### SCALAR\_NAME\_MAPPING

NOTE: I use ordered dicts here to control the ordering of generated columns
dictionaries are also valid
Define (some of) the mapping from dataset summary to flat table

#### flatten\_summary

```python
flatten_summary(dataset_summary: DatasetSummary) -> dict
```

Flatten a DatasetSummary

Parameters
----------
dataset_summary : DatasetSummary
Summary to flatten

Returns
-------
data : dict
A dictionary with the following keys:

summary : pandas.DataFrame
Per-column summary statistics
hist : pandas.Series
Series of histogram Series with (column name, histogram) key,
value pairs.  Histograms are formatted as a `pandas.Series`
frequent_strings : pandas.Series
Series of frequent string counts with (column name, counts)
key, val pairs.  `counts` are a pandas Series.

Notes
-----
Some relevant info on the summary mapping:

.. code-block:: python

&gt;&gt;&gt; from whylogs.core.datasetprofile import SCALAR_NAME_MAPPING
&gt;&gt;&gt; import json
&gt;&gt;&gt; print(json.dumps(SCALAR_NAME_MAPPING, indent=2))

#### flatten\_dataset\_quantiles

```python
flatten_dataset_quantiles(dataset_summary: DatasetSummary)
```

Flatten quantiles from a dataset summary

#### flatten\_dataset\_string\_quantiles

```python
flatten_dataset_string_quantiles(dataset_summary: DatasetSummary)
```

Flatten quantiles from a dataset summary

#### flatten\_dataset\_histograms

```python
flatten_dataset_histograms(dataset_summary: DatasetSummary)
```

Flatten histograms from a dataset summary

#### flatten\_dataset\_frequent\_numbers

```python
flatten_dataset_frequent_numbers(dataset_summary: DatasetSummary)
```

Flatten frequent number counts from a dataset summary

#### flatten\_dataset\_frequent\_strings

```python
flatten_dataset_frequent_strings(dataset_summary: DatasetSummary)
```

Flatten frequent strings summaries from a dataset summary

#### get\_dataset\_frame

```python
get_dataset_frame(dataset_summary: DatasetSummary, mapping: dict = None)
```

Get a dataframe from scalar values flattened from a dataset summary

Parameters
----------
dataset_summary : DatasetSummary
The dataset summary.
mapping : dict, optional
Override the default variable mapping.

Returns
-------
summary : pd.DataFrame
Scalar values, flattened and re-named according to `mapping`

