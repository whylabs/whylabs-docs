---
sidebar_label: model_metrics
title: whylogs.core.metrics.model_metrics
---

## ModelMetrics Objects

```python
class ModelMetrics()
```

Container class for various model-related metrics

**Attributes**:

- `confusion_matrix` _ConfusionMatrix_ - ConfusionMatrix which keeps it track of counts with NumberTracker

#### compute\_confusion\_matrix

```python
 | compute_confusion_matrix(predictions: List[Union[str, int, bool]], targets: List[Union[str, int, bool]], scores: List[float] = None, target_field: str = None, prediction_field: str = None, score_field: str = None)
```

computes the confusion_matrix, if one is already present merges to old one.

**Arguments**:

  predictions (List[Union[str, int, bool]]):
  targets (List[Union[str, int, bool]]):
  scores (List[float], optional):
  target_field (str, optional):
  prediction_field (str, optional):
  score_field (str, optional):

#### merge

```python
 | merge(other)
```

:type other: ModelMetrics

