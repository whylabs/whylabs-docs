# Table of Contents

* [whylogs.core.metrics.nlp\_metrics](#whylogs.core.metrics.nlp_metrics)
  * [NLPMetrics](#whylogs.core.metrics.nlp_metrics.NLPMetrics)
    * [update](#whylogs.core.metrics.nlp_metrics.NLPMetrics.update)
    * [merge](#whylogs.core.metrics.nlp_metrics.NLPMetrics.merge)
    * [to\_protobuf](#whylogs.core.metrics.nlp_metrics.NLPMetrics.to_protobuf)

---
sidebar_label: nlp_metrics
title: whylogs.core.metrics.nlp_metrics
---

## NLPMetrics Objects

```python
class NLPMetrics()
```

#### update

```python
 | update(predictions: Union[List[str], str], targets: Union[List[str]], transform=None) -> None
```

Function adds predictions and targets computation of nlp metrics.

**Arguments**:

predictions (Union[str,List[str]]):
targets (Union[List[str],str]):

#### merge

```python
 | merge(other: "NLPMetrics") -> "NLPMetrics"
```

Merge two seperate nlp metrics

**Arguments**:

other : nlp metrics to merge with self

**Returns**:

- `NLPMetrics` - merged nlp metrics

#### to\_protobuf

```python
 | to_protobuf() -> NLPMetricsMessage
```

Convert to protobuf

**Returns**:

- `TYPE` - Protobuf Message

