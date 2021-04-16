---
id: onboarding
title: Onboarding
---

## Get more out of whylogs

If you have not yet checked out the whylogs library, we encourage you to do so! It's quick, it's easy, and it's free. whylogs is an open source library that uses data sketching algorithms to generate statistical profiles of data, without sampling and with _very_ little overhead. You can find an introduction to whylogs [here](/) and an overview of its concepts [here](/concepts).

whylogs is also the star of the show when it comes to our data visualization and monitoring platform. Without it, we could not process data at truly massive scale, and your data's journey from your environment to the WhyLabs Platform always begins with whylogs.

While whylogs can be used by itself to profile data and detect drift, WhyLabs offers a comprehensive platform of data visualization tools, monitoring, notifications, and more. We designed the platform for enterprise scale, to simplify data monitoring for entire teams and organizations.

### Getting started with the WhyLabs Platform

Once you are up and running with whylogs or want to skip right to the fun part, there is a quick way to check out the WhyLabs Platform without the need for any sign ups, credit cards, or age verification.

You can get started by checking out the [Jupyter notebook](https://github.com/naddeoa/sessions-poc) or by following the steps below:

1. Grab your favorite dataset with data that you feel comfortable sharing with us without going through the whole lawyer thing
2. Begin a special logging session in whylogs and log some data from within it:

```python
import pandas as pd
from whylogs.app.session import start_whylabs_session

dataframe = pd.read_csv("path/to/your/data.csv")

with start_whylabs_session(data_collection_consent=True) as session:
    with session.logger() as logger:
        logger.log_dataframe(dataframe)
```

3. Once whylogs finishes profiling your dataset and uploading the resulting profile(s) to WhyLabs, you will see a link to the WhyLabs Platform. Go ahead, click it! 🙂

Depending on how many profiles you've uploaded, the experience may be slightly different, though at the very least you should be able to see tables and charts with the various metrics that whylogs collected for your dataset.

If your dataset contains data from several different dates, you can even see your data changing over time!

![Example of what a profile might look like in our profile explorer](/img/single-profile-view.jpeg "Profile viewer")

This experience is designed to give you and your team an idea of what is possible with WhyLabs. You can share the link with your friends and co-workers. If you have any ideas on how we can make this experience even better or simpler, [do share](https://whylabs.ai/contact-us)!

### Signing up

You've checked out our Platform, liked it, and want to unlock additional features and start monitoring data at scale. Or maybe you are feeling risky and want to slap whylogs directly into your production pipeline. We won't judge[^1]. Either way, signing up is a breeze:

[^1]: We might.

1. Log in to the [WhyLabs Platform](https://hub.whylabsapp.com)
2. Create a new model
3. Generate an API key

Once you have created a Model and obtained an API key, you are ready to begin uploading data for pretty visualizations and out of the box monitoring[^2].

[^2]: This feature may actually require a credit card.

Now the only thing left to do is begin uploading data. Whereever you are able to log data with whylogs, you can collect profiles and send them off to WhyLabs for processing ~~by our herd of magical unicorns 🦄~~.

```python
import pandas as pd
from whylogs.app.session import get_or_create_session

dataframe = pd.read_csv("path/to/your/data.csv")

with get_or_create_session(model=foo, api_key=bar) as session:
    with session.logger() as logger:
        logger.log_dataframe(dataframe)
```

We also offer several integrations with common data and ML frameworks, such as Kafka, Spark, and MLflow. Is your framework not supported yet? [Let us know](https://whylabs.ai/contact-us)!

We also offer a [container](/integrations-rest-container) that will manage boring stuff like log rotation and profile uploads for you.
