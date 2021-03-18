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

## Example: Apache Spark

A common use of `whylogs` with batch datasets is to run profiling with batch datasets in [Apache Spark](https://spark.apache.org/). 
Users can run integration in either Scala or Python mode.

In the following example, we are reading in a public dataset as a Spark's Dataset (a.k.a DataFrame) object, and then perform
whylogs profiling on this dataset.


import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
defaultValue="scala"
values={[
{ label: 'Scala', value: 'scala', },
{ label: 'Python', value: 'python', },
]
}>
<TabItem value="scala">

```scala
import java.time.LocalDateTime

import org.apache.spark.sql.functions._
import org.apache.spark.sql.{SaveMode, SparkSession}
// this import adds newProfilingSession to Spark's Dataset
import com.whylogs.spark.WhyLogs._

object WhyLogsDemo extends App {
  // creating a Spark session  val spark = SparkSession
    .builder()
    .master("local[*, 3]")
    .appName("SparkTesting-" + LocalDateTime.now().toString)
    .config("spark.ui.enabled", "false")
    .getOrCreate()

  // Creating a dataset
  val raw_df = spark.read
    .option("header", "true")
    .csv("Fire_Department_Calls_for_Service.csv")

  // Parse in the call_date string 
  val df = raw_df.withColumn("call_date", to_timestamp(col("Call Date"), "MM/dd/YYYY"))
  df.printSchema()

  // Run profiling on the Dataeset
  val profiles = df
    .newProfilingSession("FireDepartment") // start a new WhyLogs profiling job
    .withTimeColumn("call_date") // split dataset by call_date
    .groupBy("City", "Priority") // tag and group the data with categorical information
    .aggProfiles() //  runs the aggregation. returns a dataframe of <timestamp, datasetProfile> entries

  // Write output to Parquet
  profiles.write
    .mode(SaveMode.Overwrite)
    .parquet("profiles_parquet")
}
```

</TabItem>
<TabItem value="python">

```python
# this integration is current in private beta. Please reach out to support@whylabs.ai to get access
import pandas as pd

whylogs_jar = "/path/to/whylogs/bundle.jar"
spark = pyspark.sql.SparkSession.builder
  .appName("whylogs")
  .config("spark.pyspark.driver.python", sys.executable)
  .config("spark.pyspark.python", sys.executable)
  .config("spark.executor.userClassPathFirst", "true")
  .config("spark.submit.pyFiles", whylogs_jar)
  .config("spark.jars", whylogs_jar)
  .getOrCreate()

# this comes from whylogs bundle jar
import whyspark

pdf = pd.read_parquet("demo.csv")
df = spark.createDataFrame(pdf)
session = whyspark.new_profiling_session(df, "my-dataset-name").withTimeColumn('date')
profile_df = session.aggProfiles().cache()
profile_df.write.parquet('profiles.parquet')
```

</TabItem>
</Tabs>

## Next Steps
* Check out the [full Spark example on GitHub](https://github.com/whylabs/whylogs-examples/tree/mainline/scala) with the example dataset.
