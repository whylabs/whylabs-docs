---
id: usecases-batch
title: Logging for Batch Processing
---

## Motivation

Most batch data processing pipelines have some of these characteristics:
* Running on a regular cadence
* Large scale or in a distributed manner
* Data can be transformed to a final format (ETL) or stored in an unprocessed/raw forms in data lakes (ELT)

It is a good practice to track data-related metrics for batch processing jobs. Basic metrics that are often built include:
* Input count
* Output count
* Schema
* Sum, min, max, avergage, stddev

Tracking these metrics over time can help teams detect issues. One common pattern to track these metrics is to run analysis
on top of a storage/ELT/SQL-based systems. However, these process tend to be manual and painstaking, and thus managing 
data quality is a common challenge in teams dealing with data at large scale.

## Benefits of whylogs
_whylogs_ provides a lightweight mechanism to track complex data insights for batch processing systems. _whylogs_ integrates
naturally with these distributed batch systems such as Spark or Flink.

The output of _whylogs_ is multiple magnitude of order smaller than the dataset, while retaining a significant amount of
characteristics for the data. The data profiling technique used in _whylogs_ is mergeable, so user can run lightweight
analysis acorss multiple batches of data. This allows teams to detect common issues such as data drift much more effetively.

## Next Steps
* Check out our Spark notebook example
