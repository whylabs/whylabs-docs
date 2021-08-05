# Table of Contents

* [whylogs.util.stats](#whylogs.util.stats)
  * [is\_discrete](#whylogs.util.stats.is_discrete)

---
sidebar_label: stats
title: whylogs.util.stats
---

Statistical functions used by whylogs

#### is\_discrete

```python
is_discrete(num_records: int, cardinality: int, p=0.15)
```

Estimate whether a feature is discrete given the number of records
observed and the cardinality (number of unique values)

The default assumption is that features are not discrete.

Parameters
----------
num_records : int
The number of observed records
cardinality : int
Number of unique observed values

Returns
-------
discrete : bool
Whether the feature is discrete

