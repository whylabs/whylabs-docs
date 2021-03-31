---
id: profiling
title: Data Profiling
---

## :telescope: observe and log the data as it flows through pipelines...

In traditional software, logging and instrumentation have been adopted as standard practice to create transparency and make sense of the health of a complex system. When it comes to AI applications, much can be done with standard logging modules: data access, model parameters, model and pipeline metadata. While this type of logging can provide much visibility, it provides little to no introspection into the data. 

Our approach to logging data is data profiling (also referred to as data sketching or statistical fingerprinting). The idea is to capture a human interpretable statistical profile of a given dataset to provide insight into the data. There already exist a broad range of efficient streaming algorithms to generate scalable, lightweight statistical profiles of datasets, and the literature is very active and growing. WhyLogs is an open source library developed with the goal of bridging the ML logging gap by providing approximate data profiling to capture data-specific logs. 

Whylogs statistical profiles include per-feature distribution approximations which provide:
- Simple counters: boolean, null values, data types, length, etc
- Summary statistics: sum, min, max, variance
- Unique value counter or cardinality
- Histograms for numerical features
- Top frequent items 

All statistical profiles are mergeable as well, making the algorithms trivially parallelizable, and allowing profiles of multiple datasets to be merged together for later analysis. This is key for achieving flexible granularity (since you can change aggregation levels, e.g., from hourly to daily or weekly) and for logging in distributed systems.

An alternative to profiling data for the purpose of logging and monitoring is to process a sample of data to extract useful statistics. In our benchmark experiments, we have established that sampling-based data logging does not accurately represent outliers and rare events. As a result, important metrics such as minimum, maximum, and unique values can not be measured accurately. Outliers and uncommon values are important to retain as they often affect model behavior, cause problematic model predictions, and may be indicative of data quality issues. Check-out our [blog post with benchmarks](https://towardsdatascience.com/sampling-isnt-enough-profile-your-ml-data-instead-6a28fcfb2bd4). 



