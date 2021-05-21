---
id: intro 
title: Introduction
sidebar_label: Introduction 
slug: /
---

WhyLabs is an infrastructure-agnostic AI monitoring and operations solution for any data type at any scale. 

## Quick start

Install the open source logging library - _whylogs_: 

```
pip install whylogs
```


Start logging statistical properties of features, model inputs and model outsputs to enable explorative analysis, data unit testing and monitoring. 

_whylogs_ is easy to get up and runnings

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

Get started in the WhyLabs app: [Discover](/onboarding)how to use WhyLabs to to monitor model inputs, outputs, and performance 

## Learn more about whylogs - open source logging agent

_whylogs_ provides lightweight data collection, enterprise scalability, and flexibility designed for data science
workflows. It has built-in data tagging and aggregation capabilities. Furthermore, the installation to take minutes and
seamlessly integrate with existing tools. You can read [an in-depth overview about whylogs](/concepts).

Wondering if the _whylogs_ is a good fit for your use case? Check out our [use cases section](/usecases-batch) or join
our [Slack channel](http://join.slack.whylabs.ai).

### Contribute to whylogs?

Want to contribute? Please visit [our GitHub repo](https://github.com/whylabs/whylogs) to get started.


## Learn more about WhyLabs - AI observability platform

WhyLabs is an observability platform designed to monitor data pipelines and ML applications for data quality regressions, data drift and model performance degradation. Built on top of whylogs, the platform enables AI builders to:

* Set up in minutes: provision the platform using whylogs, the lightweight open-source library. 

* Integrate seamlessly: interoperable with any ML infrastructure and framework. Generate real-time insights in your
  existing data flow.

* Scale to terabytes: handle your large-scale data, keeping compute requirements low. Integrate with either batch or
  streaming data pipelines.

### Resources

* [whylogs: Embrace Data Logging Across Your ML Systems](https://whylabs.ai/blog/posts/whylogs-embrace-data-logging)
  
