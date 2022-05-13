---
id: spark-integration 
title: Apache Spark
---

## Overview

whylogs profiles are **mergeable** and therefore suitable for Spark's map-reduce style processing. Since whylogs
requires only a single pass of data, the integration is highly efficient: no shuffling is required to build whylogs
profiles with Spark.

![spark](/img/docs/spark.png)

## Build from Ssource

To get started, users will need to build the jar bundle from our GitHub:

```bash
git clone https://github.com/whylabs/whylogs-java
cd whylogs-java
./gradlew shadowJar
```

The JAR bundle is under `whylogs-java/spark-bundle/build/libs`. You'll need this JAR bundle for the following examples.

## Configure your Spark session

* Add the JAR bundle to your Spark session
  * Via `--jars` parameter of your `spark-submit` script (
    see [documentation](https://spark.apache.org/docs/latest/submitting-applications.html#advanced-dependency-management))
* Setting `spark.jars` in your Spark configuration
* [Python only] Configure your Spark session:

```python
spark = pyspark.sql.SparkSession.builder \
  .config("spark.submit.pyFiles", whylogs_jar) \
  .config("spark.jars", whylogs_jar) \
  ... \
  .getOrCreate()
```

## Examples
### Scala example

This example shows how we use WhyLogs to profile a dataset based on time and categorical information. The data is from
the public dataset
for [Fire Department Calls & Incident](https://databricks-prod-cloudfront.cloud.databricks.com/public/4027ec902e239c93eaaa8714f173bcfc/4338404698899132/4435723924568266/2419783655524824/latest.html)
.

```scala
import org.apache.spark.sql.functions._
// implicit import for WhyLogs to enable newProfilingSession API
import com.whylogs.spark.WhyLogs._

// load the data
val raw_df = spark.read.option("header", "true").csv("/databricks-datasets/timeseries/Fires/Fire_Department_Calls_for_Service.csv")
val df = raw_df.withColumn("call_date", to_timestamp(col("Call Date"), "MM/dd/YYYY"))

val profiles = df.newProfilingSession("profilingSession") // start a new WhyLogs profiling job
                 .withTimeColumn("call_date") // split dataset by call_date
                 .groupBy("City", "Priority") // tag and group the data with categorical information
                 .aggProfiles() //  runs the aggregation. returns a dataframe of <timestamp, datasetProfile> entries
```

### Python example

The follow example shows the same workflow above, except we run it in Python
```python
from pyspark.sql.functions import *
from whyspark import new_profiling_session

# load the data
raw_df = spark.read.option("header", "true").csv("/databricks-datasets/timeseries/Fires/Fire_Department_Calls_for_Service.csv")
df = raw_df.withColumn("call_date", to_timestamp(col("Call Date"), "MM/dd/YYYY"))

profiles = df.new_profiling_session(newProfilingSession("profilingSession"), name="fire_station_calls", time_colum="call_date") \
                 .groupBy("City", "Priority") \
                 .aggProfiles()
pdf = profiles.toPandas() # you get a Pandas dataset profile of whylogs
```

You can then extract and analyze individual profiles:

```
from whylogs import DatasetProfile
prof = DatasetProfile.parse_delimited(pdf['why_profile'][0])[0]
# prof is a whylogs DatasetProfile that can be analyzed using utilities such as whylogs.viz
```
