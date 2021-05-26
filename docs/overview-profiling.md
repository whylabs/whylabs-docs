---
id: profiling
title: Data Logging and Profiling
---

## Observing and logging data with data profiles

In traditional software, logging and instrumentation have been adopted as standard practice to create transparency and make sense of the health of a complex system. When it comes to AI applications, much can be done with standard logging modules: data access, model parameters, model and pipeline metadata. While this type of logging can provide much visibility, it provides little to no introspection into the data. 

Our approach to logging data is data profiling (also referred to as data sketching or statistical fingerprinting). The idea is to capture a human interpretable statistical profile of a given dataset to provide insight into the data. There already exist a broad range of efficient streaming algorithms to generate scalable, lightweight statistical profiles of datasets, and the literature is very active and growing. 

## Introducing whylogs

The [whylogs](https://github.com/whylabs/whylogs) open source library was developed with the goal of bridging the ML logging gap by providing approximate data profiling to capture data-specific logs. 

Statistical profiles created by whylogs include per-feature distribution approximations which provide:
- Simple counters: boolean, null values, data types
- Summary statistics: sum, min, max, median, variance
- Unique value counter or cardinality: tracks an approximate unique value of your feature using HyperLogLog algorithm
- Histograms for numerical features. whyLogs binary output can be queried to with dynamic binning based on the shape of your data
- Top frequent items (default is 128). Note that this configuration affects the memory footprint, especially for text features

```python
from whylogs import get_or_create_session
import pandas as pd

session = get_or_create_session()

df = pd.read_csv("path/to/file.csv")

with session.logger(dataset_name="my_dataset") as logger:
    
    #dataframe
    logger.log_dataframe(df)

    #dict
    logger.log({"name": 1})

    #images
    logger.log_images("path/to/image.png")
```

## Vizualizing logged data

To view your logger profiles you can use, methods within `whylogs.viz`: 

```python
vizualization = ProfileVisualizer()
vizualization.set_profiles([profile_day_1, profile_day_2])
figure= vizualization.plot_distribution("<feature_name>")
figure.savefig("/my/image/path.png")
```

Individual profiles are saved to disk, AWS S3, or WhyLabs API, automatically when loggers are closed, per the configuration found in the Session configuration.

Current profiles from active loggers can be loaded from memory with:

```python
profile = logger.profile()
```

## Using the profile viewer

You can also load a local profile viewer, where you upload the `json` summary file. The default path for the json files is set as `output/{dataset_name}/{session_id}/json/dataset_profile.json`.

```python
from whylogs.viz import profile_viewer
profile_viewer()
```

This will open a viewer on your default browser where you can load a profile json summary, using the `Select JSON profile` button:
Once the json is selected you can view your profile's features and 
associated and statistics.

![whylogs HTML viewer demo](https://whylabs-public.s3-us-west-2.amazonaws.com/assets/whylogs-viewer.gif)

All statistical profiles are mergeable. This makes the algorithms trivially parallelizable, and allows profiles of multiple datasets to be merged together for later analysis. This is key for achieving flexible granularity—since you can change aggregation levels from hourly to daily or weekly—and for logging in distributed systems.

An alternative to profiling data for the purpose of logging and monitoring is to process a sample of data to extract useful statistics. In our benchmark experiments, we have established that sampling-based data logging does not accurately represent outliers and rare events. As a result, important metrics such as minimum, maximum, and unique values can not be measured accurately. Outliers and uncommon values are important to retain as they often affect model behavior, cause problematic model predictions, and may be indicative of data quality issues. Check-out our [blog post with benchmarks](https://towardsdatascience.com/sampling-isnt-enough-profile-your-ml-data-instead-6a28fcfb2bd4). 





