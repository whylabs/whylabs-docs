# Table of Contents

* [whylogs.cli.cli](#whylogs.cli.cli)
  * [cli](#whylogs.cli.cli.cli)

---
sidebar_label: cli
title: whylogs.cli.cli
---

#### cli

```python
@click.group()
@click.version_option(version=whylogs_version)
@click.option(
    "--verbose",
    "-v",
    is_flag=True,
    default=False,
    help="Set whylogs CLI to use verbose output.",
)
cli(verbose)
```

Welcome to whylogs CLI!

Supported basic commands:

- whylogs init : create a new whylogs project configuration

