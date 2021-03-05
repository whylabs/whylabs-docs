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

