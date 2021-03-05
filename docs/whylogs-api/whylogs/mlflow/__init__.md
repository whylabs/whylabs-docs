---
sidebar_label: mlflow
title: whylogs.mlflow
---

#### list\_whylogs\_runs

```python
list_whylogs_runs(experiment_id: str, dataset_name: str = "default")
```

List all the runs from an experiment that contains whylogs

:rtype: :py:class:`typing.List[mlflow.entities.Run]`

**Arguments**:

- `experiment_id`: the experiment id
- `dataset_name`: the name of the dataset. Default to &quot;default&quot;

#### get\_run\_profiles

```python
get_run_profiles(run_id: str, dataset_name: str = "default", client=None)
```

Retrieve all whylogs DatasetProfile for a given run and a given dataset name.

**Arguments**:

- `client`: :py:class:`mlflow.tracking.MlflowClient`
:rtype: :py:class:`typing.List[whylogs.DatasetProfile]`
- `run_id`: the run id
- `dataset_name`: the dataset name within a run. If not set, use the default value &quot;default&quot;

#### get\_experiment\_profiles

```python
get_experiment_profiles(experiment_id: str, dataset_name: str = "default")
```

Retrieve all whylogs profiles for a given experiment. This only
returns Active Runs at the moment.

:rtype: :py:class:`typing.List[whylogs.DatasetProfile]`

**Arguments**:

- `experiment_id`: the experiment ID string
- `dataset_name`: the dataset name within a run. If not set, use the default value &quot;default&quot;

