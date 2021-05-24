---
id: mlflow-integration
title: MLflow
---

### What is MLflow?

MLflow is an open source framework created by Databricks to simplify model lifecycle management. It handles model tracking and deployment, and helps with interoperability between different ML tools.

You can find MLflow documentation [here](https://mlflow.org/docs/latest/index.html), but for a hands-on (and significantly more exciting!) experience check out the [tutorial](https://mlflow.org/docs/latest/tutorials-and-examples/tutorial.html).

### Monitoring data quality in MLflow ✨

One of the key features of MLflow is the ability to [track metrics](https://mlflow.org/docs/latest/tracking.html) both during the training process and once the model is deployed. By integrating [whylogs](/) into the MLflow runtime, you can log data quality metrics as part of the model's pipeline:

```python
import mlflow
import whylogs

whylogs.enable_mlflow()
```

After enabling the integration, whylogs can be used to profile the data flowing through the pipeline when running MLflow jobs:

```python
with mlflow.start_run(run_name=”whylogs demo”):
  # make the prediction and compute error
  predicted_output = model.predict(batch)
  mae = mean_absolute_error(actuals, predicted_output)

  # standard MLflow tracking APIs
  mlflow.log_params(model_params)
  mlflow.log_metric("mae", mae)

  # profiling the data with whylogs API extension
  mlflow.whylogs.log_pandas(batch)
```

Once whylogs profiles have been generated, they are stored by MLflow along with all the other artifacts from the run. They can be retrieved from the MLflow backend and explored further:

```python
from whylogs.viz import ProfileVisualizer

# get the profiles associated with the run
mlflow_profiles = whylogs.mlflow.get_experiment_profiles(“experiment_1”)

# visualize the profiles
viz = ProfileVisualizer()
viz.set_profiles(mlflow_profiles)
viz.plot_distribution("free sulfur dioxide", ts_format="%d-%b-%y %H:%M:%S")
```

![whylogs profiles - Distribution Over Time](/img/mlflow_profiles_visualization.png "whylogs profiles - Distribution Over Time")

For additional information and in-depth examples, check out our [sample notebook](https://github.com/whylabs/whylogs-examples/blob/mainline/python/MLFlow%20Integration%20Example.ipynb) 🙂
