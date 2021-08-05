# Table of Contents

* [whylogs.viz.base](#whylogs.viz.base)
  * [BaseProfileVisualizer](#whylogs.viz.base.BaseProfileVisualizer)
    * [plot\_distribution](#whylogs.viz.base.BaseProfileVisualizer.plot_distribution)
    * [plot\_missing\_values](#whylogs.viz.base.BaseProfileVisualizer.plot_missing_values)
    * [plot\_uniqueness](#whylogs.viz.base.BaseProfileVisualizer.plot_uniqueness)
    * [plot\_data\_types](#whylogs.viz.base.BaseProfileVisualizer.plot_data_types)
    * [plot\_string\_length](#whylogs.viz.base.BaseProfileVisualizer.plot_string_length)
    * [plot\_token\_length](#whylogs.viz.base.BaseProfileVisualizer.plot_token_length)
    * [plot\_char\_pos](#whylogs.viz.base.BaseProfileVisualizer.plot_char_pos)
    * [plot\_string](#whylogs.viz.base.BaseProfileVisualizer.plot_string)
    * [available\_plots](#whylogs.viz.base.BaseProfileVisualizer.available_plots)

---
sidebar_label: base
title: whylogs.viz.base
---

## BaseProfileVisualizer Objects

```python
class BaseProfileVisualizer()
```

#### plot\_distribution

```python
 | plot_distribution(variable, **kwargs)
```

Plots a distribution chart.

#### plot\_missing\_values

```python
 | plot_missing_values(variable, **kwargs)
```

Plots a Missing Value to Total Count ratio chart.

#### plot\_uniqueness

```python
 | plot_uniqueness(variable, **kwargs)
```

Plots a Estimated Unique Values chart.

#### plot\_data\_types

```python
 | plot_data_types(variable, **kwargs)
```

Plots a Inferred Data Types chart.

#### plot\_string\_length

```python
 | plot_string_length(variable, **kwargs)
```

Plots string length data .

#### plot\_token\_length

```python
 | plot_token_length(variable, character_list, **kwargs)
```

Plots token length data .

#### plot\_char\_pos

```python
 | plot_char_pos(variable, character_list, **kwargs)
```

Plots character position data .

#### plot\_string

```python
 | plot_string(variable, character_list, **kwargs)
```

Plots string related data .

#### available\_plots

```python
 | available_plots()
```

Returns available plots for selected framework.

