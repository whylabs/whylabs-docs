---
sidebar_label: init
title: whylogs.cli.init
---

#### init

```python
@click.command()
@click.option(
    "--project-dir",
    "-d",
    default="./",
    help="The root of the new whylogs profiling project.",
)
init(project_dir)
```

Initialize and configure a new whylogs project.

This guided input walks the user through setting up a new project and also
onboards a new developer in an existing project.

It scaffolds directories, sets up notebooks, creates a project file, and
appends to a `.gitignore` file.

