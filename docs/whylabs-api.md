---
id: whylabs-api
title: WhyLabs API
---
## Getting started

After your user account is set up, you can sign in to the WhyLabs Platform and start to onboard your data. To do this, you will need an access token (API key) in order to interact with the API endpoints.

## Creating an API token

To obtain your API key, you will need to navigate to the Access Tokens page. In the top left corner of the page, click on the **menu** icon and select **Access Tokens** from the list of options. From the Access Tokens page you will need provide a name for the token and optionally set an expiry date, then click the **Create access token** button.

Once the token has been generated you should see a notification and the API key will be shown on the page. Clicking the copy button will copy the key to your clipboard.

![WhyLabs Access Token Page](/img/whylabs-access-token-page.jpg)
## Publishing log data to the platform

After your API key has been created you can use it to authenticate a new session and upload log data to the platform.  

**An example of logging a dataframe with log rotation to WhyLabs is shown below:**

```python
import logging
import os
import time

import pandas as pd

from whylogs.app.session import get_or_create_session

os.environ["WHYLABS_API_KEY"] = "<API-KEY>"
os.environ["WHYLABS_API_ENDPOINT"] = "<end point override. not required>"
os.environ["WHYLABS_DEFAULT_ORG_ID"] = "<your-org-id>"
os.environ["WHYLABS_DEFAULT_DATASET_ID"] = "<your-default-dataset-id>"

module_logger = logging.getLogger()
logging.basicConfig(level=logging.DEBUG)

# Load some example data
df = pd.read_csv("../data/lending_club_1000.csv")

# Create a whylogs logging session
session = get_or_create_session()
# Log statistics for the dataset. You can override the dataset id here
with session.logger(tags={"datasetId": "<override-dataset-id>"}, with_rotation_time="1s") as ylog:
    for i in range(1, 10):
        ylog.log_dataframe(df)
        time.sleep(1)
```

To request a WhyLabs account, please [contact us](https://whylabs.ai/contact-us).
