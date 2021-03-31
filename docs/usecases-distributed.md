---
id: usecases-distributed
title: Distributed Logging
---


## Motivation

Data pipelines, along with ML training and deployment are inherently tied to distributed systems. These systems are used to optimized processes that  inherently consume large amount of data. Since these systems are ideally working independently as possible from each other, we method logging methods that are also distributed. What use would a statistic be if we can not aggregate it into an overall statistic. 



## Benefits of whylogs

Monitoring your data by profiling with whylogs is incredibly powerful, this is because it can be done distributively. Because our approximate statistics are mergeable, each data point can be logged independently allowing you to completly parallelize your logging. 

Given their light size, the amount of data transfer is constant and scalable. Your logging has a small footprint, which can be easily collected from multiple distributed agents.

This speeds up logging, and minimized the amount of data transfer associated with logs. So you and your team can spend those cycles on data processing and inference.


## Next Steps

How are your systems distributed ? Check out our post on [Apache Kafka](/kafka-integration)


