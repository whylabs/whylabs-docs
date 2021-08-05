# Table of Contents

* [whylogs.core.image\_profiling](#whylogs.core.image_profiling)
  * [TrackImage](#whylogs.core.image_profiling.TrackImage)
    * [\_\_call\_\_](#whylogs.core.image_profiling.TrackImage.__call__)
  * [get\_pil\_image\_metadata](#whylogs.core.image_profiling.get_pil_image_metadata)

---
sidebar_label: image_profiling
title: whylogs.core.image_profiling
---

## TrackImage Objects

```python
class TrackImage()
```

This is a class that computes image features and visits profiles and so image features can be sketched.

**Attributes**:

- `feature_name` _str_ - name given to this image feature, will prefix all image based features
- `feature_transforms` _List[Callable]_ - Feature transforms to be apply to image data.
- `img` _PIL.Image_ - the PIL.Image
- `metadata_attributes` _TYPE_ - metadata attributes to track

#### \_\_call\_\_

```python
 | __call__(profiles)
```

Call method to add image data and metadata to associated profiles

**Arguments**:

- `profiles` _Union[List[DatasetProfile],DatasetProfile]_ - DatasetProfile

#### get\_pil\_image\_metadata

```python
get_pil_image_metadata(img: ImageType) -> Dict
```

Grab metra data from a PIL Image

**Arguments**:

- `img` _ImageType_ - PIL Image


**Returns**:

- `Dict` - of metadata

