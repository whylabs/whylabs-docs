# Table of Contents

* [whylogs.core.metrics.regression\_metrics](#whylogs.core.metrics.regression_metrics)
  * [RegressionMetrics](#whylogs.core.metrics.regression_metrics.RegressionMetrics)
    * [add](#whylogs.core.metrics.regression_metrics.RegressionMetrics.add)
    * [merge](#whylogs.core.metrics.regression_metrics.RegressionMetrics.merge)
    * [to\_protobuf](#whylogs.core.metrics.regression_metrics.RegressionMetrics.to_protobuf)

---
sidebar_label: regression_metrics
title: whylogs.core.metrics.regression_metrics
---

## RegressionMetrics Objects

```python
class RegressionMetrics()
```

#### add

```python
 | add(predictions: List[float], targets: List[float])
```

Function adds predictions and targets computation of regression metrics.

**Arguments**:

predictions (List[float]):
targets (List[float]):


**Raises**:

- `NotImplementedError` - in case targets do not fall into continuous support
- `ValueError` - incase missing validation or predictions

#### merge

```python
 | merge(other)
```

Merge two seperate confusion matrix which may or may not overlap in labels.

**Arguments**:

other : regression metrics to merge with self

**Returns**:

- `RegressionMetrics` - merged regression metrics

#### to\_protobuf

```python
 | to_protobuf()
```

Convert to protobuf

**Returns**:

- `TYPE` - Protobuf Message

