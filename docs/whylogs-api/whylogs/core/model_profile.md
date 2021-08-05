# Table of Contents

* [whylogs.core.model\_profile](#whylogs.core.model_profile)
  * [ModelProfile](#whylogs.core.model_profile.ModelProfile)
    * [compute\_metrics](#whylogs.core.model_profile.ModelProfile.compute_metrics)

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
metrics : ModelMetrics
the model metrics object
model_type : ModelType
Type of mode, CLASSIFICATION, REGRESSION, UNKNOWN, etc.
output_fields : list
list of fields that map to model outputs

#### compute\_metrics

```python
 | compute_metrics(targets, predictions, scores=None, model_type: ModelType = None, target_field=None, prediction_field=None, score_field=None)
```

Compute and track metrics for confusion_matrix

Parameters
----------
targets : List
targets (or actuals) for validation, if these are floats it is assumed the model is a regression type model
predictions : List
predictions (or inferred values)
scores : List, optional
associated scores for each prediction (for binary and multiclass problems)
target_field : str, optional
prediction_field : str, optional
score_field : str, optional (for binary and multiclass problems)


Raises
------
NotImplementedError

