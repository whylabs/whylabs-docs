---
id: intro 
title: Introduction
sidebar_label: Introduction 
slug: /
---

## AI Observability with whylogs and WhyLabs

WhyLabs is an observability platform designed to monitor data pipelines and ML applications for data quality regressions, data drift and model performance degradation. Built on top of an open-source package called [whylogs](https://github.com/whylabs/whylogs/), the platform enables AI builders to:

* Set up in minutes: provision the platform using [whylogs](https://github.com/whylabs/whylogs/), the lightweight open-source library. 

* Integrate seamlessly: interoperable with any ML infrastructure and framework. Generate real-time insights in your
  existing data flow.

* Scale to terabytes: handle your large-scale data, keeping compute requirements low. Integrate with either batch or
  streaming data pipelines.

## Quick start

The whylogs logging agent is the easiest way to enable logging, testing, and monitoring in an ML/AI application. The lightweight agent profiles data in real-time, collecting thousands of metrics from structured data, unstructured data, and ML model predictions with zero configuration.

First, install whylogs:

```
pip install whylogs
```

Then, start logging statistical properties of features, model inputs, and model outsputs to enable explorative analysis, data unit testing, and monitoring. Getting whylogs up-and-running is easy:

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
## Onboarding to WhyLabs

With whylogs integrated into your workflow, the next step is to onboard with the WhyLabs SaaS Platform to monitor model inputs, outputs, and performance. Onboarding only takes a few minutes, so please [contact us](https://whylabs.ai/contact-us) to request an account.  

## Learn more about whylogs - open source logging agent

- whylogs provides lightweight data collection, enterprise scalability, and flexibility designed for data science
- workflows. It has built-in data tagging and aggregation capabilities. Furthermore, the installation to take minutes and
- seamlessly integrate with existing tools. You can read [an in-depth overview about whylogs](/concepts).

Wondering if the whylogs is a good fit for your use case? Check out our [use cases section](/usecases-batch) or join
our [Slack channel](http://join.slack.whylabs.ai).

## Contribute to whylogs?

Check out the whylogs [contribution process](https://github.com/whylabs/whylogs/blob/mainline/CONTRIBUTING.md) and [Code of Conduct](https://github.com/whylabs/whylogs/blob/mainline/CODE_OF_CONDUCT.md) to get started.  

Choose between the [whylogs Python GitHub repo](https://github.com/whylabs/whylogs) or the [whylogs Java GitHub repo](https://github.com/whylabs/whylogs-java) for your contributions. 

Brainstorm ideas and share feedback with the whylogs community members on [Slack](http://join.slack.whylabs.ai/)!

## Resources

* [whylogs: Embrace Data Logging Across Your ML Systems](https://whylabs.ai/blog/posts/whylogs-embrace-data-logging)
  
