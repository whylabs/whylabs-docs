# Table of Contents

* [whylogs.mlflow.patcher](#whylogs.mlflow.patcher)
  * [WhyLogsRun](#whylogs.mlflow.patcher.WhyLogsRun)
    * [log\_pandas](#whylogs.mlflow.patcher.WhyLogsRun.log_pandas)
    * [log](#whylogs.mlflow.patcher.WhyLogsRun.log)
  * [new\_model\_log](#whylogs.mlflow.patcher.new_model_log)
  * [enable\_mlflow](#whylogs.mlflow.patcher.enable_mlflow)

---
sidebar_label: patcher
title: whylogs.mlflow.patcher
---

## WhyLogsRun Objects

```python
class WhyLogsRun(object)
```

#### log\_pandas

```python
 | log_pandas(df: pd.DataFrame, dataset_name: Optional[str] = None)
```

Log the statistics of a Pandas dataframe. Note that this method is additive
within a run: calling this method with a specific dataset name will not generate
a new profile; instead, data will be aggregated into the existing profile.

In order to create a new profile, please specify a dataset_name

**Arguments**:

- `df`: the Pandas dataframe to log
- `dataset_name`: the name of the dataset (Optional). If not specified, the experiment name is used

#### log

```python
 | log(features: Dict[str, any] = None, feature_name: str = None, value: any = None, dataset_name: Optional[str] = None)
```

Logs a collection of features or a single feature (must specify one or the other).

**Arguments**:

- `features`: a map of key value feature for model input
- `feature_name`: name of a single feature. Cannot be specified if &#x27;features&#x27; is specified
- `value`: value of as single feature. Cannot be specified if &#x27;features&#x27; is specified
- `dataset_name`: the name of the dataset. If not specified, we fall back to using the experiment name

#### new\_model\_log

```python
new_model_log(**kwargs)
```

Hijack the mlflow.models.Model.log method and upload the .whylogs.yaml configuration to the model path
This will allow us to pick up the configuration later under /opt/ml/model/.whylogs.yaml path

#### enable\_mlflow

```python
enable_mlflow() -> bool
```

Enable whylogs in ``mlflow`` module via ``mlflow.whylogs``.

**Returns**:

True if MLFlow has been patched. False otherwise.

