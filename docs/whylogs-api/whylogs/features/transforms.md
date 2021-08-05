# Table of Contents

* [whylogs.features.transforms](#whylogs.features.transforms)
  * [ComposeTransforms](#whylogs.features.transforms.ComposeTransforms)
  * [Brightness](#whylogs.features.transforms.Brightness)
    * [\_\_call\_\_](#whylogs.features.transforms.Brightness.__call__)
  * [Saturation](#whylogs.features.transforms.Saturation)
    * [\_\_call\_\_](#whylogs.features.transforms.Saturation.__call__)
  * [Resize](#whylogs.features.transforms.Resize)
    * [\_\_call\_\_](#whylogs.features.transforms.Resize.__call__)
  * [Hue](#whylogs.features.transforms.Hue)
    * [\_\_call\_\_](#whylogs.features.transforms.Hue.__call__)
  * [SimpleBlur](#whylogs.features.transforms.SimpleBlur)
    * [\_\_call\_\_](#whylogs.features.transforms.SimpleBlur.__call__)

---
sidebar_label: transforms
title: whylogs.features.transforms
---

## ComposeTransforms Objects

```python
class ComposeTransforms()
```

Outputs the composition of each transformation passed in transforms

## Brightness Objects

```python
class Brightness()
```

Outputs the Brightness of each pixel in the image

#### \_\_call\_\_

```python
 | __call__(img: Union[ImageType, np.ndarray]) -> np.ndarray
```

**Arguments**:

- `img` _Union[Image, np.ndarray]_ - Either a PIL image or numpy array with int8 values

**Returns**:

- `np.ndarray` - Converted image.

Deleted Parameters:
- `pic` _PIL Image or numpy.ndarray_ - Image to be converted to tensor.

## Saturation Objects

```python
class Saturation()
```

Summary
Outputs the saturation of each pixel in the image

#### \_\_call\_\_

```python
 | __call__(img: Union[ImageType, np.ndarray]) -> np.ndarray
```

**Arguments**:

- `img` _Union[Image, np.ndarray]_ - Either a PIL image or numpy array with int8 values


**Returns**:

- `np.ndarray` - (1,number_pixels) array for saturation values for the image

## Resize Objects

```python
class Resize()
```

Helper Transform to resize images.

**Attributes**:

- `size` _TYPE_ - Description

#### \_\_call\_\_

```python
 | __call__(img: Union[ImageType, np.ndarray]) -> np.ndarray
```

**Arguments**:

- `img` _Union[ImageType, np.ndarray]_ - Description


**Returns**:

- `np.ndarray` - Description

## Hue Objects

```python
class Hue()
```

#### \_\_call\_\_

```python
 | __call__(img: Union[ImageType, np.ndarray]) -> np.ndarray
```

**Arguments**:

- `img` _Union[Image, np.ndarray]_ - Either a PIL image or numpy array with int8 values

**Returns**:

- `np.ndarray` - (1,number_pixels) array for hue values for the image

## SimpleBlur Objects

```python
class SimpleBlur()
```

Simple Blur Ammount computation based on variance of laplacian
Overall metric of how blurry is the image. No overall scale.

#### \_\_call\_\_

```python
 | __call__(img: Union[ImageType, np.ndarray]) -> float
```

**Arguments**:

- `img` _Union[Image, np.ndarray]_ - Either a PIL image or numpy array with int8 values


**Returns**:

- `float` - variance of laplacian of image.

