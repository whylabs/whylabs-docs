---
sidebar_label: model_wrapper
title: whylogs.mlflow.model_wrapper
---

## ModelWrapper Objects

```python
class ModelWrapper(object)
```

#### predict

```python
 | predict(data: pd.DataFrame) -> PyFuncOutput
```

Wrapper around https://www.mlflow.org/docs/latest/_modules/mlflow/pyfunc.html#PyFuncModel.predict
This allows us to capture input and predictions into whylogs

