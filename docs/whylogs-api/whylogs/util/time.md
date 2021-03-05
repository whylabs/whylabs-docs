---
sidebar_label: time
title: whylogs.util.time
---

Functions for interacting with timestamps and datetime objects

#### to\_utc\_ms

```python
to_utc_ms(dt: datetime.datetime) -> Optional[int]
```

Convert a datetime object to UTC epoch milliseconds

Returns
-------
timstamp_ms : int
    Timestamp

#### from\_utc\_ms

```python
from_utc_ms(utc: Optional[int]) -> Optional[datetime.datetime]
```

Convert a UTC epoch milliseconds timestamp to a datetime object

Parameters
----------
utc : int
    Timestamp

Returns
-------
dt : datetime.datetime
    Datetime object

