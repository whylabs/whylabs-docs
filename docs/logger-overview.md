---
id: logger-overview
title: Overview
---

whylogs collects approximate statistics and sketches of data on a column-basis into a statistical profile. These metrics include:

- Simple counters: boolean, null values, data types.
- Summary statistics: sum, min, max, median, variance.
- Unique value counter or cardinality: tracks an approximate unique value of your feature using HyperLogLog algorithm.
- Histograms for numerical features. whyLogs binary output can be queried to with dynamic binning based on the shape of your data.
- Top frequent items (default is 128). Note that this configuration affects the memory footprint, especially for text features.

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

### Using the profile viewer

You can also load a local profile viewer, where you upload the `json` summary file. The default path for the json files is set as `output/{dataset_name}/{session_id}/json/dataset_profile.json`.

```python
from whylogs.viz import profile_viewer
profile_viewer()
```

This will open a viewer on your default browser where you can load a profile json summary, using the `Select JSON profile` button:
Once the json is selected you can view your profile's features and 
associated and statistics.

![whylogs HTML viewer demo](https://whylabs-public.s3-us-west-2.amazonaws.com/assets/whylogs-viewer.gif)


