---
id: overview-data-pipelines
title: Data Pipeline Monitoring
---

## Proactive data monitoring upstead to ML models 

Data pipelines carry and transform data on its way to an ML model inference. The quality of data flowing through pipelines is critical to ensure that the downstream decisions made using this data are high quality. Without a mechanism to identify and flag data quality issues, the ML models that ingest this data are unreliable and pose business risk. 

The basic monitoring that can be enabled in the ML pipeline is monitoring of model inputs and model outputs. Model inputs are monitored for a range of data quality metrics as well as drift. Model outputs are monitored for drift and downtime, if the ground truth is available then monitoring the model performance is also important. 

However, such set up has two major disadvantages:
1. Monitoring of model inputs is not proactive. By the time the issues is identified on a range of data - this data has already passed through model inference and generated decisions that negatively impacted customers. 
2. If an issues is identified at the point of model inputs it's challenging to pinpoint which step in the data pipeline introduced this issue, therefore debugging is time-consuming and difficult. 

Monitoring data along the pipeline helps tackle these disadvantages. To make monitoring more proactive, it's best practice to set up monitoring along multiple data transformation steps in the pipeline. Typical scenarios include:
- Monitoring data providers
- Monitoring data subscribers 
- Monitoring data post data cleaning steps
- Monitoring data post feature transformation steps 
- Monitoring model outputs (in scenarios where the pipeline consists of a sequence of models) 

WhyLabs Platform enables pipeline monitoring along any number of pipeline steps. 

