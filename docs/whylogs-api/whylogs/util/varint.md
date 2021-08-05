# Table of Contents

* [whylogs.util.varint](#whylogs.util.varint)
  * [encode](#whylogs.util.varint.encode)
  * [decode\_stream](#whylogs.util.varint.decode_stream)
  * [decode\_bytes](#whylogs.util.varint.decode_bytes)

---
sidebar_label: varint
title: whylogs.util.varint
---

Varint encoder/decoder

varints are a common encoding for variable length integer data, used in
libraries such as sqlite, protobuf, v8, and more.
Here&#x27;s a quick and dirty module to help avoid reimplementing the same thing
over and over again.

Taken from https://github.com/fmoo/python-varint/blob/master/varint.py

MIT License

#### encode

```python
encode(number)
```

Pack `number` into varint bytes

#### decode\_stream

```python
decode_stream(stream)
```

Read a varint from `stream`.  Returns `None` if an EOF is encountered

#### decode\_bytes

```python
decode_bytes(buf)
```

Read a varint from from `buf` bytes

