---
sidebar_label: demo_cli
title: whylogs.cli.demo_cli
---

#### init

```python
@click.command()
@click.option(
    "--project-dir",
    "-d",
    default="./",
    help="The root of the new whylogs demo project.",
)
init(project_dir)
```

Initialize and configure a new whylogs project.

This guided input walks the user through setting up a new project and also
on-boards a new developer in an existing project.

It scaffolds directories, sets up notebooks, creates a project file, and
appends to a `.gitignore` file.

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

Welcome to whylogs Demo CLI!

Supported commands:

- whylogs-demo init : create a demo whylogs project with example data and notebooks

