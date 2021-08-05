# Table of Contents

* [whylogs.app.utils](#whylogs.app.utils)
  * [async\_wrap](#whylogs.app.utils.async_wrap)

---
sidebar_label: utils
title: whylogs.app.utils
---

#### async\_wrap

```python
async_wrap(func, *args, **kwargs)
```

**Arguments**:

- `func` - the coroutine to run in an asyncio loop


**Returns**:

- `threading.Thread` - an thread for the coroutine

