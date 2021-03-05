---
sidebar_label: confusion_matrix
title: whylogs.core.metrics.confusion_matrix
---

## ConfusionMatrix Objects

```python
class ConfusionMatrix()
```

Confusion Matrix Class to hold labels and matrix data.

**Attributes**:

- `labels` - list of labels in a sorted order
- `prediction_field` - name of the prediction field
- `target_field` - name of the target field
- `score_field` - name of the score field
- `confusion_matrix` _nd.array_ - Confusion Matrix kept as matrix of NumberTrackers
- `labels` _List[str]_ - list of labels for the confusion_matrix axes

#### add

```python
 | add(predictions: List[Union[str, int, bool]], targets: List[Union[str, int, bool]], scores: List[float])
```

Function adds predictions and targets to confusion matrix with scores.

**Arguments**:

  predictions (List[Union[str, int, bool]]):
  targets (List[Union[str, int, bool]]):
  scores (List[float]):
  

**Raises**:

- `NotImplementedError` - in case targets do not fall into binary or
  multiclass suport
- `ValueError` - incase missing validation or predictions

#### merge

```python
 | merge(other_cm)
```

Merge two seperate confusion matrix which may or may not overlap in labels.

**Arguments**:

- `other_cm` _Optional[ConfusionMatrix]_ - confusion_matrix to merge with self

**Returns**:

- `ConfusionMatrix` - merged confusion_matrix

#### to\_protobuf

```python
 | to_protobuf()
```

Convert to protobuf

**Returns**:

- `TYPE` - Description

