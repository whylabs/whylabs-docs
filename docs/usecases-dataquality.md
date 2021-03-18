---
id: usecases-dataquality
title: Data Quality Check
---

## Motivation
The peculiar thing about AI applications is that the majority of failures happen because of the data that models consume. For that reason, our approach starts at the source of the problem: **data**. 

With whylogs **you can continuously log the quality of the data** that flows through any AI application. To do this, whylogs calculates approximate statistics. This approach scales elegantly to datasets of any type and size, up to TB-scale.

Once the statistical data summaries have been created using whylogs, it's possible to detect deviations in data quality and to identify data drifts using the example notebooks included with the open-source library.

## Benefits of whylogs
Key Features

* Data Insight: whylogs provides complex statistics across different stages of your ML/AI pipelines and applications.
* Scalability: whylogs scales with your system, from local development mode to live production systems in multi-node clusters, and works well with batch and streaming architectures.
* Lightweight: whylogs produces small mergeable lightweight outputs in a variety of formats, using sketching algorithms and summarizing statistics.
* Unified data instrumentation: To enable data engineering pipelines and ML pipelines to share a common framework for tracking data quality and drifts, the whylogs library supports multiple languages and integrations.
* Observability: In addition to supporting traditional monitoring approaches, whylogs data can support advanced ML-focused analytics, error analysis, and data quality and data drift detection.

### Statistical Profile
whylogs collects approximate statistics and sketches of data on a column-basis into a statistical profile. These metrics include:

* Simple counters: boolean, null values, data types.
* Summary statistics: sum, min, max, variance.
* Unique value counter or cardinality: tracks an approximate unique value of your feature using HyperLogLog algorithm.
* Histograms for numerical features. whylogs binary output can be queried to with dynamic binning based on the shape of your data.
* Top frequent items (default is 128). Note that this configuration affects the memory footprint, especially for text features.

## Next Steps
We made whylogs available for free for all AI builders by releasing it as an open source library. Get started with [whylogs Python](https://github.com/whylabs/whylogs) or [whylogs Java](https://github.com/whylabs/whylogs-java).