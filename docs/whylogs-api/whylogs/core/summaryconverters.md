---
sidebar_label: summaryconverters
title: whylogs.core.summaryconverters
---

Library module defining function for generating summaries

#### from\_sketch

```python
from_sketch(sketch: update_theta_sketch, num_std_devs: float = 1)
```

Generate a protobuf summary message from a datasketches theta sketch

Parameters
----------
sketch
    Theta sketch to summarize
num_std_devs
    Number of standard deviations for calculating bounds

Returns
-------
summary : UniqueCountSummary

#### from\_string\_sketch

```python
from_string_sketch(sketch: frequent_strings_sketch)
```

Generate a protobuf summary message from a string sketch

Parameters
----------
sketch
    Frequent strings sketch

Returns
-------
summary : FrequentStringsSummary

#### quantiles\_from\_sketch

```python
quantiles_from_sketch(sketch: kll_floats_sketch, quantiles=None)
```

Calculate quantiles from a data sketch

Parameters
----------
sketch : kll_floats_sketch
    Data sketch
quantiles : list-like
    Override the default quantiles.  Should be a list of values from
    0 to 1 inclusive.

#### histogram\_from\_sketch

```python
histogram_from_sketch(sketch: kll_floats_sketch, max_buckets: int = None, avg_per_bucket: int = None)
```

Generate a summary of a kll_floats_sketch, including a histogram

Parameters
----------
sketch : kll_floats_sketch
    Data sketch
max_buckets : int
    Override the default maximum number of buckets
avg_per_bucket : int
    Override the default target number of items per bucket.

Returns
-------
histogram : HistogramSummary
    Protobuf histogram message

