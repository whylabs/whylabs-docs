---
id: whylabs-architecture
title: WhyLabs Architecture
---

## WhyLabs Platform Architecture

<div style={{textAlign: 'center'}}>

![WhyLabs Platform](/img/WhyLabsPlatform.jpg)

</div>

#### Telemetry collection (whylogs)

The model doesn’t start in a production-like environment. Models might be deployed to different infrastructure with different characteristics. Collecting telemetry data (statistics, metrics and performance) should happen across the infrastructure and across the model lifecycle in a lightweight manner. With whylogs, collecting all key telemetry about feature quality, feature distributions, pipeline metadata, and model performance is as easy as adding one line of code. Check out integrations for one-liners available with the most common Data Pipelines and ML Platforms. 

#### Time series database (TSDB)

The AI telemetry is stored in a cost effective manner that enables years-long retention and fast access to all metrics. Mergeable nature of the whylogs profiles allows users to query for multiple tiime-granularities(hourly, daily, weekly, etc), and across arbitrary segment agregates. TSDB powers all other systems in the Platform. 

#### Monitoring and anomaly detection

Monitoring and anomaly detection is performed on each new batch of data on arrival to the system. The baseline is configured by the user, choosing from three options: learned thresholds from training data, learned thresholds from 7/14/30 day running averages, or statis thresholds supplied by the user. WhyLabs uses proprietary anomaly detection techniques and supports BringYourOwnAlgorithms for advanced users. 

#### Debugging

Once monitoring identifies issues, alerts get sent out to the team's issue tracking workflows. Notifications can be configured to come in hourly/day/weekly aggregates. Once the user opens the notification they are presented with an array of interactive debugging techniques to help root cause the issue. WhyLabs provides smart alert correlation to relate alerts in model performance to model input features and provides tools for running data analysis on all telemetry across arbitrary time spans. 

#### Visualization layer

Observability is a team effort. The WhyLabs Platform visualization layer enables all stakeholder of an ML application to get actionable insights into model & data health. All pages in the visualization layer are linkable for easy sharing across the organization, as collaboration across job families is the key to successful model deployments.