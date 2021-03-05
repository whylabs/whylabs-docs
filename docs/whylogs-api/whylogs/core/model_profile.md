---
sidebar_label: model_profile
title: whylogs.core.model_profile
---

## ModelProfile Objects

```python
class ModelProfile()
```

Model Class for sketch metrics for model outputs

Attributes
----------
output_fields : list
    list of fields that map to model outputs
metrics : ModelMetrics
    the model metrics object

#### compute\_metrics

```python
 | compute_metrics(targets, predictions, scores=None, target_field=None, prediction_field=None, score_field=None)
```

Compute and track metrics for confusion_matrix

Parameters
----------
targets : List
    targets (or actuals) for validation
predictions : List
    predictions (or inferred values)
scores : List, optional
    associated scores for each prediction
target_field : str, optional
prediction_field : str, optional
score_field : str, optional


Raises
------
NotImplementedError

