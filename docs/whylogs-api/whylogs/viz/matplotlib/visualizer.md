# Table of Contents

* [whylogs.viz.matplotlib.visualizer](#whylogs.viz.matplotlib.visualizer)
  * [MatplotlibProfileVisualizer](#whylogs.viz.matplotlib.visualizer.MatplotlibProfileVisualizer)
    * [available\_plots](#whylogs.viz.matplotlib.visualizer.MatplotlibProfileVisualizer.available_plots)
    * [plot\_distribution](#whylogs.viz.matplotlib.visualizer.MatplotlibProfileVisualizer.plot_distribution)
    * [plot\_missing\_values](#whylogs.viz.matplotlib.visualizer.MatplotlibProfileVisualizer.plot_missing_values)
    * [plot\_uniqueness](#whylogs.viz.matplotlib.visualizer.MatplotlibProfileVisualizer.plot_uniqueness)
    * [plot\_data\_types](#whylogs.viz.matplotlib.visualizer.MatplotlibProfileVisualizer.plot_data_types)

---
sidebar_label: visualizer
title: whylogs.viz.matplotlib.visualizer
---

## MatplotlibProfileVisualizer Objects

```python
class MatplotlibProfileVisualizer(BaseProfileVisualizer)
```

#### available\_plots

```python
 | available_plots()
```

Returns available plots for matplotlib framework.

#### plot\_distribution

```python
 | plot_distribution(variable, ts_format="%d-%b-%y", **kwargs)
```

Plots a distribution chart.

#### plot\_missing\_values

```python
 | plot_missing_values(variable, ts_format="%d-%b-%y", **kwargs)
```

Plots a Missing Value to Total Count ratio chart.

#### plot\_uniqueness

```python
 | plot_uniqueness(variable, ts_format="%d-%b-%y", **kwargs)
```

Plots a Estimated Unique Values chart.

#### plot\_data\_types

```python
 | plot_data_types(variable, ts_format="%d-%b-%y", **kwargs)
```

Plots a Inferred Data Types chart.

