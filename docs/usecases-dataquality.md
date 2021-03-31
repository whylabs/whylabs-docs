---
id: usecases-dataquality
title: Data Quality Check
---

## Motivation
The peculiar thing about AI applications is that the majority of failures happen because of the data that models consume. For that reason, our approach starts at the source of the problem: **data**. 

With whylogs **you can continuously log the quality of the data** that flows through any AI application. To do this, whylogs calculates approximate statistics. This approach scales elegantly to datasets of any type and size, up to TB-scale.

Once the statistical data summaries have been created using whylogs, it's possible to detect deviations in data quality and to identify data drifts using the example notebooks included with the open-source library.

## Benefits of whylogs
### Key Features

* Data Insight: whylogs provides complex statistics across different stages of your ML/AI pipelines and applications.
* Scalability: whylogs scales with your system, from local development mode to live production systems in multi-node clusters, and works well with batch and streaming architectures.
* Lightweight: whylogs produces small mergeable lightweight outputs in a variety of formats, using sketching algorithms and summarizing statistics.
* Unified data instrumentation: To enable data engineering pipelines and ML pipelines to share a common framework for tracking data quality and drifts, the whylogs library supports multiple languages and integrations.
* Observability: In addition to supporting traditional monitoring approaches, whylogs data can support advanced ML-focused analytics, error analysis, and data quality and data drift detection.

### Statistical Profile
whylogs collects approximate statistics and sketches of data on a column-basis into a statistical profile. These metrics include:

* **Simple counters:** boolean, null values, data types.
* **Summary statistics:** sum, min, max, variance.
* **Unique value counter** or **cardinality:** tracks an approximate unique value of your feature using HyperLogLog algorithm.
* **Histograms for numerical features:** whylogs binary output can be queried to with dynamic binning based on the shape of your data.
* **Top frequent items (default is 128):** Note that this configuration affects the memory footprint, especially for text features.

### Use case: Simple Data Logging

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
defaultValue="python"
values={[
{ label: 'Java', value: 'java', },
{ label: 'Python', value: 'python', },
]
}>
<TabItem value="java">

```java
import com.whylogs.core.DatasetProfile;
import org.apache.commons.csv.CSVFormat;
import org.apache.commons.csv.CSVParser;
import org.apache.commons.csv.CSVRecord;

import java.io.InputStreamReader;
import java.io.OutputStream;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardOpenOption;
import java.time.Instant;
import java.util.Collections;
import java.util.HashMap;
import java.util.Map;
import java.util.UUID;

public class WhyLogsDemo {

    public static final CSVFormat CSV_FORMAT = CSVFormat.DEFAULT
            .withFirstRecordAsHeader()
            .withNullString("")
            .withDelimiter(',');
    public static final String INPUT_FILE_NAME = "example_dataset.csv";

    public static void main(String[] args) throws Exception {
        final String sessionId = UUID.randomUUID().toString();
        final Instant now = Instant.now();

        // map for storing the result
        final Map<Instant, DatasetProfile> result = new HashMap<>();

        try (final InputStreamReader is = new InputStreamReader(WhyLogsDemo.class.getResourceAsStream(INPUT_FILE_NAME))) {
            final CSVParser parser = new CSVParser(is, CSV_FORMAT);


            // create new dataset profile
            final DatasetProfile profile = result.computeIfAbsent(dataTime,
                    t -> new DatasetProfile(sessionId, now, t, Collections.emptyMap(), Collections.emptyMap()));

            // track multiple features
            profile.track(record.toMap());
        }
```

</TabItem>
<TabItem value="python">

```python
import pandas as pd
from whylogs import get_or_create_session

# Load a dataset in Pandas
data = pd.read_csv("example_dataset.csv")

session = get_or_create_session()

# Log data from a Pandas dataframe
session.log_dataframe(data)
```

</TabItem>
</Tabs>


## Next Steps
We made whylogs available for free for all AI builders by releasing it as an open source library. To get started with data quality checks with whylogs we have provided two versions: [whylogs Python](https://github.com/whylabs/whylogs) or [whylogs Java](https://github.com/whylabs/whylogs-java). Happy logging! 