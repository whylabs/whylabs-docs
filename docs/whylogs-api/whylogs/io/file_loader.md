---
sidebar_label: file_loader
title: whylogs.io.file_loader
---

#### valid\_file

```python
valid_file(fname: str)
```

simple check if extension is part of the implemented ones

**Arguments**:

- `fname` _str_ - file path
  

**Returns**:

  bool

#### extension\_file

```python
extension_file(path: str)
```

Check the enconding format based on the magic number
if file has no magic number we simply use extension.
More advance analytics of file content is needed, potentially
extendind to a lib like libmagic

**Arguments**:

- `path` _str_ - File path
  

**Returns**:

- `file_extension_given` - str: extension of encoding data
  magic_data : dic : any magic data information available including
  magic number : byte
- `mime_type` - str
  name : str

#### image\_loader

```python
image_loader(path: str)
```

tries to load  image using the PIL lib

**Arguments**:

- `path` _str_ - path to image files
  

**Returns**:

  PIL.Image.Image : image data and image encoding format

#### json\_loader

```python
json_loader(path: str = None) -> Union[Dict, list]
```

Loads json or jsonl data

**Arguments**:

- `path` _str, optional_ - path to file
  

**Returns**:

  objs : Union[Dict, list]: Returns a list or dict of json data
  json_format : format of file (json or jsonl)

#### file\_loader

```python
file_loader(path: str, valid_file: Callable[[str], bool] = valid_file) -> Any
```

Factory for file data

**Arguments**:

- `path` _str_ - path to file
- `valid_file` _Callable[[str], bool], optional_ - Optional valid file check,
  

**Returns**:

  data : Tuple( [] Dataframe or Image data (PIL format), or Dict],
- `magic_data` - Dict of magic number data)
  

**Raises**:

- `NotImplementedError` - Description

