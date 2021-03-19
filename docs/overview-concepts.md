---
id: concepts
title: Concepts
---

**whylogs** is a data logging library that captures statistical properties of data and ML models.

A **batch** is a collection of datapoints, often grouped by time.

In **batch mode**, whylogs processes a dataset in batches.

In **streaming mode**, whylogs processes individual data points.

A **dataset** is a collection of related data that will be analyzed together. In case of tabular data: each column of the table represents a particular variable, and each row represents a record of the dataset. When used alongside a statistical model, the dataset often represents features as columns, with additional columns for the output. For non-structured/complex data, the representation depends on the datatype, explore other data types here. 

A **DatasetProfile** is a collection of summary statistics and related metadata for a dataset that whylogs has processed.

**Data Sketches** are a class of algorithms that efficiently extract information from large or streaming datasets in a single pass. This term is sometimes used to refer specifically to the Apache DataSketches project.

A **logger** represents the whylogs tracking object for a given dataset (in batch mode) or a collection of data points (in streaming mode). A logger is always associated with a timestamp for its creation and a timestamp for the dataset. Different loggers may write to different storage systems using different output formats.

**Metadata** is data that describes either a dataset or information from whylogs’ processing of the dataset.

The **whylogs output** is available in the following formats: protobuf, JSON, and flat. Protobuf is a lightweight binary format that maps one-to-one with the memory representation of a whylogs object. JSON displays the protobuf data in JSON format. Flat outputs multiple files with both CSV and JSON content to represent different views of the data, including histograms, upperbound, lowerbound, and frequent values. To apply advanced transformation on whylogs, we recommend using Protobuf.

A **pipeline** consists of the components data moves through, as well as any infrastructure associated with those components. A project may have multiple ML pipelines, but it’s common to have one pipeline for a multi-stage project.

A **project** refers to the project name. A whylogs project is usually associated with one or more ML models. When logging a dataset without a specified name, the system defaults to the project name.

A **record** is an observation of data. whylogs represents this as a map of keys (string data - feature names) to values (numerical/textual data).

A **session** represents your configuration for how your application interacts with whylogs, including logger configuration, input and output formats. Using a single session for your application is recommended.

A **statistical profile** is a collection of statistical properties of a feature. Properties can be different for discrete and continuous features.

